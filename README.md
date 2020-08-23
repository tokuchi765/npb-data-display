# npb-analysis

NPBのチームごとのデータを分析した結果を表示します。

# 使い方

### 起動
 1. フロントのソースコードをビルドする<br>
 /npb-analysis/frontend/ 配下で `npm run-script build` を実行 
 
 2. /npb-analysis/main.go をビルドする<br>
 `go build main.go`
 
 3. 生成された `main.exe` を実行する
 
 4. `http://localhost:8080/` をブラウザで開く
 ![初期表示](https://user-images.githubusercontent.com/55987154/90974924-85110280-e56a-11ea-9373-b73e653bfd30.png)
 
### 分析結果表示
 1.「セリーグ」「パリーグ」ボタンを押下すると、分析結果の画像が表示されます。
 
 ![分析画面](https://user-images.githubusercontent.com/55987154/90978106-193c9300-e586-11ea-8894-8ecf4450e2be.png)
 
 2. 「閉じる」ボタンを押下すると、分析画面が閉じます。

### 分析ボタン
 
 1. このブランチをクローンすると、分析した画像付きなのでボタンに「分析済み」と表示されます。
 ![分析ボタン](https://user-images.githubusercontent.com/55987154/90978347-2eb2bc80-e588-11ea-8484-f063bb906c62.png)
 
 2. /npb-analysis/analysis/plot 配下の画像を削除すると、ボタンに「未分析」と表示されます。
 ![未分析](https://user-images.githubusercontent.com/55987154/90978939-4be98a00-e58c-11ea-8bfe-a1b7923fd253.png)
 
 # 表示しているデータについて
 
 分析に使用しているデータは以下のサイトに掲載されているデータを使用させていただいております<br>
 <a href="https://baseball-data.com/" target="_blank">プロ野球データFreak</a>
 
 # 目的
 
 ReactとGoの勉強がしたかったので、非常にしょぼいですがプロ野球の分析ができるようなアプリの土台的な感じで作ってみました。<br>
 設計、テストコードなどなどかなり雑な作りなので、今後改良していきたい。
