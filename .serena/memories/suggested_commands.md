# Suggested Commands

```powershell
# 開発サーバー起動
npm run dev        # localhost:3000

# 本番ビルド確認
npm run build

# Vercelデプロイ（トークン方式必須 — CLIログイン不可）
vercel deploy --token <TOKEN> --yes --scope yuchayucha-s-projects
```

## ブランチ戦略

- 作業は `dev` ブランチ → PR で `main` にマージ
- `main` は Vercel が自動デプロイ → 直接コミット禁止
