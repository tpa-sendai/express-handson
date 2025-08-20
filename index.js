import express from 'express';
import bodyParser from 'body-parser';

// Expressの設定
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: true }));
// ---- これより上は変更しないでください ----

// クライアントからのリクエストを処理するコード
app.get('/', (req, res) => {
  res.render('index', {
    name: 'world',
  });
});

// ---- これより下は変更しないでください ----
// サーバを起動するコード
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
