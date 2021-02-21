const Users = require("../model/users-model");
const cryptoJS = require("crypto-js");

const createUser = () => {
  const password = cryptoJS.SHA1("admin");
  const user = new Users({
    username: "admin",
    password: password,
    role: "superuser"
  });

  user
    .save()
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
};

const getUser = async (event, arg) => {
  const { userName, userPass } = arg;
  const userPassword = cryptoJS.SHA1(userPass);
  const response = await Users.where({
    username: userName,
    password: userPassword
  });
  console.log(response);

  if (!response || response.length <= 0) {
    return {
      success: false,
      userID: null,
      userName: null
    };
  }

  return {
    success: true,
    userID: response[0]._id.toString(),
    userName: response[0].username
  };
};

module.exports = {
  createUser,
  getUser
};
