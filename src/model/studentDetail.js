const Sequalize = require("sequelize");
const classDB = require("../config/classDB");

const studentTable = classDB.define("student", {
  id: {
    type: Sequalize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  firstName: {
    type: Sequalize.STRING,
    field: "first_name", //to make underscore in name we are doing this
    allowNull: false
  },
  lastName: {
    type: Sequalize.STRING,
    field: "last_name", //to make underscore in name we are doing this
    allowNull: false
  },
  email: {
    type: Sequalize.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  }
});

// const newStudent = [
//   {
//     firstName: "Manoj",
//     lastName: "Balaji",
//     email: "test@gmail.com"
//   },
//   {
//     firstName: "Venkat",
//     lastName: "Balaji",
//     email: "test1@gmail.com"
//   },
//   {
//     firstName: "Raghavi",
//     lastName: "Balaji",
//     email: "test2@gmail.com"
//   },
//   {
//     firstName: "Usha",
//     lastName: "Balaji",
//     email: "test3@gmail.com"
//   },
//   {
//     firstName: "test",
//     lastName: "user",
//     email: "test4@gmail.com"
//   }
// ];

// studentTable
//   .sync({ force: true })
//   .then(() => {
//     return studentTable.bulkCreate(newStudent, { returning: true });
//   })
//   .then(result => {
//     console.log(result.forEach(item => console.log(item.get())));
//   })
//   .catch(console.error);

// var studentsList = [];
// await newStudent.findAll().then(response => {
//   response.forEach(student => studentsList.push(studentTable.get()));
// });

module.exports = studentTable;
