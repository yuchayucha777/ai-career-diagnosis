import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "使い方 | ITキャリア診断",
  description: "ITキャリア診断の使い方を説明します。IT職種診断・市場価値チェック・職種図鑑の3機能を登録不要で無料利用できます。",
};

export default function HowToUsePage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <header style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "18px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontSize: 17, fontWeight: 900, color: "var(--text)", textDecoration: "none" }}>
            ITキャリア診断
          </Link>
          <Link href="/diagnosis" style={{
            fontSize: 14, fontWeight: 700, color: "#fff",
            padding: "9px 18px", borderRadius: 999,
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            textDecoration: "none",
          }}>
            無料で診断する
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 800, margin: "0 auto", padding: "60px 28px 80px" }}>
        <div style={{ marginBottom: 56 }}>
          <span style={{
            display: "inline-block",
            padding: "4px 14px", borderRadius: 999,
            fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            color: "#6366f1", background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.2)", marginBottom: 20,
          }}>HOW TO USE</span>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, color: "var(--text)", lineHeight: 1.3 }}>
            使い方
          </h1>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.9, color: "var(--muted)" }}>
            ITキャリア診断の3つの機能の使い方を説明します。すべて登録不要・無料でご利用いただけます。
          </p>
        </div>

        {/* Feature 1 */}
        <StepCard
          step={1}
          accent="#6366f1"
          tag="DIAGNOSIS"
          title="IT職種診断"
          href="/diagnosis"
          cta="診断をはじめる"
          steps={[
            { label: "職種を選択", desc: "「未経験（これからIT業界に入りたい）」か、現在就いているIT職種かを選択します。" },
            { label: "質問に回答", desc: "8〜12問の選択式質問に答えます。仕事への志向・得意なこと・興味のある分野などが聞かれます。すべての質問に1つずつ選択肢を選んでください。" },
            { label: "結果を確認", desc: "あなたに合うIT職種が適性スコア順にランキングで表示されます。各職種の向いている理由・強みの解説も確認できます。" },
          ]}
          notes={[
            "診断結果はブラウザには保存されません。再度確認したい場合は再診断してください。",
            "質問は途中でやり直せます（ブラウザの戻るボタンは使用しないでください）。",
          ]}
        />

        {/* Feature 2 */}
        <StepCard
          step={2}
          accent="#8b5cf6"
          tag="MARKET VALUE"
          title="市場価値チェック"
          href="/market-value"
          cta="年収をチェック"
          steps={[
            { label: "職種・経験年数を入力", desc: "現在の（または目指す）IT職種と、業務経験年数を選択します。" },
            { label: "スキル・資格を選択", desc: "保有しているプログラミング言語・フレームワーク・クラウドスキルや資格にチェックを入れます。" },
            { label: "市場価値を確認", desc: "想定年収レンジ・市場価値偏差値・スキル評価がリアルタイムで表示されます。次に習得すると評価が上がるスキルも提案されます。" },
          ]}
          notes={[
            "年収レンジは日本国内の公開求人・統計データをもとにした推計値です。実際の給与を保証するものではありません。",
            "スキルを追加・削除するたびに結果が即時更新されます。",
          ]}
        />

        {/* Feature 3 */}
        <StepCard
          step={3}
          accent="#6366f1"
          tag="JOB CATALOG"
          title="IT職種図鑑"
          href="/types"
          cta="図鑑を見る"
          steps={[
            { label: "カテゴリで絞り込む", desc: "「開発系」「インフラ系」「マネジメント系」などのカテゴリから見たい職種を絞り込めます。" },
            { label: "職種カードをクリック", desc: "気になる職種のカードをクリックすると、仕事内容・年収レンジ・必要スキル・向いている人の特徴・キャリアパスの詳細が展開されます。" },
          ]}
          notes={[
            "全14職種（Webエンジニア・SEシステムエンジニア・プログラマー・組み込みエンジニア・サーバーエンジニア・ネットワークエンジニア・クラウドエンジニア・AIエンジニア・データサイエンティスト・セキュリティエンジニア・PM・ITコンサルタント・ヘルプデスク・テスター）を掲載しています。",
          ]}
        />

        {/* FAQ */}
        <section style={{ marginTop: 56 }}>
          <h2 style={{
            fontSize: 22, fontWeight: 800, color: "var(--text)",
            paddingBottom: 14, borderBottom: "2px solid rgba(99,102,241,0.2)", marginBottom: 28,
          }}>よくある質問</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {[
              { q: "登録やアカウント作成は必要ですか？", a: "不要です。メールアドレスの入力もなく、すぐにご利用いただけます。" },
              { q: "スマートフォンでも利用できますか？", a: "はい、PC・スマートフォン・タブレットのどの端末からでも利用できます。" },
              { q: "診断結果は保存されますか？", a: "現在、診断結果の保存機能はありません。結果を残したい場合はスクリーンショットを撮るか、再度診断してください。" },
              { q: "診断は何度でもやり直せますか？", a: "はい、何度でも無料でやり直せます。職種選択から最初からやり直すことができます。" },
              { q: "年収はどのように計算されていますか？", a: "日本国内の求人サイト・統計データをもとに、職種・経験年数・保有スキルを組み合わせた推計値を算出しています。実際の給与を保証するものではありません。" },
            ].map(({ q, a }) => (
              <div key={q} style={{
                padding: "18px 20px",
                borderRadius: 12,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                marginBottom: 10,
              }}>
                <div style={{ fontWeight: 700, color: "var(--text)", fontSize: 15, marginBottom: 8 }}>Q. {q}</div>
                <div style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>A. {a}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <Link href="/diagnosis" style={{
            padding: "16px 36px", borderRadius: 12, fontWeight: 700, fontSize: 16,
            color: "#fff", background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            textDecoration: "none", display: "inline-block",
            boxShadow: "0 12px 28px -12px #6366f1",
          }}>
            さっそく診断してみる
          </Link>
        </div>
      </main>
    </div>
  );
}

function StepCard({
  step, accent, tag, title, href, cta, steps, notes,
}: {
  step: number;
  accent: string;
  tag: string;
  title: string;
  href: string;
  cta: string;
  steps: { label: string; desc: string }[];
  notes: string[];
}) {
  return (
    <section style={{
      marginBottom: 44,
      padding: "28px 28px 24px",
      borderRadius: 18,
      background: "var(--surface)",
      border: "1px solid var(--border)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12, flexShrink: 0,
          display: "grid", placeItems: "center",
          background: `linear-gradient(135deg, ${accent}, #8b5cf6)`,
          color: "#fff", fontWeight: 900, fontSize: 18,
        }}>{step}</div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: accent }}>{tag}</div>
          <div style={{ fontSize: 20, fontWeight: 900, color: "var(--text)" }}>{title}</div>
        </div>
      </div>

      <ol style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, marginBottom: 20 }}>
        {steps.map(({ label, desc }, i) => (
          <li key={label} style={{ display: "flex", gap: 14 }}>
            <div style={{
              width: 26, height: 26, borderRadius: "50%", flexShrink: 0,
              display: "grid", placeItems: "center", marginTop: 1,
              background: `${accent}18`,
              color: accent, fontWeight: 700, fontSize: 13,
            }}>{i + 1}</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: "var(--text)", marginBottom: 4 }}>{label}</div>
              <div style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.8 }}>{desc}</div>
            </div>
          </li>
        ))}
      </ol>

      {notes.length > 0 && (
        <div style={{
          padding: "12px 16px",
          borderRadius: 8,
          background: "rgba(99,102,241,0.04)",
          border: "1px solid rgba(99,102,241,0.14)",
          marginBottom: 20,
        }}>
          {notes.map((note) => (
            <p key={note} style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.7 }}>※ {note}</p>
          ))}
        </div>
      )}

      <Link href={href} style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        padding: "11px 22px", borderRadius: 10,
        fontWeight: 700, fontSize: 14,
        color: "#fff",
        background: `linear-gradient(135deg, ${accent}, #8b5cf6)`,
        textDecoration: "none",
      }}>
        {cta}
        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
          <path d="M3 9h11M10 4.5 14.5 9 10 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>
    </section>
  );
}
