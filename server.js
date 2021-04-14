const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');
const crud = require('./src/crud.js')

const connection = mysql.createConnection({
  host: 'localhost',

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: 'root',

  // Be sure to update with your own MySQL password!
  password: 'SmaugandCal2',
  database: 'employee_tracker_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log("i work");
});

// Examples
//crud.create(connection, "department", {department_name: "HR"});
//console.log(crud.read(connection, "department"));

//crud.create(connection, "employee_role", {title: "manager", salary: 2.0, department_id: 8});
//console.log(crud.read(connection, "employee_role"));
//crud.update(connection, "employee_role", [{salary: 2000.0},{title: "manager"}])
//console.log(crud.read(connection, "employee_role"));

connection.end();