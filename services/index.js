//services
const { createUserDB, findUsersDB } = require('../db')
 
/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/
const createUser = async (userdata) => {
  try {
    let userid = await createUserDB(userdata);
    console.log(userid, 'in create user services');
    return userid;
  } catch(e) {
    throw new Error(e.message)
  }
}
 
const findAllUsers = async () => {
  try {
    return await findUsersDB()
  } catch(e) {
    throw new Error(e.message)
  }
}

module.exports = {
  createUser,
  findAllUsers
}