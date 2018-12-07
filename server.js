const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'Views')))
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json())

require('./Controllers/routesController')(app)

require('./Models').sequelize.sync().then(() => app.listen(3200, () => console.log('http://localhost:3200')))