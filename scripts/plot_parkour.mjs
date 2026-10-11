import fs from 'node:fs';
const data = JSON.parse(fs.readFileSync('artifacts/parkour-animation/analysis.json', 'utf8'));
const panels = [
  ['Character · 整体前进', '总控制器局部 Z / cm', [['Character','tz','#42b9ff']]],
  ['Upper_Body · 动作中的前进补偿', '身体控制器局部 Z / cm', [['Upper_Body','tz','#f5bd55']]],
  ['Upper_Body · 身体升降', '身体控制器局部 Y / cm', [['Upper_Body','ty','#f5bd55']]],
  ['Upper_Body · 前翻与朝向', '身体控制器局部 X 旋转 / °', [['Upper_Body','rx','#ef7c9d']]],
  ['左右脚 · 抬脚与回落', '腿部 IK 控制器局部 Y / cm', [['LeftLeg_IK_Leg','ty','#6cddb5'],['RightLeg_IK_Leg','ty','#ad9cff']]],
  ['Spine_Pelvis_FK · 骨盆姿态', '骨盆控制器局部 X 旋转 / °', [['Spine_Pelvis_FK','rx','#e99161']]],
];
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1260" viewBox="0 0 1440 1260"><rect width="1440" height="1260" fill="#101921"/><g font-family="Microsoft YaHei, sans-serif"><text x="36" y="47" fill="#fff" font-size="30" font-weight="700">动作与曲线：从最终 Maya 工程逐帧读取</text><text x="36" y="82" fill="#b9c9d5" font-size="19">24 fps · 第 1—200 帧 · 各图独立纵轴 · 曲线为控制器局部属性，不等同于角色世界位置</text>`;
panels.forEach(([title,unit,series], index) => {
  const ox=36+(index%2)*706, oy=110+Math.floor(index/2)*376, x=ox+68, y=oy+87, w=598,h=220;
  const values=series.flatMap(([n,a])=>data.nodes[n].channels[a].samples);
  let lo=Math.min(...values),hi=Math.max(...values); const pad=(hi-lo)*.12||1;lo-=pad;hi+=pad;
  const X=f=>x+(f-1)/199*w,Y=v=>y+h-(v-lo)/(hi-lo)*h;
  svg+=`<rect x="${ox}" y="${oy}" width="684" height="353" rx="12" fill="#1a2631"/><text x="${ox+20}" y="${oy+31}" fill="#fff" font-size="22" font-weight="700">${title}</text><text x="${ox+20}" y="${oy+61}" fill="#bccbd5" font-size="17">${unit}</text>`;
  for (const [a,b,color] of [[17,46,'#30485c'],[107,158,'#51364c']]) svg+=`<rect x="${X(a)}" y="${y}" width="${X(b)-X(a)}" height="${h}" fill="${color}" opacity=".8"/>`;
  for(let t=0;t<=4;t++){const v=lo+(hi-lo)*t/4;svg+=`<path d="M${x},${Y(v)}H${x+w}" stroke="#3a4855"/><text x="${x-9}" y="${Y(v)+5}" text-anchor="end" fill="#aebecb" font-size="14">${v.toFixed(0)}</text>`;}
  for(const f of [1,50,100,150,200]) svg+=`<text x="${X(f)}" y="${y+h+23}" text-anchor="middle" fill="#b9c9d5" font-size="15">${f}</text>`;
  series.forEach(([n,a,c])=>{const ch=data.nodes[n].channels[a];svg+=`<polyline fill="none" stroke="${c}" stroke-width="2.5" points="${ch.samples.map((v,i)=>`${X(i+1).toFixed(1)},${Y(v).toFixed(1)}`).join(' ')}"/>`;ch.keys.forEach((f,i)=>{if(f>=1&&f<=200)svg+=`<circle cx="${X(f)}" cy="${Y(ch.values[i])}" r="3" fill="${c}"/>`;});});
  if(index===4) svg+=`<text x="${x}" y="${oy+341}" fill="#6cddb5" font-size="16">绿色：左脚</text><text x="${x+175}" y="${oy+341}" fill="#ad9cff" font-size="16">紫色：右脚</text>`;
});
svg+=`<text x="36" y="1240" fill="#b9c9d5" font-size="18">蓝灰底：第 17—46 帧的跨越动作　｜　紫灰底：第 107—158 帧的前翻段　｜　圆点：原工程关键帧</text></g></svg>`;
fs.writeFileSync('public/media/parkour-animation/semantic-curves.svg',svg);
