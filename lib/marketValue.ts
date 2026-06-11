export type BeginnerRoleId =
  | "frontend"
  | "backend"
  | "fullstack"
  | "programmer"
  | "se"
  | "data"
  | "infra"
  | "cloud"
  | "helpdesk"
  | "tester"
  | "pm";

export interface BeginnerRole {
  id: BeginnerRoleId;
  label: string;
  description: string;
}

export const BEGINNER_ROLES: BeginnerRole[] = [
  { id: "frontend", label: "Webエンジニア（フロント）", description: "Webの見た目・画面を作る" },
  { id: "backend", label: "バックエンドエンジニア", description: "サーバー側の処理・APIを作る" },
  { id: "fullstack", label: "フルスタックエンジニア", description: "フロント〜バックを一人で担当する" },
  { id: "programmer", label: "プログラマー", description: "設計書に沿ってコードを書く" },
  { id: "se", label: "システムエンジニア（SE）", description: "要件定義から設計・開発を束ねる" },
  { id: "data", label: "データアナリスト / エンジニア", description: "データを分析して価値を出す" },
  { id: "infra", label: "サーバーエンジニア", description: "システムの土台・サーバーを管理する" },
  { id: "cloud", label: "クラウドエンジニア", description: "AWS/GCPなどクラウド基盤を構築する" },
  { id: "helpdesk", label: "ITヘルプデスク", description: "PCやシステムの問い合わせをサポートする" },
  { id: "tester", label: "テスター / QA", description: "システムが正しく動くか検証する" },
  { id: "pm", label: "プロジェクトマネージャー", description: "プロジェクト全体を管理・推進する" },
];

export type BeginnerSkillId =
  | "html_css"
  | "js_basic"
  | "python_basic"
  | "java_basic"
  | "php_basic"
  | "sql_basic"
  | "git"
  | "linux"
  | "vscode"
  | "server_basic"
  | "network_basic"
  | "cloud_basic"
  | "ml_concept"
  | "llm_basic"
  | "design_tool"
  | "business_analysis"
  | "presentation_basic"
  | "qa_basic";

export interface BeginnerSkillGroup {
  label: string;
  skills: Array<{ id: BeginnerSkillId; label: string }>;
}

export const BEGINNER_SKILL_GROUPS: BeginnerSkillGroup[] = [
  {
    label: "プログラミング基礎",
    skills: [
      { id: "html_css",    label: "HTML / CSS" },
      { id: "js_basic",    label: "JavaScript 基礎" },
      { id: "python_basic", label: "Python 基礎" },
      { id: "java_basic",  label: "Java 基礎" },
      { id: "php_basic",   label: "PHP 基礎" },
      { id: "sql_basic",   label: "SQL 基礎" },
    ],
  },
  {
    label: "開発ツール",
    skills: [
      { id: "git",         label: "Git / GitHub" },
      { id: "linux",       label: "Linux コマンド" },
      { id: "vscode",      label: "VS Code / IDE操作" },
    ],
  },
  {
    label: "インフラ・ネットワーク基礎",
    skills: [
      { id: "server_basic",  label: "サーバー / OS基礎知識" },
      { id: "network_basic", label: "ネットワーク基礎 (TCP/IP)" },
      { id: "cloud_basic",   label: "クラウド入門 (AWS/GCP等)" },
    ],
  },
  {
    label: "クラウド・AI",
    skills: [
      { id: "ml_concept",  label: "AI / 機械学習の基礎知識" },
      { id: "llm_basic",   label: "生成AI / ChatGPT活用" },
    ],
  },
  {
    label: "その他",
    skills: [
      { id: "design_tool",        label: "Figma / デザインツール" },
      { id: "business_analysis",  label: "ビジネス分析・資料作成の経験" },
      { id: "presentation_basic", label: "提案書・プレゼンテーション" },
      { id: "qa_basic",           label: "テスト・動作確認の経験" },
    ],
  },
];

export interface BeginnerMarketValueInput {
  roleId: BeginnerRoleId;
  studyMonths: number;
  skills: BeginnerSkillId[];
  currentSalary: number;
}

export interface BeginnerMarketValueResult {
  salaryMin: number;
  salaryMax: number;
  keywords: string[];
  nextSteps: string[];
}

const BEGINNER_SKILL_BONUSES: Record<BeginnerSkillId, { min: number; max: number }> = {
  html_css:          { min:  0, max: 10 },
  js_basic:          { min: 10, max: 20 },
  python_basic:      { min: 10, max: 20 },
  java_basic:        { min: 10, max: 20 },
  php_basic:         { min:  5, max: 15 },
  sql_basic:         { min: 10, max: 15 },
  git:               { min:  5, max: 10 },
  linux:             { min:  5, max: 10 },
  vscode:            { min:  0, max:  5 },
  server_basic:      { min:  5, max: 10 },
  network_basic:     { min:  5, max: 10 },
  cloud_basic:       { min: 10, max: 20 },
  ml_concept:        { min: 10, max: 20 },
  llm_basic:         { min: 10, max: 20 },
  design_tool:       { min:  5, max: 10 },
  business_analysis: { min: 10, max: 20 },
  presentation_basic: { min: 10, max: 15 },
  qa_basic:          { min:  5, max: 10 },
};

const BEGINNER_KEYWORD_MAP: Record<BeginnerSkillId, string[]> = {
  html_css:           ["HTML/CSSによるWebページ制作", "レスポンシブデザイン対応"],
  js_basic:           ["JavaScriptによる動的UI実装", "フロントエンド基礎スキル"],
  python_basic:       ["Pythonによるスクリプト自動化", "データ処理の基礎経験"],
  java_basic:         ["Javaによるオブジェクト指向プログラミング", "Java基礎文法の習得"],
  php_basic:          ["PHPによるWeb開発の基礎", "サーバーサイドスクリプト経験"],
  sql_basic:          ["SQLを用いたデータ集計・分析", "データベース基礎操作"],
  git:                ["Gitによるバージョン管理", "GitHubを用いたチーム開発"],
  linux:              ["Linuxコマンドによるサーバー操作", "CLI環境での作業経験"],
  vscode:             ["VS Codeによる効率的な開発環境構築"],
  server_basic:       ["サーバー・OS基礎知識の習得", "仮想化技術の理解"],
  network_basic:      ["TCP/IP基礎知識の習得", "ネットワーク構成の理解"],
  cloud_basic:        ["AWSサービスの基礎知識", "クラウド環境の理解"],
  ml_concept:         ["機械学習の基礎概念の理解", "AI活用への素養"],
  llm_basic:          ["ChatGPT/生成AIの業務活用経験", "プロンプトエンジニアリングの実践"],
  design_tool:        ["Figmaを用いたUIプロトタイピング", "デザイン思考の実践"],
  business_analysis:  ["前職での業務分析・改善提案経験", "Excelを用いたデータ整理・資料作成"],
  presentation_basic: ["提案書作成・プレゼンテーション経験", "論理的な資料構成力"],
  qa_basic:           ["動作確認・テストの実施経験", "不具合の発見・報告能力"],
};

const BEGINNER_NEXT_STEPS: Record<BeginnerRoleId, string[]> = {
  frontend: [
    "HTML / CSS / JavaScript の基礎を習得する",
    "React または Vue.js の入門コースを受講する",
    "ポートフォリオサイトを作成して GitHub に公開する",
  ],
  backend: [
    "Python または Java でプログラミング基礎を固める",
    "SQL とデータベース設計を学ぶ",
    "自分で REST API を作って動かしてみる",
  ],
  fullstack: [
    "HTML / CSS / JavaScript でフロントエンドを固める",
    "Node.js または Python でバックエンドを学ぶ",
    "小さな Web アプリをゼロから作ってデプロイする",
  ],
  programmer: [
    "Java または Python のプログラミング基礎を固める",
    "Git / GitHub でバージョン管理を習得する",
    "設計書を読んでコードに落とす練習を積む",
  ],
  se: [
    "要件定義・基本設計の流れを書籍やUdemyで学ぶ",
    "UML（ユースケース図・シーケンス図）を習得する",
    "Java または SQL の実装スキルを身につける",
  ],
  data: [
    "SQL・Excel での分析スキルを磨く",
    "Python（Pandas / NumPy）でデータ分析を学ぶ",
    "Kaggle などで実際のデータを触って分析する",
  ],
  infra: [
    "Linux コマンドとネットワーク基礎を学ぶ",
    "AWS CLF（クラウドプラクティショナー）資格を取得する",
    "Docker でコンテナを作り AWS にデプロイしてみる",
  ],
  cloud: [
    "AWS または GCP の入門資格を取得する",
    "Terraform で IaC の基礎を学ぶ",
    "Docker / Kubernetes の基礎を習得する",
  ],
  helpdesk: [
    "Windows / Mac の OS 操作・トラブル対応を習得する",
    "ネットワーク基礎（LAN/WAN/DNS/DHCP）を学ぶ",
    "IT パスポート・CompTIA A+ 資格を取得する",
  ],
  tester: [
    "テスト設計の基礎（同値分割・境界値分析）を学ぶ",
    "JSTQB（テスト技術者資格）の取得を目指す",
    "Excel や TestRail でテストケースを書く練習をする",
  ],
  pm: [
    "プロダクト思考・ユーザーリサーチの基礎を学ぶ",
    "SQL でデータを自分で引けるようになる",
    "個人で小さな Web サービスを企画・リリースする",
  ],
};

export function calculateBeginnerMarketValue(input: BeginnerMarketValueInput): BeginnerMarketValueResult {
  const monthBonus = Math.floor(input.studyMonths / 6) * 15;

  let skillBonusMin = 0;
  let skillBonusMax = 0;
  for (const skill of input.skills) {
    const bonus = BEGINNER_SKILL_BONUSES[skill];
    skillBonusMin += bonus.min;
    skillBonusMax += bonus.max;
  }

  const salaryMin = Math.min(300 + monthBonus + skillBonusMin, 460);
  const salaryMax = Math.min(380 + monthBonus + skillBonusMax, 500);

  const keywords: string[] = [];
  for (const skill of input.skills) {
    keywords.push(...BEGINNER_KEYWORD_MAP[skill]);
  }

  return {
    salaryMin,
    salaryMax,
    keywords: [...new Set(keywords)].slice(0, 15),
    nextSteps: BEGINNER_NEXT_STEPS[input.roleId],
  };
}

export type RoleId =
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

export interface Role {
  id: RoleId;
  label: string;
}

export const ROLES: Role[] = [
  { id: "web",        label: "Webエンジニア" },
  { id: "se",         label: "システムエンジニア（SE）" },
  { id: "programmer", label: "プログラマー" },
  { id: "embedded",   label: "組み込みエンジニア" },
  { id: "server",     label: "サーバーエンジニア" },
  { id: "network",    label: "ネットワークエンジニア" },
  { id: "cloud",      label: "クラウドエンジニア" },
  { id: "ai",         label: "AIエンジニア" },
  { id: "data",       label: "データサイエンティスト" },
  { id: "security",   label: "セキュリティエンジニア" },
  { id: "pm",         label: "プロジェクトマネージャー" },
  { id: "consultant", label: "ITコンサルタント" },
  { id: "helpdesk",   label: "ITヘルプデスク" },
  { id: "tester",     label: "テスター / QA" },
];

export type SkillId =
  | "typescript"
  | "python"
  | "go"
  | "java"
  | "rust"
  | "kotlin"
  | "swift"
  | "cpp"
  | "php"
  | "csharp"
  | "ruby"
  | "aws"
  | "gcp"
  | "azure"
  | "react"
  | "nextjs"
  | "vue"
  | "angular"
  | "fastapi"
  | "springboot"
  | "rails"
  | "sql"
  | "spark"
  | "ml"
  | "llm"
  | "tableau"
  | "powerbi"
  | "docker_k8s"
  | "terraform"
  | "ansible"
  | "linux"
  | "monitoring"
  | "cicd"
  | "network_hw"
  | "tcp_ip"
  | "firewall"
  | "security"
  | "vuln_scan"
  | "pentest"
  | "embedded_dev"
  | "requirements"
  | "presentation"
  | "pmbok"
  | "itil"
  | "scrum"
  | "qa_test"
  | "management";

export interface SkillGroup {
  label: string;
  skills: Array<{ id: SkillId; label: string }>;
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "プログラミング言語",
    skills: [
      { id: "typescript", label: "JavaScript / TypeScript" },
      { id: "python",     label: "Python" },
      { id: "go",         label: "Go" },
      { id: "java",       label: "Java" },
      { id: "rust",       label: "Rust" },
      { id: "cpp",        label: "C / C++" },
      { id: "php",        label: "PHP / Laravel" },
      { id: "csharp",     label: "C# / .NET" },
      { id: "ruby",       label: "Ruby on Rails" },
      { id: "kotlin",     label: "Kotlin (Android)" },
      { id: "swift",      label: "Swift (iOS)" },
    ],
  },
  {
    label: "Webフレームワーク・ライブラリ",
    skills: [
      { id: "react",       label: "React / React Native" },
      { id: "nextjs",      label: "Next.js" },
      { id: "vue",         label: "Vue.js / Nuxt" },
      { id: "angular",     label: "Angular" },
      { id: "fastapi",     label: "FastAPI / Django" },
      { id: "springboot",  label: "Spring Boot" },
      { id: "rails",       label: "Ruby on Rails" },
    ],
  },
  {
    label: "クラウド",
    skills: [
      { id: "aws",   label: "AWS" },
      { id: "gcp",   label: "GCP" },
      { id: "azure", label: "Azure" },
    ],
  },
  {
    label: "インフラ・DevOps",
    skills: [
      { id: "docker_k8s", label: "Docker / Kubernetes" },
      { id: "terraform",  label: "Terraform / IaC" },
      { id: "ansible",    label: "Ansible / Chef" },
      { id: "linux",      label: "Linux / シェルスクリプト" },
      { id: "monitoring", label: "Datadog / Zabbix 監視" },
      { id: "cicd",       label: "CI/CD (GitHub Actions等)" },
    ],
  },
  {
    label: "データ・AI",
    skills: [
      { id: "sql",     label: "SQL / BigQuery" },
      { id: "spark",   label: "Spark / Hadoop" },
      { id: "ml",      label: "TensorFlow / PyTorch" },
      { id: "llm",     label: "LLM / RAG / 生成AI" },
      { id: "tableau", label: "Tableau / BIツール" },
      { id: "powerbi", label: "Power BI / Looker" },
    ],
  },
  {
    label: "セキュリティ",
    skills: [
      { id: "security",   label: "セキュリティ設計" },
      { id: "vuln_scan",  label: "脆弱性診断" },
      { id: "pentest",    label: "ペネトレーションテスト" },
      { id: "firewall",   label: "ファイアウォール / VPN" },
    ],
  },
  {
    label: "ネットワーク",
    skills: [
      { id: "tcp_ip",     label: "TCP/IP / プロトコル" },
      { id: "network_hw", label: "ネットワーク機器 (Cisco等)" },
    ],
  },
  {
    label: "組み込み・特殊領域",
    skills: [
      { id: "embedded_dev", label: "組み込み開発 / RTOS" },
    ],
  },
  {
    label: "マネジメント・プロセス",
    skills: [
      { id: "management",   label: "マネジメント経験" },
      { id: "requirements", label: "要件定義 / 基本設計" },
      { id: "presentation", label: "提案書作成 / プレゼン" },
      { id: "pmbok",        label: "PMBOK / PMP" },
      { id: "itil",         label: "ITIL / サービス管理" },
      { id: "scrum",        label: "スクラム / アジャイル" },
      { id: "qa_test",      label: "テスト設計 / QA" },
    ],
  },
];

interface SalaryBracket {
  minYears: number;
  maxYears: number;
  baseMin: number;
  baseMax: number;
}

const SALARY_BRACKETS: SalaryBracket[] = [
  { minYears: 0, maxYears: 2, baseMin: 350, baseMax: 480 },
  { minYears: 3, maxYears: 4, baseMin: 480, baseMax: 650 },
  { minYears: 5, maxYears: 7, baseMin: 620, baseMax: 850 },
  { minYears: 8, maxYears: 11, baseMin: 780, baseMax: 1100 },
  { minYears: 12, maxYears: 99, baseMin: 950, baseMax: 1500 },
];

const SKILL_BONUSES: Partial<Record<SkillId, { min: number; max: number }>> = {
  // クラウド
  aws:         { min: 30, max: 50 },
  gcp:         { min: 30, max: 50 },
  azure:       { min: 30, max: 50 },
  // 言語
  go:          { min: 30, max: 40 },
  rust:        { min: 30, max: 40 },
  typescript:  { min: 10, max: 20 },
  python:      { min: 10, max: 20 },
  cpp:         { min: 20, max: 35 },
  csharp:      { min: 10, max: 25 },
  php:         { min:  5, max: 15 },
  ruby:        { min: 10, max: 20 },
  // フレームワーク
  react:       { min: 10, max: 20 },
  nextjs:      { min: 10, max: 20 },
  angular:     { min: 10, max: 20 },
  // インフラ
  docker_k8s:  { min: 30, max: 40 },
  terraform:   { min: 20, max: 35 },
  ansible:     { min: 20, max: 35 },
  monitoring:  { min: 15, max: 25 },
  cicd:        { min: 10, max: 20 },
  linux:       { min:  5, max: 15 },
  // データ・AI
  ml:          { min: 40, max: 60 },
  llm:         { min: 40, max: 70 },
  spark:       { min: 20, max: 40 },
  powerbi:     { min: 15, max: 30 },
  // セキュリティ
  security:    { min: 30, max: 60 },
  vuln_scan:   { min: 30, max: 50 },
  pentest:     { min: 30, max: 60 },
  // 組み込み
  embedded_dev: { min: 25, max: 45 },
  // マネジメント
  management:   { min: 80, max: 120 },
  requirements: { min: 20, max: 35 },
  presentation: { min: 30, max: 50 },
  pmbok:        { min: 20, max: 40 },
  itil:         { min: 15, max: 30 },
  scrum:        { min: 10, max: 20 },
  qa_test:      { min:  5, max: 15 },
};

const KEYWORD_MAP: Partial<Record<SkillId, string[]>> = {
  typescript:   ["型安全な大規模フロントエンド開発", "TypeScript移行リード"],
  python:       ["Pythonを用いたバックエンド開発", "スクリプト自動化"],
  go:           ["Go言語によるマイクロサービス開発", "高性能API構築"],
  java:         ["Javaエンタープライズ開発", "Spring Bootによるバックエンド構築"],
  rust:         ["Rustによるシステムプログラミング", "メモリ安全な高性能実装"],
  kotlin:       ["KotlinによるネイティブAndroid開発"],
  swift:        ["SwiftによるネイティブiOS開発"],
  cpp:          ["C/C++による組み込み・システム開発", "高性能プログラミング"],
  php:          ["PHPによるWebアプリケーション開発", "Laravelを用いたバックエンド構築"],
  csharp:       ["C#/.NETによるエンタープライズ開発", "Azureとの統合設計"],
  ruby:         ["Ruby on Railsによる高速プロトタイピング", "Rubyスクリプト自動化"],
  aws:          ["AWSクラウドインフラ設計・構築", "コスト最適化", "マルチリージョン構成"],
  gcp:          ["GCPデータパイプライン構築", "BigQuery分析基盤整備"],
  azure:        ["Azure Active Directory連携", "Microsoft 365統合開発"],
  react:        ["Reactによる大規模SPA開発", "コンポーネント設計"],
  nextjs:       ["Next.jsによるフルスタック開発", "SSR/SSG最適化"],
  vue:          ["Vue.jsによるフロントエンド開発", "Nuxtを用いたSSR構築"],
  angular:      ["Angularによるエンタープライズフロントエンド開発"],
  fastapi:      ["FastAPIによる高速REST API開発", "非同期処理設計"],
  springboot:   ["Spring Bootによるマイクロサービス設計", "Java EE準拠開発"],
  rails:        ["Ruby on Railsによる高速プロトタイピング", "RailsアプリのScale対応"],
  sql:          ["SQLを用いたデータ分析・集計", "BigQuery・Redshift活用"],
  spark:        ["Apache Sparkによる大規模バッチ処理", "データレイク構築"],
  ml:           ["機械学習モデルの開発・本番適用", "MLOps基盤構築", "LLMファインチューニング"],
  llm:          ["LLM/RAGを活用したAIシステム開発", "プロンプトエンジニアリング", "生成AI活用推進"],
  tableau:      ["BIツールを用いた経営ダッシュボード構築", "データ可視化推進"],
  powerbi:      ["Power BI/Lookerによるダッシュボード構築", "セルフBI推進"],
  docker_k8s:   ["Kubernetesによるコンテナオーケストレーション", "マイクロサービス設計・運用"],
  terraform:    ["TerraformによるIaC推進", "インフラのコード化・標準化"],
  ansible:      ["Ansibleによるインフラ自動化", "構成管理のコード化"],
  linux:        ["Linuxサーバー管理・シェルスクリプト自動化"],
  monitoring:   ["Datadogによる監視基盤構築", "アラート設計・オンコール対応"],
  cicd:         ["CI/CDパイプライン構築・最適化", "デプロイ自動化によるリリース頻度向上"],
  network_hw:   ["ネットワーク機器の設計・設定", "ルーティング・スイッチング最適化"],
  tcp_ip:       ["TCPIPプロトコルスタックの深い理解", "ネットワークトラブルシューティング"],
  firewall:     ["ファイアウォール・VPN設計・運用", "境界セキュリティの設計"],
  security:     ["セキュリティ要件の設計・レビュー", "OWASP対応", "ゼロトラスト設計"],
  vuln_scan:    ["脆弱性診断・セキュリティ評価", "OWASP準拠のセキュリティ検証"],
  pentest:      ["ペネトレーションテストの実施", "レッドチーム演習"],
  embedded_dev: ["RTOS/組み込みLinux開発", "マイコン制御ソフトウェア開発"],
  requirements: ["要件定義から基本設計の一貫推進", "ステークホルダーとの要件合意形成"],
  presentation: ["経営層向け提案書作成・プレゼン実績", "IT戦略立案・提案"],
  pmbok:        ["PMBOK準拠のプロジェクト管理", "PMP資格保有者としての組織標準化"],
  itil:         ["ITILに基づくサービスマネジメント", "インシデント・問題管理プロセス整備"],
  scrum:        ["スクラムマスターとしてのアジャイル推進", "スプリント計画・振り返りのファシリテーション"],
  qa_test:      ["テスト計画・テスト設計の立案", "品質保証プロセスの標準化"],
  management:   ["エンジニア組織のマネジメント経験", "採用・育成推進", "技術戦略立案"],
};

const ROLE_KEYWORD_MAP: Partial<Record<RoleId, string[]>> = {
  web:        ["フロントエンドアーキテクチャ設計", "Webパフォーマンス最適化", "フルスタック開発によるスピードリリース"],
  se:         ["要件定義から基本設計の一貫推進", "ステークホルダーマネジメント", "システムアーキテクチャ設計"],
  programmer: ["設計書に基づく高品質なコーディング", "バグ修正・品質改善", "コードレビューによる品質底上げ"],
  embedded:   ["組み込みLinux/RTOS開発", "ハードウェア連携ソフトウェア設計", "低レイヤープログラミング"],
  server:     ["クラウドインフラ設計・構築", "SLO/SLA管理", "障害対応・ポストモーテム"],
  network:    ["ネットワーク設計・構築", "通信障害の診断・対応", "ゼロトラストネットワーク設計"],
  cloud:      ["SRE文化の推進", "IaC/DevOps推進", "マルチクラウド設計"],
  ai:         ["機械学習モデルの開発・本番適用", "AI/MLによるビジネス価値創出", "LLM活用システム開発"],
  data:       ["データパイプライン設計", "データ品質管理", "分析基盤の構築・運用"],
  security:   ["セキュリティインシデント対応", "脆弱性診断・ペネトレーションテスト", "ゼロトラスト設計"],
  pm:         ["データドリブンなプロダクト改善", "ステークホルダーマネジメント", "クロスファンクショナルチームリード"],
  consultant: ["IT戦略立案・提案", "業務改革推進", "経営層向けプレゼンテーション"],
  helpdesk:   ["IT問い合わせ対応・エスカレーション管理", "IT資産管理", "FAQナレッジ整備"],
  tester:     ["テスト計画・テスト設計の立案", "品質保証プロセスの標準化", "自動テスト基盤構築"],
};

export interface TargetRole {
  role: Role;
  matchPercent: number;
}

export interface MarketValueResult {
  salaryMin: number;
  salaryMax: number;
  deviation: number;
  targetRoles: TargetRole[];
  keywords: string[];
}

export interface MarketValueInput {
  roleId: RoleId;
  years: number;
  skills: SkillId[];
  currentSalary: number;
}

export function calculateMarketValue(input: MarketValueInput): MarketValueResult {
  const bracket = SALARY_BRACKETS.find(
    (b) => input.years >= b.minYears && input.years <= b.maxYears
  ) ?? SALARY_BRACKETS[SALARY_BRACKETS.length - 1];

  let bonusMin = 0;
  let bonusMax = 0;

  for (const skill of input.skills) {
    const bonus = SKILL_BONUSES[skill];
    if (bonus) {
      bonusMin += bonus.min;
      bonusMax += bonus.max;
    }
  }

  const salaryMin = bracket.baseMin + bonusMin;
  const salaryMax = bracket.baseMax + bonusMax;

  const midpoint = (salaryMin + salaryMax) / 2;
  const overallAvg = 600;
  const deviation = Math.min(80, Math.max(40, Math.round(50 + ((midpoint - overallAvg) / overallAvg) * 30)));

  const keywords: string[] = [];

  const roleKws = ROLE_KEYWORD_MAP[input.roleId];
  if (roleKws) keywords.push(...roleKws);

  for (const skill of input.skills) {
    const kws = KEYWORD_MAP[skill];
    if (kws) keywords.push(...kws);
  }

  const uniqueKeywords = [...new Set(keywords)].slice(0, 20);

  const targetRoles = computeTargetRoles(input);

  return {
    salaryMin,
    salaryMax,
    deviation,
    targetRoles,
    keywords: uniqueKeywords,
  };
}

function computeTargetRoles(input: MarketValueInput): TargetRole[] {
  const affinityMap: Record<RoleId, SkillId[]> = {
    web:        ["typescript", "react", "nextjs", "vue", "angular", "python", "go"],
    se:         ["requirements", "java", "sql", "csharp", "springboot", "scrum"],
    programmer: ["java", "python", "php", "csharp", "ruby", "typescript"],
    embedded:   ["cpp", "embedded_dev", "linux", "rust"],
    server:     ["linux", "aws", "gcp", "azure", "docker_k8s", "monitoring"],
    network:    ["tcp_ip", "network_hw", "firewall", "linux"],
    cloud:      ["aws", "gcp", "azure", "terraform", "docker_k8s", "ansible", "cicd", "monitoring"],
    ai:         ["python", "ml", "llm", "spark", "aws", "gcp"],
    data:       ["python", "sql", "spark", "tableau", "powerbi", "gcp", "aws"],
    security:   ["security", "vuln_scan", "pentest", "firewall", "aws", "docker_k8s"],
    pm:         ["management", "sql", "tableau", "scrum", "requirements", "presentation"],
    consultant: ["requirements", "presentation", "management", "itil", "pmbok"],
    helpdesk:   ["linux", "monitoring", "itil"],
    tester:     ["qa_test", "sql", "python", "scrum"],
  };

  const scores = ROLES.map((role) => {
    const affinitySkills = affinityMap[role.id];
    const matches = input.skills.filter((s) => affinitySkills.includes(s)).length;
    const roleBonus = role.id === input.roleId ? 2 : 0;
    const total = matches + roleBonus;
    return { role, total };
  });

  const maxTotal = Math.max(...scores.map((s) => s.total), 1);

  return scores
    .sort((a, b) => b.total - a.total)
    .slice(0, 3)
    .map(({ role, total }) => ({
      role,
      matchPercent: Math.round((total / maxTotal) * 100),
    }));
}
