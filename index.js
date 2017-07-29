const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
})

app.post('/form', (req, res) => {
	console.log(req.body)
	console.log(req.body.Email)
	console.log(req.body.Name)
	console.log(req.body.Text)
	res.json({ ok: true });
})

app.use(express.static('public'))

app.listen(3000, () => console.log('Server running on port 3000'))
