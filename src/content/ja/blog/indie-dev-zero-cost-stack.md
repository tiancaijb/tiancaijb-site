---
title: "貧乏開発者スタック：無料でアプリをリリースする方法"
slug: indie-dev-zero-cost-stack
date: 2026-07-04
excerpt: "Bilibili の動画に触発された、完全無料の開発〜デプロイスタック。"
tags: ["Indie Dev", "ツール"]
---

## きっかけ

Bilibili で「一円も使わずにアプリをリリースする方法」という動画を見た。考え方に共感した。

## フルスタック

| レイヤー | ツール |
|---------|--------|
| フレームワーク | Next.js |
| コード管理 | GitHub |
| デプロイ | Vercel |
| DB | Neon / Supabase |
| ドメイン | NameSilo + Cloudflare |
| AI 支援 | Claude + OpenRouter |
| 解析 | Microsoft Clarity |
| メール | Resend |

## 私の環境

このサイトもこのスタック。Next.js + Tailwind + Vercel、ゼロコスト。

今後のプロジェクトも同じ方針：まず無料で始め、本当のユーザーができたらスケールする。
