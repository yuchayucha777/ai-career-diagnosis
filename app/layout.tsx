import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IT職種診断 | あなたのIT人格と市場価値を診断する",
  description:
    "10問の質問でIT職種タイプを診断し、スキルと経験から市場価値・想定年収・職務経歴書キーワードを自動算出。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
