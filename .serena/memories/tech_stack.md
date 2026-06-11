# Tech Stack

- **Framework**: Next.js 16 App Router（`node_modules/next/dist/docs/` のガイド参照）
- **Language**: TypeScript strict
- **Styling**: Tailwind CSS v4（v3とはAPI変更あり）
- **UI**: shadcn/ui（`components/ui/`）+ lucide-react + framer-motion
- **State**: なし（useState/useReducer直書き）
- **Infra**: Supabase (auth/DB) / Stripe (決済) / Anthropic Claude (セリフ生成)
- **Analytics**: @vercel/analytics, @vercel/speed-insights（layout.tsxに組込み済み）
- **Deploy**: Vercel（mainブランチ自動デプロイ）

## Package manager: npm

## Key packages

| パッケージ | 用途 |
|---|---|
| stripe / @stripe/stripe-js / @stripe/react-stripe-js | 決済 |
| @supabase/supabase-js | Webhook後DB更新 |
| zod + react-hook-form + @hookform/resolvers | フォーム |
| next-sitemap | postbuildでsitemap.xml生成 |
| clsx + tailwind-merge + class-variance-authority | クラス合成 |
