import type { CSSProperties } from 'react';

const flows = {
  blink: {
    title: '闪现预测与权威状态',
    steps: [
      ['拥有客户端', '登记预测扣费', '用 GAS PredictionKey 记录未确认扣费；显示值由权威充能减去待确认数量得到。'],
      ['服务器', '判定并维护充能', '检查激活条件，决定执行或拒绝。真实充能数量与恢复周期由服务器维护。'],
      ['拥有客户端', '确认或回滚', '接收同一快照中的充能与确认编号，清除已确认预测；拒绝回调撤销对应扣费。'],
    ],
    branch: ['换人 / 重生时', '清理待确认记录，以 ResetEpoch 隔离旧周期，防止迟到回调修改新角色状态。'],
    note: '充能是项目扩展的状态；位移预测与纠正沿用 UE CharacterMovement。',
    source: 'https://github.com/Ubik42/LyraHeroArena/blob/main/Plugins/GameFeatures/HeroArena/Source/HeroArenaRuntime/Private/Components/HeroArenaBlinkChargeComponent.cpp',
  },
  getup: {
    title: '角色控制权交接',
    steps: [
      ['Character → Chaos', '受击与倒地', '停用 CharacterMovement 与胶囊碰撞，分离 Mesh，交由刚体模拟。'],
      ['状态估计', '确认稳定与朝向', '结合触地、骨盆速度、朝向和持续时间判断；过早的起身请求先保留。'],
      ['Physics Control', '跟随起身目标', '21 个父空间控制与 1 个骨盆世界控制，依次跟随 ALS 起身和站立目标。'],
      ['Chaos → Character', '恢复行走', '稳定站立后销毁控制、停模拟、重新挂接 Mesh，打开胶囊并恢复 Walking。'],
    ],
    note: '连续演示已覆盖单机、平地仰卧起身。控制力未设上限，复杂地形和联机同步仍需单独验证。',
    source: 'https://github.com/Ubik42/ue5-siggraph-physics-lab/blob/main/Docs/Development/CONTINUOUS_GETUP.md',
  },
  director: {
    title: '语言计划如何进入角色状态',
    steps: [
      ['模型 / 文件桥', '生成动作计划', '结合场景目标和当前状态，生成受限的移动、步态、姿态和注视字段。'],
      ['UE 执行器', '校验后执行', '核对会话、请求编号和整份计划，拒绝未知目标及非法动作，再更新队列。'],
      ['ALS / 角色状态', '推进移动与表现', '队列推进直线移动，映射 ALS 步态与姿态；adjust 仅改表现，保留路线。'],
    ],
    branch: ['急停时', '清空待处理请求与动作队列，停止移动。旧回复不再执行，新请求可独立恢复。'],
    note: '模型不参与逐帧骨骼计算。当前接入依赖活动 Codex 对话及本地文件桥。',
    source: '/media/repositories/als-director/ALSDirector-source-v1.zip',
  },
} as const;

export function MechanismFlow({ id }: { id: string }) {
  if (!(id in flows)) return null;
  const flow = flows[id as keyof typeof flows];
  return <figure className="mechanism-flow" aria-label={flow.title}>
    <figcaption><strong>{flow.title}</strong><span>状态与控制权</span></figcaption>
    <ol className="mechanism-steps" style={{ '--step-count': flow.steps.length } as CSSProperties}>
      {flow.steps.map(([owner, label, text], index) => <li key={label}>
        <small><b>{String(index + 1).padStart(2, '0')}</b>{owner}</small><h4>{label}</h4><p>{text}</p>
      </li>)}
    </ol>
    {'branch' in flow && <div className="mechanism-branch"><strong>{flow.branch[0]}</strong><p>{flow.branch[1]}</p></div>}
    <footer><p>{flow.note}</p><a href={flow.source} target="_blank" rel="noreferrer">实现与源码 ↗</a></footer>
  </figure>;
}
