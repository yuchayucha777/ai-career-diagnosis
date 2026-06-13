export type CategoryKey = "dev" | "plan" | "infra" | "data" | "ops";

export interface Category {
  key: CategoryKey;
  label: string;
  color: string;
}

export interface Job {
  no: number;
  id: string;
  name: string;
  animal: string;
  cat: CategoryKey;
  median: number;
  range: [number, number];
  img: string;
  catch: string;
  desc: string;
  strengths: string[];
  skills: string[];
}

export const CATS: Record<CategoryKey, Category> = {
  dev:   { key: "dev",   label: "開発系",             color: "#6366f1" },
  plan:  { key: "plan",  label: "設計・管理系",        color: "#8b5cf6" },
  infra: { key: "infra", label: "インフラ系",          color: "#0ea5e9" },
  data:  { key: "data",  label: "データ・AI系",        color: "#db2777" },
  ops:   { key: "ops",   label: "セキュリティ・運用系", color: "#10b981" },
};

export const JOBS: Job[] = [
  { no: 1,  id: "web",          name: "Webエンジニア",          animal: "柴犬",     cat: "dev",
    median: 560, range: [400, 820],  img: "/illust/jobs/01.png",
    catch: "見える画面を、軽やかに形にする。",
    desc: "Webサイトやサービスの画面からサーバー側まで幅広く担当。ユーザーが直接触れる体験を作り、リリースのスピード感が魅力です。",
    strengths: ["UI実装力", "幅広い技術", "スピード感"],
    skills: ["JavaScript", "TypeScript", "React", "HTML/CSS", "Node.js"] },
  { no: 2,  id: "se",           name: "システムエンジニア",     animal: "フクロウ", cat: "plan",
    median: 600, range: [430, 880],  img: "/illust/jobs/02.png",
    catch: "要件を読み解き、設計に落とす。",
    desc: "顧客の要望をヒアリングし、要件定義から基本設計までの上流工程を担当。プロジェクト全体を見渡す視点が求められます。",
    strengths: ["設計力", "調整力", "論理的思考"],
    skills: ["要件定義", "システム設計", "Java", "SQL", "ドキュメント作成"] },
  { no: 3,  id: "programmer",   name: "プログラマー",           animal: "アライグマ", cat: "dev",
    median: 480, range: [350, 720],  img: "/illust/jobs/03.png",
    catch: "設計図を、動くコードに変える。",
    desc: "設計に基づいてプログラムを実装する、ものづくりの最前線。手を動かして形にすることが好きな人に向いています。",
    strengths: ["実装力", "集中力", "問題解決"],
    skills: ["Java", "Python", "C#", "Git", "SQL"] },
  { no: 4,  id: "embedded",     name: "組み込みエンジニア",     animal: "リス",     cat: "dev",
    median: 580, range: [420, 820],  img: "/illust/jobs/04.png",
    catch: "機械の中で、ソフトを走らせる。",
    desc: "家電や自動車、IoT機器を動かすソフトウェアを開発。ハードウェアとソフトウェアの両方を理解する専門性が強みになります。",
    strengths: ["低レイヤ知識", "ハード理解", "堅実さ"],
    skills: ["C / C++", "マイコン", "RTOS", "回路の知識", "Linux"] },
  { no: 5,  id: "server",       name: "サーバーエンジニア",     animal: "ペンギン", cat: "infra",
    median: 560, range: [400, 800],  img: "/illust/jobs/05.png",
    catch: "サービスの土台を、止めずに支える。",
    desc: "サーバーの構築・運用・保守を担当。安定稼働を守り、障害時には素早く復旧へ導く、縁の下の力持ちです。",
    strengths: ["安定運用", "障害対応", "インフラ知識"],
    skills: ["Linux", "AWS", "ネットワーク", "Docker", "監視 / 運用"] },
  { no: 6,  id: "network",      name: "ネットワークエンジニア", animal: "シロフクロウ", cat: "infra",
    median: 560, range: [400, 800],  img: "/illust/jobs/06.png",
    catch: "世界をつなぐ、見えない道を引く。",
    desc: "通信ネットワークの設計・構築・運用を担当。データが正しく速く届く経路を作り、つながり続ける環境を維持します。",
    strengths: ["通信知識", "設計力", "切り分け力"],
    skills: ["ネットワーク", "TCP/IP", "Cisco", "ファイアウォール", "クラウドVPC"] },
  { no: 7,  id: "cloud",        name: "クラウドエンジニア",     animal: "ひつじ",   cat: "infra",
    median: 700, range: [500, 980],  img: "/illust/jobs/07.png",
    catch: "雲の上に、伸び縮みする基盤を。",
    desc: "AWSやGCPなどのクラウド上にシステム基盤を設計・構築。自動化とスケーラビリティで、変化に強い環境を作ります。",
    strengths: ["クラウド設計", "自動化", "コスト最適化"],
    skills: ["AWS", "GCP", "Terraform", "Kubernetes", "CI/CD"] },
  { no: 8,  id: "ai",           name: "AIエンジニア",           animal: "たこ",     cat: "data",
    median: 780, range: [560, 1150], img: "/illust/jobs/08.png",
    catch: "学習するモデルを、製品に宿す。",
    desc: "機械学習モデルを開発し、プロダクトに組み込むのが仕事。最先端の研究を実装へつなげる、知的好奇心が活きる職種です。",
    strengths: ["モデリング", "数理", "研究力"],
    skills: ["Python", "PyTorch", "TensorFlow", "機械学習", "MLOps"] },
  { no: 9,  id: "data",         name: "データサイエンティスト", animal: "パンダ",   cat: "data",
    median: 740, range: [540, 1050], img: "/illust/jobs/09.png",
    catch: "データの奥から、答えを見つける。",
    desc: "大量のデータを分析し、ビジネスの意思決定を導く専門家。統計とビジネス理解を両立させ、価値ある示唆を生み出します。",
    strengths: ["統計解析", "課題設定", "ビジネス理解"],
    skills: ["Python", "SQL", "統計学", "機械学習", "データ可視化"] },
  { no: 10, id: "security",     name: "セキュリティエンジニア", animal: "オオカミ", cat: "ops",
    median: 720, range: [520, 1050], img: "/illust/jobs/10.png",
    catch: "攻める視点で、守りを固める。",
    desc: "サイバー攻撃から組織やサービスを守る専門家。脆弱性を見つけ、対策を講じ、安全を担保する高い専門性が求められます。",
    strengths: ["脅威分析", "深い専門性", "堅牢性"],
    skills: ["セキュリティ監査", "ペネトレーションテスト", "ネットワーク", "Linux", "暗号技術"] },
  { no: 11, id: "pm",           name: "プロジェクトマネージャー", animal: "ライオン", cat: "plan",
    median: 760, range: [550, 1120], img: "/illust/jobs/11.png",
    catch: "人と計画を束ね、ゴールへ導く。",
    desc: "プロジェクトの計画・進行・品質・予算すべてに責任を持つ統率役。チームをまとめ、プロダクトを完成へと導きます。",
    strengths: ["推進力", "統率力", "計画立案"],
    skills: ["プロジェクト管理", "アジャイル/Scrum", "要件定義", "リスク管理", "ステークホルダー調整"] },
  { no: 12, id: "consultant",   name: "ITコンサルタント",       animal: "ゾウ",     cat: "plan",
    median: 820, range: [600, 1300], img: "/illust/jobs/12.png",
    catch: "経営の課題を、ITで解く。",
    desc: "企業の経営・業務課題をITの力で解決する提案役。現状を分析し、戦略を描き、変革（DX）をリードします。",
    strengths: ["課題解決", "提案力", "経営視点"],
    skills: ["業務分析", "DX戦略", "提案・資料作成", "プロジェクト管理", "業界知識"] },
  { no: 13, id: "helpdesk",     name: "ヘルプデスク",           animal: "うさぎ",   cat: "ops",
    median: 400, range: [320, 580],  img: "/illust/jobs/13.png",
    catch: "困った！に、いちばん近い味方。",
    desc: "社員や顧客のITに関する問い合わせ・トラブルに対応。IT業界への入り口としても人気で、対人スキルが活きます。",
    strengths: ["対応力", "傾聴力", "丁寧さ"],
    skills: ["トラブル対応", "OS / 機器知識", "ITサポート", "コミュニケーション", "ドキュメント作成"] },
  { no: 14, id: "tester",       name: "テスター",               animal: "ハリネズミ", cat: "ops",
    median: 460, range: [350, 680],  img: "/illust/jobs/14.png",
    catch: "バグを見逃さない、品質の番人。",
    desc: "ソフトウェアが仕様どおり正しく動くかを検証する品質の守り手。細部への注意力と粘り強さが信頼を支えます。",
    strengths: ["品質視点", "注意力", "粘り強さ"],
    skills: ["テスト設計", "品質管理", "自動テスト", "バグ管理", "Selenium"] },
];

export const SCALE_MIN = 200;
export const SCALE_MAX = 1300;
