import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "未経験からITエンジニアになる方法【2025年版】 | ITキャリア診断",
  description: "文系・非IT職種からエンジニア転職を成功させるロードマップ。学習期間・費用・おすすめの入り口職種、転職エージェントの選び方まで解説。",
};

export default function BeginnerGuidePage() {
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
            }}>未経験転職</span>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>約8分で読めます</span>
          </div>
          <h1 style={{ fontSize: "clamp(22px, 4vw, 34px)", fontWeight: 900, color: "var(--text)", lineHeight: 1.35 }}>
            未経験からITエンジニアになる方法【2025年版】
          </h1>
          <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.9, color: "var(--muted)" }}>
            「プログラミングを勉強しているけど、どうすれば転職できるの？」「文系でもエンジニアになれる？」という疑問に答えます。2025年時点でのリアルな転職ロードマップを解説します。
          </p>
        </div>

        <ArticleSection title="未経験ITエンジニアの現状">
          <p>
            経済産業省の試算によれば、2030年には最大79万人のIT人材が不足すると言われています。この背景から、各IT企業は未経験者の採用に積極的で、ポテンシャル採用や研修制度の整備が進んでいます。
          </p>
          <p style={{ marginTop: 12 }}>
            実際、2024年時点で「未経験歓迎」と明記しているIT求人は全体の約3割を占めます。チャンスはあります。ただし、求人の多さに比例してライバルも増えているため、正しい戦略で準備することが重要です。
          </p>
        </ArticleSection>

        <ArticleSection title="未経験からエンジニア転職するロードマップ">
          <StepList steps={[
            {
              title: "STEP 1：職種を決める（1〜2週間）",
              body: "「エンジニア」といっても職種は多岐にわたります。未経験からの入口として、Webフロントエンドエンジニア・バックエンドエンジニア・インフラエンジニア（クラウド）・テスターが現実的です。まず自分の向き不向きを把握することから始めましょう。当サイトの「IT職種診断」も活用できます。",
            },
            {
              title: "STEP 2：プログラミング学習（3〜6ヶ月）",
              body: "Webエンジニアを目指すなら、HTML/CSS → JavaScript → Reactという順序が一般的です。バックエンドならPython（Django/FastAPI）またはRuby on Railsが入門しやすい。インフラ系ならLinuxコマンド・ネットワーク基礎・AWSの順番が王道です。プログラミングスクールは費用が50〜100万円かかりますが、転職保証つきのコースを選べばリスクを抑えられます。独学の場合はUdemy・Progateなど月額1,000〜3,000円のサービスを活用しましょう。",
            },
            {
              title: "STEP 3：ポートフォリオを作る（1〜2ヶ月）",
              body: "学習だけでは採用担当者に技術力が伝わりません。オリジナルのWebアプリをGitHubに公開し、面接で見せられる状態にしましょう。TODOアプリやメモ帳では弱いので、「実際に使えるツール」「自分の課題を解決するアプリ」を作るのがポイントです。",
            },
            {
              title: "STEP 4：転職活動（1〜3ヶ月）",
              body: "未経験転職は書類選考が最大の壁です。職務経歴書にはエンジニアとして関係するすべての経験（業務での数値改善、社内ツール作成など）を掘り起こして記載しましょう。転職エージェントを使うと書類添削・面接対策・年収交渉まで無料でサポートしてもらえるため、特に初めての転職では利用をおすすめします。",
            },
          ]} />
        </ArticleSection>

        <ArticleSection title="未経験が目指せるIT職種ランキング">
          <p style={{ marginBottom: 16 }}>
            採用のしやすさ（求人数・ポテンシャル採用の多さ）と入社後の成長性を踏まえて評価しました。
          </p>
          <RankTable rows={[
            { rank: 1, job: "Webフロントエンドエンジニア", salary: "300〜450万円", reason: "需要最大・学習コンテンツ豊富・即戦力になりやすい" },
            { rank: 2, job: "インフラ・クラウドエンジニア", salary: "320〜480万円", reason: "AWSの資格が評価され採用されやすい" },
            { rank: 3, job: "テスター・QAエンジニア", salary: "280〜400万円", reason: "プログラミング経験がなくても始めやすい" },
            { rank: 4, job: "バックエンドエンジニア", salary: "350〜500万円", reason: "要求スキルが高いが年収も上がりやすい" },
            { rank: 5, job: "ITコンサルタント", salary: "400〜600万円", reason: "文系・異業種経験者が有利になるケースがある" },
          ]} />
        </ArticleSection>

        <ArticleSection title="よくある質問">
          <Faq items={[
            {
              q: "文系でもエンジニアになれますか？",
              a: "なれます。エンジニアの約40%は文系出身という調査結果もあります。論理的思考・コミュニケーション力・問題解決能力は文系出身者に強みがある場合も多く、フロントエンドやITコンサルでは活かせる場面があります。",
            },
            {
              q: "プログラミングスクールに通う必要はありますか？",
              a: "必須ではありません。独学でも転職できます。ただし、スクールには「学習の強制力」「転職サポート」「コミュニティ」という独学にないメリットがあります。費用をかけても確実に転職したい方、一人での学習が続かない方にはスクールが向いています。",
            },
            {
              q: "転職活動にはどのくらいかかりますか？",
              a: "学習期間含め、ゼロから転職するまでの平均期間は6〜12ヶ月が多いです。学習経験がある方・ITに近い業務経験がある方は3〜6ヶ月でも可能です。",
            },
          ]} />
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
              まずは自分に向いている職種を知ることから
            </span>
          </div>
          <p style={{ fontSize: 14, color: "var(--text)", lineHeight: 1.8, marginBottom: 20 }}>
            未経験でどのIT職種が自分に合っているか迷っているなら、まずは診断してみましょう。12問の質問に答えるだけで、あなたの向いているIT職種をランキングで表示します。
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/diagnosis"
              style={{
                display: "inline-block",
                padding: "12px 22px", borderRadius: 10,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff", fontSize: 14, fontWeight: 700,
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
              }}
            >
              IT職種診断をはじめる（無料）
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

function StepList({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {steps.map(({ title, body }, i) => (
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
  );
}

function RankTable({ rows }: { rows: { rank: number; job: string; salary: string; reason: string }[] }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
        <thead>
          <tr style={{ borderBottom: "2px solid var(--border)" }}>
            <th style={{ padding: "10px 12px", textAlign: "left", color: "var(--muted)", fontWeight: 600 }}>順位</th>
            <th style={{ padding: "10px 12px", textAlign: "left", color: "var(--muted)", fontWeight: 600 }}>職種</th>
            <th style={{ padding: "10px 12px", textAlign: "left", color: "var(--muted)", fontWeight: 600 }}>初年度目安年収</th>
            <th style={{ padding: "10px 12px", textAlign: "left", color: "var(--muted)", fontWeight: 600 }}>選んだ理由</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ rank, job, salary, reason }) => (
            <tr key={rank} style={{ borderBottom: "1px solid var(--border)" }}>
              <td style={{ padding: "12px", color: rank === 1 ? "#6366f1" : "var(--muted)", fontWeight: rank === 1 ? 700 : 400, textAlign: "center" }}>{rank}</td>
              <td style={{ padding: "12px", color: "var(--text)", fontWeight: rank === 1 ? 700 : 400 }}>{job}</td>
              <td style={{ padding: "12px", color: "var(--text)", whiteSpace: "nowrap" }}>{salary}</td>
              <td style={{ padding: "12px", color: "var(--muted)", fontSize: 13 }}>{reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      {items.map(({ q, a }, i) => (
        <div key={i} style={{ padding: "18px 20px", borderRadius: 12, background: "var(--surface)", border: "1px solid var(--border)" }}>
          <div style={{ fontWeight: 700, color: "var(--text)", marginBottom: 8, fontSize: 14 }}>Q. {q}</div>
          <p style={{ fontSize: 14, lineHeight: 1.85, color: "var(--muted)", margin: 0 }}>A. {a}</p>
        </div>
      ))}
    </div>
  );
}
