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
