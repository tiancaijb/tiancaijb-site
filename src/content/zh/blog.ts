export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-sobriety-tracker-obsidian-plugin",
    title: "从 Emacs 到 Obsidian：我为什么移植了一个戒色打卡插件",
    date: "2026-07-03",
    excerpt:
      "把一个用了两年的 Emacs 戒色系统移植到 Obsidian 插件的过程、思考和一些技术细节。",
    tags: ["Obsidian", "TypeScript", "Indie Dev"],
    content: `
## 起因

两年前我用 Emacs 写了一套戒色系统：定时提醒打卡、冲动计时器、连续天数统计。一直够用，直到 Obsidian 成了我每天开着的工具。

## 为什么移植

- Emacs 只在 coding 时开着，Obsidian 全天开着
- 提醒更及时，打卡更方便
- 数据用 Markdown 存，完全自制

## 技术选型

Obsidian 插件本质就是一个修改过的 web app：TypeScript + 原生 DOM 操作 + Obsidian API。

核心模块：
- **Urge Timer**：倒计时 + 状态栏显示，取消 = 破戒记录
- **Daily Reminder**：定时通知，重启后还有容差补发机制
- **Dashboard**：连续天数、成功率、周/月分解

## 最大的坑

Obsidian 的 \`setInterval\` 在笔记切换时会暂停。提醒逻辑要从 \`onload\` 里启动，不能依赖 view 生命周期。

## 上线

提交到 Obsidian 社区插件市场审核后上线。零成本，全免费。
`,
  },
  {
    slug: "indie-dev-zero-cost-stack",
    title: "独立开发者「穷鬼套餐」：零成本上线完整应用",
    date: "2026-07-04",
    excerpt:
      "一条视频启发了我。用全免费工具从零到一上线完整应用的完整方案。",
    tags: ["Indie Dev", "工具"],
    content: `
## 启发

看了 B 站上一条视频，讲怎么不花一分钱上线完整应用。思路和我不谋而合。

## 全套免费方案

| 环节 | 工具 |
|------|------|
| 框架 | Next.js |
| 托管 | GitHub |
| 部署 | Vercel |
| 数据库 | Neon / Supabase |
| 域名 | NameSilo + Cloudflare |
| AI 辅助 | Claude + OpenRouter |
| 分析 | Microsoft Clarity |
| 邮件 | Resend |

## 我的配置

目前这个站就跑了这套方案。Next.js + Tailwind + Vercel，零成本。

以后再加功能也按这个思路：先用免费方案跑起来，有真实用户再考虑升级。
`,
  },
]
