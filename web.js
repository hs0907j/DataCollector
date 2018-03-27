const express = require('express')
const app = express()
const fs = require('fs')

app.get('/', (req, res) => res.send('Hello World!'))

var seq = 0
app.get('/update', function(req, res) {
	var csvStr = req.query.api_key + ',' + req.query.field1
	fs.appendFile('log.txt', csvStr+"\n", function (err) {
		if (err) throw err

		

		console.log("%s", csvStr)
		res.end("Got "+ String(seq++) +" "+ csvStr)
	});
})

app.get('/get', function(req, res) {
	fs.readFile('log.txt', 'utf-8', function (err, data) {
		if(err) throw err
		res.end(String(data))
	});
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
