export type Lang = "en" | "zh" | "ja";

export const defaultLang: Lang = "zh";

export const langs: Lang[] = ["en", "zh", "ja"];

export const langLabels: Record<Lang, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
};

type DeepStrings<T> = T extends object ? { [K in keyof T]: DeepStrings<T[K]> } : string;

export type Dict = DeepStrings<typeof enDict>;

const enDict = {
  nav: {
    home: "Garden",
    notes: "Notes",
    projects: "Projects",
    blog: "Blog",
    now: "Now",
    about: "About",
  },
  footer: {
    builtWith: "Built with Next.js & Tailwind",
    copyright: "tiancaijb",
  },
  home: {
    title: "tiancaijb's digital garden",
    subtitle: "Independent developer · Obsidian plugin maker · tool builder",
    description:
      "This is my digital garden — a collection of notes, projects, and thoughts. Nothing here is finished; everything grows over time.",
    explore: "Explore the garden",
    recentNotes: "Recently planted",
    viewAllNotes: "View all notes →",
    featuredProjects: "Featured projects",
    viewAllProjects: "View all projects →",
  },
  notes: {
    title: "Notes",
    description: "Evergreen thoughts, half-baked ideas, and things I'm learning.",
  },
  projects: {
    title: "Projects",
    description: "Things I've built.",
    viewSource: "Source",
    backToProjects: "← Back to projects",
  },
  blog: {
    title: "Blog",
    description: "Longer-form writing — building, breaking, and learning in public.",
    backToBlog: "← Back to blog",
  },
  now: {
    title: "Now",
    description: "What I'm focused on right now.",
    updated: "Last updated",
  },
  about: {
    title: "About",
    description: "Developer, creator, tiancaijb.",
    bio: "I build open-source tools for self-improvement, workflow automation, and knowledge management. Currently obsessed with Obsidian plugins, AI-powered pipelines, and the intersection of productivity and mindfulness.",
    interests: "Interests & values",
    interest1: "Building things that make a real difference in people's daily lives",
    interest2: "Open-source philosophy — everything I build is public",
    interest3: "The craft of tools: well-made tools make better humans",
    interest4: "Learning in public, sharing what I discover",
  },
  langSwitch: "日本語",
} as const;

const zhDict: Dict = {
  nav: {
    home: "花园",
    notes: "笔记",
    projects: "项目",
    blog: "文章",
    now: "此刻",
    about: "关于",
  },
  footer: {
    builtWith: "Built with Next.js & Tailwind",
    copyright: "tiancaijb",
  },
  home: {
    title: "tiancaijb 的数字花园",
    subtitle: "独立开发者 · Obsidian 插件作者 · 工具爱好者",
    description:
      "这是我的数字花园——笔记、项目、想法的集合。这里没有什么是完成的，一切都随时间生长。",
    explore: "探索花园",
    recentNotes: "最近种下的",
    viewAllNotes: "查看全部笔记 →",
    featuredProjects: "精选项目",
    viewAllProjects: "查看全部项目 →",
  },
  notes: {
    title: "笔记",
    description: "常青的想法、半熟的创意、正在学的东西。",
  },
  projects: {
    title: "项目",
    description: "我做的东西。",
    viewSource: "源码",
    backToProjects: "← 返回项目",
  },
  blog: {
    title: "文章",
    description: "长文写作——公开地构建、拆解、学习。",
    backToBlog: "← 返回文章",
  },
  now: {
    title: "此刻",
    description: "当前在做什么。",
    updated: "最后更新",
  },
  about: {
    title: "关于",
    description: "开发者，创造者，tiancaijb。",
    bio: "我做开源工具：自律追踪、工作流自动化、知识管理。最近沉迷 Obsidian 插件、AI 驱动的 Pipeline，以及生产力与正念的交汇处。",
    interests: "兴趣与理念",
    interest1: "做真正能改善日常生活的工具",
    interest2: "开源哲学——所有代码公开",
    interest3: "工具本身即是 craft：好的工具成就更好的人",
    interest4: "公开学习，分享发现",
  },
  langSwitch: "English",
};

const jaDict: Dict = {
  nav: {
    home: "庭",
    notes: "ノート",
    projects: "プロジェクト",
    blog: "ブログ",
    now: "今",
    about: "について",
  },
  footer: {
    builtWith: "Built with Next.js & Tailwind",
    copyright: "tiancaijb",
  },
  home: {
    title: "tiancaijb のデジタルガーデン",
    subtitle: "独立系開発者 · Obsidian プラグイン作者 · ツールビルダー",
    description:
      "ここは私のデジタルガーデン——ノート、プロジェクト、考えの集まりです。完成したものは何もなく、すべては時間とともに育ちます。",
    explore: "庭を探索する",
    recentNotes: "最近植えたもの",
    viewAllNotes: "すべてのノートを見る →",
    featuredProjects: "注目プロジェクト",
    viewAllProjects: "すべてのプロジェクトを見る →",
  },
  notes: {
    title: "ノート",
    description: "常緑の考え、中途半端なアイデア、学んでいること。",
  },
  projects: {
    title: "プロジェクト",
    description: "私が作ったもの。",
    viewSource: "ソース",
    backToProjects: "← プロジェクトに戻る",
  },
  blog: {
    title: "ブログ",
    description: "長文——公開で構築し、壊し、学ぶ。",
    backToBlog: "← ブログに戻る",
  },
  now: {
    title: "今",
    description: "現在注力していること。",
    updated: "最終更新",
  },
  about: {
    title: "について",
    description: "開発者、クリエイター、tiancaijb。",
    bio: "私はセルフインプルーブメント、ワークフロー自動化、知識管理のためのオープンソースツールを構築しています。現在は Obsidian プラグイン、AI 駆動パイプライン、生産性とマインドフルネスの交差点に没頭中。",
    interests: "興味と価値観",
    interest1: "人々の日常を本当に良くするものを作る",
    interest2: "オープンソースの哲学——すべて公開",
    interest3: "道具を作ることはクラフトである：良い道具は人間をより良くする",
    interest4: "公開で学び、発見を共有する",
  },
  langSwitch: "中文",
};

export function getDictionary(lang: Lang): Dict {
  switch (lang) {
    case "en": return enDict;
    case "ja": return jaDict;
    default: return zhDict;
  }
}
