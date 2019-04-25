var express = require('express');

var app = express();
var port = process.env.PORT || 6981;

app.use(express.static(__dirname+"/dist"));
app.get('/', (req,res) => {
	res.send();
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});