import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT転職コラム | ITキャリア診断",
  description: "未経験からのIT転職、エージェント活用術、IT職種別年収など、IT業界へのキャリアチェンジに役立つ情報をまとめています。",
};

const ARTICLES = [
  {
    href: "/column/beginner-guide",
    category: "未経験転職",
    title: "未経験からITエンジニアになる方法【2025年版】",
    desc: "文系・非IT職種からエンジニア転職を成功させるロードマップ。学習期間・費用・おすすめの入り口職種まで解説します。",
    readTime: "約8分",
  },
  {
    href: "/column/use-agent",
    category: "転職活動",
    title: "IT転職でエージェントを使うべき3つの理由",
    desc: "求人サイトの自己応募とエージェント利用で何が変わるのか。年収交渉・非公開求人・書類添削など、エージェントを活用するメリットを整理しました。",
    readTime: "約6分",
  },
  {
    href: "/column/salary-by-job",
    category: "年収・市場価値",
    title: "IT職種別の年収相場2025年版【14職種を比較】",
    desc: "Webエンジニア・インフラエンジニア・AIエンジニア・PM・コンサルタントなど14職種の年収レンジを未経験〜シニアまで段階別に比較します。",
    readTime: "約10分",
  },
];

export default function ColumnPage() {
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

      <main style={{ maxWidth: 860, margin: "0 auto", padding: "60px 28px 80px" }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{
            display: "inline-block",
            padding: "4px 14px", borderRadius: 999,
            fontSize: 12, fontWeight: 700, letterSpacing: "0.12em",
            color: "#6366f1",
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.2)",
            marginBottom: 20,
          }}>IT転職コラム</span>
          <h1 style={{ fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 900, color: "var(--text)", lineHeight: 1.3 }}>
            IT転職に役立つ情報
          </h1>
          <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.9, color: "var(--muted)" }}>
            未経験からのエンジニア転職・エージェント活用・年収相場など、IT業界でのキャリアを検討している方に向けた情報をまとめています。
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {ARTICLES.map(({ href, category, title, desc, readTime }) => (
            <Link key={href} href={href} style={{ textDecoration: "none" }}>
              <article style={{
                padding: "28px 32px", borderRadius: 16,
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{
                    padding: "3px 10px", borderRadius: 999,
                    fontSize: 11, fontWeight: 700,
                    color: "#6366f1",
                    background: "rgba(99,102,241,0.08)",
                    border: "1px solid rgba(99,102,241,0.2)",
                  }}>{category}</span>
                  <span style={{ fontSize: 12, color: "var(--muted)" }}>{readTime}</span>
                </div>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: "var(--text)", lineHeight: 1.4, marginBottom: 10 }}>
                  {title}
                </h2>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.8 }}>
                  {desc}
                </p>
                <div style={{ marginTop: 16, fontSize: 13, color: "#6366f1", fontWeight: 700 }}>
                  続きを読む →
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
