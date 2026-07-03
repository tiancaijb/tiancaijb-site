import type { Project } from "../types";

export const projects: Project[] = [
  {
    slug: "sobriety-tracker",
    title: "Sobriety Tracker",
    tagline: "Obsidian 禁欲トラッカープラグイン",
    description:
      "禁欲回復のための Obsidian プラグイン。衝動タイマー（カウントダウン）、日次チェックイン（リマインダーキャッチアップ機能付き）、ダッシュボード（連続日数・成功率）、勝利祝賀アニメーション、完全バイリンガル対応（英/中/日）。データはすべてプレーン Markdown — クラウドもアカウントも不要。",
    url: "https://github.com/tiancaijb/obsidian-sobriety-tracker",
    github: "https://github.com/tiancaijb/obsidian-sobriety-tracker",
    tags: ["Obsidian", "TypeScript", "自己改善"],
    featured: true,
  },
  {
    slug: "ai-flow",
    title: "AI Flow",
    tagline: "AI フレンドリーなワークフローエンジン",
    description:
      "AI が使うために設計された YAML 定義のパイプラインエンジン。DAG 実行、プラグインアーキテクチャ、指数バックオフ付き自動リトライ、テンプレートエンジン内蔵。RSS、LLM、CSV、HTTP、フィルター、遅延などのビルトインノード。",
    url: "https://github.com/tiancaijb/ai-flow",
    github: "https://github.com/tiancaijb/ai-flow",
    tags: ["Python", "ワークフロー", "AI"],
    featured: true,
  },
  {
    slug: "llm-wiki",
    title: "LLM Wiki",
    tagline: "Karpathy スタイル知識ベース",
    description:
      "Emacs + org-roam をベースにした個人知識ベース。Bilibili/YouTube 動画の字幕を自動取得・要約し、相互リンクされたノートとして整理。Open Knowledge Format に対応。",
    url: "https://github.com/tiancaijb/llm-wiki",
    github: "https://github.com/tiancaijb/llm-wiki",
    tags: ["Emacs", "org-roam", "知識ベース"],
    featured: true,
  },
  {
    slug: "gtd-workflow",
    title: "GTD Workflow",
    tagline: "Obsidian GTD プラグイン",
    description:
      "Obsidian で org-mode スタイルの GTD ワークフローを実現。TODO/DONE 状態、[#A/#B/#C] 優先度、予定日/期限日、右サイドバーの Agenda ビュー（今日/今週/今月）、クイックキャプチャ Ctrl+Shift+C、タスクタイマー + CLOCK 記録、ポモドーロ、24h タイムライン、タスク別集計円グラフ、CSV エクスポート、日英バイリンガル。",
    url: "https://github.com/tiancaijb/obsidian-gtd",
    github: "https://github.com/tiancaijb/obsidian-gtd",
    tags: ["Obsidian", "TypeScript", "GTD"],
    featured: true,
  },
]
