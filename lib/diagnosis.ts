export type JobTypeId =
  | "web"
  | "se"
  | "programmer"
  | "embedded"
  | "server"
  | "network"
  | "cloud"
  | "ai"
  | "data"
  | "security"
  | "pm"
  | "consultant"
  | "helpdesk"
  | "tester";

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
  jobId: string;
}

export interface DiagnosisResult {
  topType: JobType;
  scores: Record<JobTypeId, number>;
  rankedTypes: Array<{ type: JobType; score: number; percentage: number }>;
  aptitude: number;
  reasons: string[];
  episode: string;
  caution: string;
}

export const JOB_TYPES: Record<JobTypeId, JobType> = {
  web: {
    id: "web",
    name: "Webエンジニア",
    emoji: "🌐",
    tagline: "1pxにも妥協しない、UI の番人",
    description:
      "デザインとコードの境界線に生きる職人。React・TypeScriptでユーザーが「気持ちいい」と感じる体験を追求する。アニメーション・アクセシビリティ・パフォーマンスを三位一体で考えられる。SNSやECサイトなど身近なWebサービスを形にする。",
    strengths: ["CSS・アニメーションへの深い理解", "デザイナーとの高い親和性", "ユーザー視点での品質意識", "フロント〜バックの一貫した実装力"],
    recommendedCompanyTypes: ["BtoC Webサービス企業", "デザイン重視のプロダクト企業", "スタートアップ"],
    relatedRoles: ["フロントエンドエンジニア", "Webエンジニア", "UIエンジニア"],
    color: "#f472b6",
    gradientFrom: "#ec4899",
    gradientTo: "#8b5cf6",
    jobId: "web-engineer",
  },
  se: {
    id: "se",
    name: "システムエンジニア（SE）",
    emoji: "📐",
    tagline: "要件を設計図に変える、プロジェクトの司令塔",
    description:
      "クライアントの要望をヒアリングし、どんなシステムを作るかの設計図を描くプロジェクトの中心人物。プログラミングよりも要件整理・設計・ドキュメント作成が中心で、コミュニケーション能力と論理的思考が最大の武器。",
    strengths: ["要件定義・ヒアリング力", "システム設計・仕様書作成", "プロジェクト全体を見渡す視野", "クライアントとのコミュニケーション"],
    recommendedCompanyTypes: ["SIer・システム開発会社", "大手企業の情報システム部門", "受託開発企業"],
    relatedRoles: ["システムエンジニア", "ITエンジニア", "ソリューションエンジニア"],
    color: "#60a5fa",
    gradientFrom: "#3b82f6",
    gradientTo: "#6366f1",
    jobId: "se",
  },
  programmer: {
    id: "programmer",
    name: "プログラマー（PG）",
    emoji: "⌨️",
    tagline: "コードに魂を込める、実装の職人",
    description:
      "設計書に基づいてコードを書き、システムを組み上げることに情熱を持つ。一行一行のコードに向き合い、バグを追い詰める粘り強さと、きれいなコードへのこだわりが強い。未経験からエンジニアを目指す際のスタート地点として最も一般的な職種。",
    strengths: ["コーディングへの集中力・粘り強さ", "バグ調査・デバッグ力", "コードの品質へのこだわり", "幅広い言語への適応力"],
    recommendedCompanyTypes: ["自社開発企業", "受託開発企業", "スタートアップ"],
    relatedRoles: ["プログラマー", "ソフトウェアエンジニア", "バックエンドエンジニア"],
    color: "#a78bfa",
    gradientFrom: "#6366f1",
    gradientTo: "#8b5cf6",
    jobId: "programmer",
  },
  embedded: {
    id: "embedded",
    name: "組み込みエンジニア",
    emoji: "🤖",
    tagline: "ハードとソフトの境界で生きる、縁の下の職人",
    description:
      "家電・自動車・産業ロボットなどのハードウェアを動かすソフトウェアを開発する。電子回路とプログラムを同時に理解し、低レイヤーの世界で動作するコードを書く。製造業エリアで特に需要が高く、モノが動く瞬間の達成感が圧倒的。",
    strengths: ["ハードウェア・電子回路の理解", "C/C++による低レイヤー実装", "リアルタイム処理・RTOS", "メモリ効率・パフォーマンス最適化"],
    recommendedCompanyTypes: ["自動車メーカー・部品メーカー", "家電・電機メーカー", "産業用ロボット企業"],
    relatedRoles: ["組み込みエンジニア", "ファームウェアエンジニア", "IoTエンジニア"],
    color: "#94a3b8",
    gradientFrom: "#64748b",
    gradientTo: "#06b6d4",
    jobId: "embedded",
  },
  server: {
    id: "server",
    name: "サーバーエンジニア",
    emoji: "🖥️",
    tagline: "24時間365日、止まらない環境を守る",
    description:
      "Webサービスが止まることなく動き続けるためのサーバーを設計・構築・保守する縁の下の力持ち。監視・障害対応・パフォーマンスチューニングが日常業務。マニュアルが整備された環境も多く、インフラ系の中では未経験でも挑戦しやすい入口。",
    strengths: ["Linux・サーバー構築・管理", "監視ツールによる障害検知", "パフォーマンスチューニング", "高可用性構成の設計"],
    recommendedCompanyTypes: ["大規模Webサービス企業", "データセンター企業", "クラウドサービス企業"],
    relatedRoles: ["サーバーエンジニア", "インフラエンジニア", "SREエンジニア"],
    color: "#34d399",
    gradientFrom: "#10b981",
    gradientTo: "#3b82f6",
    jobId: "server-engineer",
  },
  network: {
    id: "network",
    name: "ネットワークエンジニア",
    emoji: "🔗",
    tagline: "すべての通信をつなぎ、守る設計者",
    description:
      "企業や社会のインターネット通信・社内LANを設計・構築・保守する。ルーター・スイッチ・ファイアウォールなどの機器を扱い、プロトコルの知識が武器。CCNAなどの資格取得が転職に直結しやすく、物理的な機器操作が好きな人に向いている。",
    strengths: ["TCP/IP・ネットワークプロトコルの深い理解", "ルーター・スイッチの設定", "ファイアウォール・セキュリティ設計", "ネットワーク障害調査・切り分け"],
    recommendedCompanyTypes: ["ネットワークインテグレーター", "通信会社", "大手企業のインフラ部門"],
    relatedRoles: ["ネットワークエンジニア", "インフラエンジニア", "通信エンジニア"],
    color: "#2dd4bf",
    gradientFrom: "#14b8a6",
    gradientTo: "#0ea5e9",
    jobId: "network-engineer",
  },
  cloud: {
    id: "cloud",
    name: "クラウドエンジニア",
    emoji: "☁️",
    tagline: "すべてをコード化し、自動化する",
    description:
      "AWS・GCP・Azureを活用してシステム基盤を構築・最適化する。IaC（インフラのコード化）・CI/CD・Kubernetes を使った自動化が専門。手動作業を排除して開発者が本来の仕事に集中できる環境を作ることに喜びを感じる。今後も需要が伸び続ける注目職種。",
    strengths: ["AWS/GCP/Azureの深い知識", "Terraform・IaCによる自動化", "コンテナ・Kubernetes運用", "コスト最適化・セキュリティ設計"],
    recommendedCompanyTypes: ["クラウドネイティブ企業", "スタートアップ", "DX推進中の大手企業"],
    relatedRoles: ["クラウドエンジニア", "SREエンジニア", "DevOpsエンジニア", "プラットフォームエンジニア"],
    color: "#38bdf8",
    gradientFrom: "#0ea5e9",
    gradientTo: "#3b82f6",
    jobId: "cloud-engineer",
  },
  ai: {
    id: "ai",
    name: "AIエンジニア",
    emoji: "🧠",
    tagline: "AIで世界を書き換える、最前線の研究者",
    description:
      "機械学習モデルの開発・本番適用・LLMの活用など、AI技術を実際のサービスに組み込む職種。数学・統計の素養とプログラミング力の両方が求められる。ChatGPTをはじめとする生成AIの急成長により最も注目されているエンジニア職種の一つ。",
    strengths: ["機械学習・深層学習の実装", "Python・TensorFlow/PyTorchの習熟", "MLOpsによる本番運用", "数学・統計の知識"],
    recommendedCompanyTypes: ["AI専業企業", "研究機関・大学との連携企業", "大手IT企業のAI部門"],
    relatedRoles: ["AIエンジニア", "MLエンジニア", "リサーチエンジニア"],
    color: "#c4b5fd",
    gradientFrom: "#8b5cf6",
    gradientTo: "#ec4899",
    jobId: "ai-engineer",
  },
  data: {
    id: "data",
    name: "データサイエンティスト",
    emoji: "📈",
    tagline: "数字の海から真実を掘り出す探偵",
    description:
      "企業が持つ膨大なデータを分析・可視化し、売上向上や業務改善につながるインサイトを導き出す。SQLでデータを引き、Pythonで加工し、グラフで経営に伝える。「なぜ？」と問い続ける探求心と、ビジネス課題への翻訳力が最大の武器。",
    strengths: ["SQL・Python（Pandas）によるデータ加工", "統計・機械学習の知識", "BIツールでの可視化", "ビジネス課題の数値化"],
    recommendedCompanyTypes: ["データドリブンなEC・マーケ企業", "FinTech・HealthTech企業", "コンサルファーム"],
    relatedRoles: ["データサイエンティスト", "データアナリスト", "データエンジニア"],
    color: "#fbbf24",
    gradientFrom: "#f59e0b",
    gradientTo: "#ef4444",
    jobId: "data-scientist",
  },
  security: {
    id: "security",
    name: "セキュリティエンジニア",
    emoji: "🔐",
    tagline: "攻撃者の視点で守る、デジタルの盾",
    description:
      "増え続けるサイバー攻撃から企業の情報資産を守る専門家。脆弱性診断・ペネトレーションテスト・インシデント対応を担当する。攻撃者の思考を持ちながら防御を設計するという特殊な視点が必要で、CTFやハッキング技術に興味がある人に刺さる職種。",
    strengths: ["脆弱性診断・ペネトレーションテスト", "セキュリティアーキテクチャ設計", "インシデント対応・フォレンジック", "OWASP・ゼロトラスト設計"],
    recommendedCompanyTypes: ["セキュリティ専業企業", "金融・医療など規制産業", "大手企業のSOC・CSIRT部門"],
    relatedRoles: ["セキュリティエンジニア", "ペネトレーションテスター", "SOCアナリスト"],
    color: "#fb7185",
    gradientFrom: "#ef4444",
    gradientTo: "#f97316",
    jobId: "security-engineer",
  },
  pm: {
    id: "pm",
    name: "プロジェクトマネージャー（PM）",
    emoji: "📋",
    tagline: "人・予算・時間を動かし、プロジェクトを成功に導く",
    description:
      "開発現場の経験を積んだ後に目指されることが多いキャリアパス。予算管理・スケジュール調整・リスク管理・チームのモチベーション維持など、技術よりも人と組織を動かすマネジメント力が核心。0から1を生み出す開発よりも、チームで大きな成果を出したい人に向いている。",
    strengths: ["プロジェクト全体の俯瞰・管理", "リスク管理・課題解決", "ステークホルダーとの調整・交渉", "チームビルディング"],
    recommendedCompanyTypes: ["大手SIer", "コンサルファーム", "自社開発企業のPMO部門"],
    relatedRoles: ["プロジェクトマネージャー", "PdM（プロダクトマネージャー）", "エンジニアリングマネージャー"],
    color: "#fb923c",
    gradientFrom: "#f97316",
    gradientTo: "#eab308",
    jobId: "pm",
  },
  consultant: {
    id: "consultant",
    name: "ITコンサルタント",
    emoji: "💼",
    tagline: "経営とITをつなぐ、ビジネスの翻訳者",
    description:
      "クライアント企業の経営・業務上の問題を分析し、IT戦略や最適なシステム導入を提案・推進する。技術知識に加えてビジネス感覚・プレゼンテーション力・論理的思考力が高く求められる。コンサルファームや大手SIerに多く、年収の伸びが大きい職種の一つ。",
    strengths: ["業界知識とIT技術の架け橋", "提案書・要件定義のドキュメント力", "経営・業務プロセスの理解", "クライアントプレゼン・交渉力"],
    recommendedCompanyTypes: ["ITコンサルファーム", "大手SIer", "戦略コンサル（IT部門）"],
    relatedRoles: ["ITコンサルタント", "システムコンサルタント", "DXコンサルタント"],
    color: "#fcd34d",
    gradientFrom: "#d97706",
    gradientTo: "#f59e0b",
    jobId: "it-consultant",
  },
  helpdesk: {
    id: "helpdesk",
    name: "ITヘルプデスク",
    emoji: "🎧",
    tagline: "困った人を助ける、ITの最前線サポーター",
    description:
      "従業員や顧客からのPC・システムに関する問い合わせや不具合をサポートする職種。マニュアルやFAQが整備されていることが多く、プログラミング経験がなくてもITに興味があれば挑戦しやすい。コミュニケーション力とITの基礎知識を活かせるIT業界の最初の扉。",
    strengths: ["ユーザーへの分かりやすい説明力", "PC・OS・Officeの基礎知識", "問い合わせの優先度判断・対応", "マニュアル作成・FAQ整備"],
    recommendedCompanyTypes: ["IT企業のサポート部門", "BPO企業", "大手企業の情報システム部門"],
    relatedRoles: ["ITヘルプデスク", "テクニカルサポート", "社内SE（将来キャリア）"],
    color: "#4ade80",
    gradientFrom: "#22c55e",
    gradientTo: "#14b8a6",
    jobId: "helpdesk",
  },
  tester: {
    id: "tester",
    name: "テスター（QAエンジニア）",
    emoji: "✅",
    tagline: "バグを見逃さない、品質の最後の砦",
    description:
      "開発されたシステムやアプリが設計通りに動くかを検証する品質保証のプロ。テスト計画の作成・実行・バグ報告が主業務。細かいことに気づく注意力と、システムへの深い理解が求められる。プログラミングスキルがなくても始められる職種で、QAエンジニアへのステップとしても人気。",
    strengths: ["テスト設計・実行の徹底さ", "バグの発見・再現・報告力", "論理的な検証アプローチ", "品質基準の理解と運用"],
    recommendedCompanyTypes: ["ゲーム会社のQA部門", "IT企業の品質保証部門", "受託開発企業"],
    relatedRoles: ["テスター", "QAエンジニア", "品質保証エンジニア"],
    color: "#6ee7b7",
    gradientFrom: "#10b981",
    gradientTo: "#22c55e",
    jobId: "tester",
  },
};
