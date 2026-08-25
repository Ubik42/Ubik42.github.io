export type Locale = 'en' | 'zh';

export interface SiteCopy {
  meta: { title: string; description: string };
  nav: { work: string; practice: string; links: string; aria: string };
  language: { label: string; english: string; changed: string };
  hero: { role: string; primaryAction: string };
  personal: {
    intro: string;
    storyAction: string;
    aboutTitle: string;
    aboutBody: string[];
    traits: { title: string; detail: string }[];
    linksTitle: string;
    linksIntro: string;
    social: { name: string; detail: string; href: string; mark: string }[];
  };
  practice: {
    title: string;
    items: { period: string; title: string; place: string; detail: string }[];
  };
  footer: { copyright: string };
}

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    meta: {
      title: 'Lucas Shen | AI & Tools Pipeline Technical Artist',
      description: 'Games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines by Lucas Shen.',
    },
    nav: { work: 'Projects', practice: 'Experience', links: 'Links', aria: 'Primary navigation' },
    language: { label: 'Language', english: 'English', changed: 'Language changed to English.' },
    hero: { role: 'AI & Tools Pipeline Technical Artist', primaryAction: 'Selected projects' },
    personal: {
      intro: 'My work spans games, DCC plug-ins, realtime graphics, engine tools, and AI-assisted art pipelines, with running builds, project captures, and implementation details.',
      storyAction: 'About me',
      aboutTitle: 'About me',
      aboutBody: [
        'I’m Lucas, a technical artist from China. My path crosses industrial engineering, game development, realtime graphics, and production tools. That mix helps me move between an artist’s problem and the system behind it.',
        'I enjoy reverse-engineering workflows, turning repeated work into tools, and testing where AI is genuinely useful. Outside the toolchain, I keep learning through games, animation, music, graphics experiments, and public documentation.',
      ],
      traits: [
        { title: 'What I work on', detail: 'DCC tools, AI workflows, realtime graphics, games, and animation.' },
        { title: 'How I learn', detail: 'Build a real workflow, inspect the evidence, then improve the system.' },
        { title: 'How I collaborate', detail: 'Keep creative decisions human and make repeated production steps dependable.' },
      ],
      linksTitle: 'Public channels',
      linksIntro: 'Code, visual work, demos, and ongoing notes live across these profiles.',
      social: [
        { name: 'GitHub', detail: 'Code, tools, and public engineering evidence.', href: 'https://github.com/Ubik42', mark: 'GH' },
        { name: 'Visual work', detail: 'Realtime graphics, materials, shaders, rigging, and procedural work.', href: '#visual-work', mark: 'TA' },
        { name: 'Bilibili', detail: 'Tool demos, tutorials, and longer videos.', href: 'https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0', mark: 'Bi' },
        { name: 'Xiaohongshu', detail: 'Notes, resources, and everyday discoveries.', href: 'https://www.xiaohongshu.com/user/profile/670526b2000000001e001891', mark: 'RED' },
      ],
    },
    practice: {
      title: 'Experience and education',
      items: [
        { period: '2026.03 – now', title: 'AI Tool Technical Artist Intern', place: 'Tencent Photon', detail: 'Building AI-assisted art-production tools across DCC, engine, and design workflows, with explicit rules and review boundaries.' },
        { period: '2025.08 – 2027.05', title: 'M.S. in EAE, Technical Art', place: 'University of Utah', detail: 'Studying realtime graphics, tools, pipelines, and collaborative game production in Entertainment Arts and Engineering.' },
        { period: '2020.09 – 2024.06', title: 'B.S. in Industrial Engineering', place: 'Shanghai Jiao Tong University', detail: 'Built a systems and optimization foundation, then applied it through game systems, Unity client work, and industrial digital twins.' },
      ],
    },
    footer: { copyright: 'Lucas (Yuyan) Shen / 沈裕焱' },
  },
  zh: {
    meta: {
      title: '沈裕焱 | AI 与工具管线向技术美术',
      description: '沈裕焱的游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线作品集。',
    },
    nav: { work: '作品', practice: '经历', links: '链接', aria: '主导航' },
    language: { label: '语言', english: 'English', changed: '语言已切换为中文。' },
    hero: { role: 'AI 与工具管线向技术美术', primaryAction: '项目作品' },
    personal: {
      intro: '作品覆盖游戏、DCC 插件、实时图形、引擎工具与 AI 辅助美术管线，包含运行画面、项目素材和具体实现。',
      storyAction: '关于我',
      aboutTitle: '关于我',
      aboutBody: [
        '我是沈裕焱，一名来自中国的技术美术。我的经历横跨工业工程、游戏开发、实时图形和生产工具，因此我习惯同时理解创作者遇到的问题，以及问题背后的代码与系统。',
        '我喜欢拆解工作流，把重复劳动做成工具，也会认真验证 AI 适合参与哪一步。工具之外，我持续从游戏、动画、音乐、图形实验和公开文档中学习。',
      ],
      traits: [
        { title: '我在做什么', detail: 'DCC 工具、AI 工作流、实时图形、游戏与动画。' },
        { title: '我的学习方式', detail: '先做出真实工作流，检查证据，再改进整个系统。' },
        { title: '我的协作方式', detail: '让创作决定留给人，让重复的生产环节变得可靠。' },
      ],
      linksTitle: '公开渠道',
      linksIntro: '代码、视觉作品、演示和持续记录分布在这些公开主页中。',
      social: [
        { name: 'GitHub', detail: '代码、工具与公开工程证据。', href: 'https://github.com/Ubik42', mark: 'GH' },
        { name: '视觉作品', detail: '实时场景、材质、Shader、绑定与程序化内容。', href: '#visual-work', mark: 'TA' },
        { name: '哔哩哔哩', detail: '工具演示、教程和长视频。', href: 'https://space.bilibili.com/12367861?spm_id_from=333.1007.0.0', mark: 'Bi' },
        { name: '小红书', detail: '笔记、资源和日常发现。', href: 'https://www.xiaohongshu.com/user/profile/670526b2000000001e001891', mark: 'RED' },
      ],
    },
    practice: {
      title: '经历与教育',
      items: [
        { period: '2026.03 – 至今', title: 'AI 工具技术美术实习生', place: '腾讯光子', detail: '围绕 DCC、引擎与设计流程构建 AI 辅助美术生产工具，明确规则、执行与人工审查的边界。' },
        { period: '2025.08 – 2027.05', title: 'EAE 技术美术硕士', place: '犹他大学', detail: '在 Entertainment Arts and Engineering 项目中学习实时图形、工具、管线与协作式游戏生产。' },
        { period: '2020.09 – 2024.06', title: '工业工程学士', place: '上海交通大学', detail: '建立优化与系统方法基础，并逐步扩展到游戏系统、Unity 客户端与工业数字孪生开发。' },
      ],
    },
    footer: { copyright: 'Lucas (Yuyan) Shen / 沈裕焱' },
  },
};
