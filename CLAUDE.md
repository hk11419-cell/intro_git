# CLAUDE.md

このファイルは、このリポジトリで作業する際にClaude Code (claude.ai/code)にガイダンスを提供します。

## リポジトリの目的

これは基本的なGit操作を練習するためのGit学習用リポジトリ（`intro_git`）です。ビルドシステムやテストを持つソフトウェア開発プロジェクトではありません。このリポジトリには、Gitのステージング概念を示す日本語テキストを含む単一のテキストファイル（[first.txt](first.txt)）が含まれています。

## リポジトリ情報

- **リモート**: `https://github.com/hk11419-cell/intro_git.git`
- **メインブランチ**: `master`
- **内容**: Gitバージョン管理の教育・チュートリアル教材

## よく使うGitコマンド

これはGit学習用リポジトリなので、以下のコマンドがよく使用されます：

```bash
# 現在の状態を表示
git status

# 変更をステージング
git add first.txt
# またはすべての変更をステージング
git add .

# 変更をコミット
git commit -m "コミットメッセージ"

# コミット履歴を表示
git log
git log --oneline

# リモートにプッシュ
git push origin master

# リモートからプル
git pull origin master

# 差分を表示
git diff                    # ステージされていない変更
git diff --staged          # ステージされた変更
git diff HEAD              # すべての変更
```

## リポジトリ構造

このリポジトリは最小限の構成で以下を含みます：
- [first.txt](first.txt) - Gitステージングに関する日本語コンテンツを含むテキストファイル（「はじめて」/「ステージングの確認」）
- その他のソースコード、ビルド設定、テストファイルはありません
