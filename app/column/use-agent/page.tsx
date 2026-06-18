import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT転職でエージェントを使うべき3つの理由 | ITキャリア診断",
  description: "求人サイトの自己応募とエージェントを比較。非公開求人・書類添削・年収交渉など、IT転職エージェントを活用するメリットとデメリットを解説します。",
};

export default function UseAgentPage() {
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

      <main style={{ maxWidth: 780, margin: "0 auto", padding: "60px 28px 80px" }}>
        <div style={{ marginBottom: 8 }}>
          <Link href="/column" style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none" }}>
            ← コラム一覧
          </Link>
        </div>

        <div style={{ marginBottom: 40, marginTop: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <span style={{
              padding: "3px 10px", borderRadius: 999,
              fontSize: 11, fontWeight: 700,
              color: "#6366f1",
              background: "rgba(99,102,241,0.08)",
              border: "1px solid rgba(99,102,241,0.2)",
            }}>転職活動</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>約6分で読めます</span>
          </div>
          <h1 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 900, color: "var(--text)", lineHeight: 1.35 }}>
            IT転職でエージェントを使うべき3つの理由
          </h1>
          <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.9, color: "var(--muted)" }}>
            「転職サイトで自分で探せばいいのでは？」と思っている方も多いでしょう。確かにリクナビNEXT・マイナビ転職などに直接応募する方法もあります。しかし、IT業界に特化した転職エージェントを使うことには、自己応募にはない明確な利点があります。
          </p>
        </div>

        <ArticleSection title="転職エージェントとは">
          <p>
            転職エージェント（人材紹介会社）は、求職者と企業の間に立って転職活動をサポートするサービスです。利用は無料で、エージェントの報酬は採用企業側から支払われます。
          </p>
          <p style={{ marginTop: 12 }}>
            担当キャリアアドバイザーが1対1でつき、求人紹介・書類添削・面接対策・入社条件交渉まで一貫してサポートしてもらえます。
          </p>
        </ArticleSection>

        <ArticleSection title="理由1：非公開求人にアクセスできる">
          <p>
            IT系の転職市場では、優良求人の多くが「非公開求人」として扱われています。企業が非公開にする理由は主に2つです。
          </p>
          <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
            {[
              "現在の社員に採用活動を知られたくない（競合採用・ポジション変更など）",
              "一般公開すると応募が殺到して選考に手が回らない人気ポジション",
            ].map((item, i) => (
              <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--text)" }}>
                <span style={{ marginTop: 5, width: 8, height: 8, borderRadius: "50%", background: "#6366f1", flexShrink: 0 }} />
                {item}
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 14 }}>
            大手IT転職エージェントの非公開求人は、公開求人の2〜3倍に上るケースも珍しくありません。自己応募だけでは見えていない求人が大量に存在しています。
          </p>
        </ArticleSection>

        <ArticleSection title="理由2：書類通過率が上がる">
          <p>
            未経験・第二新卒・スキルチェンジなど、「普通に応募すると書類で落とされやすい」ケースほど、エージェントの力を借りるメリットが大きくなります。
          </p>
          <p style={{ marginTop: 12 }}>
            キャリアアドバイザーは採用企業の「書類審査でどこを見ているか」を把握しています。同じ経歴でも、書き方・アピールポイントの出し方次第で通過率が大きく変わります。エージェントを使うことで、採用担当者の目線に最適化した職務経歴書・志望動機を作れます。
          </p>
          <p style={{ marginTop: 12 }}>
            また、エージェント経由の場合、企業に推薦状が添付されます。「エージェントが自信を持って推薦する人材」として見てもらえるため、書類選考の通過率が自己応募より高くなる傾向があります。
          </p>
        </ArticleSection>

        <ArticleSection title="理由3：年収交渉を代行してもらえる">
          <p>
            転職時の年収交渉を「自分でするのは気まずい」「断られたら内定が取り消されそうで怖い」と感じる方は多いです。エージェント経由なら、この交渉をアドバイザーが代わりに行ってくれます。
          </p>
          <p style={{ marginTop: 12 }}>
            エージェントは普段から多くの転職事例を持っており、「この職種・この経験年数なら妥当な年収相場」を把握しています。根拠のある交渉ができるため、自己応募よりも年収が上がるケースが多く報告されています。
          </p>
          <InfoBox
            title="実際どのくらい年収が上がる？"
            body="IT職種では、転職時に年収が50〜100万円アップするケースも珍しくありません。現職との年収差・市場価値・応募企業のレンジ次第ですが、エージェントを使うことで交渉の成功率は高まります。まず市場価値を把握しておくと交渉材料になります。"
          />
        </ArticleSection>

        <ArticleSection title="エージェントのデメリット・注意点">
          <p>
            良い面だけでなく、知っておくべき注意点もあります。
          </p>
          <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginTop: 14 }}>
            {[
              "担当者の質にばらつきがある：経験の浅いアドバイザーに当たると的外れな求人を紹介されることも。複数社登録してアドバイザーを比較するのがおすすめ。",
              "紹介できる求人数に限りがある：エージェントの得意業界・規模感が偏ることがある。大手と特化型エージェントを併用するのが有効。",
              "転職を急かされることがある：エージェントは採用が成立すると報酬が入るビジネスモデルのため、急がせてくることも。自分のペースを崩さないよう注意。",
            ].map((item, i) => (
              <li key={i} style={{ padding: "14px 18px", borderRadius: 10, background: "var(--surface)", border: "1px solid var(--border)", fontSize: 14, lineHeight: 1.8, color: "var(--text)" }}>
                {item}
              </li>
            ))}
          </ul>
        </ArticleSection>

        <ArticleSection title="IT転職エージェントの選び方">
          <p>
            IT業界への転職で使いやすいエージェントの選び方は以下の通りです。
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 14 }}>
            {[
              { label: "IT特化型を選ぶ", desc: "IT・エンジニア専門のエージェントは、アドバイザーがIT業界に詳しく、求人の質も高い傾向があります。" },
              { label: "複数社に登録する", desc: "1社だけでは求人数・アドバイザーの相性の選択肢が少ないです。2〜3社に並行登録するのが一般的です。" },
              { label: "サポート範囲を確認する", desc: "書類添削・面接練習・年収交渉まで対応しているか。特に未経験の場合は手厚いサポートが受けられる会社を選びましょう。" },
            ].map(({ label, desc }, i) => (
              <div key={i} style={{ padding: "18px 20px", borderRadius: 12, background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "4px solid #6366f1" }}>
                <div style={{ fontWeight: 700, color: "#6366f1", marginBottom: 6, fontSize: 14 }}>{label}</div>
                <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--text)", margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </ArticleSection>

        <div style={{
          marginTop: 48, padding: "28px 32px", borderRadius: 16,
          background: "linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)",
          border: "1px solid rgba(245,158,11,0.3)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ fontSize: 11, color: "#d97706", fontFamily: "'Space Mono', monospace", letterSpacing: 2, fontWeight: 700 }}>
              PR
            </span>
            <span style={{ fontSize: 16, fontWeight: 800, color: "var(--text)" }}>
              まずは市場価値を把握してから相談へ
            </span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.8, marginBottom: 20 }}>
            エージェントに相談する前に、自分の市場価値（想定年収）を把握しておくと交渉材料になります。当サービスの市場価値チェックは登録不要・無料で利用できます。
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/market-value"
              style={{
                display: "inline-block",
                padding: "12px 22px", borderRadius: 10,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff", fontSize: 14, fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
              }}
            >
              市場価値チェックをする（無料）
            </Link>
            <a
              href="#"
              style={{
                display: "inline-block",
                padding: "12px 22px", borderRadius: 10,
                background: "linear-gradient(135deg, #f59e0b, #d97706)",
                color: "#fff", fontSize: 14, fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(245,158,11,0.3)",
              }}
            >
              転職エージェントに無料相談する →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

function ArticleSection({ title, children }: { title: string; children: React.ReactNode }) {
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

function InfoBox({ title, body }: { title: string; body: string }) {
  return (
    <div style={{
      marginTop: 16, padding: "18px 20px", borderRadius: 12,
      background: "rgba(99,102,241,0.05)",
      border: "1px solid rgba(99,102,241,0.2)",
      borderLeft: "4px solid rgba(99,102,241,0.5)",
    }}>
      <div style={{ fontWeight: 700, color: "#6366f1", marginBottom: 8, fontSize: 13 }}>{title}</div>
      <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--text)", margin: 0 }}>{body}</p>
    </div>
  );
}
