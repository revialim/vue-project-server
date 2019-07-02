// const cors = require('cors');
// var dbConnection = require('./db');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => console.log(`Server listening on port ${port}!`));

module.exports = {
  app
}
// app.use(cors());
// app.options('http://localhost:8080/', cors());

// const user_object = {
//   id: 1,
//   name: "admin",
//   admin: true,
//   password: "admin",
//   email: "adminmail"
// }

// app.get('/user', (req, res) => {
//   //console.log('req', req);
//   res.send(user_object)
//   })
