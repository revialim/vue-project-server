//controllers
// const { blogService } = require('../services')
const  services = require('../services');
const { 
  createUser,
  // findAllUsers 
} = services;
 
/*
 * call other imported services, or same service but different functions here if you need to
*/
const init = async (req, res, next) => {
  console.log('GET route / ');
  res.status(200).send('GET route /');
};

const postUser = async (req, res, next) => {
  const {userdata} = req.body
  // console.log("postuser controller", userdata)

  try {
    let userid = await createUser(userdata);
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    console.log('POST route /adduser');
    console.log('userid', userid);
    console.log(createUser);
    res.status(201).send('POST route /adduser');
    next();
  } catch(error) {
    console.log(error.message)
    res.sendStatus(500) && next(error)
  }
}
 
module.exports = {
  init,
  postUser
}