const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json())

require('./routes/routes')(app)

require('./models').sequelize.sync().then(() => app.listen(3200, () => console.log('http://localhost:3200')))