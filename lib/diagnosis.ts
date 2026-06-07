export type JobTypeId =
  | "frontend"
  | "backend"
  | "infra"
  | "data"
  | "fullstack"
  | "techlead"
  | "product"
  | "devops";

export interface JobType {
  id: JobTypeId;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  strengths: string[];
  recommendedCompanyTypes: string[];
  relatedRoles: string[];
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

export const JOB_TYPES: Record<JobTypeId, JobType> = {
  frontend: {
    id: "frontend",
    name: "フロントエンド職人",
    emoji: "🎨",
    tagline: "1pxにも妥協しない、UI の番人",
    description:
      "デザインとコードの境界線に生きる職人。ピクセル単位の完成度にこだわり、ユーザーが「気持ちいい」と感じる体験を追求する。アニメーション・アクセシビリティ・パフォーマンスを三位一体で考えられる。",
    strengths: [
      "CSS・アニメーションへの深い理解",
      "デザイナーとの高い親和性",
      "ユーザー視点での品質意識",
      "ブラウザ互換・パフォーマンス最適化",
    ],
    recommendedCompanyTypes: [
      "デザイン重視のプロダクト企業",
      "BtoC サービス",
      "デザインエージェンシー",
    ],
    relatedRoles: [
      "フロントエンドエンジニア",
      "UIエンジニア",
      "フロントエンドアーキテクト",
    ],
    color: "#f472b6",
    gradientFrom: "#ec4899",
    gradientTo: "#8b5cf6",
  },
  backend: {
    id: "backend",
    name: "バックエンド設計者",
    emoji: "⚙️",
    tagline: "見えない部分を美しく設計する",
    description:
      "ユーザーには見えないが、一番重要な部分を支える縁の下の力持ち。パフォーマンス・スケーラビリティ・設計の一貫性に美学を持つ。API 設計とDB モデリングが最高の自己表現。",
    strengths: [
      "APIとシステム設計",
      "パフォーマンスチューニング",
      "データモデリング",
      "スケーラビリティ設計",
    ],
    recommendedCompanyTypes: ["大規模トラフィックのサービス", "BtoB SaaS", "決済・金融系"],
    relatedRoles: [
      "バックエンドエンジニア",
      "サーバーサイドエンジニア",
      "APIエンジニア",
    ],
    color: "#34d399",
    gradientFrom: "#10b981",
    gradientTo: "#3b82f6",
  },
  infra: {
    id: "infra",
    name: "インフラ番人",
    emoji: "🛡️",
    tagline: "99.99% を守る、沈黙の守護者",
    description:
      "サービスが落ちることを許さない。自動化・監視・障害対応を三大使命とし、開発者が何も考えずにデプロイできる環境を作ることに喜びを感じる。夜中のアラートにも動じないメンタル。",
    strengths: [
      "クラウドインフラ設計",
      "障害対応とポストモーテム",
      "自動化・IaC",
      "コスト最適化",
    ],
    recommendedCompanyTypes: [
      "金融・ミッションクリティカル系",
      "大規模インフラ保有企業",
      "クラウドネイティブ企業",
    ],
    relatedRoles: ["SREエンジニア", "インフラエンジニア", "クラウドアーキテクト"],
    color: "#60a5fa",
    gradientFrom: "#3b82f6",
    gradientTo: "#06b6d4",
  },
  data: {
    id: "data",
    name: "データ探偵",
    emoji: "🔍",
    tagline: "数字の海に真実を見つける",
    description:
      "データが持つ物語を読み解くことに情熱を燃やす。統計・SQL・可視化を武器に、誰も気づいていないインサイトを発見する。「なぜ？」と問い続ける探求心と、仮説を検証する粘り強さが武器。",
    strengths: [
      "統計・機械学習の知識",
      "大規模データ処理",
      "ビジネス課題への翻訳力",
      "データビジュアライゼーション",
    ],
    recommendedCompanyTypes: [
      "データドリブンな企業",
      "Eコマース・マーケティング系",
      "FinTech・HealthTech",
    ],
    relatedRoles: [
      "データサイエンティスト",
      "MLエンジニア",
      "データアナリスト",
      "AIエンジニア",
    ],
    color: "#fbbf24",
    gradientFrom: "#f59e0b",
    gradientTo: "#ef4444",
  },
  fullstack: {
    id: "fullstack",
    name: "フルスタック冒険家",
    emoji: "🚀",
    tagline: "ゼロから一人でプロダクトを作れる",
    description:
      "フロントもバックもインフラも、必要なら何でも手を出す。スタートアップの混沌が心地よく、スピードと完成度を高いレベルで両立できる。「こんな技術は知らない」は言い訳にしない。",
    strengths: [
      "フロント〜バック一貫した開発",
      "素早いプロトタイピング",
      "技術選定の幅広い視野",
      "オーナーシップの高さ",
    ],
    recommendedCompanyTypes: ["スタートアップ", "少数精鋭のプロダクト会社", "自社開発企業"],
    relatedRoles: [
      "フルスタックエンジニア",
      "ソフトウェアエンジニア",
      "シニアエンジニア",
    ],
    color: "#a78bfa",
    gradientFrom: "#8b5cf6",
    gradientTo: "#ec4899",
  },
  techlead: {
    id: "techlead",
    name: "テックリード",
    emoji: "🏗️",
    tagline: "チームの技術を10倍にする設計者",
    description:
      "自分が書くコードより、チームが書くコードの品質を上げることに喜びを感じる。アーキテクチャレビュー・技術負債の解消・ジュニアの育成が三大使命。コードとチームの両方を設計できる。",
    strengths: [
      "システムアーキテクチャ設計",
      "技術的意思決定",
      "チームの生産性向上",
      "技術負債の整理",
    ],
    recommendedCompanyTypes: ["成長期のスタートアップ", "大手IT企業", "技術組織強化中の企業"],
    relatedRoles: ["テックリード", "アーキテクト", "シニアエンジニア", "エンジニアリングマネージャー"],
    color: "#f97316",
    gradientFrom: "#f97316",
    gradientTo: "#eab308",
  },
  product: {
    id: "product",
    name: "プロダクト思考エンジニア",
    emoji: "💡",
    tagline: "ユーザーの声がコードになる",
    description:
      "なぜ作るかを常に考えながらコードを書く。ユーザーインタビューにも顔を出し、メトリクスを見て機能を判断する。技術とビジネスの橋渡しができる稀有な存在。PMと対等に議論できる。",
    strengths: [
      "ユーザー視点での要件整理",
      "ビジネス指標との紐付け",
      "クロスファンクショナルな連携",
      "A/Bテスト・仮説検証",
    ],
    recommendedCompanyTypes: ["プロダクト志向の企業", "BtoC サービス", "グロース重視の会社"],
    relatedRoles: [
      "プロダクトエンジニア",
      "フルスタックエンジニア",
      "プロダクトマネージャー（将来）",
    ],
    color: "#2dd4bf",
    gradientFrom: "#06b6d4",
    gradientTo: "#3b82f6",
  },
  devops: {
    id: "devops",
    name: "セキュリティ/DevOps番兵",
    emoji: "🔐",
    tagline: "すべてを自動化し、すべてを守る",
    description:
      "手動作業は敵。CI/CDパイプラインを磨き、セキュリティホールを塞ぎ、開発者体験を最大化する。ゼロトラストの思想と自動化への強迫観念を持ち合わせた、現代開発の守護者。",
    strengths: [
      "CI/CDパイプライン構築",
      "セキュリティレビュー",
      "開発者体験の最適化",
      "コンプライアンス・監査対応",
    ],
    recommendedCompanyTypes: [
      "金融・医療など規制産業",
      "エンタープライズ企業",
      "セキュリティ意識の高い企業",
    ],
    relatedRoles: [
      "DevOpsエンジニア",
      "プラットフォームエンジニア",
      "セキュリティエンジニア",
    ],
    color: "#fb7185",
    gradientFrom: "#ef4444",
    gradientTo: "#f97316",
  },
};

export type ScoreMap = Partial<Record<JobTypeId, number>>;

export interface QuestionOption {
  text: string;
  scores: ScoreMap;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "コードを書いていて一番楽しい瞬間は？",
    options: [
      { text: "デザイン通りのUIが完璧に仕上がった", scores: { frontend: 3, product: 1 } },
      { text: "複雑なアルゴリズムが正しく動いた", scores: { backend: 3, data: 1 } },
      { text: "サーバーが高負荷でも落ちなかった", scores: { infra: 3, devops: 1 } },
      { text: "データから意外なインサイトを発見した", scores: { data: 3, product: 1 } },
    ],
  },
  {
    id: 2,
    text: "理想のチームでの自分の役割は？",
    options: [
      { text: "黙々と手を動かして実装する", scores: { frontend: 2, backend: 2 } },
      { text: "設計・技術方針を決める", scores: { techlead: 3, backend: 1 } },
      { text: "メンバーのブロッカーを取り除く", scores: { techlead: 2, devops: 2 } },
      { text: "ユーザーと対話して要件を整理する", scores: { product: 3, fullstack: 1 } },
    ],
  },
  {
    id: 3,
    text: "障害が発生した。まず何をする？",
    options: [
      { text: "ログとメトリクスをひたすら読む", scores: { infra: 3, devops: 2 } },
      { text: "ユーザーへの影響範囲を把握する", scores: { product: 3, frontend: 1 } },
      { text: "仮説を立てて最速でデバッグ", scores: { backend: 3, fullstack: 1 } },
      { text: "チーム全体に状況をブロードキャスト", scores: { techlead: 3, product: 1 } },
    ],
  },
  {
    id: 4,
    text: "新機能を開発するとき、最初に考えることは？",
    options: [
      { text: "どうすれば使いやすいUIになるか", scores: { frontend: 3, product: 2 } },
      { text: "DBスキーマとAPIの設計", scores: { backend: 3, techlead: 1 } },
      { text: "スケールしたときのインフラ構成", scores: { infra: 3, backend: 1 } },
      { text: "この機能でKPIがどう改善するか", scores: { product: 3, data: 1 } },
    ],
  },
  {
    id: 5,
    text: "5年後、どんな自分でいたい？",
    options: [
      { text: "特定分野の第一人者・スペシャリスト", scores: { frontend: 2, backend: 2, data: 2 } },
      { text: "幅広い技術を持つゼネラリスト", scores: { fullstack: 3, techlead: 1 } },
      { text: "組織の技術を牽引するリーダー", scores: { techlead: 3, product: 1 } },
      { text: "プロダクトとビジネスを動かす存在", scores: { product: 3, fullstack: 1 } },
    ],
  },
  {
    id: 6,
    text: "休日に技術の勉強をするとしたら？",
    options: [
      { text: "新しいUIフレームワーク・CSS技術", scores: { frontend: 3, fullstack: 1 } },
      { text: "機械学習・統計・数学", scores: { data: 3, backend: 1 } },
      { text: "クラウドサービス・インフラ自動化", scores: { infra: 3, devops: 2 } },
      { text: "セキュリティ・CTF・ペネトレーション", scores: { devops: 3, infra: 1 } },
    ],
  },
  {
    id: 7,
    text: "コードレビューで一番指摘したいのは？",
    options: [
      { text: "命名・可読性・コードの美しさ", scores: { techlead: 2, backend: 2 } },
      { text: "パフォーマンスとメモリ効率", scores: { backend: 3, infra: 1 } },
      { text: "セキュリティホール・脆弱性", scores: { devops: 3, techlead: 1 } },
      { text: "ユーザー体験への影響", scores: { product: 3, frontend: 1 } },
    ],
  },
  {
    id: 8,
    text: "最高の達成感を感じる瞬間は？",
    options: [
      { text: "ゼロからプロダクトをリリースした", scores: { fullstack: 3, product: 1 } },
      { text: "チームメンバーが成長した", scores: { techlead: 3, product: 1 } },
      { text: "大量データから価値を生み出した", scores: { data: 3, backend: 1 } },
      { text: "インフラコストを大幅削減した", scores: { infra: 3, devops: 1 } },
    ],
  },
  {
    id: 9,
    text: "もし一人でサービスを作るとしたら、どこから始める？",
    options: [
      { text: "まずデザインとUI設計から", scores: { frontend: 3, product: 2 } },
      { text: "データモデルとAPI設計から", scores: { backend: 3, fullstack: 1 } },
      { text: "インフラ・CI/CDを先に整備する", scores: { devops: 3, infra: 2 } },
      { text: "ユーザーインタビューして仮説を検証", scores: { product: 3, data: 1 } },
    ],
  },
  {
    id: 10,
    text: "チームが一番機能するのは？",
    options: [
      { text: "個人がオーナーシップを持って動く", scores: { fullstack: 2, frontend: 1, backend: 1 } },
      { text: "明確な設計があって全員が従う", scores: { techlead: 3, backend: 1 } },
      { text: "データに基づいて意思決定する", scores: { data: 2, product: 2 } },
      { text: "自動化が整備されて開発に集中できる", scores: { devops: 3, infra: 1 } },
    ],
  },
];

export interface DiagnosisResult {
  topType: JobType;
  scores: Record<JobTypeId, number>;
  rankedTypes: Array<{ type: JobType; score: number; percentage: number }>;
}

export function calculateDiagnosis(answers: number[]): DiagnosisResult {
  const scores: Record<JobTypeId, number> = {
    frontend: 0,
    backend: 0,
    infra: 0,
    data: 0,
    fullstack: 0,
    techlead: 0,
    product: 0,
    devops: 0,
  };

  answers.forEach((optionIndex, questionIndex) => {
    const question = QUESTIONS[questionIndex];
    if (!question) return;
    const option = question.options[optionIndex];
    if (!option) return;
    (Object.entries(option.scores) as [JobTypeId, number][]).forEach(([id, pts]) => {
      scores[id] += pts;
    });
  });

  const maxScore = Math.max(...Object.values(scores));

  const rankedTypes = (Object.entries(scores) as [JobTypeId, number][])
    .sort(([, a], [, b]) => b - a)
    .map(([id, score]) => ({
      type: JOB_TYPES[id],
      score,
      percentage: maxScore > 0 ? Math.round((score / maxScore) * 100) : 0,
    }));

  return {
    topType: rankedTypes[0].type,
    scores,
    rankedTypes,
  };
}
