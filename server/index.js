const express = require('express');
const bodyParser = require('body-parser');

const Restaurant = require('../database/restaurant.js');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/public'));


//take req.body, pass into .find function at db, take response,
//send to props, and pass
app.get('/api/contact', function(req, res) {
  res.status = 200;
    return res.send(res.status)
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
