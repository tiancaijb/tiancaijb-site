export interface Note {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  content: string
  linkedNotes?: string[]
}

export const notes: Note[] = [
  {
    slug: "why-build-tools",
    title: "为什么要自己造工具",
    date: "2026-07-01",
    excerpt: "用现成的还是自己写？我的选择标准。",
    tags: ["工具观", "indie-dev"],
    content: `
## 工具的两面

现成的工具快，但永远不完全贴合你的需求。自己写的慢，但每个细节都服务于你。

我有一条简单的分界线：

- **核心流程**——自己写。每日打卡、冲动计时、知识管理。这些是我每天用的，值得做到 100% 贴合。
- **基础设施**——用现成的。部署、数据库、域名管理。这些是 commodity，不值得自己造轮子。

## 工具即思考

工具不只是工具。你用的工具塑造你的思维方式。

用 Notion 写笔记和用 Vim 写笔记，思考方式完全不同。前者让你填空，后者让你构建。

所以我倾向于自己造工具——不是为了酷，而是为了在工具中保留我自己的思考方式。

参见：[[indie-dev-zero-cost]]
`,
  },
  {
    slug: "indie-dev-zero-cost",
    title: "独立开发者零成本方案",
    date: "2026-07-04",
    excerpt: "受一条 B 站视频启发，整理了一份全免费的开发上线方案。",
    tags: ["indie-dev", "工具"],
    content: `
## 穷鬼套餐

受 [[BV1kY5XzrE6L|一条 B 站视频]] 启发，整理的全免费独立开发方案：

| 环节 | 工具 |
|------|------|
| 框架 | Next.js |
| 代码 | GitHub（私有仓库免费） |
| 部署 | Vercel（Hobby 计划） |
| 数据库 | Neon / Supabase（500MB 免费） |
| 域名 | NameSilo（.xyz 约 $0.99/年） + Cloudflare |
| AI 辅助 | Claude + OpenRouter 免费 API |
| 分析 | Microsoft Clarity |
| 邮件 | Resend（100封/天免费） |

## 我的配置

这个站就是这套方案。关于工具观，见 [[why-build-tools]]。

先跑起来再说，有真实用户再考虑升级。
`,
  },
  {
    slug: "sobriety-as-habit",
    title: "把戒色当成习惯系统来设计",
    date: "2026-07-03",
    excerpt: "不靠意志力，靠系统。从 Emacs 到 Obsidian，我怎么做打卡工具的。",
    tags: ["自律", "习惯", "Obsidian"],
    content: `
## 意志力有限

这是最基本的前提。任何依赖意志力的系统都注定失败——因为意志力是消耗品。

## 系统设计原则

1. **低 friction**：打卡只需点一下，不需要打开 app → 找功能 → 点菜单。
2. **即时反馈**：点完立刻看到连续天数，让大脑获得即时奖励。
3. **容错机制**：错过提醒时间？重启后还给一次补卡机会（在规定时间内）。
4. **视觉化**：仪表盘显示成功率和趋势，数据本身就是动力。

## 从 Emacs 到 Obsidian

之前用 Emacs 跑了一套戒色提醒系统，但 Emacs 只在写代码时开着。Obsidian 全天开着，提醒更及时——这就是移植的原因。

我为什么更倾向自己造工具？见 [[why-build-tools]]。
`,
  },
]
