import type { JobTypeId, DiagnosisResult } from "./diagnosis";
import { JOB_TYPES } from "./diagnosis";

export interface QuestionOption {
  text: string;
  scores: Partial<Record<JobTypeId, number>>;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

// ── 未経験者向け 12問 ────────────────────────────────────────────────────
export const BEGINNER_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "どんな作業をしているときが一番楽しいですか？",
    options: [
      { text: "Webサイトやアプリの見た目・デザインを作ること", scores: { web: 3, programmer: 1 } },
      { text: "数字やデータを分析して、グラフや資料にまとめること", scores: { data: 3, consultant: 1 } },
      { text: "機械・機器の仕組みを理解して、動かすこと", scores: { embedded: 3, network: 2, server: 1 } },
      { text: "人の困りごとを聞いて、解決してあげること", scores: { helpdesk: 3, pm: 1 } },
    ],
  },
  {
    id: 2,
    text: "自分の性格・強みに近いのは？",
    options: [
      { text: "細かい部分まで気づく、完成度へのこだわり", scores: { tester: 3, web: 1 } },
      { text: "論理的・数学的に考えて答えを出す力", scores: { data: 2, ai: 2, programmer: 1 } },
      { text: "人に分かりやすく説明・伝えるコミュニケーション力", scores: { pm: 2, consultant: 2, helpdesk: 1 } },
      { text: "新しい技術や仕組みへの強い知的好奇心", scores: { ai: 2, security: 2, cloud: 1 } },
    ],
  },
  {
    id: 3,
    text: "問題が起きたとき、あなたはどうしますか？",
    options: [
      { text: "ネットや本で原因を徹底的に調べて解決策を見つける", scores: { programmer: 2, security: 2, cloud: 1 } },
      { text: "先輩や友人に相談して、一緒に解決する", scores: { helpdesk: 3, pm: 1 } },
      { text: "計画を立ててから、順序よく対処する", scores: { se: 3, tester: 1 } },
      { text: "まず手を動かして、いろいろ試してみる", scores: { programmer: 3, web: 1 } },
    ],
  },
  {
    id: 4,
    text: "IT職でやってみたい仕事のイメージに近いのは？",
    options: [
      { text: "誰でも使いやすいWebサービス・アプリを作る", scores: { web: 3, programmer: 2 } },
      { text: "データを分析して、会社の判断をサポートする", scores: { data: 3, consultant: 1 } },
      { text: "サーバーやネットワークが止まらない環境を管理する", scores: { server: 2, cloud: 2, network: 1 } },
      { text: "AIや最先端技術で、社会の問題を解決する", scores: { ai: 3, data: 1 } },
    ],
  },
  {
    id: 5,
    text: "チームの中でどんな役割が自分に合っていると思いますか？",
    options: [
      { text: "手を動かして、コツコツと実装・作業をする", scores: { programmer: 3, tester: 1 } },
      { text: "全体の方向性を決めて、チームをまとめる", scores: { pm: 3, se: 1 } },
      { text: "みんなをサポートして、困りごとを解決する", scores: { helpdesk: 3, tester: 1 } },
      { text: "仕組みや自動化で、作業を効率よく進める", scores: { cloud: 3, server: 1 } },
    ],
  },
  {
    id: 6,
    text: "何かを学ぶとき、どんな方法が好きですか？",
    options: [
      { text: "実際に手を動かして、作りながら学ぶ", scores: { programmer: 3, web: 1 } },
      { text: "本やドキュメントで体系的に学ぶ", scores: { data: 2, ai: 2, se: 1 } },
      { text: "機器や実際の環境を触りながら理解する", scores: { network: 3, server: 2, embedded: 2 } },
      { text: "人から教わって、質問しながら進める", scores: { helpdesk: 2, pm: 2 } },
    ],
  },
  {
    id: 7,
    text: "こだわりを持っているのはどの分野ですか？",
    options: [
      { text: "デザイン・見た目・使いやすさ", scores: { web: 3, tester: 1 } },
      { text: "速さ・効率・自動化・仕組み化", scores: { cloud: 3, server: 1 } },
      { text: "正確さ・安全性・品質", scores: { tester: 3, security: 2 } },
      { text: "数字・成果・ビジネスへのインパクト", scores: { data: 2, consultant: 2, pm: 1 } },
    ],
  },
  {
    id: 8,
    text: "ITで将来実現したいことに近いのは？",
    options: [
      { text: "WebサービスやアプリをゼロからリリースShipする", scores: { web: 3, programmer: 2 } },
      { text: "ハッキングを防いで、システムと情報を守る", scores: { security: 3, network: 1 } },
      { text: "AIやデータで、業界に大きな変革を起こす", scores: { ai: 3, data: 2 } },
      { text: "人やチームをまとめて、大きなプロジェクトを成功させる", scores: { pm: 3, consultant: 2 } },
    ],
  },
  {
    id: 9,
    text: "好きな仕事スタイルは？",
    options: [
      { text: "一つのことに集中して、深く突き詰める", scores: { ai: 2, data: 2, programmer: 2 } },
      { text: "色々な人と関わりながら、協力して進める", scores: { pm: 2, consultant: 2, helpdesk: 1 } },
      { text: "機器や環境を実際に触って、手を動かす", scores: { network: 3, embedded: 3, server: 1 } },
      { text: "幅広く関わって、何でも対応できるオールラウンダー", scores: { se: 2, tester: 2, helpdesk: 1 } },
    ],
  },
  {
    id: 10,
    text: "最も興味があるIT分野は？",
    options: [
      { text: "WebやアプリのUI・UX・デザイン", scores: { web: 3, programmer: 1 } },
      { text: "ネットワーク・サーバー・クラウドの仕組み", scores: { network: 2, server: 2, cloud: 2 } },
      { text: "AI・機械学習・データ分析", scores: { ai: 3, data: 3 } },
      { text: "セキュリティ・プライバシー・情報の守り方", scores: { security: 3, network: 1 } },
    ],
  },
  {
    id: 11,
    text: "IT業界に入る動機として最も近いのは？",
    options: [
      { text: "プログラミングでものを作る喜びを味わいたい", scores: { programmer: 3, web: 2 } },
      { text: "IT系の資格を取って、安定したキャリアを作りたい", scores: { helpdesk: 2, tester: 2, se: 1 } },
      { text: "最先端のAI・データ技術の最前線に関わりたい", scores: { ai: 3, data: 2, cloud: 1 } },
      { text: "チームをまとめて、大きなプロジェクトに挑戦したい", scores: { pm: 3, consultant: 2 } },
    ],
  },
  {
    id: 12,
    text: "「ものづくり」で最もワクワクするのは？",
    options: [
      { text: "画面のデザイン・アニメーションが完璧に仕上がった", scores: { web: 3, tester: 1 } },
      { text: "データから思いがけない発見・インサイトを得た", scores: { data: 3, security: 1 } },
      { text: "自動化スクリプトで手作業がなくなった", scores: { cloud: 3, programmer: 2 } },
      { text: "電子部品やハードウェアを組み合わせて実際に動かした", scores: { embedded: 3, network: 2 } },
    ],
  },
];

// ── IT経験者向け 職種別 8問 ──────────────────────────────────────────────
const WEB_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Webエンジニアとして、最もやりがいを感じる瞬間は？",
    options: [
      { text: "UIコンポーネントのアニメーション・デザインを極める", scores: { web: 3, tester: 1 } },
      { text: "APIやデータベース設計をゼロから作り上げる", scores: { programmer: 3, se: 1 } },
      { text: "インフラ・デプロイ基盤を整えてチームの生産性を上げる", scores: { cloud: 3, server: 1 } },
      { text: "ユーザーの課題を要件定義して解決策を提案する", scores: { se: 2, pm: 2 } },
    ],
  },
  {
    id: 2,
    text: "今後最も学びたい技術は？",
    options: [
      { text: "LLM・生成AIのアプリケーション組み込み", scores: { ai: 3, data: 1 } },
      { text: "AWS/GCP・Kubernetes・IaC", scores: { cloud: 3, server: 1 } },
      { text: "セキュリティ・脆弱性診断・OWASP", scores: { security: 3, network: 1 } },
      { text: "データ分析・BIツール・SQL高度化", scores: { data: 3, consultant: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後の理想のポジションは？",
    options: [
      { text: "フロントエンド専門のテックリード", scores: { web: 3, programmer: 1 } },
      { text: "AIエンジニアとして機械学習を実装", scores: { ai: 3, data: 1 } },
      { text: "SRE・DevOpsでインフラ全体を担う", scores: { cloud: 3, server: 2 } },
      { text: "PM・コンサルとしてビジネスと技術を橋渡し", scores: { pm: 2, consultant: 2 } },
    ],
  },
  {
    id: 4,
    text: "チームで最も得意な役割は？",
    options: [
      { text: "UI品質・アクセシビリティを徹底してこだわる", scores: { web: 3, tester: 2 } },
      { text: "設計・アーキテクチャを主導して仕様書をまとめる", scores: { se: 3, programmer: 1 } },
      { text: "チームのスケジュール・リスクを管理する", scores: { pm: 3, se: 1 } },
      { text: "インフラ・環境周りを整えて全員を支える", scores: { cloud: 3, server: 1 } },
    ],
  },
  {
    id: 5,
    text: "バグや障害が起きたとき、最初にやることは？",
    options: [
      { text: "ブラウザのコンソール・ネットワークタブを読み込む", scores: { web: 3, programmer: 1 } },
      { text: "サーバーログ・クラウドメトリクスで原因を特定", scores: { server: 2, cloud: 2 } },
      { text: "ステークホルダーに状況報告し対応方針を示す", scores: { pm: 3, se: 1 } },
      { text: "セキュリティ観点・不正アクセスの可能性を調査", scores: { security: 3, network: 1 } },
    ],
  },
  {
    id: 6,
    text: "技術選定で最も重視することは？",
    options: [
      { text: "ユーザー体験・パフォーマンス・Core Web Vitals", scores: { web: 3, tester: 1 } },
      { text: "スケーラビリティ・可用性・コスト最適化", scores: { cloud: 2, server: 2 } },
      { text: "AIの活用余地・データ利活用のしやすさ", scores: { ai: 2, data: 2 } },
      { text: "ビジネスROI・開発速度・運用コスト", scores: { pm: 2, consultant: 2 } },
    ],
  },
  {
    id: 7,
    text: "今の仕事で最もストレスを感じるのは？",
    options: [
      { text: "要件が曖昧でビジネス側とのすり合わせが多い", scores: { programmer: 2, se: 1, consultant: 1 } },
      { text: "インフラ・デプロイ周りで詰まることが多い", scores: { cloud: 3, server: 2 } },
      { text: "データが整備されておらず意思決定が難しい", scores: { data: 3, ai: 1 } },
      { text: "セキュリティ要件・テストの網羅が手間", scores: { security: 2, tester: 2 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで最も求めることは？",
    options: [
      { text: "最先端技術（AI/ML）の実装・研究", scores: { ai: 3, data: 2 } },
      { text: "インフラ・クラウド全体を設計する裁量", scores: { cloud: 3, server: 2 } },
      { text: "ビジネス・経営に直接影響するポジション", scores: { consultant: 3, pm: 2 } },
      { text: "より深い実装力・コード品質の追求", scores: { programmer: 3, web: 2 } },
    ],
  },
  {
    id: 9,
    text: "理想の開発スタイルに近いのは？",
    options: [
      { text: "デザイナーと密連携してピクセルパーフェクトを追求", scores: { web: 3, tester: 1 } },
      { text: "バックエンドAPIも含めてフルスタックで全部書く", scores: { programmer: 3, se: 1 } },
      { text: "CI/CDを整えてリリースを自動化・高速化する", scores: { cloud: 3, server: 1 } },
      { text: "ユーザーインタビューを踏まえて機能を設計する", scores: { pm: 2, consultant: 2 } },
    ],
  },
  {
    id: 10,
    text: "コードレビューで最も指摘したい観点は？",
    options: [
      { text: "レンダリングパフォーマンス・バンドルサイズ", scores: { web: 3, programmer: 1 } },
      { text: "セキュリティホール・入力バリデーションの漏れ", scores: { security: 3, tester: 1 } },
      { text: "インフラコストに直結するN+1・重いクエリ", scores: { cloud: 2, data: 2 } },
      { text: "設計の一貫性・命名・保守しやすいアーキテクチャ", scores: { se: 3, programmer: 1 } },
    ],
  },
  {
    id: 11,
    text: "今後関わりたい領域のプロダクトは？",
    options: [
      { text: "エンドユーザー向けtoCのWebサービス・アプリ", scores: { web: 3, programmer: 1 } },
      { text: "AI・データを使った新規サービスの立ち上げ", scores: { ai: 3, data: 2 } },
      { text: "大規模クラウド基盤・プラットフォーム開発", scores: { cloud: 3, server: 2 } },
      { text: "企業向けシステム・DXプロジェクト", scores: { se: 2, consultant: 2 } },
    ],
  },
  {
    id: 12,
    text: "スキルアップのために今すぐ取り組みたいのは？",
    options: [
      { text: "個人OSSやポートフォリオサイトを磨く", scores: { web: 3, programmer: 2 } },
      { text: "クラウド認定資格（AWS/GCP）を取得する", scores: { cloud: 3, server: 1 } },
      { text: "Kaggleやデータ分析コンペに参加する", scores: { data: 3, ai: 2 } },
      { text: "PMP・情報処理試験などマネジメント系資格を取る", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 13,
    text: "チームの生産性を上げるために真っ先にやりたいことは？",
    options: [
      { text: "デザインシステム・コンポーネントライブラリを整備", scores: { web: 3, tester: 1 } },
      { text: "デプロイ自動化・モニタリング強化", scores: { cloud: 3, server: 1 } },
      { text: "データ可視化ダッシュボードを作り意思決定を速める", scores: { data: 3, pm: 1 } },
      { text: "仕様書テンプレートを整備してコミュニケーションを減らす", scores: { se: 3, pm: 1 } },
    ],
  },
  {
    id: 14,
    text: "転職・副業でチェックする求人条件として最も重視するのは？",
    options: [
      { text: "使用技術スタック（React/TypeScript/最新フレームワーク）", scores: { web: 3, programmer: 1 } },
      { text: "AIや機械学習をプロダクトに使っているか", scores: { ai: 3, data: 1 } },
      { text: "クラウドネイティブ・DevOpsが整っているか", scores: { cloud: 3, server: 1 } },
      { text: "裁量・事業グロースへの関与度", scores: { pm: 2, consultant: 2 } },
    ],
  },
  {
    id: 15,
    text: "10年後、どんな働き方をしていたい？",
    options: [
      { text: "テクニカルフェロー・著名なフロントエンドエンジニア", scores: { web: 3, programmer: 2 } },
      { text: "AI・データ分野のスペシャリストとして独立", scores: { ai: 3, data: 2 } },
      { text: "クラウドアーキテクト・フリーランスSRE", scores: { cloud: 3, server: 2 } },
      { text: "CTO・テック企業の創業者", scores: { pm: 2, consultant: 2 } },
    ],
  },
];

const SE_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "SEとして最もやりがいを感じる瞬間は？",
    options: [
      { text: "要件定義をまとめてシステム設計が完成したとき", scores: { se: 3, pm: 1 } },
      { text: "設計通りに実装が動き、ユーザーに届けられたとき", scores: { programmer: 3, web: 1 } },
      { text: "クライアントの課題を提案で解決できたとき", scores: { consultant: 3, pm: 1 } },
      { text: "インフラ設計でシステムの安定性が上がったとき", scores: { cloud: 2, server: 2 } },
    ],
  },
  {
    id: 2,
    text: "今後身につけたい専門スキルは？",
    options: [
      { text: "AIアーキテクチャ・LLMのシステム組み込み", scores: { ai: 3, data: 1 } },
      { text: "クラウド・IaC・DevOpsの自動化基盤", scores: { cloud: 3, server: 1 } },
      { text: "セキュリティ設計・ゼロトラストアーキテクチャ", scores: { security: 3, network: 1 } },
      { text: "データ基盤・BIシステムの設計・構築", scores: { data: 3, consultant: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後に就きたいポジションは？",
    options: [
      { text: "上流工程を担うシニアSE・アーキテクト", scores: { se: 3, cloud: 1 } },
      { text: "PM・PMOとしてプロジェクト全体を率いる", scores: { pm: 3, consultant: 1 } },
      { text: "ITコンサルとして経営・DXを推進", scores: { consultant: 3, pm: 1 } },
      { text: "スペシャリスト（AI・セキュリティ・データ）", scores: { ai: 2, security: 2, data: 1 } },
    ],
  },
  {
    id: 4,
    text: "プロジェクトで最も得意なフェーズは？",
    options: [
      { text: "要件定義・ヒアリング・仕様書作成", scores: { se: 3, consultant: 1 } },
      { text: "実装・コーディング・バグ修正", scores: { programmer: 3, web: 1 } },
      { text: "テスト計画・品質管理・リリース判定", scores: { tester: 3, pm: 1 } },
      { text: "運用・監視・インシデント対応", scores: { server: 2, cloud: 2 } },
    ],
  },
  {
    id: 5,
    text: "クライアントとの会議で最も力を発揮できるのは？",
    options: [
      { text: "技術的な制約・実現可能性を的確に説明する", scores: { se: 3, programmer: 1 } },
      { text: "課題の本質を捉え、戦略的な提案をする", scores: { consultant: 3, pm: 1 } },
      { text: "スケジュール・コスト・リスクの管理を仕切る", scores: { pm: 3, se: 1 } },
      { text: "データに基づいた意思決定を促す", scores: { data: 3, consultant: 1 } },
    ],
  },
  {
    id: 6,
    text: "今の仕事で最もストレスに感じることは？",
    options: [
      { text: "コードを書く機会が少なく、手を動かしたい", scores: { programmer: 3, web: 2 } },
      { text: "インフラ・クラウドの知識が不足していると感じる", scores: { cloud: 3, server: 2 } },
      { text: "データ分析の知識がなく、判断根拠が薄くなる", scores: { data: 3, ai: 1 } },
      { text: "セキュリティ要件への対応に自信が持てない", scores: { security: 3, network: 1 } },
    ],
  },
  {
    id: 7,
    text: "技術とビジネスのどちらに軸足を置きたい？",
    options: [
      { text: "技術の深掘り・スペシャリストとして極める", scores: { ai: 2, security: 2, data: 2 } },
      { text: "ビジネス側に近い立場でIT活用を推進したい", scores: { consultant: 3, pm: 2 } },
      { text: "インフラ・プラットフォームの技術を深める", scores: { cloud: 3, server: 2 } },
      { text: "実装寄りになって開発スキルを高めたい", scores: { programmer: 3, web: 1 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで最も重視することは？",
    options: [
      { text: "技術力・実装スキルの向上", scores: { programmer: 3, web: 2 } },
      { text: "AIやデータを活用した新しいシステム設計", scores: { ai: 2, data: 2, cloud: 1 } },
      { text: "大きなプロジェクトをリードするマネジメント力", scores: { pm: 3, consultant: 2 } },
      { text: "クラウドネイティブ・自動化の実践力", scores: { cloud: 3, server: 2 } },
    ],
  },
  {
    id: 9,
    text: "設計書を書くとき最も力が入るのはどの部分？",
    options: [
      { text: "業務フロー・ユースケース・ユーザーストーリー", scores: { se: 3, consultant: 1 } },
      { text: "データモデル・ER図・テーブル設計", scores: { programmer: 2, data: 2 } },
      { text: "インフラ構成図・クラウドアーキテクチャ", scores: { cloud: 3, server: 1 } },
      { text: "リスク一覧・セキュリティ要件・コンプライアンス", scores: { security: 2, pm: 2 } },
    ],
  },
  {
    id: 10,
    text: "チームのエンジニアをまとめるとき最も意識することは？",
    options: [
      { text: "設計思想・コーディング規約を統一して品質を高める", scores: { se: 3, programmer: 1 } },
      { text: "メンバーの成長・キャリアパスを支援する", scores: { pm: 3, consultant: 1 } },
      { text: "各自の技術専門性を活かした役割分担をする", scores: { pm: 2, se: 2 } },
      { text: "AIや新技術の導入で生産性を上げる施策を打つ", scores: { ai: 2, cloud: 2 } },
    ],
  },
  {
    id: 11,
    text: "今後携わりたいプロジェクトの規模・種類は？",
    options: [
      { text: "大規模エンタープライズ向けの基幹システム刷新", scores: { se: 3, consultant: 1 } },
      { text: "AI・データを核にしたスタートアップのプロダクト開発", scores: { ai: 2, data: 2 } },
      { text: "クラウドネイティブなWebサービスの新規立ち上げ", scores: { cloud: 2, web: 2 } },
      { text: "セキュリティ・コンプライアンスを重視した金融・医療系", scores: { security: 3, se: 1 } },
    ],
  },
  {
    id: 12,
    text: "上流工程と下流工程、どちらにより魅力を感じますか？",
    options: [
      { text: "上流（要件定義・設計）に集中したい", scores: { se: 3, consultant: 1 } },
      { text: "下流（実装・テスト・デプロイ）を極めたい", scores: { programmer: 3, cloud: 1 } },
      { text: "両方をリードできるフルスタックSEになりたい", scores: { se: 2, programmer: 2 } },
      { text: "プロジェクト全体を管理するPM寄りになりたい", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 13,
    text: "DX推進の場面で最も貢献できることは？",
    options: [
      { text: "業務フローを分析してシステム化すべき箇所を特定", scores: { se: 3, consultant: 2 } },
      { text: "AIや機械学習で業務を自動化する仕組みを実装", scores: { ai: 3, data: 1 } },
      { text: "クラウド移行・自動化でコストと速度を最適化", scores: { cloud: 3, server: 1 } },
      { text: "変革の戦略を描いてステークホルダーを動かす", scores: { consultant: 3, pm: 2 } },
    ],
  },
  {
    id: 14,
    text: "システム障害が起きたとき、最も優先することは？",
    options: [
      { text: "設計書を見直して根本原因を特定・設計改善を提案", scores: { se: 3, programmer: 1 } },
      { text: "ログを深く掘り下げてサーバー・インフラ側の原因を追う", scores: { server: 2, cloud: 2 } },
      { text: "クライアント・経営層への迅速な報告と影響範囲の説明", scores: { pm: 3, consultant: 1 } },
      { text: "セキュリティインシデントの可能性を最優先で調査", scores: { security: 3, network: 1 } },
    ],
  },
  {
    id: 15,
    text: "SEとして10年後も輝いているイメージに近いのは？",
    options: [
      { text: "業界随一のアーキテクトとして大規模設計を手がける", scores: { se: 3, cloud: 1 } },
      { text: "AI・データ領域のエキスパートとして市場価値を高める", scores: { ai: 3, data: 2 } },
      { text: "CIOやCTOとして組織のIT戦略を担う", scores: { consultant: 2, pm: 2 } },
      { text: "PM・マネージャーとして大きなチームを率いる", scores: { pm: 3, consultant: 1 } },
    ],
  },
];

const PROGRAMMER_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "プログラマーとして最も楽しいのは？",
    options: [
      { text: "ゼロからコードを書いて機能を完成させる", scores: { programmer: 3, web: 1 } },
      { text: "複雑なバグを追い詰めて解決する", scores: { programmer: 3, security: 1 } },
      { text: "設計から実装まで全体を担う", scores: { se: 2, web: 2 } },
      { text: "チームの開発基盤・ツールを整備する", scores: { cloud: 3, server: 1 } },
    ],
  },
  {
    id: 2,
    text: "今後挑戦したい分野は？",
    options: [
      { text: "機械学習・生成AIをサービスに組み込む", scores: { ai: 3, data: 2 } },
      { text: "クラウドネイティブ・コンテナ・Kubernetes", scores: { cloud: 3, server: 1 } },
      { text: "UI/UXを磨いてフロントエンドを極める", scores: { web: 3, tester: 1 } },
      { text: "セキュリティ・脆弱性対策を深く学ぶ", scores: { security: 3, network: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後の理想の姿は？",
    options: [
      { text: "特定領域の第一人者・OSS コントリビューター", scores: { programmer: 3, ai: 1 } },
      { text: "AIエンジニア・データサイエンティスト", scores: { ai: 3, data: 2 } },
      { text: "テックリード・エンジニアリングマネージャー", scores: { pm: 2, se: 2 } },
      { text: "SRE・クラウドアーキテクト", scores: { cloud: 3, server: 2 } },
    ],
  },
  {
    id: 4,
    text: "コードレビューで最も指摘したいのは？",
    options: [
      { text: "可読性・命名・設計の美しさ", scores: { programmer: 3, se: 1 } },
      { text: "パフォーマンス・アルゴリズムの最適化", scores: { data: 2, ai: 2 } },
      { text: "セキュリティホール・インジェクションの穴", scores: { security: 3, tester: 1 } },
      { text: "インフラ負荷・スケーラビリティへの影響", scores: { cloud: 2, server: 2 } },
    ],
  },
  {
    id: 5,
    text: "開発中に最も集中できるのは？",
    options: [
      { text: "アルゴリズム・ロジックを考えて実装する時間", scores: { programmer: 3, ai: 1 } },
      { text: "UIコンポーネントをデザイン通りに作る時間", scores: { web: 3, tester: 1 } },
      { text: "インフラ構成・CI/CD パイプラインを組む時間", scores: { cloud: 3, server: 1 } },
      { text: "データモデル・クエリを最適化する時間", scores: { data: 3, se: 1 } },
    ],
  },
  {
    id: 6,
    text: "チームの中で担いたい役割は？",
    options: [
      { text: "実装のクオリティを高めるエース開発者", scores: { programmer: 3, web: 1 } },
      { text: "設計・仕様をリードするアーキテクト", scores: { se: 3, pm: 1 } },
      { text: "インフラ・基盤を支えるSRE", scores: { cloud: 3, server: 1 } },
      { text: "AI・データ活用を推進するスペシャリスト", scores: { ai: 3, data: 2 } },
    ],
  },
  {
    id: 7,
    text: "今最も気になるITトレンドは？",
    options: [
      { text: "Rust・Go・WebAssembly などの新言語・技術", scores: { programmer: 3, embedded: 1 } },
      { text: "生成AI・LLMエージェント・RAG", scores: { ai: 3, data: 1 } },
      { text: "クラウドネイティブ・FinOps・Platform Engineering", scores: { cloud: 3, server: 1 } },
      { text: "テスト自動化・品質保証・シフトレフト", scores: { tester: 3, security: 1 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "技術を極めてエキスパートエンジニアになる", scores: { programmer: 3, ai: 1 } },
      { text: "UI/UXも含めたフルスタック力を高める", scores: { web: 3, se: 1 } },
      { text: "AI・データ分野でビジネス価値を出す", scores: { ai: 2, data: 2, consultant: 1 } },
      { text: "インフラ・クラウドも含めた全体最適化", scores: { cloud: 3, server: 2 } },
    ],
  },
  {
    id: 9,
    text: "実装の「美しさ」でこだわっているのはどれ？",
    options: [
      { text: "DRY・SOLID原則に沿った保守しやすいコード", scores: { programmer: 3, se: 1 } },
      { text: "パフォーマンスを限界まで引き出す最適化", scores: { ai: 2, data: 2 } },
      { text: "テストカバレッジ100%に近い安全なコード", scores: { tester: 3, security: 1 } },
      { text: "ユーザーが体感できるUI/UXの磨き込み", scores: { web: 3, programmer: 1 } },
    ],
  },
  {
    id: 10,
    text: "プログラマーとして最も成長を感じた経験は？",
    options: [
      { text: "難しいアルゴリズム問題を独力で解いたとき", scores: { programmer: 3, ai: 1 } },
      { text: "本番障害を根本解決してシステムを安定させたとき", scores: { server: 2, cloud: 2 } },
      { text: "初めてAI/MLを実装してモデルが動いたとき", scores: { ai: 3, data: 2 } },
      { text: "設計を担当してチームが迷わず実装できたとき", scores: { se: 3, pm: 1 } },
    ],
  },
  {
    id: 11,
    text: "副業・個人開発でやってみたいのは？",
    options: [
      { text: "自分のWebサービス・アプリをリリースする", scores: { web: 3, programmer: 2 } },
      { text: "OSSにコントリビュートして技術力を上げる", scores: { programmer: 3, ai: 1 } },
      { text: "データ分析・AIツールを作ってQiita/Zennで発信", scores: { data: 3, ai: 2 } },
      { text: "セキュリティ系のCTFや脆弱性報告に挑戦", scores: { security: 3, programmer: 1 } },
    ],
  },
  {
    id: 12,
    text: "将来的に「コードを書かない仕事」への関心は？",
    options: [
      { text: "ずっとコードを書き続けたい、それが天職", scores: { programmer: 3, embedded: 1 } },
      { text: "設計・アーキテクトとしてコードを減らしていきたい", scores: { se: 3, cloud: 1 } },
      { text: "PM・コンサルとしてビジネス側に移りたい", scores: { pm: 2, consultant: 2 } },
      { text: "AI研究・データサイエンス寄りに移行したい", scores: { ai: 3, data: 2 } },
    ],
  },
  {
    id: 13,
    text: "プロジェクトで最も価値を発揮できる場面は？",
    options: [
      { text: "難易度の高い機能実装・パフォーマンスチューニング", scores: { programmer: 3, ai: 1 } },
      { text: "テスト設計・品質担保・バグゼロへの徹底", scores: { tester: 3, security: 1 } },
      { text: "インフラ・自動化で開発フローを最適化", scores: { cloud: 3, server: 1 } },
      { text: "要件ヒアリングから設計まで上流を担う", scores: { se: 3, consultant: 1 } },
    ],
  },
  {
    id: 14,
    text: "プログラミング言語・技術スタックへのこだわりは？",
    options: [
      { text: "特定言語を極めて第一人者になりたい", scores: { programmer: 3, embedded: 1 } },
      { text: "TypeScript/Python など汎用性の高い言語で幅広く", scores: { web: 2, ai: 2 } },
      { text: "インフラ・スクリプト・設定言語も含めて何でも書く", scores: { cloud: 3, server: 1 } },
      { text: "言語よりもアーキテクチャや設計パターンを重視", scores: { se: 3, programmer: 1 } },
    ],
  },
  {
    id: 15,
    text: "10年後の自分に最も近いイメージは？",
    options: [
      { text: "世界中で使われるOSSを作った著名エンジニア", scores: { programmer: 3, ai: 1 } },
      { text: "AIスタートアップのCTO・テックリード", scores: { ai: 2, pm: 2 } },
      { text: "クラウド・インフラのフリーランス上級エンジニア", scores: { cloud: 3, server: 2 } },
      { text: "セキュリティ専門家・著名なリサーチャー", scores: { security: 3, programmer: 1 } },
    ],
  },
];

const EMBEDDED_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "組み込みエンジニアとして最もやりがいを感じるのは？",
    options: [
      { text: "ハードウェアとソフトウェアが正確に連携して動いた瞬間", scores: { embedded: 3, network: 1 } },
      { text: "パフォーマンス・メモリ最適化で性能を限界まで引き出す", scores: { embedded: 3, programmer: 1 } },
      { text: "デバイスのファームウェアを設計・アーキテクチャから担当", scores: { se: 2, embedded: 2 } },
      { text: "IoT・クラウド連携でデバイスをつなげる仕組みを作る", scores: { cloud: 2, network: 2 } },
    ],
  },
  {
    id: 2,
    text: "今後深めたい技術領域は？",
    options: [
      { text: "エッジAI・機械学習を組み込みデバイスに実装", scores: { ai: 3, embedded: 1 } },
      { text: "クラウドIoT・データ収集・分析基盤", scores: { cloud: 2, data: 2 } },
      { text: "セキュリティ・暗号化・JTAG保護", scores: { security: 3, embedded: 1 } },
      { text: "ネットワークプロトコル・通信スタックの実装", scores: { network: 3, embedded: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後に就きたいポジションは？",
    options: [
      { text: "組み込み・ファームウェアのエキスパートエンジニア", scores: { embedded: 3, programmer: 1 } },
      { text: "IoT・エッジコンピューティングのアーキテクト", scores: { cloud: 2, embedded: 2 } },
      { text: "AI・機械学習エンジニアとして最前線に立つ", scores: { ai: 3, data: 1 } },
      { text: "技術部門のリーダー・PMとしてプロジェクトを率いる", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 4,
    text: "開発で最も集中できるのは？",
    options: [
      { text: "デバイスドライバ・低レイヤーのコード実装", scores: { embedded: 3, programmer: 1 } },
      { text: "通信プロトコル・ネットワーク処理の実装", scores: { network: 3, embedded: 1 } },
      { text: "センサーデータの収集・解析ロジック", scores: { data: 3, ai: 1 } },
      { text: "システム全体のアーキテクチャ・設計書の作成", scores: { se: 3, pm: 1 } },
    ],
  },
  {
    id: 5,
    text: "「ものをつなぐ」仕事で興味があるのは？",
    options: [
      { text: "工場の製造ライン・産業用ロボットの制御", scores: { embedded: 3, programmer: 1 } },
      { text: "スマートホーム・家電のIoTクラウド連携", scores: { cloud: 2, network: 2 } },
      { text: "自動車の自動運転・ADAS制御", scores: { embedded: 3, ai: 1 } },
      { text: "医療機器・ヘルスケアデバイスの開発", scores: { embedded: 2, security: 2 } },
    ],
  },
  {
    id: 6,
    text: "チームで最も貢献できると思う役割は？",
    options: [
      { text: "低レイヤー実装のスペシャリスト", scores: { embedded: 3, programmer: 1 } },
      { text: "ネットワーク・通信レイヤーの専門家", scores: { network: 3, embedded: 1 } },
      { text: "AI・データ処理の担当", scores: { ai: 2, data: 2 } },
      { text: "プロジェクト全体の技術リード", scores: { se: 2, pm: 2 } },
    ],
  },
  {
    id: 7,
    text: "今の仕事で最もストレスを感じることは？",
    options: [
      { text: "ハードウェアの制約で思い通りに実装できない", scores: { cloud: 2, programmer: 2 } },
      { text: "データ活用・AIの導入が遅れている", scores: { data: 3, ai: 2 } },
      { text: "セキュリティ要件の複雑さ・脆弱性対応", scores: { security: 3, network: 1 } },
      { text: "クラウド連携・DevOpsの知識が不足", scores: { cloud: 3, server: 1 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで最も求めることは？",
    options: [
      { text: "ハードウェアを離れてソフトウェア寄りに移行", scores: { programmer: 3, web: 1 } },
      { text: "IoTクラウド・データ基盤のエキスパートになる", scores: { cloud: 2, data: 2 } },
      { text: "エッジAI・MLをデバイスに実装する", scores: { ai: 3, embedded: 1 } },
      { text: "組み込みの専門性を活かしたマネジメント職", scores: { pm: 2, se: 2 } },
    ],
  },
  {
    id: 9,
    text: "組み込み開発で最も達成感を感じる瞬間は？",
    options: [
      { text: "ゼロから書いたファームウェアが実機で動いた", scores: { embedded: 3, programmer: 1 } },
      { text: "通信プロトコルを独自実装して安定動作を実現した", scores: { network: 3, embedded: 1 } },
      { text: "センサーデータをクラウドに送る仕組みを作った", scores: { cloud: 2, data: 2 } },
      { text: "消費電力・メモリを極限まで最適化した", scores: { embedded: 3, programmer: 1 } },
    ],
  },
  {
    id: 10,
    text: "組み込み以外で最も興味を持っている技術領域は？",
    options: [
      { text: "機械学習・エッジAIのモデル実装", scores: { ai: 3, data: 1 } },
      { text: "クラウドIoTプラットフォームの設計・構築", scores: { cloud: 3, server: 1 } },
      { text: "ネットワークセキュリティ・暗号化プロトコル", scores: { security: 3, network: 1 } },
      { text: "Webアプリ・APIサーバーなどソフトウェア全般", scores: { programmer: 3, web: 1 } },
    ],
  },
  {
    id: 11,
    text: "今後関わりたい製品・業界は？",
    options: [
      { text: "自動車・EV・ADAS・自動運転システム", scores: { embedded: 3, ai: 1 } },
      { text: "スマートファクトリー・産業ロボット・FA", scores: { embedded: 3, programmer: 1 } },
      { text: "医療機器・ウェアラブル・ヘルスケアデバイス", scores: { embedded: 2, security: 2 } },
      { text: "スマートホーム・家電・コンシューマーIoT", scores: { cloud: 2, embedded: 2 } },
    ],
  },
  {
    id: 12,
    text: "チームでの役割として最も力を発揮できるのは？",
    options: [
      { text: "ハードとソフトの橋渡しをする技術調整役", scores: { embedded: 3, se: 1 } },
      { text: "通信・プロトコル層の専門家", scores: { network: 3, embedded: 1 } },
      { text: "データ収集・分析基盤の担当", scores: { data: 3, cloud: 1 } },
      { text: "プロジェクト全体の技術リード・設計責任者", scores: { se: 2, pm: 2 } },
    ],
  },
  {
    id: 13,
    text: "組み込みエンジニアとして最も課題を感じていることは？",
    options: [
      { text: "クラウド・Web連携の知識が不足している", scores: { cloud: 3, server: 1 } },
      { text: "AI・機械学習をデバイスに使う手法を知りたい", scores: { ai: 3, data: 1 } },
      { text: "セキュリティ要件・ファームウェア保護が難しい", scores: { security: 3, network: 1 } },
      { text: "プロジェクト管理・仕様書作成が苦手", scores: { se: 2, pm: 2 } },
    ],
  },
  {
    id: 14,
    text: "将来的に専門性を活かして目指したいキャリアは？",
    options: [
      { text: "組み込み・IoTのアーキテクト・技術顧問", scores: { embedded: 3, se: 1 } },
      { text: "エッジAI・MLOpsを専門とするAIエンジニア", scores: { ai: 3, embedded: 1 } },
      { text: "クラウドIoT・データエンジニアへシフト", scores: { cloud: 2, data: 2 } },
      { text: "R&D・研究職・技術系スタートアップの創業", scores: { programmer: 2, ai: 2 } },
    ],
  },
  {
    id: 15,
    text: "10年後、組み込みエンジニアとしての理想像は？",
    options: [
      { text: "次世代デバイスを設計する世界レベルのエキスパート", scores: { embedded: 3, programmer: 1 } },
      { text: "AIと組み込みを融合した製品を作る研究開発者", scores: { ai: 3, embedded: 1 } },
      { text: "IoT×クラウドを統合設計するアーキテクト", scores: { cloud: 3, server: 1 } },
      { text: "技術部門のマネージャー・CTO・起業家", scores: { pm: 2, consultant: 2 } },
    ],
  },
];

const SERVER_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "サーバーエンジニアとして最も誇りを感じるのは？",
    options: [
      { text: "24時間止まらないシステムを設計・維持している", scores: { server: 3, cloud: 1 } },
      { text: "障害をゼロに近づける監視・冗長化設計", scores: { server: 3, security: 1 } },
      { text: "コスト削減・パフォーマンスチューニングで成果を出す", scores: { cloud: 3, server: 1 } },
      { text: "インフラをコード化・自動化して生産性を高める", scores: { cloud: 3, programmer: 1 } },
    ],
  },
  {
    id: 2,
    text: "今後深めたい技術は？",
    options: [
      { text: "Kubernetes・コンテナオーケストレーション", scores: { cloud: 3, server: 1 } },
      { text: "セキュリティ・ゼロトラスト・SIEM", scores: { security: 3, network: 1 } },
      { text: "データ基盤・ストリーム処理・データレイク", scores: { data: 3, cloud: 1 } },
      { text: "AIインフラ・MLOps・GPU クラスタ管理", scores: { ai: 3, cloud: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後のポジションとして最もイメージに近いのは？",
    options: [
      { text: "SRE・プラットフォームエンジニアリングのリード", scores: { cloud: 3, server: 2 } },
      { text: "セキュリティエンジニア・SOCアナリスト", scores: { security: 3, network: 1 } },
      { text: "データエンジニア・データアーキテクト", scores: { data: 3, cloud: 1 } },
      { text: "インフラPM・テクニカルマネージャー", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 4,
    text: "インシデント対応で最も得意なのは？",
    options: [
      { text: "ログ・メトリクスの深い解析で根本原因を特定", scores: { server: 3, cloud: 1 } },
      { text: "ネットワーク層の問題切り分けと復旧", scores: { network: 3, server: 1 } },
      { text: "セキュリティインシデントの調査・フォレンジック", scores: { security: 3, server: 1 } },
      { text: "関係者への状況共有・対応指揮・事後報告", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 5,
    text: "インフラ設計で最も興味があるのは？",
    options: [
      { text: "マルチクラウド・ハイブリッドクラウド戦略", scores: { cloud: 3, server: 1 } },
      { text: "ネットワーク・ファイアウォール・セグメンテーション", scores: { network: 2, security: 2 } },
      { text: "データ基盤・ストレージ・バックアップ設計", scores: { data: 2, server: 2 } },
      { text: "AIワークロード向けGPU・高性能コンピューティング", scores: { ai: 3, cloud: 1 } },
    ],
  },
  {
    id: 6,
    text: "今の仕事で最もストレスを感じることは？",
    options: [
      { text: "セキュリティ要件が増え続けて対応が難しい", scores: { security: 3, network: 1 } },
      { text: "データ活用・分析の仕組みが弱い", scores: { data: 3, cloud: 1 } },
      { text: "クラウド化・自動化が進まず手作業が多い", scores: { cloud: 3, programmer: 1 } },
      { text: "ビジネス側との認識ギャップが大きい", scores: { consultant: 2, pm: 2 } },
    ],
  },
  {
    id: 7,
    text: "チームで最も力を発揮できる場面は？",
    options: [
      { text: "技術的な複雑問題を深く調査・解決する", scores: { server: 3, security: 1 } },
      { text: "自動化・ツール整備でチームの効率を上げる", scores: { cloud: 3, programmer: 1 } },
      { text: "プロジェクトの計画・リスク管理をする", scores: { pm: 3, se: 1 } },
      { text: "セキュリティ・コンプライアンスを主導する", scores: { security: 3, network: 1 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "クラウドアーキテクト・SREとして全体設計を担う", scores: { cloud: 3, server: 2 } },
      { text: "セキュリティ専門家として守りの第一線に立つ", scores: { security: 3, network: 1 } },
      { text: "データエンジニアリング・AI基盤の構築", scores: { data: 2, ai: 2 } },
      { text: "インフラPM・マネージャーとして組織をまとめる", scores: { pm: 3, consultant: 1 } },
    ],
  },
  {
    id: 9,
    text: "サーバー運用で最も誇りに思う仕事は？",
    options: [
      { text: "重大障害をゼロダウンタイムで復旧させた", scores: { server: 3, cloud: 1 } },
      { text: "監視体制を整備してアラートを大幅削減した", scores: { server: 3, security: 1 } },
      { text: "コスト最適化で年間数百万円の削減を達成した", scores: { cloud: 3, consultant: 1 } },
      { text: "インフラをコード化して環境構築を自動化した", scores: { cloud: 3, programmer: 1 } },
    ],
  },
  {
    id: 10,
    text: "インフラ設計で最もこだわっている観点は？",
    options: [
      { text: "可用性・冗長化・フェイルオーバーの徹底", scores: { server: 3, cloud: 1 } },
      { text: "セキュリティ・ネットワーク分離・最小権限原則", scores: { security: 3, network: 1 } },
      { text: "コスト最適化・リソース効率・スケーリング", scores: { cloud: 3, server: 1 } },
      { text: "データ保全・バックアップ・DR設計", scores: { data: 2, server: 2 } },
    ],
  },
  {
    id: 11,
    text: "今後最も深めたいインフラ技術は？",
    options: [
      { text: "Kubernetes・コンテナオーケストレーション全般", scores: { cloud: 3, server: 1 } },
      { text: "セキュリティ監視・SIEM・SOCの構築運用", scores: { security: 3, network: 1 } },
      { text: "データレイク・ストリーミング・ビッグデータ基盤", scores: { data: 3, cloud: 1 } },
      { text: "GPU/AIインフラ・MLOps基盤の設計構築", scores: { ai: 3, cloud: 1 } },
    ],
  },
  {
    id: 12,
    text: "インフラエンジニアとして5年後のキャリアビジョンは？",
    options: [
      { text: "SREリード・プラットフォームエンジニアリング責任者", scores: { cloud: 3, server: 2 } },
      { text: "セキュリティアーキテクト・CISO補佐", scores: { security: 3, network: 1 } },
      { text: "データエンジニア・データアーキテクト", scores: { data: 3, cloud: 1 } },
      { text: "インフラ部門マネージャー・テクニカルPM", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 13,
    text: "クラウドに対する今のスタンスは？",
    options: [
      { text: "クラウドを極めてオンプレを卒業したい", scores: { cloud: 3, server: 1 } },
      { text: "オンプレとクラウドのハイブリッドを極める", scores: { server: 2, network: 2 } },
      { text: "クラウドセキュリティを強化したい", scores: { security: 3, cloud: 1 } },
      { text: "クラウド上のAI・データ基盤を専門にしたい", scores: { ai: 2, data: 2 } },
    ],
  },
  {
    id: 14,
    text: "ビジネス側と連携する場面で最も重視することは？",
    options: [
      { text: "インフラのコストと価値を分かりやすく伝える", scores: { consultant: 2, pm: 2 } },
      { text: "障害リスクを事前に説明し予算を確保する", scores: { server: 2, security: 2 } },
      { text: "データ基盤の整備でビジネス判断を速める", scores: { data: 3, pm: 1 } },
      { text: "AI活用のための基盤を整えて提案する", scores: { ai: 3, cloud: 1 } },
    ],
  },
  {
    id: 15,
    text: "10年後のキャリアとして最もイメージに近いのは？",
    options: [
      { text: "大規模クラウド基盤を設計するアーキテクト", scores: { cloud: 3, server: 2 } },
      { text: "セキュリティ・コンプライアンスの権威", scores: { security: 3, network: 1 } },
      { text: "データ・AIインフラの専門家として独立", scores: { data: 2, ai: 2 } },
      { text: "テック企業のVPoE・CTO", scores: { pm: 2, consultant: 2 } },
    ],
  },
];

const NETWORK_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "ネットワークエンジニアとして最もやりがいを感じるのは？",
    options: [
      { text: "大規模ネットワークの設計・構築を完成させた", scores: { network: 3, server: 1 } },
      { text: "通信障害を素早く切り分けて復旧した", scores: { network: 3, security: 1 } },
      { text: "セキュリティポリシーで会社を守っている", scores: { security: 3, network: 1 } },
      { text: "クラウドとオンプレの統合基盤を設計した", scores: { cloud: 3, network: 1 } },
    ],
  },
  {
    id: 2,
    text: "今後学びたい技術領域は？",
    options: [
      { text: "ゼロトラスト・クラウドセキュリティ・SASE", scores: { security: 3, cloud: 1 } },
      { text: "クラウドネットワーク・SDN・仮想化", scores: { cloud: 3, network: 1 } },
      { text: "ネットワーク監視・可視化・データ分析", scores: { data: 2, server: 2 } },
      { text: "セキュリティ資格・CISSP・CEH取得", scores: { security: 3, network: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後のポジションとして最もイメージに近いのは？",
    options: [
      { text: "ネットワークアーキテクト・上位設計の専門家", scores: { network: 3, se: 1 } },
      { text: "セキュリティエンジニア・CISOへのキャリアパス", scores: { security: 3, network: 1 } },
      { text: "クラウドエンジニア・SRE", scores: { cloud: 3, server: 1 } },
      { text: "ネットワークPM・インフラ部門マネージャー", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 4,
    text: "業務で最も集中できるのは？",
    options: [
      { text: "機器の設定・コンフィグ管理・パラメータ調整", scores: { network: 3, embedded: 1 } },
      { text: "パケットキャプチャ・通信解析・トラブルシュート", scores: { network: 3, security: 1 } },
      { text: "クラウドVPN・接続設計の検証作業", scores: { cloud: 2, network: 2 } },
      { text: "設計書・手順書・構成図の作成", scores: { se: 3, pm: 1 } },
    ],
  },
  {
    id: 5,
    text: "セキュリティと通信、どちらにより強い関心がありますか？",
    options: [
      { text: "セキュリティを深く専門化したい", scores: { security: 3, network: 1 } },
      { text: "ネットワーク技術をさらに極めたい", scores: { network: 3, embedded: 1 } },
      { text: "両方をクラウド上で統合的に担いたい", scores: { cloud: 3, server: 1 } },
      { text: "データ監視・分析も含めた全体を見たい", scores: { data: 2, server: 2 } },
    ],
  },
  {
    id: 6,
    text: "チームで最も得意な役割は？",
    options: [
      { text: "技術的な問題を独力で解決するスペシャリスト", scores: { network: 3, security: 1 } },
      { text: "プロジェクト全体の進捗・リスクを管理する", scores: { pm: 3, se: 1 } },
      { text: "クラウド移行・自動化を主導する", scores: { cloud: 3, server: 1 } },
      { text: "セキュリティポリシー・コンプライアンスを担う", scores: { security: 3, network: 1 } },
    ],
  },
  {
    id: 7,
    text: "今の仕事で最もストレスを感じることは？",
    options: [
      { text: "クラウド化が進んでオンプレ技術が陳腐化している", scores: { cloud: 3, server: 1 } },
      { text: "セキュリティ脅威が高度化して対応が追いつかない", scores: { security: 3, network: 1 } },
      { text: "データ可視化・監視の仕組みが不十分", scores: { data: 2, server: 2 } },
      { text: "ビジネス側との連携・コミュニケーションが難しい", scores: { consultant: 2, pm: 2 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "セキュリティエキスパートとして深く専門化", scores: { security: 3, network: 1 } },
      { text: "クラウドネットワーク・SREへのシフト", scores: { cloud: 3, server: 2 } },
      { text: "上位設計・アーキテクトとして組織をリード", scores: { se: 2, pm: 2 } },
      { text: "コンサルタントとしてIT戦略を提案する立場に", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 9,
    text: "ネットワーク設計で最もやりがいを感じる作業は？",
    options: [
      { text: "大規模ネットワークの論理・物理設計を完成させる", scores: { network: 3, se: 1 } },
      { text: "パケットキャプチャで難解な通信問題を解明する", scores: { network: 3, security: 1 } },
      { text: "クラウドVPN・SD-WANを設計して接続性を最適化", scores: { cloud: 3, network: 1 } },
      { text: "ファイアウォール・WAFで侵入経路を完全遮断する", scores: { security: 3, network: 1 } },
    ],
  },
  {
    id: 10,
    text: "今後深めたいネットワーク関連の専門領域は？",
    options: [
      { text: "SD-WAN・クラウドネットワーク・NFV仮想化", scores: { cloud: 3, network: 1 } },
      { text: "ゼロトラスト・SASE・クラウドセキュリティ", scores: { security: 3, cloud: 1 } },
      { text: "5G・エッジコンピューティング・IoT通信", scores: { embedded: 2, network: 2 } },
      { text: "ネットワーク監視・可視化・AIによる異常検知", scores: { data: 2, ai: 2 } },
    ],
  },
  {
    id: 11,
    text: "資格取得について最も意欲があるのは？",
    options: [
      { text: "CCIE・NP など上位ネットワーク資格", scores: { network: 3, server: 1 } },
      { text: "CISSP・CEH などセキュリティ上位資格", scores: { security: 3, network: 1 } },
      { text: "AWS/GCP Professional などクラウド上位資格", scores: { cloud: 3, server: 1 } },
      { text: "PMP・ITストラテジストなどマネジメント系", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 12,
    text: "チームの中でどのような存在でありたい？",
    options: [
      { text: "通信トラブルを誰より速く解決する専門家", scores: { network: 3, server: 1 } },
      { text: "セキュリティの番人としてチームを守る存在", scores: { security: 3, network: 1 } },
      { text: "クラウド移行・モダナイゼーションを牽引する存在", scores: { cloud: 3, server: 1 } },
      { text: "全体のネットワーク戦略・方針を決める責任者", scores: { se: 2, pm: 2 } },
    ],
  },
  {
    id: 13,
    text: "今の仕事が将来的に変化するとしたら？",
    options: [
      { text: "クラウド化が進んでオンプレ作業が減っていく", scores: { cloud: 3, server: 1 } },
      { text: "セキュリティ要件がさらに高度化・複雑化する", scores: { security: 3, network: 1 } },
      { text: "AIを使った自動設定・自律ネットワークが主流になる", scores: { ai: 3, data: 1 } },
      { text: "コンサル・戦略寄りの仕事が増える", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 14,
    text: "ネットワークエンジニアの強みを最も活かせる業界は？",
    options: [
      { text: "通信キャリア・ISP・ネットワーク機器メーカー", scores: { network: 3, embedded: 1 } },
      { text: "金融・医療・官公庁などセキュリティ重視の業界", scores: { security: 3, network: 1 } },
      { text: "大規模クラウドサービス・データセンター事業者", scores: { cloud: 3, server: 1 } },
      { text: "ITコンサル・SIerでインフラ設計を提案する", scores: { consultant: 2, se: 2 } },
    ],
  },
  {
    id: 15,
    text: "10年後のキャリアとして最も描いているのは？",
    options: [
      { text: "ネットワークアーキテクト・業界のエキスパート", scores: { network: 3, se: 1 } },
      { text: "セキュリティアーキテクト・CISOへの道", scores: { security: 3, network: 1 } },
      { text: "クラウドネイティブ・SREとして活躍", scores: { cloud: 3, server: 2 } },
      { text: "インフラPM・テクニカルディレクター", scores: { pm: 3, consultant: 1 } },
    ],
  },
];

const CLOUD_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "クラウドエンジニアとして最もやりがいを感じるのは？",
    options: [
      { text: "IaCで全インフラをコード化し自動化した", scores: { cloud: 3, programmer: 1 } },
      { text: "コスト最適化で年間数百万円削減した", scores: { cloud: 3, consultant: 1 } },
      { text: "Kubernetes・マイクロサービスを安定運用", scores: { cloud: 3, server: 1 } },
      { text: "マルチクラウドアーキテクチャを設計・実装", scores: { cloud: 3, se: 1 } },
    ],
  },
  {
    id: 2,
    text: "今後深めたい専門分野は？",
    options: [
      { text: "AI/MLインフラ・MLOps・GPU最適化", scores: { ai: 3, data: 1 } },
      { text: "セキュリティアーキテクチャ・ゼロトラスト", scores: { security: 3, cloud: 1 } },
      { text: "データ基盤・データレイク・ストリーム処理", scores: { data: 3, cloud: 1 } },
      { text: "Platform Engineering・開発者体験", scores: { cloud: 3, programmer: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後の理想のポジションは？",
    options: [
      { text: "クラウドアーキテクト・認定プロフェッショナル", scores: { cloud: 3, se: 1 } },
      { text: "MLOpsエンジニア・AIインフラの専門家", scores: { ai: 3, data: 1 } },
      { text: "セキュリティアーキテクト・CISO補佐", scores: { security: 3, cloud: 1 } },
      { text: "CTO・技術部門のVP・テクニカルディレクター", scores: { pm: 2, consultant: 2 } },
    ],
  },
  {
    id: 4,
    text: "設計作業で最も集中できるのは？",
    options: [
      { text: "Terraform・Pulumi でインフラをコード化", scores: { cloud: 3, programmer: 1 } },
      { text: "セキュリティ設計・IAM・ネットワーク分離", scores: { security: 3, cloud: 1 } },
      { text: "データパイプライン・ETL処理の設計", scores: { data: 3, cloud: 1 } },
      { text: "アーキテクチャ図・コスト試算書の作成", scores: { se: 2, consultant: 2 } },
    ],
  },
  {
    id: 5,
    text: "開発チームとの関わり方として最も近いのは？",
    options: [
      { text: "CI/CDパイプラインを整えてチームを支える", scores: { cloud: 3, programmer: 1 } },
      { text: "AI/MLの環境を整備してデータサイエンティストを支援", scores: { ai: 2, data: 2 } },
      { text: "セキュリティ要件を設計段階から組み込む", scores: { security: 3, cloud: 1 } },
      { text: "コスト・ROIを可視化して経営判断をサポート", scores: { consultant: 2, data: 2 } },
    ],
  },
  {
    id: 6,
    text: "今の仕事で最もストレスを感じることは？",
    options: [
      { text: "セキュリティ要件が複雑で設計が難しい", scores: { security: 3, network: 1 } },
      { text: "データ活用・分析基盤の整備が遅れている", scores: { data: 3, ai: 1 } },
      { text: "ビジネス側にクラウドの価値を伝えるのが難しい", scores: { consultant: 2, pm: 2 } },
      { text: "コードの品質・アプリケーション側の理解が不足", scores: { programmer: 3, web: 1 } },
    ],
  },
  {
    id: 7,
    text: "チームで最も力を発揮できる場面は？",
    options: [
      { text: "複雑なインフラ問題をトラブルシュートする", scores: { cloud: 3, server: 1 } },
      { text: "AI・データ基盤を構築してビジネス価値を出す", scores: { ai: 2, data: 2 } },
      { text: "セキュリティ審査・コンプライアンス対応", scores: { security: 3, cloud: 1 } },
      { text: "全体アーキテクチャの方向性を決める議論", scores: { se: 2, pm: 2 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "AI・データ分野で最前線に立つ", scores: { ai: 3, data: 2 } },
      { text: "セキュリティを深化させてアーキテクトになる", scores: { security: 3, cloud: 1 } },
      { text: "コンサル・CTO補佐として経営に関わる", scores: { consultant: 3, pm: 2 } },
      { text: "クラウドのさらなる深化・マルチクラウドを極める", scores: { cloud: 3, server: 1 } },
    ],
  },
  {
    id: 9,
    text: "クラウドエンジニアとして最も誇りに思うプロジェクトは？",
    options: [
      { text: "ゼロトラストを導入してセキュリティを大幅改善", scores: { security: 3, cloud: 1 } },
      { text: "マルチクラウド基盤を設計してコストを半減させた", scores: { cloud: 3, server: 1 } },
      { text: "AI/MLワークロードの基盤を整えてモデル本番投入を実現", scores: { ai: 3, data: 1 } },
      { text: "Platform Engineering で開発者体験を革新した", scores: { cloud: 3, programmer: 1 } },
    ],
  },
  {
    id: 10,
    text: "IaCやCI/CDにおける理想のアプローチは？",
    options: [
      { text: "Terraform・Pulumi で全インフラを宣言的に管理", scores: { cloud: 3, programmer: 1 } },
      { text: "GitOps・ArgoCD で変更を完全に追跡・自動適用", scores: { cloud: 3, server: 1 } },
      { text: "セキュリティスキャンをパイプラインに組み込む", scores: { security: 3, cloud: 1 } },
      { text: "コスト試算・リソース予測を自動化する", scores: { data: 2, consultant: 2 } },
    ],
  },
  {
    id: 11,
    text: "クラウドコスト最適化で最も効果的だと思う施策は？",
    options: [
      { text: "未使用リソースの自動検出・削除の仕組みを作る", scores: { cloud: 3, programmer: 1 } },
      { text: "スポットインスタンス・予約購入の組み合わせ最適化", scores: { cloud: 3, data: 1 } },
      { text: "アーキテクチャ自体を見直してサービスを統廃合", scores: { se: 2, consultant: 2 } },
      { text: "可視化ダッシュボードで全チームにコスト意識を持たせる", scores: { data: 3, pm: 1 } },
    ],
  },
  {
    id: 12,
    text: "開発チームに対してSREとして最も貢献したいことは？",
    options: [
      { text: "SLO・エラーバジェットを設定して信頼性を定量化", scores: { cloud: 3, data: 1 } },
      { text: "自動化によりデプロイ頻度を大幅に上げる", scores: { cloud: 3, programmer: 1 } },
      { text: "セキュリティを開発プロセスに組み込む（DevSecOps）", scores: { security: 3, cloud: 1 } },
      { text: "AIを使った障害予測・自動復旧を実現する", scores: { ai: 3, cloud: 1 } },
    ],
  },
  {
    id: 13,
    text: "クラウドエンジニアとして技術以外に強化したいスキルは？",
    options: [
      { text: "アーキテクチャ設計・提案書作成力", scores: { se: 3, consultant: 1 } },
      { text: "セキュリティ・コンプライアンスの専門知識", scores: { security: 3, network: 1 } },
      { text: "データエンジニアリング・分析基盤の知識", scores: { data: 3, ai: 1 } },
      { text: "チームマネジメント・プロジェクト管理力", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 14,
    text: "今後関わりたいプロジェクトの性格は？",
    options: [
      { text: "大規模なクラウド移行・モダナイゼーション案件", scores: { cloud: 3, consultant: 1 } },
      { text: "AI・機械学習のインフラ基盤を一から設計する", scores: { ai: 3, cloud: 1 } },
      { text: "セキュリティを最優先にしたクリティカルな基盤", scores: { security: 3, cloud: 1 } },
      { text: "スタートアップで0→1のインフラを高速に作る", scores: { cloud: 3, programmer: 1 } },
    ],
  },
  {
    id: 15,
    text: "10年後の自分に最も近いイメージは？",
    options: [
      { text: "マルチクラウドを統括するプリンシパルアーキテクト", scores: { cloud: 3, se: 1 } },
      { text: "AIインフラ・MLOps の先駆者として独立", scores: { ai: 3, data: 1 } },
      { text: "クラウドセキュリティの第一人者・CISO補佐", scores: { security: 3, cloud: 1 } },
      { text: "テック企業のCTO・VPoE", scores: { pm: 2, consultant: 2 } },
    ],
  },
];

const AI_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "AIエンジニアとして最もやりがいを感じるのは？",
    options: [
      { text: "モデルの精度向上・本番適用で成果を出した", scores: { ai: 3, data: 1 } },
      { text: "LLM・生成AIをサービスに組み込んでUXを変えた", scores: { ai: 3, web: 1 } },
      { text: "MLOps基盤を整えてチームの生産性を上げた", scores: { cloud: 3, ai: 1 } },
      { text: "データ品質を改善して分析の信頼性を高めた", scores: { data: 3, ai: 1 } },
    ],
  },
  {
    id: 2,
    text: "今後深めたい専門分野は？",
    options: [
      { text: "LLMファインチューニング・RAG・AIエージェント", scores: { ai: 3, programmer: 1 } },
      { text: "データエンジニアリング・特徴量設計・パイプライン", scores: { data: 3, cloud: 1 } },
      { text: "AIプロダクトの設計・PMとして事業を作る", scores: { pm: 3, consultant: 1 } },
      { text: "セキュリティ・プライバシー・AI倫理・規制対応", scores: { security: 3, consultant: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後の理想のポジションは？",
    options: [
      { text: "AI研究者・著名なMLエンジニア・OSS作者", scores: { ai: 3, programmer: 1 } },
      { text: "AIプロダクトマネージャー・事業を作る側に", scores: { pm: 3, consultant: 1 } },
      { text: "データサイエンティストとして分析・戦略を担う", scores: { data: 3, ai: 1 } },
      { text: "CTO・AIスタートアップの創業者", scores: { consultant: 2, pm: 2 } },
    ],
  },
  {
    id: 4,
    text: "研究・開発で最も集中できる作業は？",
    options: [
      { text: "モデル実装・コード実験・ハイパーパラメータ調整", scores: { ai: 3, programmer: 1 } },
      { text: "データ前処理・EDA・特徴量エンジニアリング", scores: { data: 3, ai: 1 } },
      { text: "MLOpsパイプライン・デプロイ基盤の構築", scores: { cloud: 3, ai: 1 } },
      { text: "論文読解・最新手法のサーベイ・技術発信", scores: { ai: 3, data: 1 } },
    ],
  },
  {
    id: 5,
    text: "AIの成果を組織に届ける上で最も重視することは？",
    options: [
      { text: "モデルの精度・技術的な優位性", scores: { ai: 3, programmer: 1 } },
      { text: "ビジネスKPIへの直接的な貢献・ROI", scores: { consultant: 3, pm: 1 } },
      { text: "データの品質・バイアス・公平性", scores: { data: 3, security: 1 } },
      { text: "スケーラビリティ・本番稼働の安定性", scores: { cloud: 3, server: 1 } },
    ],
  },
  {
    id: 6,
    text: "AIエンジニアとして今最も課題に感じることは？",
    options: [
      { text: "ビジネス側との要件すり合わせ・価値の言語化", scores: { consultant: 2, pm: 2 } },
      { text: "データ基盤・品質管理が弱く実験が遅い", scores: { data: 3, cloud: 1 } },
      { text: "セキュリティ・プライバシーへの対応が難しい", scores: { security: 3, ai: 1 } },
      { text: "Webアプリへの組み込み・UIの品質", scores: { web: 3, programmer: 1 } },
    ],
  },
  {
    id: 7,
    text: "チームで最も力を発揮できる場面は？",
    options: [
      { text: "最新技術を調査してチームに提案・実装する", scores: { ai: 3, programmer: 1 } },
      { text: "データドリブンな意思決定をサポートする", scores: { data: 3, consultant: 1 } },
      { text: "インフラ・基盤を整えて実験を高速化する", scores: { cloud: 3, server: 1 } },
      { text: "AI活用の戦略・ロードマップを描く", scores: { pm: 2, consultant: 2 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "より研究・論文寄りの専門的なAIエンジニア", scores: { ai: 3, data: 1 } },
      { text: "AIプロダクト・ビジネスを作るPM・起業家", scores: { pm: 2, consultant: 2 } },
      { text: "データエンジニアリング・分析の専門家", scores: { data: 3, cloud: 1 } },
      { text: "セキュリティ・倫理・規制対応の専門家", scores: { security: 3, consultant: 1 } },
    ],
  },
  {
    id: 9,
    text: "AIプロジェクトで最も力を発揮できる場面は？",
    options: [
      { text: "モデル設計・実験管理・精度改善のPDCAを回す", scores: { ai: 3, programmer: 1 } },
      { text: "データ収集・前処理・特徴量エンジニアリング", scores: { data: 3, ai: 1 } },
      { text: "本番環境への統合・MLOpsパイプライン構築", scores: { cloud: 3, ai: 1 } },
      { text: "ビジネス要件の整理・ROI試算・経営への提案", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 10,
    text: "生成AI・LLMへの関わり方として最も興味があるのは？",
    options: [
      { text: "ファインチューニング・RAGで精度を高める実装", scores: { ai: 3, programmer: 1 } },
      { text: "LLMを活用したプロダクト・サービスの設計", scores: { pm: 2, web: 2 } },
      { text: "LLMの安全性・バイアス・倫理問題の研究", scores: { security: 2, ai: 2 } },
      { text: "LLMへのデータ供給・品質管理基盤の整備", scores: { data: 3, cloud: 1 } },
    ],
  },
  {
    id: 11,
    text: "AIモデルの評価で最も重視することは？",
    options: [
      { text: "精度指標（F1・AUC・BLEU）の改善", scores: { ai: 3, data: 1 } },
      { text: "ビジネスKPIへの直接的な貢献度", scores: { consultant: 3, pm: 1 } },
      { text: "レイテンシ・スループット・インフラコスト", scores: { cloud: 3, ai: 1 } },
      { text: "公平性・説明可能性・規制対応", scores: { security: 2, consultant: 2 } },
    ],
  },
  {
    id: 12,
    text: "AIエンジニアとして最も課題を感じていることは？",
    options: [
      { text: "データ品質・ラベリング・前処理の工数が大きい", scores: { data: 3, ai: 1 } },
      { text: "本番デプロイ・モデル監視・再学習の仕組みが弱い", scores: { cloud: 3, server: 1 } },
      { text: "ビジネス側との要件定義・効果測定が難しい", scores: { consultant: 2, pm: 2 } },
      { text: "セキュリティ・プライバシー規制への対応が複雑", scores: { security: 3, ai: 1 } },
    ],
  },
  {
    id: 13,
    text: "AI領域でのキャリア差別化として考えていることは？",
    options: [
      { text: "特定ドメイン（医療・金融・製造）の深い知識を掛け合わせる", scores: { ai: 2, consultant: 2 } },
      { text: "大規模分散学習・GPU最適化など低レイヤーを極める", scores: { ai: 3, cloud: 1 } },
      { text: "AIを事業に使いこなすPM・コンサル力を磨く", scores: { pm: 2, consultant: 2 } },
      { text: "データエンジニアとしてAIの土台を専門化する", scores: { data: 3, cloud: 1 } },
    ],
  },
  {
    id: 14,
    text: "今後副業・個人研究で取り組みたいのは？",
    options: [
      { text: "論文実装・OSSコントリビュート・Kaggleコンペ", scores: { ai: 3, programmer: 1 } },
      { text: "自社プロダクトにAIを組み込んでリリース", scores: { web: 2, pm: 2 } },
      { text: "AIを使ったデータ分析・可視化ツールを作る", scores: { data: 3, ai: 1 } },
      { text: "AIセキュリティ・プロンプトインジェクション研究", scores: { security: 3, ai: 1 } },
    ],
  },
  {
    id: 15,
    text: "10年後の理想の姿は？",
    options: [
      { text: "世界的に著名なMLリサーチャー・テックリード", scores: { ai: 3, programmer: 1 } },
      { text: "AI×ビジネスのコンサル・スタートアップ創業者", scores: { consultant: 2, pm: 2 } },
      { text: "AIインフラ・MLOpsの専門家として独立", scores: { cloud: 3, data: 1 } },
      { text: "特定業界に特化したAIの第一人者", scores: { ai: 3, consultant: 1 } },
    ],
  },
];

const DATA_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "データサイエンティストとして最もやりがいを感じるのは？",
    options: [
      { text: "データから思いがけないインサイトを発見した", scores: { data: 3, ai: 1 } },
      { text: "分析結果が経営判断に直接使われた", scores: { data: 3, consultant: 1 } },
      { text: "予測モデルが本番で精度を発揮した", scores: { ai: 3, data: 1 } },
      { text: "データ基盤を整えてチームの生産性が上がった", scores: { cloud: 2, data: 2 } },
    ],
  },
  {
    id: 2,
    text: "今後深めたい専門領域は？",
    options: [
      { text: "機械学習・深層学習・生成AIの実装", scores: { ai: 3, programmer: 1 } },
      { text: "データエンジニアリング・パイプライン・データ基盤", scores: { data: 3, cloud: 1 } },
      { text: "ビジネスコンサルティング・戦略提案", scores: { consultant: 3, pm: 1 } },
      { text: "セキュリティ・プライバシー・個人情報保護", scores: { security: 3, data: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後の理想のポジションは？",
    options: [
      { text: "データサイエンスのリード・CDO補佐", scores: { data: 3, pm: 1 } },
      { text: "MLエンジニア・AIの第一人者", scores: { ai: 3, programmer: 1 } },
      { text: "データ×ビジネスコンサルタント", scores: { consultant: 3, data: 1 } },
      { text: "データ基盤アーキテクト・データエンジニア", scores: { cloud: 2, data: 2 } },
    ],
  },
  {
    id: 4,
    text: "業務で最も集中できる作業は？",
    options: [
      { text: "SQL・Pythonでデータを加工・集計する", scores: { data: 3, programmer: 1 } },
      { text: "機械学習モデルを実装・チューニングする", scores: { ai: 3, data: 1 } },
      { text: "BIダッシュボードでデータを可視化する", scores: { data: 3, consultant: 1 } },
      { text: "データパイプライン・ETLを設計・実装する", scores: { cloud: 2, data: 2 } },
    ],
  },
  {
    id: 5,
    text: "ビジネス側との関わりで大切にしていることは？",
    options: [
      { text: "数値で仮説を検証してから提案する", scores: { data: 3, consultant: 1 } },
      { text: "技術的な実現可能性を正直に伝える", scores: { ai: 2, programmer: 1 } },
      { text: "課題の本質を理解してKPI設計を提案する", scores: { consultant: 3, pm: 1 } },
      { text: "リアルタイムなデータ活用の仕組みを整える", scores: { cloud: 2, data: 2 } },
    ],
  },
  {
    id: 6,
    text: "今の仕事で最もストレスを感じることは？",
    options: [
      { text: "データ品質が低く、分析に時間がかかる", scores: { data: 3, cloud: 1 } },
      { text: "AIモデルの精度を上げるのが難しい", scores: { ai: 3, programmer: 1 } },
      { text: "ビジネス側への分析結果の説明・説得が大変", scores: { consultant: 2, pm: 2 } },
      { text: "セキュリティ・個人情報対応の複雑さ", scores: { security: 3, data: 1 } },
    ],
  },
  {
    id: 7,
    text: "チームで最も力を発揮できる場面は？",
    options: [
      { text: "分析・モデリングの専門家として技術を提供", scores: { data: 3, ai: 1 } },
      { text: "ビジネス戦略・施策の立案を数値でサポート", scores: { consultant: 3, pm: 1 } },
      { text: "データ基盤・自動化で全員の生産性を上げる", scores: { cloud: 3, data: 1 } },
      { text: "プロジェクト全体の計画・関係者調整", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "AI・機械学習の専門性をさらに深める", scores: { ai: 3, programmer: 1 } },
      { text: "データ×ビジネスのコンサルタントへ", scores: { consultant: 3, pm: 1 } },
      { text: "データ基盤エンジニアとして技術基盤を極める", scores: { cloud: 2, data: 2 } },
      { text: "CDO・データ部門のマネージャー", scores: { pm: 3, data: 1 } },
    ],
  },
  {
    id: 9,
    text: "データ分析で最もこだわっている点は？",
    options: [
      { text: "仮説設定→検証のサイクルを高速に回す", scores: { data: 3, ai: 1 } },
      { text: "可視化の見やすさ・伝わりやすさ", scores: { data: 3, consultant: 1 } },
      { text: "データの信頼性・品質・バイアスを排除する", scores: { data: 3, security: 1 } },
      { text: "リアルタイム処理・ストリームデータへの対応", scores: { cloud: 3, data: 1 } },
    ],
  },
  {
    id: 10,
    text: "機械学習とデータ分析、どちらに比重を置きたい？",
    options: [
      { text: "MLモデル実装・実験管理を主戦場にしたい", scores: { ai: 3, programmer: 1 } },
      { text: "BI・統計分析でビジネスを支えたい", scores: { data: 3, consultant: 1 } },
      { text: "データエンジニアリング・基盤側を専門にしたい", scores: { cloud: 2, data: 2 } },
      { text: "両方を高い水準でこなすフルスタックDS", scores: { ai: 2, data: 2 } },
    ],
  },
  {
    id: 11,
    text: "データの価値を組織に根付かせるために最も重要なことは？",
    options: [
      { text: "分析しやすいデータ基盤・DWHを整備する", scores: { cloud: 2, data: 2 } },
      { text: "ビジネス部門が自分でデータを使えるよう教育する", scores: { pm: 2, consultant: 2 } },
      { text: "データガバナンス・品質管理の仕組みを作る", scores: { data: 3, security: 1 } },
      { text: "AIモデルを使った意思決定を自動化する", scores: { ai: 3, data: 1 } },
    ],
  },
  {
    id: 12,
    text: "今後取り組みたいデータ領域は？",
    options: [
      { text: "生成AI・LLMを活用した分析・レポート自動化", scores: { ai: 3, data: 1 } },
      { text: "リアルタイムデータ・ストリーミング処理基盤", scores: { cloud: 3, data: 1 } },
      { text: "データマネジメント・データ品質・メタデータ管理", scores: { data: 3, se: 1 } },
      { text: "マーケティング・顧客行動分析・パーソナライゼーション", scores: { consultant: 2, data: 2 } },
    ],
  },
  {
    id: 13,
    text: "経営・ビジネス側との関わりで最もやりたいことは？",
    options: [
      { text: "データドリブンな意思決定文化を組織に浸透させる", scores: { consultant: 3, pm: 1 } },
      { text: "KPI設計・効果測定の仕組みを作る", scores: { data: 3, pm: 1 } },
      { text: "新規事業のデータ活用戦略を描いて提案する", scores: { consultant: 3, data: 1 } },
      { text: "AI活用ロードマップを策定してチームをリードする", scores: { pm: 2, ai: 2 } },
    ],
  },
  {
    id: 14,
    text: "データサイエンティストとして差別化できる強みは？",
    options: [
      { text: "特定ドメイン（EC・金融・医療）の深い業務知識", scores: { consultant: 2, data: 2 } },
      { text: "最新ML手法の実装力・論文読解力", scores: { ai: 3, programmer: 1 } },
      { text: "経営層への提案・ストーリーテリング力", scores: { consultant: 3, pm: 1 } },
      { text: "大規模データ処理・基盤設計の技術力", scores: { cloud: 3, data: 1 } },
    ],
  },
  {
    id: 15,
    text: "10年後の理想のキャリアは？",
    options: [
      { text: "CDO・データ統括責任者として組織を変革", scores: { pm: 2, consultant: 2 } },
      { text: "AI×データのスペシャリストとしてフリーランス独立", scores: { ai: 2, data: 2 } },
      { text: "データコンサルタントとして複数企業を支援", scores: { consultant: 3, data: 1 } },
      { text: "研究機関・大学との連携でデータ研究を深める", scores: { ai: 3, data: 2 } },
    ],
  },
];

const SECURITY_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "セキュリティエンジニアとして最もやりがいを感じるのは？",
    options: [
      { text: "脆弱性診断で重大な穴を発見して報告した", scores: { security: 3, tester: 1 } },
      { text: "インシデント対応で素早く被害を封じ込めた", scores: { security: 3, server: 1 } },
      { text: "セキュリティアーキテクチャを設計して防御を強化した", scores: { security: 3, cloud: 1 } },
      { text: "ペネトレーションテストで攻撃者視点を活かした", scores: { security: 3, programmer: 1 } },
    ],
  },
  {
    id: 2,
    text: "今後深めたい専門領域は？",
    options: [
      { text: "クラウドセキュリティ・ゼロトラスト・CSPM", scores: { cloud: 2, security: 2 } },
      { text: "マルウェア解析・フォレンジック・脅威インテリジェンス", scores: { security: 3, programmer: 1 } },
      { text: "AI・機械学習を活用した脅威検知", scores: { ai: 3, security: 1 } },
      { text: "コンプライアンス・規制対応・セキュリティ戦略", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後の理想のポジションは？",
    options: [
      { text: "CISO・セキュリティ部門の責任者", scores: { pm: 2, consultant: 2 } },
      { text: "脆弱性研究者・著名なセキュリティ専門家", scores: { security: 3, programmer: 1 } },
      { text: "クラウドセキュリティアーキテクト", scores: { cloud: 3, security: 1 } },
      { text: "セキュリティコンサルタント・DX推進", scores: { consultant: 3, security: 1 } },
    ],
  },
  {
    id: 4,
    text: "業務で最も集中できる作業は？",
    options: [
      { text: "CTF・脆弱性発見・エクスプロイト開発", scores: { security: 3, programmer: 1 } },
      { text: "ログ分析・SIEM・異常検知ルール作成", scores: { security: 3, data: 1 } },
      { text: "セキュリティポリシー・手順書の整備", scores: { se: 2, pm: 2 } },
      { text: "クラウド設定レビュー・IAM設計", scores: { cloud: 3, security: 1 } },
    ],
  },
  {
    id: 5,
    text: "組織内でセキュリティを普及させる上で最も重視することは？",
    options: [
      { text: "技術的な制御・自動化でヒューマンエラーを減らす", scores: { cloud: 2, security: 2 } },
      { text: "教育・啓発活動でセキュリティ文化を作る", scores: { pm: 2, consultant: 2 } },
      { text: "リスクを定量化して経営に提言する", scores: { consultant: 3, data: 1 } },
      { text: "AIを活用したリアルタイム脅威検知", scores: { ai: 3, security: 1 } },
    ],
  },
  {
    id: 6,
    text: "今の仕事で最もストレスを感じることは？",
    options: [
      { text: "クラウド環境の変化が速くて設定漏れが怖い", scores: { cloud: 3, security: 1 } },
      { text: "AIを悪用した新手の攻撃への対応が難しい", scores: { ai: 2, security: 2 } },
      { text: "経営・ビジネス側へのリスク説明が難しい", scores: { consultant: 2, pm: 2 } },
      { text: "データ漏洩・プライバシー対応の複雑さ", scores: { data: 2, security: 2 } },
    ],
  },
  {
    id: 7,
    text: "チームで最も力を発揮できる場面は？",
    options: [
      { text: "技術的な攻撃手法・防御手法の専門知識を活かす", scores: { security: 3, programmer: 1 } },
      { text: "クラウド・インフラのセキュリティ設計を主導", scores: { cloud: 3, security: 1 } },
      { text: "リスク分析・戦略立案で経営をサポート", scores: { consultant: 3, pm: 1 } },
      { text: "AI・データを使った脅威検知を実装する", scores: { ai: 3, data: 1 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "攻撃者視点を極めるセキュリティリサーチャー", scores: { security: 3, programmer: 1 } },
      { text: "クラウドセキュリティ・SRE寄りのポジション", scores: { cloud: 3, security: 1 } },
      { text: "コンサルタント・CISO補佐として組織を守る", scores: { consultant: 3, pm: 1 } },
      { text: "AIセキュリティ・脅威インテリジェンスの最前線", scores: { ai: 3, security: 1 } },
    ],
  },
  {
    id: 9,
    text: "セキュリティエンジニアとして最も誇りに思う実績は？",
    options: [
      { text: "重大な脆弱性を発見してサービスを守った", scores: { security: 3, tester: 1 } },
      { text: "セキュリティアーキテクチャを設計して組織を強化した", scores: { security: 3, cloud: 1 } },
      { text: "CTFや脆弱性報告（バグバウンティ）で成果を出した", scores: { security: 3, programmer: 1 } },
      { text: "インシデント対応でビジネス損害を最小化した", scores: { security: 3, pm: 1 } },
    ],
  },
  {
    id: 10,
    text: "セキュリティの中で最も興味のある専門分野は？",
    options: [
      { text: "オフェンシブセキュリティ・ペネトレーションテスト", scores: { security: 3, programmer: 1 } },
      { text: "クラウドセキュリティ・CSPM・CWPP", scores: { cloud: 3, security: 1 } },
      { text: "マルウェア解析・フォレンジック・CTI", scores: { security: 3, data: 1 } },
      { text: "セキュリティガバナンス・GRC・コンプライアンス", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 11,
    text: "AIとセキュリティの関係について最も関心があるのは？",
    options: [
      { text: "AIを使った脅威検知・異常検知システムの構築", scores: { ai: 3, security: 1 } },
      { text: "AIに対する攻撃（プロンプトインジェクション・敵対的入力）の研究", scores: { security: 3, ai: 1 } },
      { text: "AI活用によるセキュリティ業務の自動化・効率化", scores: { ai: 2, cloud: 2 } },
      { text: "AI規制・倫理・プライバシー法令への対応", scores: { consultant: 3, security: 1 } },
    ],
  },
  {
    id: 12,
    text: "組織のセキュリティ成熟度を上げるために最優先でやることは？",
    options: [
      { text: "脆弱性診断・ペネトレーションテストの定期実施", scores: { security: 3, tester: 1 } },
      { text: "ゼロトラスト・クラウドセキュリティの基盤整備", scores: { cloud: 3, security: 1 } },
      { text: "全社セキュリティ教育・フィッシング訓練の実施", scores: { pm: 2, consultant: 2 } },
      { text: "SOC設置・SIEM構築・24時間監視体制の確立", scores: { security: 3, server: 1 } },
    ],
  },
  {
    id: 13,
    text: "セキュリティエンジニアとして最も重要な資質は？",
    options: [
      { text: "攻撃者の思考パターンを理解する想像力", scores: { security: 3, programmer: 1 } },
      { text: "複雑な規制・法令を読み解くリーガルマインド", scores: { consultant: 3, security: 1 } },
      { text: "膨大なログ・データから異常を発見する分析力", scores: { data: 3, security: 1 } },
      { text: "リスクをビジネス言語で経営層に伝える説明力", scores: { consultant: 2, pm: 2 } },
    ],
  },
  {
    id: 14,
    text: "セキュリティ領域での今後のキャリアの方向性は？",
    options: [
      { text: "ペネトレーションテスター・レッドチームの専門家", scores: { security: 3, programmer: 1 } },
      { text: "クラウドセキュリティアーキテクト", scores: { cloud: 3, security: 1 } },
      { text: "CISOや経営層としてセキュリティ戦略を担う", scores: { consultant: 2, pm: 2 } },
      { text: "AIセキュリティ・脅威インテリジェンスの研究者", scores: { ai: 3, security: 1 } },
    ],
  },
  {
    id: 15,
    text: "10年後の理想の姿は？",
    options: [
      { text: "著名なセキュリティリサーチャー・CVE発見者", scores: { security: 3, programmer: 1 } },
      { text: "CISO・セキュリティコンサルとして独立", scores: { consultant: 3, pm: 1 } },
      { text: "クラウドセキュリティのグローバルエキスパート", scores: { cloud: 3, security: 1 } },
      { text: "AI×セキュリティの新分野を切り拓く先駆者", scores: { ai: 3, security: 1 } },
    ],
  },
];

const PM_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "PMとして最もやりがいを感じるのは？",
    options: [
      { text: "プロジェクトを予算・スケジュール通りに完遂した", scores: { pm: 3, se: 1 } },
      { text: "チームがパフォーマンスを発揮できる環境を作れた", scores: { pm: 3, consultant: 1 } },
      { text: "ステークホルダーに明確なビジョンを示せた", scores: { consultant: 3, pm: 1 } },
      { text: "新機能がユーザーに価値を届けた瞬間", scores: { pm: 2, web: 2 } },
    ],
  },
  {
    id: 2,
    text: "今後深めたいスキルは？",
    options: [
      { text: "AIプロダクト・LLMアプリケーションの設計", scores: { ai: 3, pm: 1 } },
      { text: "データドリブンな意思決定・分析スキル", scores: { data: 3, consultant: 1 } },
      { text: "技術力・コードを読む力・アーキテクチャ理解", scores: { programmer: 2, se: 2 } },
      { text: "経営・財務・事業戦略の知識", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後の理想のポジションは？",
    options: [
      { text: "CPO・VP of Product・事業責任者", scores: { pm: 3, consultant: 1 } },
      { text: "ITコンサルタント・DX推進のプロ", scores: { consultant: 3, pm: 1 } },
      { text: "CTO・技術×ビジネス両方を担う役職", scores: { consultant: 2, se: 2 } },
      { text: "起業・自社プロダクト立ち上げ", scores: { pm: 2, consultant: 2 } },
    ],
  },
  {
    id: 4,
    text: "プロジェクトで最も力を発揮できる場面は？",
    options: [
      { text: "ゴール設定・KPI設計・ロードマップ作成", scores: { pm: 3, consultant: 1 } },
      { text: "リスク特定・課題解決・意思決定の仕切り", scores: { pm: 3, se: 1 } },
      { text: "データを元にした施策優先度の判断", scores: { data: 3, pm: 1 } },
      { text: "エンジニアとビジネス側の橋渡し・翻訳", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 5,
    text: "チームビルディングで最も重視することは？",
    options: [
      { text: "各メンバーの強みを活かした役割設計", scores: { pm: 3, se: 1 } },
      { text: "心理的安全性・フィードバック文化の醸成", scores: { pm: 3, helpdesk: 1 } },
      { text: "KPI・数値目標の共有と達成への執念", scores: { data: 2, consultant: 2 } },
      { text: "技術力の底上げ・学習環境の整備", scores: { se: 2, programmer: 2 } },
    ],
  },
  {
    id: 6,
    text: "今の仕事で最もストレスを感じることは？",
    options: [
      { text: "技術的な判断に自信が持てないことがある", scores: { programmer: 2, se: 2 } },
      { text: "データ・数値による意思決定基盤が弱い", scores: { data: 3, consultant: 1 } },
      { text: "AI・最新技術の動向についていけない", scores: { ai: 3, cloud: 1 } },
      { text: "経営・上位層との戦略議論に参加しにくい", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 7,
    text: "プロダクトの意思決定で最も重視することは？",
    options: [
      { text: "ユーザーのフィードバック・定性データ", scores: { pm: 3, web: 1 } },
      { text: "数値・分析・A/Bテストの結果", scores: { data: 3, pm: 1 } },
      { text: "市場トレンド・競合分析・ビジネス戦略", scores: { consultant: 3, pm: 1 } },
      { text: "技術的な実現可能性・エンジニアの意見", scores: { se: 2, programmer: 2 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "事業責任者・CEO・起業でビジネスを作る", scores: { pm: 2, consultant: 2 } },
      { text: "コンサルタントとして複数企業の変革を担う", scores: { consultant: 3, pm: 1 } },
      { text: "データ・AIに強いPMとして差別化する", scores: { data: 2, ai: 2 } },
      { text: "技術力を高めてCTO・エンジニアリングマネージャーへ", scores: { se: 2, programmer: 2 } },
    ],
  },
  {
    id: 9,
    text: "プロダクト開発で最も大切にしていることは？",
    options: [
      { text: "ユーザー課題の深い理解と検証の繰り返し", scores: { pm: 3, web: 1 } },
      { text: "データ・数値による意思決定と効果測定", scores: { data: 3, pm: 1 } },
      { text: "技術的実現可能性と開発コストの正確な見積もり", scores: { se: 3, programmer: 1 } },
      { text: "市場・競合分析による戦略的なポジショニング", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 10,
    text: "プロジェクトが遅延しそうなとき、最初にとる行動は？",
    options: [
      { text: "スコープを削ってMVPに絞り込む", scores: { pm: 3, consultant: 1 } },
      { text: "技術的ボトルネックをエンジニアと一緒に解消する", scores: { se: 2, programmer: 2 } },
      { text: "ステークホルダーに早期報告し期待値を調整する", scores: { pm: 3, se: 1 } },
      { text: "データを見て何が遅延の根本原因か分析する", scores: { data: 3, pm: 1 } },
    ],
  },
  {
    id: 11,
    text: "PMとして最も得意なコミュニケーションは？",
    options: [
      { text: "経営層への戦略提案・KPI報告", scores: { consultant: 3, pm: 1 } },
      { text: "エンジニアへの要件説明・技術的な議論", scores: { se: 2, programmer: 2 } },
      { text: "ユーザーインタビュー・フィードバック収集", scores: { pm: 3, web: 1 } },
      { text: "データを使った効果測定・施策の振り返り", scores: { data: 3, pm: 1 } },
    ],
  },
  {
    id: 12,
    text: "AI・データをPM業務にどう活かしたい？",
    options: [
      { text: "AIでユーザー行動を予測して施策を自動最適化", scores: { ai: 3, data: 1 } },
      { text: "データダッシュボードで意思決定の根拠を強化", scores: { data: 3, pm: 1 } },
      { text: "LLMを使ってPRD・要件定義の作成を効率化", scores: { ai: 2, pm: 2 } },
      { text: "A/Bテスト基盤を整えて仮説検証を高速化", scores: { data: 3, cloud: 1 } },
    ],
  },
  {
    id: 13,
    text: "PMとしてキャリアを積む上で今最も課題に感じることは？",
    options: [
      { text: "技術的な判断の根拠をエンジニアに説明できない", scores: { programmer: 2, se: 2 } },
      { text: "データ分析スキルが弱く意思決定に自信がない", scores: { data: 3, ai: 1 } },
      { text: "経営・事業戦略の議論についていけない", scores: { consultant: 3, pm: 1 } },
      { text: "チームメンバーのマネジメントが難しい", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 14,
    text: "5年後に目指したいポジションは？",
    options: [
      { text: "CPO・事業責任者として事業全体を掌握", scores: { pm: 3, consultant: 1 } },
      { text: "AIプロダクトPMとしてテクノロジー×ビジネスを牽引", scores: { ai: 2, pm: 2 } },
      { text: "ITコンサルとして複数クライアントを支援", scores: { consultant: 3, pm: 1 } },
      { text: "CTOとして技術組織全体を率いる", scores: { se: 2, programmer: 2 } },
    ],
  },
  {
    id: 15,
    text: "PMとして最も大切にしている価値観は？",
    options: [
      { text: "ユーザーに価値を届け続けることへの執念", scores: { pm: 3, web: 1 } },
      { text: "チームを成長させることへの責任感", scores: { pm: 3, consultant: 1 } },
      { text: "データと事実に基づいた意思決定の徹底", scores: { data: 3, pm: 1 } },
      { text: "事業・ビジネスへのインパクトの最大化", scores: { consultant: 3, pm: 1 } },
    ],
  },
];

const CONSULTANT_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "ITコンサルタントとして最もやりがいを感じるのは？",
    options: [
      { text: "クライアントの業績改善に直接貢献できた", scores: { consultant: 3, pm: 1 } },
      { text: "複雑な業務課題を整理して明快な提案にまとめた", scores: { consultant: 3, se: 1 } },
      { text: "DXプロジェクトをゼロから推進・実現した", scores: { pm: 3, consultant: 1 } },
      { text: "データ分析でクライアントの意思決定を変えた", scores: { data: 3, consultant: 1 } },
    ],
  },
  {
    id: 2,
    text: "今後深めたい専門領域は？",
    options: [
      { text: "AIコンサルティング・生成AI活用支援", scores: { ai: 3, consultant: 1 } },
      { text: "データ戦略・分析基盤・CDO補佐", scores: { data: 3, consultant: 1 } },
      { text: "技術力・アーキテクチャの実装知識", scores: { programmer: 2, se: 2 } },
      { text: "セキュリティ・コンプライアンス・リスク管理", scores: { security: 3, consultant: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後の理想のポジションは？",
    options: [
      { text: "パートナー・マネージングコンサルタント", scores: { consultant: 3, pm: 1 } },
      { text: "CDO・CIO・事業会社の経営幹部", scores: { pm: 2, consultant: 2 } },
      { text: "AI・データ特化の専門コンサルタント", scores: { ai: 2, data: 2 } },
      { text: "起業・スタートアップCEO・プロダクトビルダー", scores: { pm: 2, programmer: 1 } },
    ],
  },
  {
    id: 4,
    text: "プロジェクトで最も力を発揮できる場面は？",
    options: [
      { text: "業務ヒアリング・As-Is/To-Beの整理", scores: { consultant: 3, se: 1 } },
      { text: "提案書・資料作成・経営層へのプレゼン", scores: { consultant: 3, pm: 1 } },
      { text: "データ分析・効果測定・ロジカルな根拠作り", scores: { data: 3, consultant: 1 } },
      { text: "実装プロジェクトのPM・進捗管理", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 5,
    text: "クライアントとの関係で最も重視することは？",
    options: [
      { text: "信頼関係・長期パートナーシップの構築", scores: { consultant: 3, pm: 1 } },
      { text: "数値・データに基づいた客観的な提言", scores: { data: 3, consultant: 1 } },
      { text: "最新技術（AI・クラウド）の知見を提供", scores: { ai: 2, cloud: 2 } },
      { text: "実行可能性・技術的現実を正確に伝える", scores: { se: 2, programmer: 2 } },
    ],
  },
  {
    id: 6,
    text: "今の仕事で最もストレスを感じることは？",
    options: [
      { text: "技術的な知識が浅くて実装判断に迷う", scores: { programmer: 2, se: 2 } },
      { text: "AI・最新技術の動向を十分に把握できていない", scores: { ai: 3, cloud: 1 } },
      { text: "データ分析のスキルが足りず根拠が薄くなる", scores: { data: 3, consultant: 1 } },
      { text: "プロジェクトの実行管理が大変", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 7,
    text: "チームで最も力を発揮できる場面は？",
    options: [
      { text: "複雑な問題をロジカルに分解して解決する", scores: { consultant: 3, data: 1 } },
      { text: "技術チームとビジネス側の通訳・橋渡し", scores: { se: 2, pm: 2 } },
      { text: "AIやデータを活用した新しい価値提案", scores: { ai: 2, data: 2 } },
      { text: "プロジェクト全体の計画・リスク管理を仕切る", scores: { pm: 3, consultant: 1 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "技術力を高めて実装もできるコンサルタントへ", scores: { programmer: 2, se: 2 } },
      { text: "AI・データ特化コンサルタントとして差別化", scores: { ai: 2, data: 2 } },
      { text: "事業会社の経営・CxOポジション", scores: { pm: 2, consultant: 2 } },
      { text: "より上位の戦略コンサルタント・パートナーへ", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 9,
    text: "提案書を作るとき、最も時間をかけるのは？",
    options: [
      { text: "課題の構造化・問題の本質を掘り下げる", scores: { consultant: 3, data: 1 } },
      { text: "データ・根拠の収集と可視化", scores: { data: 3, consultant: 1 } },
      { text: "技術的な実現可能性の検証", scores: { se: 2, programmer: 2 } },
      { text: "ストーリーライン・経営層への刺さる訴求", scores: { consultant: 3, pm: 1 } },
    ],
  },
  {
    id: 10,
    text: "新しいプロジェクトで最初にやることは？",
    options: [
      { text: "ステークホルダーへのヒアリングと関係構築", scores: { consultant: 3, pm: 1 } },
      { text: "業界・競合のデータ収集・ベンチマーク", scores: { data: 3, consultant: 1 } },
      { text: "プロジェクト計画・WBS・マイルストーン策定", scores: { pm: 3, se: 1 } },
      { text: "技術スタック・システム全体像の把握", scores: { se: 2, cloud: 2 } },
    ],
  },
  {
    id: 11,
    text: "コンサルティングで最も難しいと感じる局面は？",
    options: [
      { text: "クライアントの反発・組織変革への抵抗", scores: { consultant: 3, pm: 1 } },
      { text: "AI・最新技術の知識が追いつかないとき", scores: { ai: 3, cloud: 1 } },
      { text: "データが不足・品質が悪いとき", scores: { data: 3, consultant: 1 } },
      { text: "実装フェーズのリスク管理・スコープ管理", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 12,
    text: "AI・生成AI技術の活用でコンサルにどう役立てたい？",
    options: [
      { text: "提案書・資料作成を自動化して生産性を上げる", scores: { ai: 2, pm: 2 } },
      { text: "クライアントのAI戦略立案・PoC推進を支援", scores: { ai: 3, consultant: 1 } },
      { text: "データ分析を自動化して洞察の速度を上げる", scores: { data: 3, ai: 1 } },
      { text: "AIリスク・倫理・ガバナンスの専門家になる", scores: { security: 2, consultant: 2 } },
    ],
  },
  {
    id: 13,
    text: "複数クライアントを掛け持ちするとき、最も大切にしていることは？",
    options: [
      { text: "優先度管理・タスクの見える化", scores: { pm: 3, consultant: 1 } },
      { text: "各クライアントへの深い業界理解とコミット", scores: { consultant: 3, data: 1 } },
      { text: "横断的にデータ・知見を活かす再現性", scores: { data: 3, consultant: 1 } },
      { text: "技術的な一貫性・アーキテクチャの品質維持", scores: { se: 2, cloud: 2 } },
    ],
  },
  {
    id: 14,
    text: "コンサルタントとして最も評価されたいことは？",
    options: [
      { text: "クライアントの業績・KPIを数値で改善した", scores: { data: 2, consultant: 2 } },
      { text: "難解な問題を誰よりも速く構造化・解決した", scores: { consultant: 3, pm: 1 } },
      { text: "AI・テクノロジー活用で新しい価値を生み出した", scores: { ai: 3, consultant: 1 } },
      { text: "チームや組織の変革を成功に導いた", scores: { pm: 3, consultant: 1 } },
    ],
  },
  {
    id: 15,
    text: "10年後の理想の姿は？",
    options: [
      { text: "独立・起業してグローバルにコンサルを展開", scores: { consultant: 3, pm: 1 } },
      { text: "AIコンサルの第一人者・テクノロジー × 戦略のプロ", scores: { ai: 2, consultant: 2 } },
      { text: "事業会社の経営幹部（CIO・CDO・CEO）", scores: { pm: 2, data: 2 } },
      { text: "業界特化の専門コンサルとして不動の地位を築く", scores: { consultant: 3, security: 1 } },
    ],
  },
];

const HELPDESK_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "ITヘルプデスクとして最もやりがいを感じるのは？",
    options: [
      { text: "難しい問い合わせを自力で解決して感謝された", scores: { helpdesk: 3, tester: 1 } },
      { text: "FAQ・手順書を整備してサポートを効率化した", scores: { se: 2, helpdesk: 2 } },
      { text: "ユーザーに分かりやすく教えてITリテラシーを上げた", scores: { helpdesk: 3, pm: 1 } },
      { text: "システムの改善提案が採用されて問い合わせが減った", scores: { programmer: 2, se: 2 } },
    ],
  },
  {
    id: 2,
    text: "今後挑戦してみたい分野は？",
    options: [
      { text: "プログラミング・アプリ開発でものを作る", scores: { programmer: 3, web: 2 } },
      { text: "インフラ・サーバー・ネットワークの設計管理", scores: { server: 2, network: 2, cloud: 1 } },
      { text: "セキュリティ・情報守護の専門家", scores: { security: 3, network: 1 } },
      { text: "プロジェクト管理・チームをまとめるPM", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後の理想のポジションは？",
    options: [
      { text: "社内SE・情報システム部門のリード", scores: { se: 3, helpdesk: 1 } },
      { text: "エンジニア・開発側にキャリアチェンジ", scores: { programmer: 3, web: 1 } },
      { text: "セキュリティ・コンプライアンス専門家", scores: { security: 3, network: 1 } },
      { text: "サポート部門のマネージャー・PMへ", scores: { pm: 3, helpdesk: 1 } },
    ],
  },
  {
    id: 4,
    text: "今の業務で最も集中できる作業は？",
    options: [
      { text: "問い合わせの傾向を分析・可視化する", scores: { data: 3, helpdesk: 1 } },
      { text: "マニュアル・ドキュメントを体系的に整備する", scores: { se: 3, pm: 1 } },
      { text: "ツール・スクリプトで作業を自動化する", scores: { programmer: 3, cloud: 1 } },
      { text: "ユーザーに直接対応して問題を解決する", scores: { helpdesk: 3, consultant: 1 } },
    ],
  },
  {
    id: 5,
    text: "ITの深い専門知識を身につけるなら、どの領域？",
    options: [
      { text: "プログラミング・アプリケーション開発", scores: { programmer: 3, web: 2 } },
      { text: "サーバー・ネットワーク・クラウドインフラ", scores: { server: 2, network: 2, cloud: 1 } },
      { text: "セキュリティ・情報保護・コンプライアンス", scores: { security: 3, network: 1 } },
      { text: "データ分析・BI・業務改善", scores: { data: 3, consultant: 1 } },
    ],
  },
  {
    id: 6,
    text: "今の仕事で最もストレスを感じることは？",
    options: [
      { text: "同じ問い合わせの繰り返しで成長実感がない", scores: { programmer: 2, se: 2 } },
      { text: "技術的な深い問題に対応できないことがある", scores: { server: 2, cloud: 2 } },
      { text: "セキュリティインシデントへの対応力が足りない", scores: { security: 3, network: 1 } },
      { text: "データで問題を分析・改善提案できていない", scores: { data: 3, pm: 1 } },
    ],
  },
  {
    id: 7,
    text: "チームで最も力を発揮できる場面は？",
    options: [
      { text: "ユーザーの困りごとを素早く・正確に解決", scores: { helpdesk: 3, tester: 1 } },
      { text: "ドキュメント・FAQ整備でチームを効率化", scores: { se: 2, pm: 2 } },
      { text: "問い合わせデータから改善提案を導き出す", scores: { data: 3, consultant: 1 } },
      { text: "新しいツール・自動化で作業量を減らす", scores: { programmer: 3, cloud: 1 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "コードを書けるエンジニアになる", scores: { programmer: 3, web: 2 } },
      { text: "インフラ・クラウドの専門家になる", scores: { server: 2, cloud: 2, network: 1 } },
      { text: "セキュリティエキスパートとして組織を守る", scores: { security: 3, network: 1 } },
      { text: "社内SEとして業務改革・DXを推進する", scores: { se: 2, consultant: 2 } },
    ],
  },
  {
    id: 9,
    text: "ユーザーからの問い合わせで最も多いのはどんな内容？",
    options: [
      { text: "パスワードリセット・アカウント系のトラブル", scores: { helpdesk: 3, security: 1 } },
      { text: "社内システム・業務アプリの操作方法", scores: { se: 3, helpdesk: 1 } },
      { text: "ハードウェア・周辺機器の不具合", scores: { network: 2, server: 2 } },
      { text: "データ移行・ファイル復旧・バックアップ", scores: { server: 3, cloud: 1 } },
    ],
  },
  {
    id: 10,
    text: "ITツールを使った業務改善でやってみたいことは？",
    options: [
      { text: "チャットボット・FAQシステムで自動回答率を上げる", scores: { ai: 3, helpdesk: 1 } },
      { text: "スクリプト・RPA で繰り返し作業を自動化", scores: { programmer: 3, cloud: 1 } },
      { text: "問い合わせデータを分析して根本原因を特定", scores: { data: 3, se: 1 } },
      { text: "監視ツールで障害を事前検知・先手対応", scores: { server: 2, network: 2 } },
    ],
  },
  {
    id: 11,
    text: "サポート対応の中で一番得意なことは？",
    options: [
      { text: "分かりやすく伝えるコミュニケーション", scores: { helpdesk: 3, consultant: 1 } },
      { text: "複雑な問題を論理的に切り分けて解決", scores: { se: 2, tester: 2 } },
      { text: "手順書・マニュアルを分かりやすく整備", scores: { se: 3, pm: 1 } },
      { text: "セキュリティリスクを見落とさずに対応", scores: { security: 3, helpdesk: 1 } },
    ],
  },
  {
    id: 12,
    text: "クラウド・テクノロジーについてどのくらい関心がある？",
    options: [
      { text: "AWSやAzureを実務で使えるようになりたい", scores: { cloud: 3, server: 1 } },
      { text: "AIを活用したサポート効率化に興味がある", scores: { ai: 3, helpdesk: 1 } },
      { text: "セキュリティとコンプライアンス管理をもっと深めたい", scores: { security: 3, network: 1 } },
      { text: "今はサポート品質の向上に集中したい", scores: { helpdesk: 3, pm: 1 } },
    ],
  },
  {
    id: 13,
    text: "社内での評価で最も嬉しかったことは？",
    options: [
      { text: "ユーザーから直接「ありがとう」と感謝された", scores: { helpdesk: 3, consultant: 1 } },
      { text: "提案した改善がシステムに採用された", scores: { se: 3, programmer: 1 } },
      { text: "問い合わせ件数を大幅に削減できた", scores: { data: 2, helpdesk: 2 } },
      { text: "セキュリティインシデントをゼロに抑えた", scores: { security: 3, helpdesk: 1 } },
    ],
  },
  {
    id: 14,
    text: "資格取得・スキルアップで最も興味があるものは？",
    options: [
      { text: "基本情報技術者・応用情報技術者", scores: { se: 3, helpdesk: 1 } },
      { text: "AWS/Azure クラウド資格", scores: { cloud: 3, server: 1 } },
      { text: "情報セキュリティマネジメント・CISSP", scores: { security: 3, network: 1 } },
      { text: "ITILサービスマネジメント", scores: { helpdesk: 3, pm: 1 } },
    ],
  },
  {
    id: 15,
    text: "10年後の理想の姿は？",
    options: [
      { text: "社内SEとして業務システムの企画・推進リード", scores: { se: 3, consultant: 1 } },
      { text: "セキュリティエキスパートとして組織全体を守る", scores: { security: 3, network: 1 } },
      { text: "クラウドインフラの設計・運用の専門家", scores: { cloud: 3, server: 1 } },
      { text: "IT部門マネージャーとしてチームを率いる", scores: { pm: 3, helpdesk: 1 } },
    ],
  },
];

const TESTER_QUESTIONS: Question[] = [
  {
    id: 1,
    text: "テスター（QAエンジニア）として最もやりがいを感じるのは？",
    options: [
      { text: "誰も気づかなかったバグを発見してリリースを守った", scores: { tester: 3, security: 1 } },
      { text: "テスト自動化で回帰テストをゼロ工数にした", scores: { programmer: 3, cloud: 1 } },
      { text: "品質基準・テスト戦略を設計してチームに展開した", scores: { se: 2, tester: 2 } },
      { text: "ユーザー視点のフィードバックでUXが改善された", scores: { web: 2, tester: 2 } },
    ],
  },
  {
    id: 2,
    text: "今後挑戦したい領域は？",
    options: [
      { text: "テスト自動化・CI/CDへの統合・SDET", scores: { programmer: 3, cloud: 1 } },
      { text: "セキュリティテスト・ペネトレーションテスト", scores: { security: 3, tester: 1 } },
      { text: "品質戦略・QAマネージャー・テスト組織作り", scores: { pm: 3, tester: 1 } },
      { text: "AIを活用したテスト生成・異常検知", scores: { ai: 3, programmer: 1 } },
    ],
  },
  {
    id: 3,
    text: "5年後の理想のポジションは？",
    options: [
      { text: "QAエンジニア・テスト自動化の専門家", scores: { tester: 3, programmer: 1 } },
      { text: "開発エンジニアにキャリアチェンジ", scores: { programmer: 3, web: 1 } },
      { text: "セキュリティエンジニアとして品質×セキュリティを担う", scores: { security: 3, tester: 1 } },
      { text: "QAマネージャー・PM・品質部門のリード", scores: { pm: 3, se: 1 } },
    ],
  },
  {
    id: 4,
    text: "業務で最も集中できる作業は？",
    options: [
      { text: "テストケース設計・網羅的な条件の洗い出し", scores: { tester: 3, se: 1 } },
      { text: "自動テストのスクリプト実装・メンテナンス", scores: { programmer: 3, tester: 1 } },
      { text: "バグレポートの詳細記録・再現手順の整理", scores: { tester: 3, helpdesk: 1 } },
      { text: "品質データの集計・可視化・改善提案", scores: { data: 3, pm: 1 } },
    ],
  },
  {
    id: 5,
    text: "開発チームとの関わり方で最も力を発揮できるのは？",
    options: [
      { text: "リリース前の品質ゲートキーパーとして最後の砦", scores: { tester: 3, security: 1 } },
      { text: "テスト自動化でCI/CDに統合・スピードを上げる", scores: { cloud: 2, programmer: 2 } },
      { text: "ユーザー視点でUX・UIの問題を指摘する", scores: { web: 3, tester: 1 } },
      { text: "品質KPIを設定してプロジェクトを改善する", scores: { pm: 3, data: 1 } },
    ],
  },
  {
    id: 6,
    text: "今の仕事で最もストレスを感じることは？",
    options: [
      { text: "コードを書けないと自動化に限界がある", scores: { programmer: 3, web: 1 } },
      { text: "セキュリティテストの知識が不足している", scores: { security: 3, tester: 1 } },
      { text: "品質データを分析・改善提案できていない", scores: { data: 3, pm: 1 } },
      { text: "クラウド・インフラの知識が必要な場面がある", scores: { cloud: 2, server: 2 } },
    ],
  },
  {
    id: 7,
    text: "チームで最も力を発揮できる場面は？",
    options: [
      { text: "細かい仕様の矛盾・バグを見つけ出す", scores: { tester: 3, security: 1 } },
      { text: "テスト自動化・ツール整備でチームを効率化", scores: { programmer: 3, cloud: 1 } },
      { text: "品質戦略・リスク分析で意思決定をサポート", scores: { pm: 2, data: 2 } },
      { text: "セキュリティ・脆弱性観点でのレビュー", scores: { security: 3, tester: 1 } },
    ],
  },
  {
    id: 8,
    text: "次のキャリアで求めることは？",
    options: [
      { text: "コードを書ける開発エンジニア（SDET）になる", scores: { programmer: 3, web: 1 } },
      { text: "セキュリティエンジニアとして深く専門化", scores: { security: 3, tester: 1 } },
      { text: "QAマネージャーとして組織の品質文化を作る", scores: { pm: 3, se: 1 } },
      { text: "AIを活用したテスト革新の最前線に立つ", scores: { ai: 3, programmer: 1 } },
    ],
  },
  {
    id: 9,
    text: "テストケース設計で最も意識することは？",
    options: [
      { text: "境界値・同値分割で漏れなく網羅する", scores: { tester: 3, se: 1 } },
      { text: "リスクベースで優先度を付けて効率化する", scores: { pm: 2, tester: 2 } },
      { text: "ユーザーの実際の操作フローに沿ったシナリオ", scores: { web: 2, tester: 2 } },
      { text: "セキュリティ・脆弱性テストの観点を組み込む", scores: { security: 3, tester: 1 } },
    ],
  },
  {
    id: 10,
    text: "バグを発見したとき、まず何をする？",
    options: [
      { text: "再現手順を詳細に記録してバグレポートを書く", scores: { tester: 3, se: 1 } },
      { text: "コードを読んで根本原因の仮説を立てる", scores: { programmer: 3, tester: 1 } },
      { text: "影響範囲を分析してリリース判断を経営に報告", scores: { pm: 3, data: 1 } },
      { text: "類似パターンがないか全体を探索的に調査する", scores: { tester: 3, security: 1 } },
    ],
  },
  {
    id: 11,
    text: "テスト自動化に取り組むとしたら、どこから始めたい？",
    options: [
      { text: "E2EテストをPlaywrightやSeleniumで自動化", scores: { programmer: 3, web: 1 } },
      { text: "APIテストをPostmanやRestAssuredで自動化", scores: { programmer: 2, se: 2 } },
      { text: "CI/CDパイプラインにテストを統合して継続実行", scores: { cloud: 3, programmer: 1 } },
      { text: "AI・LLMでテストケースを自動生成する", scores: { ai: 3, tester: 1 } },
    ],
  },
  {
    id: 12,
    text: "品質向上のためにチームに提案したいことは？",
    options: [
      { text: "テストプロセスの標準化・KPI設定", scores: { pm: 3, tester: 1 } },
      { text: "自動テストカバレッジの拡大", scores: { programmer: 3, cloud: 1 } },
      { text: "セキュリティテストの定期実施・脆弱性診断", scores: { security: 3, tester: 1 } },
      { text: "バグデータの分析・傾向から品質リスクを予測", scores: { data: 3, pm: 1 } },
    ],
  },
  {
    id: 13,
    text: "開発チームとQAの関係で理想的な形は？",
    options: [
      { text: "開発初期からQAが要件レビューに参加する", scores: { tester: 3, pm: 1 } },
      { text: "開発者自身がテストを書くShift-Left QA", scores: { programmer: 3, tester: 1 } },
      { text: "データで品質を可視化して意思決定を支援", scores: { data: 3, pm: 1 } },
      { text: "AIでテスト工数を削減し全体コストを下げる", scores: { ai: 3, cloud: 1 } },
    ],
  },
  {
    id: 14,
    text: "資格取得・スキルアップで最も興味があるものは？",
    options: [
      { text: "JSTQB・ISTQB テスト技術者認定", scores: { tester: 3, se: 1 } },
      { text: "情報セキュリティ（CEH・CISSP）", scores: { security: 3, tester: 1 } },
      { text: "Pythonプログラミング・テスト自動化スキル", scores: { programmer: 3, cloud: 1 } },
      { text: "PMPやアジャイル・スクラム関連", scores: { pm: 3, tester: 1 } },
    ],
  },
  {
    id: 15,
    text: "10年後の理想の姿は？",
    options: [
      { text: "SDETとしてテスト自動化のアーキテクトになる", scores: { programmer: 3, tester: 1 } },
      { text: "品質統括責任者としてプロダクト全体の品質を守る", scores: { pm: 3, tester: 1 } },
      { text: "セキュリティ×QAの専門家として独自の地位を築く", scores: { security: 2, tester: 2 } },
      { text: "AI活用テスト技術の第一人者・研究者・伝道師", scores: { ai: 3, tester: 1 } },
    ],
  },
];

export const JOB_SPECIFIC_QUESTIONS: Record<JobTypeId, Question[]> = {
  web: WEB_QUESTIONS,
  se: SE_QUESTIONS,
  programmer: PROGRAMMER_QUESTIONS,
  embedded: EMBEDDED_QUESTIONS,
  server: SERVER_QUESTIONS,
  network: NETWORK_QUESTIONS,
  cloud: CLOUD_QUESTIONS,
  ai: AI_QUESTIONS,
  data: DATA_QUESTIONS,
  security: SECURITY_QUESTIONS,
  pm: PM_QUESTIONS,
  consultant: CONSULTANT_QUESTIONS,
  helpdesk: HELPDESK_QUESTIONS,
  tester: TESTER_QUESTIONS,
};

export function getQuestions(jobId: string): Question[] {
  if (jobId === "beginner") return BEGINNER_QUESTIONS;
  return JOB_SPECIFIC_QUESTIONS[jobId as JobTypeId] ?? BEGINNER_QUESTIONS;
}

const ZERO_SCORES = (): Record<JobTypeId, number> => ({
  web: 0, se: 0, programmer: 0, embedded: 0,
  server: 0, network: 0, cloud: 0,
  ai: 0, data: 0, security: 0,
  pm: 0, consultant: 0, helpdesk: 0, tester: 0,
});

const REASON_PREFIXES: Array<(opt: string, job: string) => string> = [
  (opt, job) => `「${opt}」という選択は、${job}が日々向き合う仕事の核心と一致しています。`,
  (opt, job) => `「${opt}」への共感は、${job}として即戦力になれる思考パターンを示しています。`,
  (opt, job) => `「${opt}」と答えたあなたの感覚は、${job}の現場で高く評価される資質です。`,
  (opt, job) => `「${opt}」を選んだことが、${job}への適性を裏付ける重要なシグナルです。`,
  (opt, job) => `「${opt}」という発想は、${job}の仕事に必要な視点と完全に重なっています。`,
  (opt, job) => `${job}に向いている人の多くが「${opt}」と同じ価値観を持っています。`,
  (opt, job) => `「${opt}」というこだわりを持つ人材は、${job}の職場で自然にフィットします。`,
];

const JOB_CAUTIONS: Record<JobTypeId, string> = {
  web: "デザインへのこだわりが強すぎると「完璧だけど遅い」が口癖になることがあります。ユーザーに届かない完成度に価値はないので、「80点でリリースして改善するサイクル」を意識的に取り入れてください。",
  se: "SEはコードから離れる時間が長くなりがちです。技術トレンドのキャッチアップを怠ると、5年後にエンジニアとの対話で信頼を失うリスクがあります。週1時間でもコードを書く習慣を維持しましょう。",
  programmer: "「面白い技術課題」に時間を使いすぎて、ビジネス的に重要な「地味なバグ修正」を後回しにするパターンに注意してください。技術的な深みと事業へのインパクトのバランスを常に意識することが長期的な評価につながります。",
  embedded: "組み込み系はエコシステムが閉じていて、知識の転用が難しい場面があります。C/C++のスキルを活かしつつ、RustやPythonへの展開も視野に入れておくと、キャリアの選択肢が大きく広がります。",
  server: "オンプレサーバーの需要は今後も減り続けます。LinuxとサーバーOSの深い知識はクラウド時代にも活きますが、AWSやGCPのマネージドサービスへの理解は早めに並行して積み上げることを強くすすめます。",
  network: "SDN・クラウドネットワーキングの普及で、物理機器設定一辺倒のスキルは市場価値が下がりつつあります。ネットワーク基礎の深い理解はずっと価値がありますが、クラウドやセキュリティとの掛け算を意識しましょう。",
  cloud: "クラウドの構成ミスによるセキュリティインシデントやコスト爆発は、エンジニアとしての信頼を一瞬で失う出来事です。「とりあえず動く」より「安全でコスト最適な構成」を意識する習慣を早い段階で身につけてください。",
  ai: "AIエンジニアが陥りやすいのは「精度を上げること」に集中しすぎて「それを誰がどう使うか」を見失うことです。モデルの性能よりも「誰の何の課題を解くか」という問いを常に持ち続けましょう。",
  data: "「データが汚い」「サンプルが足りない」はデータサイエンティストの永遠の課題ですが、それが言い訳になりがちです。不完全なデータでも価値あるインサイトを出す力が、一流とそれ以外を分けます。",
  security: "セキュリティの知識は使い方によって違法行為になります。ペネトレーションテストは必ず書面での許可のもとで行い、法的・倫理的なグレーゾーンに近づかない判断力は、スキルと同じくらい重要なキャリア資産です。",
  pm: "技術的な詳細に踏み込めないPMは、エンジニアから「現場が分かっていない」と思われるリスクがあります。全部理解する必要はありませんが、「なぜその実装が難しいか」を聞いて理解しようとする姿勢だけは持ち続けてください。",
  consultant: "コンサルタントが現場の実装経験なしに「こうすべき」を語ると、クライアントの技術者に信頼されないことがあります。自分の提案が実際に動かせるものかどうか、常に実装視点でセルフチェックする習慣を持ちましょう。",
  helpdesk: "ヘルプデスクは入口として最高ですが、意識的にキャリアを設計しないと「便利屋」ポジションで止まるリスクがあります。1〜2年を目安に「次に身につけるスキル（クラウド・セキュリティ・プログラミング等）」を決めて、社内SEやエンジニアへの転換ルートを描くことを強くすすめます。",
  tester: "「テスターはコードが書けなくてもいい」は過去の話になりつつあります。テスト自動化の知識がないと、QAエンジニアとしてのキャリアアップに天井がきます。Pythonの基礎とSelenium/PlaywrightなどのE2Eツールは早めに触れておきましょう。",
};

const JOB_EPISODES: Record<JobTypeId, string> = {
  web:
    "Webエンジニアって、コードを書く仕事というより「ユーザーを想像し続ける仕事」だと私は思っています。CSSの一行にどれだけ時間をかけるか—それを「こだわり」として評価してもらえる環境に最初に出会えるかどうかが、キャリアの満足度を大きく変えます。デザインが好きなのにコードも書けるエンジニアは、どのチームでも本当に重宝されます。ぜひその感覚を武器にしてください。",

  se:
    "SEとして一番難しかったのは、技術の説明ではなく「クライアントが本当に言いたいこと」を引き出すことでした。ヒアリングの場で沈黙を怖がらずに待てるようになったとき、仕事が一気に楽しくなりました。要件定義書は、書く前の「聞く力」が全てを決めます。コードよりも言葉の精度を磨いてください。",

  programmer:
    "コードを書くのが好きなら、その感覚は絶対に大事にしてください。「なぜ動かないのか」を調べ続けられる粘り強さと、「もっときれいに書けるはず」というこだわりが、プログラマーとして伸びていくエンジンになります。最初はコードが読めなくて当然。書き続けることが唯一の近道です。",

  embedded:
    "書いたコードが本物のハードウェアを動かす瞬間は、WebやアプリのUI開発とは違う種類の達成感があります。最初は難しく見えるC言語やハード知識も、実際に触れてみると「あ、こういうことか」とつながっていきます。モノが動く瞬間の感動を知ったら、もう離れられないと思います。",

  server:
    "サーバーエンジニアって地味に見えて、実は「縁の下の力持ち」という表現がぴったりな仕事です。夜中のアラート対応は大変ですが、サービスが止まらずに動き続ける「当たり前」を自分が作っているという感覚は、じわじわ来る達成感があります。Linuxを触り始めると、コンピュータの仕組みへの理解が一段上がりますよ。",

  network:
    "ネットワークの勉強を始めると「あ、インターネットってこういう仕組みなんだ」という驚きの連続があります。目に見えないものを扱う職種ですが、パケットの流れが頭の中で可視化できるようになったとき、世界の見え方が少し変わりました。CCNAは取得の過程でも学びが多いので、ぜひ挑戦してみてください。",

  cloud:
    "Terraformで初めてインフラをコードで書いたとき、「こんなに楽でいいの？」と思いました。手動でサーバーを立てていた頃と比べると、クラウドは本当に別次元の自動化が当たり前になっています。AWSの無料枠で実際に動かしてみることが、一番の近道だと私は思っています。",

  ai:
    "AIエンジニアって、最初は「数学ができないと無理だ」と思っていました。でも実際は、数学の理論よりも「この問題をAIで解くべきか」を判断する感覚の方が先に必要です。まずPythonでモデルを動かしてみることから始めると、思ったより取り組みやすいはずです。",

  data:
    "データを分析していると、数字の奥に「人の行動」が見えてくる瞬間があります。SQLで引いたデータがグラフになって、経営の意思決定を変えた—そういう体験が積み重なると、この仕事の面白さが体にしみてきます。「なぜこの数字なのか」を問い続けるクセを持つ人が、本当に強いデータサイエンティストになります。",

  security:
    "セキュリティの仕事は、「壊し方を知っているから守れる」という逆転の発想が面白いんです。最初はCTFでいいので、攻撃と防御の両面を遊び感覚で学んでみてください。倫理と技術の両方を持つエンジニアは、今の時代に本当に必要とされています。",

  pm:
    "PMになってから一番学んだのは、「決めること」の難しさです。技術的な判断ではなく「どこで妥協するか」「誰に何を伝えるか」—その判断の積み重ねがプロジェクトの結果を変えます。エンジニアとしての経験があるPMは現場から信頼されやすいので、技術の基礎は大事にしてください。",

  consultant:
    "コンサルタントは、「答えを持っている人」じゃなくて「正しい問いを立てられる人」が活躍する仕事だと思っています。クライアントが気づいていない課題を言語化できたとき—その手応えが、この仕事の醍醐味です。ITと経営の両方がわかる人材は、まだまだ少ないので市場価値は高いです。",

  helpdesk:
    "ITヘルプデスクは、IT業界の最初の扉として本当におすすめです。現場で「よくある問題」を肌で知ることが、後のキャリアで大きな財産になります。「同じ問い合わせばかり」と感じたら、それをゼロにする仕組みを考えるのがステップアップのチャンスです。",

  tester:
    "テスターって、「バグを見つけることに喜びを感じる人」が向いていると思っています。「あ、ここ怪しい」という直感は経験で研ぎ澄まされていきます。テスト自動化を覚えると一気にキャリアが広がるので、まずはSeleniumかPlaywrightを触ってみてください。",
};

export function calculateDiagnosis(answers: number[], jobId: string): DiagnosisResult {
  const questions = getQuestions(jobId);
  const scores = ZERO_SCORES();

  type ChosenOption = { optionText: string; topScore: number };
  const chosenOptions: ChosenOption[] = [];

  answers.forEach((optionIndex, questionIndex) => {
    const question = questions[questionIndex];
    if (!question) return;
    const option = question.options[optionIndex];
    if (!option) return;
    chosenOptions.push({ optionText: option.text, topScore: 0 });
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

  const topId = rankedTypes[0].type.id;
  const topScore = rankedTypes[0].score;
  const topName = rankedTypes[0].type.name;

  // Re-scan chosen options with topId scores resolved
  const relevantChoices = answers
    .map((optionIndex, questionIndex) => {
      const question = questions[questionIndex];
      if (!question) return null;
      const option = question.options[optionIndex];
      if (!option) return null;
      return { optionText: option.text, topScore: option.scores[topId] ?? 0 };
    })
    .filter((o): o is ChosenOption => o !== null && o.topScore >= 2)
    .sort((a, b) => b.topScore - a.topScore);

  // 適正度: topScore relative to theoretical max (questions * 3)
  const maxPossible = questions.length * 3;
  const aptitude = Math.min(97, Math.max(55, Math.round((topScore / maxPossible) * 100)));

  // 向いている理由: use actual answer text as evidence
  const reasons = relevantChoices.slice(0, 4).map((o, idx) =>
    REASON_PREFIXES[idx % REASON_PREFIXES.length](o.optionText, topName)
  );
  if (reasons.length === 0) {
    reasons.push(`${topName}に必要な思考パターンと、あなたの回答傾向が一致しています。`);
  }

  // 開発者からのアドバイス: 職種別に固定
  const episode = JOB_EPISODES[topId];

  // 注意点
  const caution = JOB_CAUTIONS[topId];

  return {
    topType: rankedTypes[0].type,
    scores,
    rankedTypes,
    aptitude,
    reasons,
    episode,
    caution,
  };
}
