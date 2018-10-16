const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const bruinsController = require('./controllers/bruins');

require('./db/db');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride('_method'));


app.use('/bruins', bruinsController);




app.get('/', (req, res) => {
  res.send('')
});









app.listen(3000, () => {
  console.log('listening on port 3000')
})