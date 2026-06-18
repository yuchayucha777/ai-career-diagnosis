import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT職種別の年収相場2025年版【14職種を比較】 | ITキャリア診断",
  description: "Webエンジニア・インフラ・AI・PM・コンサルなど14職種の年収レンジを未経験〜シニアまで段階別に比較。IT転職での年収アップのポイントも解説。",
};

const SALARY_DATA = [
  { job: "Webフロントエンドエンジニア", icon: "🌐", entry: "300〜420", mid: "420〜600", senior: "600〜900" },
  { job: "バックエンドエンジニア", icon: "⚙️", entry: "320〜450", mid: "450〜680", senior: "650〜1000" },
  { job: "フルスタックエンジニア", icon: "💻", entry: "350〜480", mid: "480〜720", senior: "700〜1100" },
  { job: "組み込み・ファームウェアエンジニア", icon: "🔌", entry: "300〜420", mid: "420〜620", senior: "600〜900" },
  { job: "インフラエンジニア", icon: "🖥️", entry: "300〜430", mid: "430〜650", senior: "620〜950" },
  { job: "ネットワークエンジニア", icon: "🔗", entry: "290〜400", mid: "400〜600", senior: "580〜880" },
  { job: "クラウドエンジニア", icon: "☁️", entry: "350〜480", mid: "480〜720", senior: "700〜1100" },
  { job: "AIエンジニア", icon: "🤖", entry: "400〜550", mid: "550〜850", senior: "800〜1500" },
  { job: "データエンジニア", icon: "📊", entry: "380〜520", mid: "520〜780", senior: "750〜1200" },
  { job: "セキュリティエンジニア", icon: "🔒", entry: "340〜480", mid: "480〜720", senior: "700〜1100" },
  { job: "プロジェクトマネージャー", icon: "📋", entry: "420〜580", mid: "580〜850", senior: "800〜1400" },
  { job: "ITコンサルタント", icon: "💼", entry: "400〜600", mid: "600〜900", senior: "900〜1500+" },
  { job: "ヘルプデスク・サポートエンジニア", icon: "🎧", entry: "250〜350", mid: "350〜500", senior: "450〜680" },
  { job: "テスター・QAエンジニア", icon: "🧪", entry: "260〜360", mid: "360〜520", senior: "480〜720" },
];

export default function SalaryByJobPage() {
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
            }}>年収・市場価値</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>約10分で読めます</span>
          </div>
          <h1 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 900, color: "var(--text)", lineHeight: 1.35 }}>
            IT職種別の年収相場2025年版【14職種を比較】
          </h1>
          <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.9, color: "var(--muted)" }}>
            「IT業界に転職したいが、どの職種が稼げるのか」「今の年収は市場と比べて妥当か」という疑問に答えます。14職種の年収レンジを未経験（入社1〜2年目）・ミドル（3〜6年）・シニア（7年以上）の3段階で比較しました。
          </p>
          <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 8, fontStyle: "italic" }}>
            ※ データは日本国内の公開求人・各種統計調査をもとにした推計値です（2025年時点）。実際の年収は企業規模・地域・個人のスキルにより大きく異なります。
          </p>
        </div>

        <section style={{ marginBottom: 44 }}>
          <h2 style={{
            fontSize: 20, fontWeight: 800, color: "var(--text)",
            paddingBottom: 12,
            borderBottom: "2px solid rgba(99,102,241,0.2)",
            marginBottom: 20,
          }}>14職種の年収一覧（万円）</h2>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 600 }}>
              <thead>
                <tr style={{ borderBottom: "2px solid var(--border)" }}>
                  <th style={{ padding: "10px 12px", textAlign: "left", color: "var(--muted)", fontWeight: 600 }}>職種</th>
                  <th style={{ padding: "10px 12px", textAlign: "center", color: "var(--muted)", fontWeight: 600, whiteSpace: "nowrap" }}>未経験〜2年</th>
                  <th style={{ padding: "10px 12px", textAlign: "center", color: "var(--muted)", fontWeight: 600, whiteSpace: "nowrap" }}>3〜6年</th>
                  <th style={{ padding: "10px 12px", textAlign: "center", color: "var(--muted)", fontWeight: 600, whiteSpace: "nowrap" }}>7年以上</th>
                </tr>
              </thead>
              <tbody>
                {SALARY_DATA.map(({ job, icon, entry, mid, senior }) => (
                  <tr key={job} style={{ borderBottom: "1px solid var(--border)" }}>
                    <td style={{ padding: "12px", color: "var(--text)", fontWeight: 600 }}>
                      <span style={{ marginRight: 6 }}>{icon}</span>{job}
                    </td>
                    <td style={{ padding: "12px", color: "var(--muted)", textAlign: "center", fontSize: 13 }}>{entry}</td>
                    <td style={{ padding: "12px", color: "#6366f1", textAlign: "center", fontSize: 13, fontWeight: 600 }}>{mid}</td>
                    <td style={{ padding: "12px", color: "#059669", textAlign: "center", fontSize: 13, fontWeight: 600 }}>{senior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 44 }}>
          <h2 style={{
            fontSize: 20, fontWeight: 800, color: "var(--text)",
            paddingBottom: 12,
            borderBottom: "2px solid rgba(99,102,241,0.2)",
            marginBottom: 20,
          }}>年収が高い職種の特徴</h2>
          <div style={{ fontSize: 15, lineHeight: 1.9, color: "var(--text)" }}>
            <p>上位年収帯（700万円以上）に多いIT職種には共通した特徴があります。</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 16 }}>
              {[
                { title: "希少性の高いスキル", body: "AIエンジニア・データエンジニア・クラウドアーキテクトなど、習得難易度が高く市場にエンジニアが少ない領域ほど年収が高い傾向があります。特に機械学習・深層学習・LLMを扱えるAIエンジニアは需要が急増しており、2025年時点で最も年収が上がりやすい職種のひとつです。" },
                { title: "ビジネス職との橋渡し", body: "PMやITコンサルタントは技術力だけでなく、経営・ビジネスの視点を持つ人材が求められます。特にITコンサルタントは非IT業界の課題をIT技術で解決する提案ができるほど年収が上がります。コンサルファームのシニアコンサルタント・マネージャークラスは1,000万円以上が珍しくありません。" },
                { title: "資格・認定の有無", body: "AWS認定（特にSolutions Architect Professional・Security Specialty）・情報処理技術者試験（ネットワークスペシャリスト・データベーススペシャリスト）・CEH（認定倫理的ハッカー）などの資格保有は、採用選考・年収交渉の両方で有利に働きます。" },
              ].map(({ title, body }, i) => (
                <div key={i} style={{
                  padding: "20px 24px", borderRadius: 12,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderLeft: "4px solid #6366f1",
                }}>
                  <div style={{ fontWeight: 700, color: "#6366f1", marginBottom: 8, fontSize: 14 }}>{title}</div>
                  <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--text)", margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 44 }}>
          <h2 style={{
            fontSize: 20, fontWeight: 800, color: "var(--text)",
            paddingBottom: 12,
            borderBottom: "2px solid rgba(99,102,241,0.2)",
            marginBottom: 20,
          }}>IT転職で年収を上げるポイント</h2>
          <div style={{ fontSize: 15, lineHeight: 1.9, color: "var(--text)" }}>
            <p>「在籍中の会社で頑張るより、転職のほうが年収が上がりやすい」とよく言われます。実際、IT業界の転職における年収アップ幅は他業種より大きい傾向があります。</p>
            <ul style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginTop: 16 }}>
              {[
                "転職理由として「年収アップ」を正直に伝えてOK：IT業界は中途採用が当たり前で、年収アップ目的の転職も一般的です",
                "内定をもらってから交渉：複数内定があれば交渉力が上がります",
                "現職の年収を正直に開示する：虚偽は後々トラブルになります。ただし手当・賞与を含めた総額を提示しましょう",
                "エージェント経由で交渉代行してもらう：自分で交渉するより成功率が上がる傾向があります",
              ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--text)" }}>
                  <span style={{ marginTop: 5, width: 8, height: 8, borderRadius: "50%", background: "#6366f1", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

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
              自分の市場価値をチェックする
            </span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.8, marginBottom: 20 }}>
            現在の職種・経験年数・保有スキルを入力するだけで、想定年収レンジと市場価値偏差値を算出できます。転職相談の前に自分の立ち位置を把握しておきましょう。
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
