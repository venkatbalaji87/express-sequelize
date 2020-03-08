const Sequalize = require("sequelize");
const classDB = require("../config/classDB");
const studentTable = require("./studentDetail");

//Student mark detail

const studentMarkTable = classDB.define("studentMark", {
  mark_id: {
    type: Sequalize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  physics: {
    type: Sequalize.INTEGER,
    field: "Physics",
    allowFalse: false
  },
  chemistry: {
    type: Sequalize.INTEGER,
    field: "Chemistry",
    allowFalse: false
  },
  maths: {
    type: Sequalize.INTEGER,
    field: "Maths",
    allowFalse: false
  },
  tamil: {
    type: Sequalize.INTEGER,
    field: "tamil",
    allowFalse: false
  },
  english: {
    type: Sequalize.INTEGER,
    field: "English",
    allowFalse: false
  },
  total: {
    type: Sequalize.INTEGER,
    field: "Total"
  }
});

studentMarkTable.belongsTo(studentTable, { foreignKey: "studentId" });

const markstudent = [
  {
    physics: 90,
    chemistry: 80,
    maths: 70,
    tamil: 34,
    english: 33,
    studentId: 2
  },
  {
    physics: 35,
    chemistry: 80,
    maths: 70,
    tamil: 90,
    english: 100,
    studentId: 4
  },
  {
    physics: 90,
    chemistry: 32,
    maths: 32,
    tamil: 90,
    english: 100,
    studentId: 1
  },
  {
    physics: 80,
    chemistry: 32,
    maths: 70,
    tamil: 90,
    english: 100,
    studentId: 5
  },
  {
    physics: 32,
    chemistry: 35,
    maths: 35,
    tamil: 35,
    english: 90,
    studentId: 3
  }
];

studentMarkTable
  .sync({ force: true })
  .then(() => {
    return studentMarkTable.bulkCreate(markstudent, { returning: true });
  })
  .then(result => {
    console.log(result.forEach(item => console.log(item.get())));
  })
  .catch(console.error);

module.exports = studentMarkTable;
