import express from 'express';

// Expressの設定
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

// クライアントからのリクエストを処理するコード
app.get('/', (req, res) => {
  res.render('index', {
    name: 'world',
  });
});

// サーバを起動するコード
const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
