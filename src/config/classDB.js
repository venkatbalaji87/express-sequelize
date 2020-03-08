const importSequalize = require("sequelize");

const classDB = new importSequalize(process.env.EnvURL);

classDB
  .authenticate()
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch(err => {
    console.log("Connection failed");
    console.error(err);
  });

module.exports = classDB;
