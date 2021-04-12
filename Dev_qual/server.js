const express = require('express'); // 설치한 express 가져옴
const app = express();


const server = app.listen(10040, () => {
    console.log('start server : localhost:10040')
})


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine("html", require('ejs').renderFile);

// 서버 request 받는 router 만들어줌
app.get('/', function(req, res) {
    res.render('index.html');
})

app.get('/about', function(req, res) {
    res.send('about page');
})