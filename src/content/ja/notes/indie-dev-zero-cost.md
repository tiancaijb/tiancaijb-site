---
title: "独立開発者ゼロコストスタック"
slug: indie-dev-zero-cost
date: 2026-07-04
excerpt: "Bilibili の動画に触発された、完全無料の開発〜デプロイスタック。"
tags: ["indie-dev", "ツール"]
---

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
