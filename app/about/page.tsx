import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "このサービスについて | ITキャリア診断",
  description: "ITキャリア診断は、IT職種診断・市場価値チェック・職種図鑑を無料で提供するWebサービスです。登録不要で3分から利用できます。",
};

export default function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <header style={{
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
      }}>
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
        <div style={{ marginBottom: 48 }}>
          <span style={{
            display: "inline-block",
            padding: "4px 14px", borderRadius: 999,
            fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            color: "#6366f1",
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.2)",
            marginBottom: 20,
          }}>ABOUT</span>
          <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, color: "var(--text)", lineHeight: 1.3 }}>
            このサービスについて
          </h1>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.9, color: "var(--muted)" }}>
            「ITキャリア診断」は、IT業界でのキャリアを考えるすべての方に向けた、
            無料の職種診断・市場価値算出サービスです。
          </p>
        </div>

        <Section title="サービスの概要">
          <p>
            ITキャリア診断は、以下の3つの機能を無料で提供しています。
          </p>
          <FeatureList items={[
            { title: "IT職種診断", desc: "10問前後の質問に答えるだけで、14のIT職種の中からあなたの適性・志向に合う職種をランキングで提案します。未経験者向けと経験者向けで質問を最適化しており、初めてIT業界を目指す方から転職を検討中のITエンジニアまで幅広く活用できます。" },
            { title: "市場価値チェック", desc: "現在の職種・経験年数・保有スキル・資格をもとに、日本国内の求人市場における想定年収と市場価値偏差値を算出します。次に伸ばすべきスキルの提案も行います。" },
            { title: "IT職種図鑑", desc: "Webエンジニア・インフラエンジニア・AIエンジニアなど14職種の仕事内容・年収レンジ・必要スキル・キャリアパスをまとめた図鑑です。どの職種に向いているか迷っている方の参考になります。" },
          ]} />
        </Section>

        <Section title="こんな方に向けたサービスです">
          <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "IT業界への就職・転職を検討している方",
              "自分に向いているIT職種がわからない方",
              "現在の年収が市場水準と比べて適切か知りたい方",
              "キャリアアップのために次に習得すべきスキルを知りたい方",
              "IT業界のさまざまな職種について詳しく知りたい方",
            ].map((item) => (
              <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "var(--text)" }}>
                <span style={{ marginTop: 4, width: 8, height: 8, borderRadius: "50%", background: "#6366f1", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="無料で使えます">
          <p>
            当サービスのすべての機能は登録不要・完全無料でご利用いただけます。
            メールアドレスの入力もなく、アプリのインストールも不要です。
            ブラウザからすぐに利用を開始できます。
          </p>
        </Section>

        <Section title="運営者情報">
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            {[
              ["サービス名", "ITキャリア診断"],
              ["URL", "https://ai-career-diagnosis.vercel.app"],
              ["運営者", "Daichi Akita"],
              ["お問い合わせ", "daichi0503ad@gmail.com"],
            ].map(([label, value]) => (
              <tr key={label} style={{ borderBottom: "1px solid var(--border)" }}>
                <td style={{ padding: "12px 16px 12px 0", color: "var(--muted)", fontWeight: 600, whiteSpace: "nowrap", verticalAlign: "top", width: 140 }}>{label}</td>
                <td style={{ padding: "12px 0", color: "var(--text)" }}>{value}</td>
              </tr>
            ))}
          </table>
        </Section>

        <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/diagnosis" style={{
            padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15,
            color: "#fff", background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            textDecoration: "none", display: "inline-block",
          }}>
            IT職種診断をはじめる
          </Link>
          <Link href="/how-to-use" style={{
            padding: "14px 28px", borderRadius: 12, fontWeight: 700, fontSize: 15,
            color: "#6366f1", background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.25)",
            textDecoration: "none", display: "inline-block",
          }}>
            使い方を見る
          </Link>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 44 }}>
      <h2 style={{
        fontSize: 20, fontWeight: 800, color: "var(--text)",
        paddingBottom: 12,
        borderBottom: "2px solid rgba(99,102,241,0.2)",
        marginBottom: 20,
      }}>{title}</h2>
      <div style={{ fontSize: 15, lineHeight: 1.9, color: "var(--text)" }}>
        {children}
      </div>
    </section>
  );
}

function FeatureList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
      {items.map(({ title, desc }) => (
        <div key={title} style={{
          padding: "18px 20px",
          borderRadius: 12,
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}>
          <div style={{ fontWeight: 700, color: "#6366f1", marginBottom: 6 }}>{title}</div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--muted)" }}>{desc}</p>
        </div>
      ))}
    </div>
  );
}
