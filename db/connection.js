const mysql  = require('mysql2');

//connect to database
const db = mysql.createConnection({
    host: 'localhost',
    //Your MySQL username
    user: 'root',
    //Your Sql pw
    password: 'SpR0ut2022?',
    database: 'election'
});






module.exports = db;