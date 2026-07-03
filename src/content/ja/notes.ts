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
    slug: "my-workflow",
    title: "開発ワークフロー",
    date: "2026-07-04",
    excerpt: "WSL2 + Doom Emacs + pi-coding-agent + DeepSeek V4 Flash + org-roam。",
    tags: ["ワークフロー", "indie-dev", "Emacs"],
    content: `
## 現在の構成

私の日常的な開発環境：

| レイヤー | ツール | 理由 |
|---------|--------|------|
| OS | **WSL2** (Windows) | ネイティブ Linux 体験、デュアルブート不要 |
| エディタ | **Doom Emacs** | 27年のエコシステム、org-mode は替代不可 |
| AI 支援 | **pi-coding-agent** + DeepSeek V4 Flash API | Emacs 内で完結、エディタを離れない |
| ノート | **org-roam** | 双方向リンクの元祖、プレーンテキスト |
| 知識ベース | **LLM Wiki skill** | Bilibili/YouTube を自動要約して org-roam に |

## Emacs が主、Obsidian は従

メインエディタは今も **Emacs**。org-roam の知識ベース、TODO 管理、日次ノート——すべて Emacs。

ではなぜ Obsidian プラグインを作るのか？二つの理由：

1. **独立開発の経験を積むため**——Obsidian プラグイン開発は TypeScript ＋フロントエンド。本物のユーザー、リリースフロー、コミュニティとの交流が得られる。ピュア Emacs では得られない経験だ。
2. **アイデアの検証**——Obsidian には大きなユーザーベースがある。誰かが実際にダウンロードして使ってくれる。自分だけのためのツール作りより、はるかにモチベーションになる。

## 独立開発を志す理由

大企業の流れ作業の歯車で一生終わりたくない。独立開発とは：

- **所有権**——コード、プロダクト、ユーザーが自分のもの
- **少人数の効率**——一人でも多くのことができる、調整ミーティング不要
- **ユーザーとの直接対話**——彼らが必要なものを教え、あなたが作るものを決める
- **場所の自由**——インターネットがあればどこでも

独立開発は楽な道ではない——でも **私の道** だ。

コストについて：[[indie-dev-zero-cost]]
ツール哲学について：[[why-build-tools]]
GTD システムについて：[[my-gtd-system]]
AI 時代の知識管理：[[knowledge-management-ai]]
タイムラインシステム：[[emacs-timeline]]
Emacs リマインダーについて：[[emacs-reminder-systems]]
`,
  },
  {
    slug: "my-gtd-system",
    title: "二つの GTD システム",
    date: "2026-07-04",
    excerpt: "org-agenda は生活、agent-projects.org は開発。",
    tags: ["GTD", "ワークフロー", "Emacs", "org-mode"],
    content: `
## 二つのシステム、それぞれの役割

私は二つの GTD システムを並行運用している：

### ① Emacs org-agenda（個人用）

ファイル：\`~/org/todo.org\`、\`org-agenda\` で管理：

- **習慣トラッキング**——禁欲チェックイン、瞑想、站桩
- **定期リマインダー**——Emacs timer + message/ding、デスクトップ不要
- **個人 TODO**——買い物、支払い、雑用
- **クイックノート**——org-roam でキャプチャ、定期レビュー

核心の利点：**Emacs 内でキーボードから離れない**。

### ② agent-projects.org（開発用）

ファイル：\`~/org/dev/agent-projects.org\`、pi-coding-agent が管理：

- **状態体系**——TODO / PROJ / STRT / WAIT / HOLD / IDEA / DONE / KILL
- **優先度**——[#A] [#B] [#C]
- **ワークフロー**——セッション開始時に TODO を読む → 完了マーク → commit
- **ログ**——操作ログがすべての変更を記録

核心のルール：**TODO を先に書いてから手を動かす**。

### 二つの関係

- org-agenda：**やるべきこと**——生活、習慣、長期目標
- agent-projects：**作っているもの**——開発プロジェクト、機能、リリース
- AI は agent-projects だけを操作し、個人の agenda には触れない

フルワークフロー：[[my-workflow]]
Emacs リマインダー：[[emacs-reminder-systems]]
`,
  },
  {
    slug: "emacs-reminder-systems",
    title: "Emacs リマインダーシステム：禁欲 + 定期通知",
    date: "2026-07-04",
    excerpt: "Emacs timer ベースの自律リマインダー、Emacs GUI 常駐。",
    tags: ["Emacs", "自律", "習慣", "ツール"],
    content: `
## Emacs で習慣を管理

Emacs GUI（Doom Emacs）を一日中起動している。だから Emacs にリマインダーを任せるのが最も自然な選択だ——時間になればポップアップする。

二つのシステム：

### ① sobriety-reminder（禁欲チェックイン）

Emacs の \`run-with-timer\` で実装：

- 毎日指定時間に \`message\` + \`ding\`
- Emacs GUI は常時稼働、リマインダーを逃さない
- データは org ファイルに記録

後に Obsidian プラグインに移植：[[sobriety-as-habit]]

### ② 汎用 timer-reminder（立ち上がり通知など）

同じ Emacs timer 機構、より広い用途：

- **立ち上がり通知** — 30分ごとに「動け」
- **站桩リマインダー** — 決まった時間に立禅
- **水分補給通知** — 水を飲め
- **任意のカスタム間隔** — Emacs Lisp で設定、変更も一瞬

### 技術的な実装

コアコードは最小限：

\`\`\`elisp
;; 毎日 9 時に禁欲チェックイン
(run-at-time "09:00" (* 60 60 24) 'my/sobriety-reminder)

;; 30分ごとに立ち上がり通知
(run-with-timer (* 30 60) (* 30 60) 'my/stand-up-reminder)
\`\`\`

二つの原則：

1. **強制ではなく通知** — \`ding\` が鳴るだけ。行動するかはあなた次第。でもその音がずっと気になる。
2. **Emacs GUI 常駐** — [[my-workflow|WSL + Doom Emacs ワークフロー]] と一貫性あり。Emacs が動いている限り、リマインダーは届く。

習慣システムの設計哲学：[[sobriety-as-habit]]
知識管理について：[[knowledge-management-ai]]
タイムラインについて：[[emacs-timeline]]
`,
  },
  {
    slug: "knowledge-management-ai",
    title: "AI 時代の知識管理",
    date: "2026-07-04",
    excerpt: "記憶する必要はない。AI が検索できればそれでいい。",
    tags: ["知識管理", "AI", "方法論"],
    content: `
## Anki の時代は終わった

Anki、間隔反復、フラッシュカード——これらは AI 以前の知識管理の中心だった。

今でも有用なのは二つのシナリオだけ：

1. **試験**——正確な想起が必要
2. **語学学習**——語彙は基本の積み木

それ以外？もう必要ない。

## AI 時代の原則：検索可能 > 記憶可能

かつては「知識を頭に入れる」ことに膨大な時間を費やしていた。

今は「AI が検索できる形で書く」ことに時間を使うべきだ。

二つのこと：

1. **書き留める**——自分の脳を信じるな。org-roam、ノート、Markdown に書け。
2. **検索可能にする**——構造化し、タグ付けし、リンクする。AI が数ヶ月前の一言を正確に見つけられるように。

これが [[my-workflow|LLM Wiki]] を作った理由だ：動画を自動要約 → org-roam に保存 → いつでも検索。

## デジタルガーデンも同じロジック

どのノートも「暗記するため」ではなく、「必要な時に見つけるため」にある。

双方向リンクは記憶のためじゃない——AI（と未来の自分）にコンテキストを提供するためだ。
`,
  },
  {
    slug: "emacs-timeline",
    title: "Emacs タイムラインシステム",
    date: "2026-07-04",
    excerpt: "Emacs で時間を視覚的に記録、フローを妨げない。",
    tags: ["Emacs", "時間管理", "ツール"],
    content: `
## なぜタイムラインか

ポモドーロは私には窮屈すぎる。25分で中断されたくない。欲しいのは：

- 何かを始めた時に時間を記録
- タスクを切り替えた時に自動的に経過を記録
- 後で見返すと一日の時間の流れがわかる

## 実装アイデア

Emacs 内のシンプルなタイムラインバッファ：

\`\`\`
09:00 ───── コーディング開始
09:45    ├ リサーチ (15分)
10:30 ───── 禁欲チェックイン
10:35 ───── ノート執筆
12:00 ───── 昼食
\`\`\`

各行 = タイムスタンプ + イベント。インデントで時間の長さを表現。

## なぜ Emacs か

- ウィンドウ切り替え不要——Emacs でキーを押せば完了
- [[my-gtd-system|org-agenda]] と連携——TODO 完了時に自動でタイムスタンプ
- [[emacs-reminder-systems|timer-reminder]] と連携——リマインダー発火時も記録
- データはプレーンな org テキスト、自由に処理可能

## 使い方

\`\`\`elisp
;; 時点を記録
M-x timeline/record-at-point

;; 今日のタイムラインを表示
M-x timeline/show-today
\`\`\`

タイムラインは秒単位の正確さが目的じゃない。「今日何をしたか」に答えるためのものだ。
`,
  },
  {
    slug: "why-build-tools",
    title: "なぜ自分でツールを作るのか",
    date: "2026-07-01",
    excerpt: "既製品 vs 自作 — 私の判断基準。",
    tags: ["ツール観", "indie-dev"],
    content: `
## ツールの二面性

既製のツールは速いが、あなたのワークフローに完全に合うことは決してない。自作のツールは時間がかかるが、すべての細部があなたに奉仕する。

私のルール：

- **コアワークフロー** — 自作する。日次チェックイン、衝動タイマー、知識管理。毎日使うものは100％最適化する価値がある。
- **インフラ** — 既存のものを使う。デプロイ、データベース、DNS。コモディティであり、再発明する価値はない。

## ツールは思考を形作る

ツールはニュートラルではない。使うツールが思考方法を形作る。

Notion で書くのと Vim で書くのでは、考え方がまったく異なる。前者はフォームに記入させ、後者は構築させる。

だから私は自分のツールを作ることに傾いている。カッコいいからではなく、自分の思考様式をツールに込めるためだ。

関連：[[my-workflow]]、[[my-gtd-system]]、[[indie-dev-zero-cost]]
`,
  },
  {
    slug: "indie-dev-zero-cost",
    title: "独立開発者ゼロコストスタック",
    date: "2026-07-04",
    excerpt: "Bilibili の動画に触発された、完全無料の開発〜デプロイスタック。",
    tags: ["indie-dev", "ツール"],
    content: `
## 貧乏開発者スタック

[[why-build-tools|私のツール哲学]] に基づく完全無料スタック：

| レイヤー | ツール |
|---------|--------|
| フレームワーク | Next.js |
| コード管理 | GitHub（無料プライベートリポジトリ） |
| デプロイ | Vercel（Hobby プラン） |
| データベース | Neon / Supabase（500MB 無料） |
| ドメイン | NameSilo（.xyz $0.99/年）+ Cloudflare |
| AI 支援 | Claude + OpenRouter 無料 API |
| 分析 | Microsoft Clarity |
| メール | Resend（100通/日 無料） |

## 私のセットアップ

このサイトもこのスタック。詳しくは [[my-workflow]]。

まずはリリースして、本当のユーザーができたら最適化する。
`,
  },
  {
    slug: "sobriety-as-habit",
    title: "禁欲を習慣システムとしてデザインする",
    date: "2026-07-03",
    excerpt: "意志力に頼るな。システムを設計せよ。Emacs から Obsidian へのツール移植。",
    tags: ["自律", "習慣", "Obsidian"],
    content: `
## 意志力は有限

これが大前提。意志力に依存するシステムは必ず失敗する——意志力は消耗品だからだ。

## システム設計の原則

1. **低摩擦**: チェックインはワンタップ。アプリを開く→機能を探す→メニューを開く、の手間がない。
2. **即時フィードバック**: チェックイン後すぐに連続日数を表示。脳はその報酬を求める。
3. **寛容さ**: リマインダーを逃した？再開後にキャッチアップ枠がある。
4. **可視化**: ダッシュボードに成功率とトレンドを表示。データそのものがモチベーションになる。

## Emacs から Obsidian へ

以前は Emacs で禁欲リマインダーシステムを動かしていた。問題：Emacs はコーディング中しか開いていない。Obsidian は一日中開いている。それだけで移植する価値があった。

ツール哲学：[[why-build-tools]]
Emacs リマインダー：[[emacs-reminder-systems]]
ワークフロー全般：[[my-workflow]]
`,
  },
]
