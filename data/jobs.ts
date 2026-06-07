export type CategoryKey = "dev" | "infra" | "spec" | "mgmt" | "rookie";
export type Difficulty = "入門" | "中級" | "上級";

export interface Category {
  key: CategoryKey;
  label: string;
  emoji: string;
  c1: string;
  c2: string;
}

export interface Job {
  id: string;
  cat: CategoryKey;
  name: string;
  glyph: string;
  image?: string;
  catch: string;
  difficulty: Difficulty;
  salaryMin: number;
  salaryMax: number;
  rookieFriendly?: boolean;
  work: string;
  skills: string[];
}

export const CATEGORIES: Record<CategoryKey, Category> = {
  dev:    { key: "dev",    label: "開発系",              emoji: "💻", c1: "#3b82f6", c2: "#6366f1" },
  infra:  { key: "infra",  label: "インフラ系",          emoji: "🏗️", c1: "#22c55e", c2: "#06b6d4" },
  spec:   { key: "spec",   label: "スペシャリスト系",    emoji: "🔬", c1: "#8b5cf6", c2: "#ec4899" },
  mgmt:   { key: "mgmt",   label: "マネジメント系",      emoji: "📊", c1: "#f97316", c2: "#f59e0b" },
  rookie: { key: "rookie", label: "未経験から入りやすい", emoji: "🌱", c1: "#22c55e", c2: "#14b8a6" },
};

export const DIFFICULTY: Record<Difficulty, { dots: string; color: string }> = {
  入門: { dots: "●○○", color: "#34d399" },
  中級: { dots: "●●○", color: "#60a5fa" },
  上級: { dots: "●●●", color: "#c084fc" },
};

export const SALARY_MAX = 1300;

export const JOBS: Job[] = [
  {
    id: "01", image: "/illust/jobs/01.png", cat: "dev", name: "Webエンジニア", glyph: "🌐",
    catch: "Webサービスを動かす作り手", difficulty: "中級", salaryMin: 400, salaryMax: 800,
    work: "WebサイトやWebアプリの設計・開発を担当。フロントエンドからバックエンドまで、ユーザーが日々触れるサービスを形にする。需要が高く、IT業界の花形ポジション。",
    skills: ["HTML/CSS", "JavaScript", "React", "Node.js", "SQL", "Git"],
  },
  {
    id: "02", image: "/illust/jobs/02.png", cat: "dev", name: "システムエンジニア（SE）", glyph: "📐",
    catch: "要件定義から運用まで束ねる", difficulty: "中級", salaryMin: 400, salaryMax: 750,
    work: "顧客の要望をヒアリングしてシステムの設計書を作成。開発チームをまとめ、要件定義・設計・テスト・運用まで上流から幅広く関わる。",
    skills: ["要件定義", "システム設計", "Java", "ドキュメント", "顧客折衝"],
  },
  {
    id: "03", image: "/illust/jobs/03.png", cat: "dev", name: "プログラマー", glyph: "⌨️",
    catch: "コードでカタチにする職人", difficulty: "入門", salaryMin: 350, salaryMax: 600, rookieFriendly: true,
    work: "設計書をもとにプログラムを実装。コーディングとテストを通じて、システムを実際に動く形にする。手を動かしながら学べる入り口。",
    skills: ["プログラミング", "Java", "Python", "デバッグ", "Git"],
  },
  {
    id: "04", image: "/illust/jobs/04.png", cat: "dev", name: "組み込みエンジニア", glyph: "🔌",
    catch: "モノに知能を宿す", difficulty: "上級", salaryMin: 450, salaryMax: 850,
    work: "家電・自動車・IoT機器などのハードウェアを制御するソフトウェアを開発。限られたリソースで動かす低レイヤーの専門領域。",
    skills: ["C/C++", "マイコン", "RTOS", "回路知識", "組み込みLinux"],
  },
  {
    id: "05", image: "/illust/jobs/05.png", cat: "infra", name: "サーバーエンジニア", glyph: "🗄️",
    catch: "システムの土台を支える", difficulty: "中級", salaryMin: 400, salaryMax: 700,
    work: "サーバーの設計・構築・運用を担当。サービスが安定して動き続けるよう、24時間体制でインフラの基盤を守る縁の下の力持ち。",
    skills: ["Linux", "ネットワーク", "仮想化", "シェル", "監視"],
  },
  {
    id: "06", image: "/illust/jobs/06.png", cat: "infra", name: "ネットワークエンジニア", glyph: "🛰️",
    catch: "通信の道をつくる", difficulty: "中級", salaryMin: 400, salaryMax: 700,
    work: "ネットワーク機器の設計・構築・保守を担当。データが滞りなく流れる通信インフラを支え、トラブル時には原因を切り分けて復旧する。",
    skills: ["TCP/IP", "Cisco", "ルーティング", "ファイアウォール", "CCNA"],
  },
  {
    id: "07", image: "/illust/jobs/07.png", cat: "infra", name: "クラウドエンジニア", glyph: "☁️",
    catch: "クラウド時代の最前線", difficulty: "上級", salaryMin: 500, salaryMax: 900,
    work: "AWSやAzureなどのクラウド環境を設計・構築・自動化。スケーラブルでコスト効率の高いインフラを実現する、今最も需要の高い領域。",
    skills: ["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "CI/CD"],
  },
  {
    id: "08", image: "/illust/jobs/08.png", cat: "spec", name: "AIエンジニア", glyph: "🤖",
    catch: "知能を生み出す", difficulty: "上級", salaryMin: 500, salaryMax: 1000,
    work: "機械学習・深層学習モデルの開発と実装を担当。データから学習するシステムを構築し、AIをプロダクトに組み込む先端職。",
    skills: ["Python", "機械学習", "深層学習", "PyTorch", "数学", "MLOps"],
  },
  {
    id: "09", image: "/illust/jobs/09.png", cat: "spec", name: "データサイエンティスト", glyph: "📈",
    catch: "データから価値を引き出す", difficulty: "上級", salaryMin: 500, salaryMax: 950,
    work: "膨大なデータを分析し、ビジネス課題を解決する知見を導く。統計と機械学習を武器に、データドリブンな意思決定を支える。",
    skills: ["Python", "統計", "SQL", "可視化", "機械学習", "ビジネス理解"],
  },
  {
    id: "10", image: "/illust/jobs/10.png", cat: "spec", name: "セキュリティエンジニア", glyph: "🛡️",
    catch: "デジタルを守る盾", difficulty: "上級", salaryMin: 500, salaryMax: 900,
    work: "システムやネットワークを脅威から守る専門職。脆弱性診断、インシデント対応、セキュリティ設計を担い、組織の安全を最前線で支える。",
    skills: ["ネットワーク", "脆弱性診断", "暗号技術", "インシデント対応", "法令"],
  },
  {
    id: "11", image: "/illust/jobs/11.png", cat: "mgmt", name: "プロジェクトマネージャー", glyph: "🎯",
    catch: "チームを成功へ導く", difficulty: "上級", salaryMin: 600, salaryMax: 1200,
    work: "プロジェクト全体の計画・進行・品質・予算・人を管理。メンバーをまとめ、納期と成果を両立させる司令塔ポジション。",
    skills: ["進行管理", "リスク管理", "折衝力", "PMBOK", "リーダーシップ"],
  },
  {
    id: "12", image: "/illust/jobs/12.png", cat: "mgmt", name: "ITコンサルタント", glyph: "💼",
    catch: "経営とITの架け橋", difficulty: "上級", salaryMin: 600, salaryMax: 1300,
    work: "企業の経営課題をITで解決する戦略を提案。業務分析からシステム導入の上流まで支援する、高年収の花形コンサル職。",
    skills: ["業務分析", "提案力", "経営知識", "プレゼン", "プロジェクト管理"],
  },
  {
    id: "13", image: "/illust/jobs/13.png", cat: "rookie", name: "ITヘルプデスク", glyph: "🎧",
    catch: "IT業界への入り口", difficulty: "入門", salaryMin: 300, salaryMax: 450, rookieFriendly: true,
    work: "社内外のIT関連の問い合わせに対応。PCやシステムのトラブルを解決し、利用者をサポートする。未経験からIT業界に入る王道ルート。",
    skills: ["PC基礎", "OS知識", "コミュニケーション", "ヒアリング", "ドキュメント"],
  },
  {
    id: "14", image: "/illust/jobs/14.png", cat: "rookie", name: "テスター", glyph: "🐞",
    catch: "品質の番人", difficulty: "入門", salaryMin: 300, salaryMax: 500, rookieFriendly: true,
    work: "ソフトウェアが仕様通りに動くかを検証。バグを見つけて品質を担保する。専門知識ゼロから始めやすいIT業界の登竜門。",
    skills: ["テスト設計", "バグ報告", "仕様理解", "注意力", "Excel"],
  },
];
