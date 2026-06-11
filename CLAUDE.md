@AGENTS.md

# AI職種診断アプリ (ai-career-diagnosis)

Next.js 16 App Router + TypeScript + Tailwind CSS v4 のIT職種診断Webアプリ。

## 起動

```bash
npm run dev   # localhost:3000
npm run build # 本番ビルド確認
```

## ディレクトリ構成

```
app/
  page.tsx                      # ホーム（タイプライター・年収アニメーション）
  diagnosis/page.tsx            # 診断フロー（職種選択→質問→結果）
  market-value/page.tsx         # 市場価値チェック（年収算出）
  types/page.tsx                # IT職種図鑑（14職種一覧）
  api/
    diagnosis/questions/route.ts  # POST: jobId → 質問リスト返却
    diagnosis/result/route.ts     # POST: answers+jobId → 診断結果返却
lib/
  diagnosis.ts          # クライアント用: JobType型・JOB_TYPES定数・DiagnosisResult型
  diagnosis-questions.ts # サーバー専用: 全質問データ・calculateDiagnosis
  jobs.ts               # 市場価値チェック用の職種データ
  marketValue.ts        # 市場価値計算ロジック
data/
  jobs.ts               # 職種図鑑用データ（14職種・カテゴリ）
```

## 診断フローのアーキテクチャ

```
診断ページ (CSR)
  ↓ 職種選択 (未経験 or IT職種14種)
  ↓ POST /api/diagnosis/questions  ← 質問ロジックはサーバー側に隠蔽
  ↓ 質問表示 (8〜12問)
  ↓ POST /api/diagnosis/result     ← スコア計算もサーバー側
  ↓ 結果表示
```

## IT職種 14種（JobTypeId）

web / se / programmer / embedded / server / network / cloud /
ai / data / security / pm / consultant / helpdesk / tester

## 質問パターン

| 選択 | 質問数 | ファイル |
|---|---|---|
| 未経験 (beginner) | 12問 | BEGINNER_QUESTIONS |
| IT職種14種それぞれ | 8問 × 14 | JOB_SPECIFIC_QUESTIONS[jobId] |

## デプロイ

Vercelへのデプロイはトークン方式（`vercel.md` 参照）。
ローカル確認は `npm run dev` のみで可能、プッシュ不要。

## データフロー上の注意

- `lib/diagnosis.ts` はクライアントバンドルに含まれる → 型とJOB_TYPESのみ
- `lib/diagnosis-questions.ts` はAPIルート経由のみ（サーバー専用）→ 質問・スコアロジック全て
- 市場価値チェックはAPIルートなし（クライアント側で計算）

## インストール済みパッケージ

### デザイン
| パッケージ | 用途 |
|---|---|
| shadcn/ui | コンポーネントライブラリ（Tailwind v4対応・初期化済み） |
| lucide-react | アイコン |
| framer-motion | アニメーション |
| clsx | クラス名結合ユーティリティ |
| tailwind-merge | Tailwindクラスの競合解決 |
| class-variance-authority | コンポーネントのバリアント管理 |

### shadcn コンポーネント（`components/ui/` に生成済み）
button / card / badge / progress / dialog / sheet / separator / input / label / tabs / sonner

### 集客・計測
| パッケージ | 用途 |
|---|---|
| @vercel/analytics | ページビュー計測（layout.tsx に組み込み済み） |
| @vercel/speed-insights | Core Web Vitals 計測（layout.tsx に組み込み済み） |
| next-sitemap | ビルド時にsitemap.xml自動生成（`postbuild` に設定済み） |

### マネタイズ・決済
| パッケージ | 用途 |
|---|---|
| stripe | 決済サーバーSDK |
| @stripe/stripe-js | 決済クライアントSDK |
| @stripe/react-stripe-js | React用Stripeコンポーネント |
| @supabase/supabase-js | Webhook後のis_premium更新に使用 |

### フォーム・バリデーション
| パッケージ | 用途 |
|---|---|
| zod | スキーマバリデーション |
| react-hook-form | フォーム状態管理 |
| @hookform/resolvers | zod ↔ react-hook-form 連携 |

## 決済フロー（ai-sermon-webから移植）

```
ページ上のボタン
  → POST /api/checkout  { email }
  → Stripe Checkout URL にリダイレクト
  → 決済完了 → /success
  → POST /api/webhook  (Stripe → サーバー)
  → profiles.is_premium = true  (Supabase service role key で更新)
キャンセル → /cancel
```

## 環境変数（`.env.local.example` 参照）

```
STRIPE_SECRET_KEY
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
STRIPE_PRICE_ID
STRIPE_WEBHOOK_SECRET
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
NEXT_PUBLIC_URL
SITE_URL
```
