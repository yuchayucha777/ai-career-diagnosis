import Link from 'next/link';

export default function CancelPage() {
  return (
    <main className="min-h-screen bg-[#0f0f1a] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6">😔</div>
        <h1 className="text-3xl font-bold mb-4">キャンセルしました</h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          決済がキャンセルされました。またいつでも登録できます。
        </p>
        <Link
          href="/"
          className="inline-block bg-[#e94560] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#c73350] transition"
        >
          トップに戻る
        </Link>
      </div>
    </main>
  );
}
