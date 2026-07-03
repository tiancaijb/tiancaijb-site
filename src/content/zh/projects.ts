import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "sobriety-tracker",
    title: "Sobriety Tracker",
    tagline: "Obsidian 戒色打卡插件",
    description:
      "一款 Obsidian 戒色打卡插件。功能：冲动计时器（倒计时）、每日打卡提醒（错过可补卡）、仪表盘（连续天数 + 成功率）、胜利庆祝动画、双语支持（中/英/日）。数据存为 Markdown——无云、无账号。",
    url: "https://github.com/tiancaijb/obsidian-sobriety-tracker",
    github: "https://github.com/tiancaijb/obsidian-sobriety-tracker",
    tags: ["Obsidian", "TypeScript", "自律"],
    featured: true,
  },
  {
    slug: "ai-flow",
    title: "AI Flow",
    tagline: "AI 友好的工作流引擎",
    description:
      "YAML 定义 Pipeline，专为 AI 消费设计。DAG 执行引擎 + 插件架构，自动重试（指数退避），模板引擎，内置节点：RSS、LLM、CSV、HTTP、Filter、Delay。错误信息 AI 可读。",
    url: "https://github.com/tiancaijb/ai-flow",
    github: "https://github.com/tiancaijb/ai-flow",
    tags: ["Python", "工作流", "AI"],
    featured: true,
  },
  {
    slug: "llm-wiki",
    title: "LLM Wiki",
    tagline: "Karpathy 风格知识库",
    description:
      "基于 Emacs + org-roam 的个人知识库。自动抓取 Bilibili/YouTube 视频字幕，LLM 总结，整理为互联笔记，符合 Open Knowledge Format 标准。",
    url: "https://github.com/tiancaijb/llm-wiki",
    github: "https://github.com/tiancaijb/llm-wiki",
    tags: ["Emacs", "org-roam", "知识库"],
    featured: true,
  },
  {
    slug: "gtd-workflow",
    title: "GTD Workflow",
    tagline: "Obsidian GTD 工作流插件",
    description:
      "在 Obsidian 里实现 org-mode 风格 GTD 工作流。功能：TODO/DONE 状态、[#A/#B/#C] 优先级、计划/截止日期、右侧 Agenda 视图（今日/本周/本月）、快速捕获 Ctrl+Shift+C、任务计时器 + CLOCK 记录、番茄钟、24h 时间轴、按任务汇总时间饼图、中英双语。",
    url: "https://github.com/tiancaijb/obsidian-gtd",
    github: "https://github.com/tiancaijb/obsidian-gtd",
    tags: ["Obsidian", "TypeScript", "GTD"],
    featured: true,
  },
]
