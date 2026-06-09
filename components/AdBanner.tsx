"use client";

import Image from "next/image";

// ─────────────────────────────────────────────────────────────────────────────
// A8.net 広告の設定
// A8.netでコードを取得したら、下の adConfig に値を入力してください。
//
// A8.netのHTMLコード例:
//   <a href="https://px.a8.net/svt/ejp?a8mat=XXXX" rel="nofollow">
//   <img border="0" width="300" height="250" alt="" src="https://www21.a8.net/..."></a>
//   <img border="0" width="1" height="1" src="https://www10.a8.net/0.gif?a8mat=XXXX" alt="">
//
// → href / bannerSrc / width / height / trackingPixelSrc の5つを貼り付けるだけでOK
// ─────────────────────────────────────────────────────────────────────────────

interface AdConfig {
  href: string;
  bannerSrc: string;
  width: number;
  height: number;
  trackingPixelSrc: string;
  alt?: string;
}

// コードが届いたらここに入力する（空の場合は広告非表示）
const adConfig: AdConfig | null = null;

/* 入力例:
const adConfig: AdConfig | null = {
  href: "https://px.a8.net/svt/ejp?a8mat=XXXX",
  bannerSrc: "https://www21.a8.net/XXX/banner.png",
  width: 300,
  height: 250,
  trackingPixelSrc: "https://www10.a8.net/0.gif?a8mat=XXXX",
};
*/

export default function AdBanner({ style }: { style?: React.CSSProperties }) {
  if (!adConfig) return null;

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "8px 0", ...style }}>
      <a href={adConfig.href} rel="nofollow noopener" target="_blank">
        <Image
          src={adConfig.bannerSrc}
          alt={adConfig.alt ?? ""}
          width={adConfig.width}
          height={adConfig.height}
          unoptimized
        />
      </a>
      {/* A8.net 成果計測トラッキングピクセル */}
      <Image
        src={adConfig.trackingPixelSrc}
        alt=""
        width={1}
        height={1}
        unoptimized
        style={{ position: "absolute", visibility: "hidden" }}
      />
    </div>
  );
}
