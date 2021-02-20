const Users = require("../model/users-model");

const createUser = () => {
  const user = new Users({
    username: "admin",
    password: "admin",
    role: "superuser"
  });

  user
    .save()
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err));
};

module.exports = {
  createUser
};
