## 概要

都道府県別の総人口推移グラフを表示する SPA(Single Page Application)を構築せよ

＜内容＞

1. RESAS(地域経済分析システム) API の「都道府県一覧」から API を取得する
2. API レスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS API から選択された都道府県の「人口構成」を取得する
4. 人口構成 API レスポンスから、X 軸:年、Y 軸:人口数の折れ線グラフを動的に生成して表示する

＜制約＞
・都道府県一覧および総人口情報は RESAS API のデータを用いること
・グラフは Highcharts や Rechart.js などのサードパーティ製のグラフライブラリを用いて描画すること
　ただし、グラフライブラリは上記のものに限らず、任意のものを用いてよい
・Google Chrome 最新版で正しく動くこと
・PC/スマートフォン表示に対応すること(レスポンシブデザイン対応)
　ただし実機でなく、Google Chrome の検証ツールで確認できればよい

＜注意事項＞

- RESAS API の利用登録(無料)を行い、API Key を発行する必要がある
- セキュリティを考慮してコードを記述すること
- アプリのコンポーネント粒度の設計、Git コミットメッセージやコミット粒度、ドキュメンテーション等もレビュー対象となる
- チーム開発を意識してコードを記述すること

* 参考
  *RESAS API: https://opendata.resas-portal.go.jp<br/>
  *RESAS API 仕様書: https://opendata.resas-portal.go.jp/docs/api/v1/index.html<br/>
  *Highcharts: https://www.highcharts.com/<br/>
  *Recharts.js: http://recharts.org/en-US/

- ワイヤーフレーム
  https://www.notion.so/7646721865fa47e7b2c9b2a52c8c40ac

## 導入ツール

### フレームワーク

使ったことのある Next.js で実装を行おうと思いましたが、新しい技術を使うチャンスだと思い、preact + vite の構成で挑戦してみました。

#### preact

- 理由
  今回は１ページのみのシンプルな SPA の開発のため、容量は小さいに越したことはないと思い、今回の実装に適していると考えました。

#### vite

- 理由
  高速ということで有名な点、現在の実務でも使う可能性があることから、vite を選択しました。

### そのほか

### commit zen

- 理由
  コミットメッセージをテンプレート化することで、誰でも最低限の内容を担保するため。
  emoji にしたのはパッと見てわかりやすい点と、実装が楽しくなる、モチベーションの点から導入しました。

## 参考記事

### TypeScript の設定

- https://www.typescriptlang.org/ja/tsconfig
