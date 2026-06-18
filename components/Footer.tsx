import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "var(--surface)",
      marginTop: "auto",
    }}>
      <div style={{
        maxWidth: 1140,
        margin: "0 auto",
        padding: "40px 28px 32px",
        display: "flex",
        flexDirection: "column",
        gap: 28,
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 900, color: "var(--text)" }}>ITキャリア診断</div>
            <p style={{ marginTop: 8, fontSize: 13, color: "var(--muted)", lineHeight: 1.7, maxWidth: 280 }}>
              3分でわかる、あなたに合うIT職種。<br />
              登録不要・完全無料で利用できます。
            </p>
          </div>

          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <nav>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.1em", marginBottom: 12 }}>機能</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { href: "/diagnosis", label: "IT職種診断" },
                  { href: "/market-value", label: "市場価値チェック" },
                  { href: "/types", label: "IT職種図鑑" },
                  { href: "/column", label: "IT転職コラム" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} style={{ fontSize: 14, color: "var(--muted)", textDecoration: "none" }}
                      className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.1em", marginBottom: 12 }}>サイト情報</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { href: "/about", label: "このサービスについて" },
                  { href: "/how-to-use", label: "使い方" },
                  { href: "/terms", label: "利用規約" },
                  { href: "/privacy", label: "プライバシーポリシー" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} style={{ fontSize: 14, color: "var(--muted)", textDecoration: "none" }}
                      className="footer-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid var(--border)",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ fontSize: 12, color: "var(--muted)" }}>
            © 2025 ITキャリア診断. All rights reserved.
          </p>
          <p style={{ fontSize: 11, color: "var(--muted)", opacity: 0.7 }}>
            ※ 年収レンジは日本国内の公開求人・統計をもとにした推計です。実際の金額を保証するものではありません。
          </p>
        </div>
      </div>
    </footer>
  );
}
