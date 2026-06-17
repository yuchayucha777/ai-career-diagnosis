"use client";

import Image from "next/image";

interface AdConfig {
  href: string;
  bannerSrc: string;
  width: number;
  height: number;
  trackingPixelSrc: string;
}

// quiz: レンタルパソコン（未経験者がPCを探している文脈）
// result: オンスク.JP（向いている職種がわかった直後に資格学習を提案）
const ADS: Record<"quiz" | "result", AdConfig> = {
  quiz: {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5YSB+F006GI+5QFE+BXB8X",
    bannerSrc: "https://www28.a8.net/svt/bgt?aid=260618843907&wid=001&eno=01&mid=s00000026753002003000&mc=1",
    width: 300,
    height: 250,
    trackingPixelSrc: "https://www18.a8.net/0.gif?a8mat=4B5YSB+F006GI+5QFE+BXB8X",
  },
  result: {
    href: "https://px.a8.net/svt/ejp?a8mat=4B5YSB+EDZ52Q+408S+5ZMCH",
    bannerSrc: "https://www24.a8.net/svt/bgt?aid=260618843870&wid=001&eno=01&mid=s00000018694001006000&mc=1",
    width: 300,
    height: 250,
    trackingPixelSrc: "https://www14.a8.net/0.gif?a8mat=4B5YSB+EDZ52Q+408S+5ZMCH",
  },
};

export default function AdBanner({
  variant = "result",
  style,
}: {
  variant?: "quiz" | "result";
  style?: React.CSSProperties;
}) {
  const ad = ADS[variant];

  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "8px 0", ...style }}>
      <a href={ad.href} rel="nofollow noopener" target="_blank">
        <Image
          src={ad.bannerSrc}
          alt=""
          width={ad.width}
          height={ad.height}
          unoptimized
        />
      </a>
      <Image
        src={ad.trackingPixelSrc}
        alt=""
        width={1}
        height={1}
        unoptimized
        style={{ position: "absolute", visibility: "hidden" }}
      />
    </div>
  );
}
