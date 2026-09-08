# sbcntr-frontend

書籍「AWSコンテナ設計・構築[本格]入門 増補改訂版」のフロントエンドアプリケーション用のダウンロードリポジトリです。

## 概要

React Router v7を使用した、モダンなペットショップ風のWebアプリケーションです。
サーバーサイドレンダリング（SSR）に対応し、バックエンドAPIと連携して動作します。
サンプルアプリケーションとして、シンプルながらも実践的な構成となっています。

## 画面構成

| 画面           | パス           | 用途                                                                       |
| -------------- | -------------- | -------------------------------------------------------------------------- |
| トップページ   | /              | バックエンドからデータを受け取り画面表示をする画面                         |
| 概要ページ     | /about         | このページは壊れています。ハンズオンでデバッグするために用意しています。   |
| ペット一覧     | /pets          | DB接続をしてペット一覧を表示するための画面                                 |
| 通知一覧       | /notifications | バッチ処理で設定された通知を表示するための画面。未読通知を既読に変更可能。 |
| ヘルスチェック | /healthcheck   | アプリケーションの稼働状態を確認する画面                                   |

## 主な機能

- **ペットカタログ**: ペット情報の一覧表示と詳細表示
- **お気に入り機能**: ペットのお気に入り登録/解除
- **予約機能**: ペットの予約申込み
- **通知管理**: 通知の一覧表示と既読管理
- **ショッピングカート**: localStorageを使用したカート機能（UUID管理）
- **レスポンシブデザイン**: モバイル・デスクトップ対応

## 技術スタック

### フレームワーク・ライブラリ

- **[React Router v7](https://reactrouter.com/)**
- **[React](https://react.dev/)**
- **[TypeScript](https://www.typescriptlang.org/)**

### UI・スタイリング

- **[Tailwind CSS](https://tailwindcss.com/)**
- **[shadcn/ui](https://ui.shadcn.com/)**

### フォーム・バリデーション

- **[React Hook Form](https://react-hook-form.com/)**
- **[Zod](https://zod.dev/)**

### ビルド・開発ツール

- **[Vite](https://vitejs.dev/)**
- **[Biome](https://biomejs.dev/)**
- **[pnpm](https://pnpm.io/)**

## システム要件

- Node.js >= 22.12.0
- pnpm 10.12.4

## セットアップ

### リポジトリのクローン

```bash
git clone https://github.com/uma-arai/sbcntr-frontend.git
cd sbcntr-frontend
```

### 依存関係のインストール

```bash
# pnpmを使用（必須）
pnpm install
```

## 開発

### 開発サーバーの起動

```bash
pnpm dev
```

開発サーバーは [http://localhost:5173](http://localhost:5173) で起動します。

### その他の開発コマンド

```bash
# 型チェック
pnpm typecheck

# リンティング
pnpm lint

# コードフォーマット
pnpm fix

# ルート型の生成
pnpm typegen
```

## ビルド・本番環境

### アプリケーションのビルド

```bash
pnpm build
```

### 本番サーバーの起動

```bash
pnpm start
```

本番サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

## バックエンドとの連携

このフロントエンドアプリケーションは、sbcntr-backendと連携して動作します。

### 環境変数

```bash
# バックエンドAPIのURL（設定されていない場合はモックデータを使用）
BACKEND_URL=http://localhost:80
```

## プロジェクト構造

```
app/
├── components/          # UIコンポーネント
│   ├── ui/             # Radix UI/shadcnベースの基本コンポーネント
│   ├── pets/           # ペット関連コンポーネント
│   └── *.tsx           # その他の機能コンポーネント
├── contexts/           # グローバルステート管理
│   ├── cart.tsx        # カート機能のContext
│   └── notification.tsx # 通知機能のContext
├── lib/                # ユーティリティ関数
├── routes/             # ページコンポーネント（ファイルベースルーティング）
├── schemas/            # Zodバリデーションスキーマ
├── types/              # TypeScript型定義
├── root.tsx            # ルートレイアウト（プロバイダー、エラーバウンダリ）
└── routes.ts           # ルート設定

public/                 # 静的アセット
react-router.config.ts  # React Router v7設定
```

## 注意事項

- このアプリケーションは書籍のサンプルコードです。
- Mac OS Sequoia 15.6での動作確認済み。
- 本番環境での利用は想定していません。

## 関連リポジトリ

- [sbcntr-backend](https://github.com/uma-arai/sbcntr-backend)
# Dockle Security Scan Test
