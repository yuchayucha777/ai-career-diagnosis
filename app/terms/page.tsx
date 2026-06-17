import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "利用規約 | ITキャリア診断",
  description: "ITキャリア診断の利用規約です。",
};

export default function TermsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <header style={{ borderBottom: "1px solid var(--border)", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1140, margin: "0 auto", padding: "18px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ fontSize: 17, fontWeight: 900, color: "var(--text)", textDecoration: "none" }}>
            ITキャリア診断
          </Link>
        </div>
      </header>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "60px 28px 80px" }}>
        <h1 style={{ fontSize: "clamp(24px, 4vw, 34px)", fontWeight: 900, color: "var(--text)", marginBottom: 8 }}>
          利用規約
        </h1>
        <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 48 }}>最終更新日: 2025年6月17日</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <Article title="第1条（適用）">
            <p>
              本規約は、Daichi Akita（以下「運営者」）が運営するWebサービス「ITキャリア診断」（以下「本サービス」）の利用に関する条件を定めるものです。
              ユーザーは本サービスを利用することで、本規約に同意したものとみなされます。
            </p>
          </Article>

          <Article title="第2条（サービスの内容）">
            <p>
              本サービスは、IT職種診断・市場価値チェック・IT職種図鑑の機能を提供します。
              診断結果および年収の推計値は、参考情報の提供を目的としたものであり、特定の結果や収入を保証するものではありません。
            </p>
          </Article>

          <Article title="第3条（無料利用）">
            <p>
              本サービスの基本機能は無料でご利用いただけます。
              運営者は、将来的に有料機能を追加する場合があります。その際は事前に本サービス上で告知します。
            </p>
          </Article>

          <Article title="第4条（禁止事項）">
            <p>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
            <ol style={{ paddingLeft: 20, marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "法令または公序良俗に違反する行為",
                "運営者または第三者の著作権・知的財産権・名誉・プライバシーその他の権利を侵害する行為",
                "本サービスのシステムに不正にアクセスする行為、またはその試み",
                "本サービスを自動的に取得・スクレイピングする行為",
                "本サービスの運営を妨害するおそれのある行為",
                "その他、運営者が不適切と判断する行為",
              ].map((item, i) => (
                <li key={i} style={{ fontSize: 14.5, lineHeight: 1.8, color: "var(--text)" }}>{item}</li>
              ))}
            </ol>
          </Article>

          <Article title="第5条（免責事項）">
            <p>
              運営者は、本サービスの内容について正確性・完全性を保証しません。
              本サービスの利用によって生じた損害（直接・間接を問わず）について、運営者は一切の責任を負いません。
              診断結果・年収推計値は参考情報であり、就職・転職活動における意思決定の最終判断はユーザー自身で行ってください。
            </p>
          </Article>

          <Article title="第6条（サービスの変更・停止）">
            <p>
              運営者は、ユーザーへの事前通知なく、本サービスの内容を変更・追加・停止することができます。
              これによりユーザーに損害が生じた場合でも、運営者は責任を負いません。
            </p>
          </Article>

          <Article title="第7条（知的財産権）">
            <p>
              本サービスに掲載されているコンテンツ（テキスト・画像・デザイン等）の著作権は運営者に帰属します。
              無断での複製・転載・改変・再配布を禁止します。
            </p>
          </Article>

          <Article title="第8条（広告の掲載）">
            <p>
              本サービスには、アフィリエイト広告・第三者広告が掲載される場合があります。
              広告リンクを経由して購入・契約等が行われた場合、運営者が報酬を受け取る場合があります。
              広告の内容に関して、運営者は保証・推薦するものではありません。
            </p>
          </Article>

          <Article title="第9条（プライバシー）">
            <p>
              個人情報の取り扱いについては、別途定める
              <Link href="/privacy" style={{ color: "#6366f1", textDecoration: "none", margin: "0 4px" }}>プライバシーポリシー</Link>
              に従います。
            </p>
          </Article>

          <Article title="第10条（準拠法・管轄）">
            <p>
              本規約の解釈・適用は日本法に準拠します。
              本サービスに関する紛争については、運営者の住所地を管轄する裁判所を専属的合意管轄裁判所とします。
            </p>
          </Article>

          <Article title="第11条（規約の改定）">
            <p>
              運営者は、必要に応じて本規約を改定することができます。
              改定後の規約は本ページに掲載した時点で効力を生じるものとします。
            </p>
          </Article>
        </div>

        <div style={{ marginTop: 56, padding: "20px 24px", borderRadius: 12, background: "var(--surface)", border: "1px solid var(--border)", fontSize: 14 }}>
          <div style={{ fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>お問い合わせ</div>
          <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
            本規約に関するご質問は、<a href="mailto:daichi0503ad@gmail.com" style={{ color: "#6366f1", textDecoration: "none" }}>daichi0503ad@gmail.com</a> までお問い合わせください。
          </p>
        </div>
      </main>
    </div>
  );
}

function Article({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article>
      <h2 style={{
        fontSize: 17, fontWeight: 800, color: "var(--text)",
        paddingBottom: 10, borderBottom: "1px solid var(--border)", marginBottom: 16,
      }}>{title}</h2>
      <div style={{ fontSize: 14.5, lineHeight: 1.9, color: "var(--text)" }}>
        {children}
      </div>
    </article>
  );
}
