export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-[#0f0f1a] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="text-7xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold mb-4">登録完了！</h1>
        <p className="text-gray-400 mb-4 leading-relaxed">
          プレミアム会員になりました。
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mb-8">
          すべての診断機能・詳細レポートが解放されます。
        </p>
        <div className="bg-[#1a1a2e] rounded-2xl p-6 text-sm text-gray-400 text-left space-y-2">
          <p>✓ 詳細な診断レポートを確認する</p>
          <p>✓ 全職種の市場価値データにアクセス</p>
          <p>✓ 職務経歴書キーワードを活用する</p>
        </div>
      </div>
    </main>
  );
}
