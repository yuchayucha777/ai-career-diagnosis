# ai-career-diagnosis — Core

Next.js App Router IT職種診断Webアプリ。14職種 + 未経験ルートの診断フロー。

## Source map

```
app/
  page.tsx                      # ホーム（タイプライター・年収アニメーション）
  layout.tsx                    # root layout（Vercel Analytics/SpeedInsights込み）
  diagnosis/page.tsx            # 診断フロー（CSR: 職種選択→質問→結果）
  market-value/page.tsx         # 市場価値チェック（年収算出、クライアント計算）
  types/page.tsx                # IT職種図鑑（14職種一覧）
  types/JobCard.tsx             # 職種カード コンポーネント
  types/JobCatalog.tsx          # 図鑑ラッパー
  cancel/page.tsx               # Stripe キャンセル後
  success/page.tsx              # Stripe 決済成功後
  api/
    diagnosis/questions/route.ts  # POST: jobId → 質問リスト
    diagnosis/result/route.ts     # POST: answers+jobId → 診断結果
lib/
  diagnosis.ts                  # クライアント: JobType型・JOB_TYPES定数・DiagnosisResult型
  diagnosis-questions.ts        # サーバー専用: 全質問データ・calculateDiagnosis
  jobs.ts                       # 市場価値チェック用職種データ
  marketValue.ts                # 市場価値計算ロジック
data/
  jobs.ts                       # 職種図鑑用データ（14職種・4カテゴリ）
components/
  ui/                           # shadcn/ui コンポーネント群
  AdBanner.tsx                  # 広告バナー
```

## Key invariants

- `lib/diagnosis-questions.ts` はサーバー専用（APIルート経由のみ）— クライアントバンドルに含めない
- `lib/diagnosis.ts` のみクライアント可（型とJOB_TYPESのみ）
- 市場価値チェックはAPIルートなし（クライアント計算）

See `mem:tech_stack`, `mem:conventions`, `mem:suggested_commands`
