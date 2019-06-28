const express = require('express')
const app = express()
const port = 3000


const user_object = {
  id: 1,
  name: "admin",
  admin: true,
  password: "admin",
  email: "adminmail"
}

app.get('/user', (req, res) => {
  //console.log('req', req);
  res.send(user_object)
  })


app.listen(port, () => console.log(`Server listening on port ${port}!`))
