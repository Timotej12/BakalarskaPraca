var express = require('express');
var app = express();
var port = 3000;
var path = require('path');

app.use(express.static('public'));
app.use('/html',express.static('public/html'));
app.get('', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/html/index.html'));
});


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})