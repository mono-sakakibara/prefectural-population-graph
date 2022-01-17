# 都道府県別の総人口推移グラフの SPA

## DEMO

ここにでもの gif を挿入

### URL

https://prefectural-population-graph.vercel.app/

# 作成者情報

- 課題の取り組み開始から完了までに要した合計時間
  20 時間（ドキュメント作成時間を除く）
- これまでの総合的なプログラミング歴
  1 年 3 ヶ月
- これまでの WEB フロントエンドプログラミング歴
  10 ヶ月

# 要件

1. RESAS(地域経済分析システム) API の「都道府県一覧」から API を取得する
2. API レスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS API から選択された都道府県の「人口構成」を取得する
4. 人口構成 API レスポンスから、X 軸:年、Y 軸:人口数の折れ線グラフを動的に生成して表示する

# 制約への対応

## Basic

- △ React/Vue.js/Angular のいずれかを用いて SPA を構築すること（バージョンはできるだけ最新版をご使用ください）
  ※ Nuxt.js や Next.js などの、これらを内包したフレームワークの利用も許可する
  → 制約外の Preact を使用してしまいました。Preact = React という誤った認識、ドキュメントの読み込みが甘い、といった理由から大きなミスをしてしまいました。
- ◯ 都道府県一覧および総人口情報は RESAS API のデータを用いること
- ◯ グラフは Highcharts や Rechart.js などのサードパーティ製のグラフライブラリを用いて描画すること。
  ※ ただし、グラフライブラリは上記のものに限らず、任意のものを用いてよい。
  → Highcharts を採用
- ◯ Google Chrome 最新版で正しく動くこと
  → chrome ver.97.0.4692.71 で確認
- PC/スマートフォン表示に対応すること(レスポンシブデザイン対応)。
  ※ ただし実機でなく、Google Chrome の検証ツールで確認できればよい
  → chrome ver.97.0.4692.71 で確認
- ◯ リンターやフォーマッターを適切に設定すること。
  ※ リンターには ESLint、フォーマッターには Prettier を使用すること
- ◯ style は自分で記述し、CSS・UI フレームワークなどは原則使用しないこと
  ※ ただし、chart ライブラリ内包の style、リセット系の CSS ライブラリについてはこの限りではない。また、css-in-js や css-modules、sass などのエコシステムの利用を妨げるものではなく、あくまで css の記述力を測る趣旨に留まる
  → styled-components を採用し、css-in-js で記述

## Advance

- △ TypeScript で記述すること
  → event の型定義を any で対応しており、まだ使えきれていない

# 開発の流れ

![無題のプレゼンテーション](https://user-images.githubusercontent.com/82188012/149728171-c0207f9b-d87c-408a-8cd0-255746cc732e.png)


## 開発手法

issue ドリブン開発

# 主な使用技術

- Vite
- preact
- TypeScript
- styled-components
- commitlint
- vercel
