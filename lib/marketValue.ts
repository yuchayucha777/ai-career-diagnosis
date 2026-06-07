export type BeginnerRoleId =
  | "frontend"
  | "backend"
  | "fullstack"
  | "data"
  | "infra"
  | "pm";

export interface BeginnerRole {
  id: BeginnerRoleId;
  label: string;
  description: string;
}

export const BEGINNER_ROLES: BeginnerRole[] = [
  { id: "frontend", label: "フロントエンドエンジニア", description: "Webの見た目・画面を作る" },
  { id: "backend", label: "バックエンドエンジニア", description: "サーバー側の処理・APIを作る" },
  { id: "fullstack", label: "フルスタックエンジニア", description: "フロント〜バックを一人で担当する" },
  { id: "data", label: "データアナリスト / エンジニア", description: "データを分析して価値を出す" },
  { id: "infra", label: "インフラ / クラウドエンジニア", description: "システムの基盤・クラウドを管理する" },
  { id: "pm", label: "プロダクトマネージャー", description: "プロダクトの方向性を決める" },
];

export type BeginnerSkillId =
  | "html_css"
  | "js_basic"
  | "python_basic"
  | "sql_basic"
  | "git"
  | "linux"
  | "cloud_basic"
  | "ml_concept"
  | "design_tool"
  | "business_analysis";

export interface BeginnerSkillGroup {
  label: string;
  skills: Array<{ id: BeginnerSkillId; label: string }>;
}

export const BEGINNER_SKILL_GROUPS: BeginnerSkillGroup[] = [
  {
    label: "プログラミング基礎",
    skills: [
      { id: "html_css", label: "HTML / CSS" },
      { id: "js_basic", label: "JavaScript 基礎" },
      { id: "python_basic", label: "Python 基礎" },
      { id: "sql_basic", label: "SQL 基礎" },
    ],
  },
  {
    label: "開発ツール",
    skills: [
      { id: "git", label: "Git / GitHub" },
      { id: "linux", label: "Linux コマンド" },
    ],
  },
  {
    label: "クラウド・AI",
    skills: [
      { id: "cloud_basic", label: "クラウド入門（AWS/GCP等）" },
      { id: "ml_concept", label: "AI / 機械学習の基礎知識" },
    ],
  },
  {
    label: "その他",
    skills: [
      { id: "design_tool", label: "Figma / デザインツール" },
      { id: "business_analysis", label: "ビジネス分析・資料作成の経験" },
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
  html_css: { min: 0, max: 10 },
  js_basic: { min: 10, max: 20 },
  python_basic: { min: 10, max: 20 },
  sql_basic: { min: 10, max: 15 },
  git: { min: 5, max: 10 },
  linux: { min: 5, max: 10 },
  cloud_basic: { min: 10, max: 20 },
  ml_concept: { min: 10, max: 20 },
  design_tool: { min: 5, max: 10 },
  business_analysis: { min: 10, max: 20 },
};

const BEGINNER_KEYWORD_MAP: Record<BeginnerSkillId, string[]> = {
  html_css: ["HTML/CSSによるWebページ制作", "レスポンシブデザイン対応"],
  js_basic: ["JavaScriptによる動的UI実装", "フロントエンド基礎スキル"],
  python_basic: ["Pythonによるスクリプト自動化", "データ処理の基礎経験"],
  sql_basic: ["SQLを用いたデータ集計・分析", "データベース基礎操作"],
  git: ["Gitによるバージョン管理", "GitHubを用いたチーム開発"],
  linux: ["Linuxコマンドによるサーバー操作", "CLI環境での作業経験"],
  cloud_basic: ["AWSサービスの基礎知識", "クラウド環境の理解"],
  ml_concept: ["機械学習の基礎概念の理解", "AI活用への素養"],
  design_tool: ["Figmaを用いたUIプロトタイピング", "デザイン思考の実践"],
  business_analysis: ["前職での業務分析・改善提案経験", "Excelを用いたデータ整理・資料作成"],
};

const BEGINNER_NEXT_STEPS: Record<BeginnerRoleId, string[]> = {
  frontend: [
    "HTML / CSS / JavaScript の基礎を習得する",
    "React または Vue.js の入門コースを受講する",
    "ポートフォリオサイトを作成して GitHubに公開する",
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
  | "frontend"
  | "backend"
  | "fullstack"
  | "infra"
  | "sre"
  | "data"
  | "ml"
  | "mobile"
  | "pm"
  | "security";

export interface Role {
  id: RoleId;
  label: string;
}

export const ROLES: Role[] = [
  { id: "frontend", label: "フロントエンドエンジニア" },
  { id: "backend", label: "バックエンドエンジニア" },
  { id: "fullstack", label: "フルスタックエンジニア" },
  { id: "infra", label: "インフラエンジニア" },
  { id: "sre", label: "SRE / クラウドエンジニア" },
  { id: "data", label: "データエンジニア / アナリスト" },
  { id: "ml", label: "MLエンジニア / AIエンジニア" },
  { id: "mobile", label: "モバイルエンジニア" },
  { id: "pm", label: "プロダクトマネージャー" },
  { id: "security", label: "セキュリティエンジニア" },
];

export type SkillId =
  | "typescript"
  | "python"
  | "go"
  | "java"
  | "rust"
  | "kotlin"
  | "swift"
  | "aws"
  | "gcp"
  | "azure"
  | "react"
  | "nextjs"
  | "vue"
  | "fastapi"
  | "springboot"
  | "rails"
  | "sql"
  | "spark"
  | "ml"
  | "tableau"
  | "docker_k8s"
  | "terraform"
  | "cicd"
  | "security"
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
      { id: "python", label: "Python" },
      { id: "go", label: "Go" },
      { id: "java", label: "Java / Kotlin" },
      { id: "rust", label: "Rust" },
      { id: "kotlin", label: "Kotlin (Android)" },
      { id: "swift", label: "Swift (iOS)" },
    ],
  },
  {
    label: "クラウド",
    skills: [
      { id: "aws", label: "AWS" },
      { id: "gcp", label: "GCP" },
      { id: "azure", label: "Azure" },
    ],
  },
  {
    label: "フレームワーク",
    skills: [
      { id: "react", label: "React / React Native" },
      { id: "nextjs", label: "Next.js" },
      { id: "vue", label: "Vue.js / Nuxt" },
      { id: "fastapi", label: "FastAPI / Django" },
      { id: "springboot", label: "Spring Boot" },
      { id: "rails", label: "Ruby on Rails" },
    ],
  },
  {
    label: "データ・AI",
    skills: [
      { id: "sql", label: "SQL / BigQuery" },
      { id: "spark", label: "Spark / Hadoop" },
      { id: "ml", label: "TensorFlow / PyTorch" },
      { id: "tableau", label: "Tableau / BIツール" },
    ],
  },
  {
    label: "インフラ・その他",
    skills: [
      { id: "docker_k8s", label: "Docker / Kubernetes" },
      { id: "terraform", label: "Terraform / IaC" },
      { id: "cicd", label: "CI/CD (GitHub Actions等)" },
      { id: "security", label: "セキュリティ設計" },
      { id: "management", label: "マネジメント経験" },
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
  aws: { min: 30, max: 50 },
  gcp: { min: 30, max: 50 },
  azure: { min: 30, max: 50 },
  go: { min: 30, max: 40 },
  rust: { min: 30, max: 40 },
  docker_k8s: { min: 30, max: 40 },
  terraform: { min: 20, max: 35 },
  typescript: { min: 10, max: 20 },
  ml: { min: 40, max: 60 },
  python: { min: 10, max: 20 },
  management: { min: 80, max: 120 },
  security: { min: 30, max: 60 },
  cicd: { min: 10, max: 20 },
  spark: { min: 20, max: 40 },
};

const KEYWORD_MAP: Partial<Record<SkillId, string[]>> = {
  typescript: ["型安全な大規模フロントエンド開発", "TypeScript移行リード"],
  python: ["Pythonを用いたバックエンド開発", "スクリプト自動化"],
  go: ["Go言語によるマイクロサービス開発", "高性能API構築"],
  java: ["Javaエンタープライズ開発", "Spring Bootによるバックエンド構築"],
  rust: ["Rustによるシステムプログラミング", "メモリ安全な高性能実装"],
  kotlin: ["Kotlinによるネイティブ Android開発"],
  swift: ["SwiftによるネイティブiOS開発"],
  aws: ["AWSクラウドインフラ設計・構築", "コスト最適化", "マルチリージョン構成"],
  gcp: ["GCPデータパイプライン構築", "BigQuery分析基盤整備"],
  azure: ["Azure Active Directory連携", "Microsoft365統合開発"],
  react: ["Reactによる大規模SPA開発", "コンポーネント設計"],
  nextjs: ["Next.jsによるフルスタック開発", "SSR/SSG最適化"],
  vue: ["Vue.jsによるフロントエンド開発", "Nuxtを用いたSSR構築"],
  fastapi: ["FastAPIによる高速REST API開発", "非同期処理設計"],
  springboot: ["Spring Bootによるマイクロサービス設計", "Java EE準拠開発"],
  rails: ["Ruby on Railsによる高速プロトタイピング", "RailsアプリケーションのScale対応"],
  sql: ["SQLを用いたデータ分析・集計", "BigQuery・Redshift活用"],
  spark: ["ApacheSparkによる大規模バッチ処理", "データレイク構築"],
  ml: ["機械学習モデルの開発・本番適用", "MLOps基盤構築", "LLMファインチューニング"],
  tableau: ["BIツールを用いた経営ダッシュボード構築", "データ可視化推進"],
  docker_k8s: ["Kubernetesによるコンテナオーケストレーション", "マイクロサービス設計・運用"],
  terraform: ["TerraformによるIaC推進", "インフラのコード化・標準化"],
  cicd: ["CI/CDパイプライン構築・最適化", "デプロイ自動化によるリリース頻度向上"],
  security: ["セキュリティ要件の設計・レビュー", "OWASP対応", "ゼロトラスト設計"],
  management: ["エンジニア組織のマネジメント経験", "採用・育成推進", "技術戦略立案"],
};

const ROLE_KEYWORD_MAP: Partial<Record<RoleId, string[]>> = {
  frontend: ["フロントエンドアーキテクチャ設計", "Webパフォーマンス最適化", "アクセシビリティ対応"],
  backend: ["スケーラブルなバックエンド設計", "パフォーマンスチューニング", "RESTful API設計"],
  fullstack: ["フルスタック開発によるスピードリリース", "フロント〜バックの一貫した設計"],
  infra: ["クラウドインフラ設計・構築", "SLO/SLA管理", "障害対応・ポストモーテム"],
  sre: ["SRE文化の推進", "信頼性エンジニアリング", "SLI/SLO設計"],
  data: ["データパイプライン設計", "データ品質管理", "分析基盤の構築"],
  ml: ["機械学習モデルの開発・本番適用", "AI/MLによるビジネス価値創出"],
  mobile: ["クロスプラットフォームアプリ開発", "ネイティブアプリパフォーマンス最適化"],
  pm: ["データドリブンなプロダクト改善", "ステークホルダーマネジメント"],
  security: ["セキュリティインシデント対応", "脆弱性診断・ペネトレーションテスト"],
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
    frontend: ["typescript", "react", "nextjs", "vue"],
    backend: ["python", "go", "java", "rust", "springboot", "fastapi", "rails", "sql"],
    fullstack: ["typescript", "react", "nextjs", "python", "go"],
    infra: ["aws", "gcp", "azure", "docker_k8s", "terraform"],
    sre: ["aws", "gcp", "azure", "docker_k8s", "terraform", "cicd"],
    data: ["python", "sql", "spark", "tableau", "gcp", "aws"],
    ml: ["python", "ml", "spark", "gcp", "aws"],
    mobile: ["kotlin", "swift", "react"],
    pm: ["management", "sql", "tableau"],
    security: ["security", "aws", "docker_k8s", "cicd"],
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
