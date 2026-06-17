import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー | ITキャリア診断",
  description: "ITキャリア診断のプライバシーポリシーです。個人情報の取り扱い・Cookie・アクセス解析ツールについて説明します。",
};

export default function PrivacyPage() {
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
          プライバシーポリシー
        </h1>
        <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 48 }}>最終更新日: 2025年6月17日</p>

        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <Article title="1. 基本方針">
            <p>
              Daichi Akita（以下「運営者」）は、「ITキャリア診断」（以下「本サービス」）におけるユーザーのプライバシーを尊重し、
              個人情報の保護に努めます。本ポリシーは、本サービスにおける個人情報・利用データの取り扱いについて説明します。
            </p>
          </Article>

          <Article title="2. 収集する情報">
            <p style={{ marginBottom: 16 }}>本サービスは以下の情報を収集する場合があります。</p>

            <SubSection title="自動的に収集される情報">
              <p>本サービスへのアクセス時に、以下の情報が自動的に収集されます。</p>
              <ul style={{ marginTop: 10, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
                {[
                  "IPアドレス、ブラウザの種類・バージョン",
                  "アクセスしたページのURL、参照元URL",
                  "アクセス日時、滞在時間",
                  "デバイスの種類（PC・スマートフォン等）・OS",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 14, lineHeight: 1.8, color: "var(--text)" }}>{item}</li>
                ))}
              </ul>
            </SubSection>

            <SubSection title="診断・入力データ">
              <p>
                診断フローや市場価値チェックで入力した回答・スキル情報は、
                サーバーへの送信時に診断結果の算出に使用されます。
                これらのデータは個人を特定する情報と紐付けて保存・蓄積されることはありません。
              </p>
            </SubSection>
          </Article>

          <Article title="3. Cookieおよびトラッキング技術">
            <p style={{ marginBottom: 16 }}>
              本サービスでは、サービス品質の向上・利用状況の分析を目的としてCookieおよびトラッキング技術を使用します。
            </p>

            <SubSection title="Vercel Analytics / Speed Insights">
              <p>
                Vercel, Inc.が提供するアクセス解析ツールを使用しています。
                ページビュー数・Core Web Vitals等のパフォーマンス指標を収集します。
                個人を特定する情報は収集されません。
              </p>
              <p style={{ marginTop: 8 }}>
                詳細: <a href="https://vercel.com/docs/analytics/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1", textDecoration: "none" }}>Vercel Privacy Policy</a>
              </p>
            </SubSection>

            <SubSection title="Microsoft Clarity">
              <p>
                Microsoft Corporationが提供するWebサイト行動解析ツール「Microsoft Clarity」を使用しています。
                ユーザーのクリック・スクロール・マウス移動等のヒートマップ・セッション記録を収集します。
                これらは本サービスのUI改善・ユーザー体験向上のために利用します。
              </p>
              <p style={{ marginTop: 8 }}>
                詳細: <a href="https://privacy.microsoft.com/ja-jp/privacystatement" target="_blank" rel="noopener noreferrer" style={{ color: "#6366f1", textDecoration: "none" }}>Microsoft プライバシーに関する声明</a>
              </p>
            </SubSection>

            <SubSection title="Cookieの無効化">
              <p>
                ブラウザの設定からCookieを無効にすることができます。
                ただし、一部の機能が正常に動作しない場合があります。
              </p>
            </SubSection>
          </Article>

          <Article title="4. アフィリエイトプログラム">
            <p>
              本サービスでは、アフィリエイトプログラム（A8.net等）に参加しており、
              広告リンクを掲載する場合があります。
              ユーザーが広告リンクを経由して商品・サービスを購入・契約した場合、
              運営者に紹介報酬が支払われることがあります。
            </p>
            <p style={{ marginTop: 12 }}>
              アフィリエイト計測のため、クリック情報やコンバージョン情報がアフィリエイトサービスプロバイダーに送信される場合があります。
              これらの情報の取り扱いについては、各プロバイダーのプライバシーポリシーが適用されます。
            </p>
          </Article>

          <Article title="5. 個人情報の利用目的">
            <p>収集した情報は以下の目的で利用します。</p>
            <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "本サービスの提供・運営・改善",
                "サービスの利用状況の分析",
                "不正利用・障害の検知および対処",
                "ユーザーからのお問い合わせへの対応",
              ].map((item) => (
                <li key={item} style={{ fontSize: 14, lineHeight: 1.8, color: "var(--text)" }}>{item}</li>
              ))}
            </ul>
          </Article>

          <Article title="6. 第三者への情報提供">
            <p>
              運営者は、以下のいずれかに該当する場合を除き、ユーザーの個人情報を第三者に提供しません。
            </p>
            <ul style={{ marginTop: 12, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                "ユーザーの事前同意がある場合",
                "法令に基づき開示が必要な場合",
                "人命・身体・財産の保護のために必要な場合",
              ].map((item) => (
                <li key={item} style={{ fontSize: 14, lineHeight: 1.8, color: "var(--text)" }}>{item}</li>
              ))}
            </ul>
          </Article>

          <Article title="7. データの保管と安全管理">
            <p>
              本サービスは、サービスインフラとしてVercel, Inc.のクラウドサービスを利用しており、
              データは同社のセキュリティポリシーに従って管理されます。
              運営者は個人情報への不正アクセス・漏洩・改ざんを防ぐため、合理的な安全管理措置を講じます。
            </p>
          </Article>

          <Article title="8. 未成年者のプライバシー">
            <p>
              本サービスは13歳未満の方を対象としていません。
              13歳未満の方の個人情報を意図的に収集することはありません。
            </p>
          </Article>

          <Article title="9. ポリシーの変更">
            <p>
              本ポリシーは、法令の改正や本サービスの変更に伴い、随時改定することがあります。
              重要な変更がある場合は、本ページに掲載します。
              最新の内容は常に本ページでご確認ください。
            </p>
          </Article>

          <Article title="10. お問い合わせ">
            <p>
              プライバシーに関するご質問・ご要望は、以下の連絡先までお問い合わせください。
            </p>
            <div style={{
              marginTop: 16, padding: "16px 20px", borderRadius: 10,
              background: "rgba(99,102,241,0.04)", border: "1px solid rgba(99,102,241,0.15)",
            }}>
              <p style={{ fontSize: 14, color: "var(--text)" }}>運営者: Daichi Akita</p>
              <p style={{ fontSize: 14, color: "var(--text)", marginTop: 6 }}>
                メール: <a href="mailto:daichi0503ad@gmail.com" style={{ color: "#6366f1", textDecoration: "none" }}>daichi0503ad@gmail.com</a>
              </p>
            </div>
          </Article>
        </div>

        <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/terms" style={{
            fontSize: 14, color: "#6366f1", textDecoration: "none",
            padding: "10px 20px", borderRadius: 8,
            background: "rgba(99,102,241,0.08)",
            border: "1px solid rgba(99,102,241,0.2)",
            fontWeight: 600,
          }}>利用規約を読む</Link>
          <Link href="/" style={{
            fontSize: 14, color: "var(--muted)", textDecoration: "none",
            padding: "10px 20px", borderRadius: 8,
            border: "1px solid var(--border)",
            fontWeight: 600,
          }}>トップに戻る</Link>
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 8 }}>◆ {title}</div>
      <div style={{ fontSize: 14, lineHeight: 1.9, color: "var(--text)", paddingLeft: 12, borderLeft: "2px solid rgba(99,102,241,0.25)" }}>
        {children}
      </div>
    </div>
  );
}
