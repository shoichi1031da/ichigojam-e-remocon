# ichigojam-e-remocon-app

<img src="https://github.com/shoichi1031da/ichigojam-e-remocon-app/blob/main/document/main.png" alt="メイン" title="main">

IchigoJamを使った遠隔家電リモコンWebアプリです。

IchigoJam（+MixJuice）をTCPでwebサーバーと通信し、ブラウザからIchigoJamを遠隔操作します。

（制御できるIchigoJamの台数は1台）

今回は「IchigoJam専用学習リモコン基板」を使用し、自宅外からも家電の制御を行います。

https://bit-trade-one.co.jp/adicgir/

## ソースコードの補足

### 1. webServer.js
ブラウザにHTMLを返すwebサーバーとしての役割と、ブラウザからの入力をtcpサーバー（tcpServer.js）に渡すリレーとしての役割を果たします。

tcpサーバーにはTCPで通信します。

またIchigoJamからの出力内容もWebSocketでindex.jsに渡し、表示させています。

https://github.com/shoichi1031da/ichigojam-e-remocon-app/blob/main/webServer.js

### 2. tcpServer.js
ブラウザ（ホストコンピュータ）とIchigoJamのTCP接続を行い、双方向にデータを通信します。

https://github.com/shoichi1031da/ichigojam-e-remocon-app/blob/main/public/tcpServer.js

### 3. index.js
index.htmlのDOM操作を行います。

またformタグによるPOSTメソッドでwebサーバーにブラウザ上の入力を送信します。

IchigoJam（クライアント）からのデータをwebサーバーから受け取り、WebSocketによりブラウザ上に表示させます。

https://github.com/shoichi1031da/ichigojam-e-remocon-app/blob/main/public/index.js

### 4. ichigojam-sample-code

IchigoJamのサンプルコードtxtファイルと、コメント付きのtxtファイルがあります。

詳細はコメント付きのファイルを参照してください。

https://github.com/shoichi1031da/ichigojam-e-remocon-app/blob/main/public/ichigojam-sample-code

### ■その他

質問などはTwitterのDMからお願いします。

https://twitter.com/shoichi1031da

