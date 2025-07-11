# 竹内 錬磨 - ポートフォリオサイト

このレポジトリは、個人開発者として「はこピタ」などのモバイルアプリを開発・運営している竹内錬磨のポートフォリオサイトです。

## 概要

- **技術スタック**: Next.js 14 + TypeScript + Tailwind CSS
- **コンテンツ管理**: Markdownファイル（`content/`ディレクトリ）
- **デプロイ**: GitHub Pages（静的サイト生成）
- **自動化**: GitHub Actionsによる自動ビルド・デプロイ

## 構成

```
portfolio/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # ルートレイアウト
│   ├── page.tsx                 # トップページ
│   ├── globals.css              # グローバルスタイル
│   └── projects/
│       └── hakopita/
│           └── page.tsx         # はこピタ紹介ページ
├── content/                      # Markdownコンテンツ
│   ├── index.md                 # トップページコンテンツ
│   └── hakopita.md              # はこピタ紹介コンテンツ
├── lib/                         # ユーティリティ
│   └── markdown.ts              # Markdownパーサー
├── .github/workflows/           # GitHub Actions
│   └── deploy.yml               # デプロイワークフロー
└── public/                      # 静的ファイル
```

## ローカル開発

### 前提条件

- Node.js 18以上
- npm または yarn

### セットアップ

1. 依存関係のインストール
```bash
npm install
```

2. 開発サーバーの起動
```bash
npm run dev
```

3. ブラウザで http://localhost:3000 を開く

### ビルド

```bash
npm run build
```

静的ファイルは `out/` ディレクトリに生成されます。

## コンテンツ管理

### Markdownファイルの構造

- 各ページのコンテンツはMarkdown形式で記述し、ビルド時に統合
  - 例：`index.md`

### 新しいページの追加

1. `content/` ディレクトリに新しい `.md` ファイルを作成
2. `app/` ディレクトリに対応するページコンポーネントを作成
3. 必要に応じてナビゲーションにリンクを追加

## デプロイ

### GitHub Pages設定

1. リポジトリの設定で「Pages」を有効化
2. Source を「GitHub Actions」に設定

### 自動デプロイ

- `main` ブランチにプッシュすると自動的にデプロイされます
- GitHub Actionsがビルドとデプロイを実行します

### 手動デプロイ

```bash
npm run build
```

## 技術詳細

### 使用ライブラリ

- **Next.js 14**: Reactフレームワーク（App Router）
- **TypeScript**: 型安全性
- **Tailwind CSS**: スタイリング
- **remark**: Markdownパーサー
- **gray-matter**: フロントマター解析

### 静的サイト生成

- `next.config.js` で `output: 'export'` を設定
- GitHub Pages用の `basePath` 設定

### Markdown処理

- `lib/markdown.ts` でMarkdownファイルを解析
- フロントマターからメタデータを抽出
- remarkでHTMLに変換

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。

## 🔗 リンク

- [デプロイ先ページ](https://portfolio.rtapps.jp/)