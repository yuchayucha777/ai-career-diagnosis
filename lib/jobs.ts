export type JobCategoryId = "dev" | "infra" | "specialist" | "management" | "beginner";

export interface JobCategory {
  id: JobCategoryId;
  label: string;
  emoji: string;
  description: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface ITJob {
  id: string;
  numId: string;
  categoryId: JobCategoryId;
  name: string;
  shortDesc: string;
  detail: string;
  emoji: string;
  beginnerOk: boolean;
  salaryRange: string;
  salaryMin: number;
  salaryMax: number;
  difficulty: "low" | "medium" | "high";
  skills: string[];
}

export const JOB_CATEGORIES: JobCategory[] = [
  {
    id: "dev",
    label: "開発系",
    emoji: "💻",
    description: "システムやアプリを「作る」役割",
    color: "#60a5fa",
    gradientFrom: "#3b82f6",
    gradientTo: "#6366f1",
  },
  {
    id: "infra",
    label: "インフラ系",
    emoji: "🏗️",
    description: "システムを「支える」役割",
    color: "#34d399",
    gradientFrom: "#10b981",
    gradientTo: "#06b6d4",
  },
  {
    id: "specialist",
    label: "スペシャリスト系",
    emoji: "🔬",
    description: "特定の技術を「極める」役割",
    color: "#c4b5fd",
    gradientFrom: "#8b5cf6",
    gradientTo: "#ec4899",
  },
  {
    id: "management",
    label: "マネジメント・コンサル系",
    emoji: "📊",
    description: "プロジェクトを「導く」役割",
    color: "#fbbf24",
    gradientFrom: "#f59e0b",
    gradientTo: "#f97316",
  },
  {
    id: "beginner",
    label: "未経験から入りやすい",
    emoji: "🌱",
    description: "IT業界への第一歩になりやすい職種",
    color: "#4ade80",
    gradientFrom: "#22c55e",
    gradientTo: "#14b8a6",
  },
];

export const IT_JOBS: ITJob[] = [
  // 開発系
  {
    id: "web-engineer",
    numId: "01",
    categoryId: "dev",
    name: "Webエンジニア",
    shortDesc: "Webサービスを動かす作り手",
    detail:
      "私たちが普段使うWebサービスをプログラミングで形にする職種。フロントエンド（見た目の実装）とバックエンド（サーバー側の処理）に分かれます。ポートフォリオ（自作の成果物）を作ることで未経験からでも転職しやすい職種の一つです。",
    emoji: "🌐",
    beginnerOk: true,
    salaryRange: "400〜800万円",
    salaryMin: 400,
    salaryMax: 800,
    difficulty: "medium",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "SQL", "Git"],
  },
  {
    id: "se",
    numId: "02",
    categoryId: "dev",
    name: "システムエンジニア（SE）",
    shortDesc: "要件定義から運用まで束ねる",
    detail:
      "クライアントがやりたいことをヒアリングし、どんなシステムを作るかの「設計図」を描くプロジェクトの司令塔です。プログラミングよりも要件整理・設計・ドキュメント作成が中心。コミュニケーション能力と論理的思考が武器になります。",
    emoji: "📐",
    beginnerOk: false,
    salaryRange: "400〜750万円",
    salaryMin: 400,
    salaryMax: 750,
    difficulty: "medium",
    skills: ["要件定義", "システム設計", "Java", "ドキュメント", "顧客折衝"],
  },
  {
    id: "programmer",
    numId: "03",
    categoryId: "dev",
    name: "プログラマー",
    shortDesc: "コードでカタチにする職人",
    detail:
      "SEが作った設計書に従って、実際にコードを書いてシステムを組み上げる仕事です。未経験からエンジニアを目指す場合のスタート地点になることが多く、プログラミングスクールで学んだ後に就くケースが多い職種です。",
    emoji: "⌨️",
    beginnerOk: true,
    salaryRange: "350〜600万円",
    salaryMin: 350,
    salaryMax: 600,
    difficulty: "low",
    skills: ["プログラミング", "Java", "Python", "デバッグ", "Git"],
  },
  {
    id: "embedded",
    numId: "04",
    categoryId: "dev",
    name: "組み込みエンジニア",
    shortDesc: "モノに知能を宿す",
    detail:
      "スマート家電・自動車・産業ロボットなどのハードウェアを制御するソフトウェアを開発します。名古屋エリアなど製造業が盛んな地域で特に需要が高く、電子工学の知識とプログラミングを組み合わせた専門性が求められます。",
    emoji: "🔌",
    beginnerOk: false,
    salaryRange: "450〜850万円",
    salaryMin: 450,
    salaryMax: 850,
    difficulty: "high",
    skills: ["C/C++", "マイコン", "RTOS", "回路知識", "組み込みLinux"],
  },
  // インフラ系
  {
    id: "server-engineer",
    numId: "05",
    categoryId: "infra",
    name: "サーバーエンジニア",
    shortDesc: "システムの土台を支える",
    detail:
      "Webサイトやアプリが24時間365日動き続けるためのコンピュータ（サーバー）を設計・構築・保守する職種です。運用監視業務はマニュアルが整っていることが多く、インフラ系の中では未経験でも挑戦しやすい入口です。",
    emoji: "🗄️",
    beginnerOk: true,
    salaryRange: "400〜700万円",
    salaryMin: 400,
    salaryMax: 700,
    difficulty: "medium",
    skills: ["Linux", "ネットワーク", "仮想化", "シェル", "監視"],
  },
  {
    id: "network-engineer",
    numId: "06",
    categoryId: "infra",
    name: "ネットワークエンジニア",
    shortDesc: "通信の道をつくる",
    detail:
      "企業や社会を支えるネットワーク（インターネット回線・社内LAN等）を設計・構築・保守します。ルーターやスイッチなどの機器を扱う専門知識が必要で、CCNAなどの資格取得が転職に有利に働くことが多いです。",
    emoji: "🛰️",
    beginnerOk: false,
    salaryRange: "400〜700万円",
    salaryMin: 400,
    salaryMax: 700,
    difficulty: "medium",
    skills: ["TCP/IP", "Cisco", "ルーティング", "ファイアウォール", "CCNA"],
  },
  {
    id: "cloud-engineer",
    numId: "07",
    categoryId: "infra",
    name: "クラウドエンジニア",
    shortDesc: "クラウド時代の最前線",
    detail:
      "AWS・GCP・Azureなどのクラウドサービスを使ってシステム基盤を構築する職種です。近年最も需要が伸びているインフラ職種の一つで、オンプレミス（自社サーバー）の知識に加えてクラウド特有のサービス知識が求められます。",
    emoji: "☁️",
    beginnerOk: false,
    salaryRange: "500〜900万円",
    salaryMin: 500,
    salaryMax: 900,
    difficulty: "high",
    skills: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "CI/CD"],
  },
  // スペシャリスト系
  {
    id: "ai-engineer",
    numId: "08",
    categoryId: "specialist",
    name: "AIエンジニア",
    shortDesc: "知能を生み出す",
    detail:
      "人工知能（AI）を活用したシステムの開発や、機械学習モデルそのものの設計・構築を行います。LLM（ChatGPTのような大規模言語モデル）の活用も急速に拡大しており、今後最も需要が高まる職種の一つです。",
    emoji: "🤖",
    beginnerOk: false,
    salaryRange: "500〜1,000万円",
    salaryMin: 500,
    salaryMax: 1000,
    difficulty: "high",
    skills: ["Python", "機械学習", "深層学習", "PyTorch", "数学", "MLOps"],
  },
  {
    id: "data-scientist",
    numId: "09",
    categoryId: "specialist",
    name: "データサイエンティスト",
    shortDesc: "データから価値を引き出す",
    detail:
      "企業が持つ大量のデータを分析・可視化し、売上向上や業務改善につながるインサイトを導き出す職種です。統計学・プログラミング・ビジネス理解の三つを兼ね備えた人材が求められます。",
    emoji: "📈",
    beginnerOk: false,
    salaryRange: "500〜950万円",
    salaryMin: 500,
    salaryMax: 950,
    difficulty: "high",
    skills: ["Python", "統計", "SQL", "可視化", "機械学習", "ビジネス理解"],
  },
  {
    id: "security-engineer",
    numId: "10",
    categoryId: "specialist",
    name: "セキュリティエンジニア",
    shortDesc: "デジタルを守る盾",
    detail:
      "増え続けるサイバー攻撃から企業の情報資産を守るセキュリティの専門家。脆弱性診断・ペネトレーションテスト・インシデント対応などを担当します。情報処理安全確保支援士などの資格が有利に働く職種です。",
    emoji: "🛡️",
    beginnerOk: false,
    salaryRange: "500〜900万円",
    salaryMin: 500,
    salaryMax: 900,
    difficulty: "high",
    skills: ["ネットワーク", "脆弱性診断", "暗号技術", "インシデント対応", "法令"],
  },
  // マネジメント・コンサル系
  {
    id: "pm",
    numId: "11",
    categoryId: "management",
    name: "プロジェクトマネージャー",
    shortDesc: "チームを成功へ導く",
    detail:
      "開発現場の経験を積んだ後のキャリアパスとして人気の職種。プロジェクト全体の予算管理・スケジュール調整・リスク管理・チームのモチベーション維持など、技術よりも人と組織を動かすマネジメント力が核心です。",
    emoji: "🎯",
    beginnerOk: false,
    salaryRange: "600〜1,200万円",
    salaryMin: 600,
    salaryMax: 1200,
    difficulty: "high",
    skills: ["進行管理", "リスク管理", "折衝力", "PMBOK", "リーダーシップ"],
  },
  {
    id: "it-consultant",
    numId: "12",
    categoryId: "management",
    name: "ITコンサルタント",
    shortDesc: "経営とITの架け橋",
    detail:
      "クライアント企業の経営・業務上の問題に対し、IT戦略や最適なシステム導入を提案・推進する職種です。技術知識に加えてビジネス感覚・プレゼンテーション力・論理的思考力が高く求められます。コンサルファームや大手SIerに多い職種です。",
    emoji: "💼",
    beginnerOk: false,
    salaryRange: "600〜1,300万円",
    salaryMin: 600,
    salaryMax: 1300,
    difficulty: "high",
    skills: ["業務分析", "提案力", "経営知識", "プレゼン", "プロジェクト管理"],
  },
  // 未経験から入りやすい
  {
    id: "helpdesk",
    numId: "13",
    categoryId: "beginner",
    name: "ITヘルプデスク",
    shortDesc: "IT業界への入り口",
    detail:
      "従業員や顧客からのPC・システムに関する問い合わせや不具合をサポートする職種です。マニュアルやFAQが整備されていることが多く、プログラミング経験がなくてもITに興味があれば挑戦しやすい。IT業界に入る第一歩として選ばれることが多いです。",
    emoji: "🎧",
    beginnerOk: true,
    salaryRange: "300〜450万円",
    salaryMin: 300,
    salaryMax: 450,
    difficulty: "low",
    skills: ["PC基礎", "OS知識", "コミュニケーション", "ヒアリング", "ドキュメント"],
  },
  {
    id: "tester",
    numId: "14",
    categoryId: "beginner",
    name: "テスター",
    shortDesc: "品質の番人",
    detail:
      "開発されたシステムやアプリが設計通りに動くかをテスト計画に沿って検証する職種です。プログラミングスキルがなくても始められるケースが多く、品質保証（QA）への入口として広くキャリアをスタートできます。",
    emoji: "🐞",
    beginnerOk: true,
    salaryRange: "300〜500万円",
    salaryMin: 300,
    salaryMax: 500,
    difficulty: "low",
    skills: ["テスト設計", "バグ報告", "仕様理解", "注意力", "Excel"],
  },
];
