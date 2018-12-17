const mysql = require('mysql2')

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database:'users',
});

connection.connect()

connection.query('SELECT * FROM `user_data`', function(err,rows,fields){

    if(err) throw err

//    console.log("result is", rows)

})

module.exports = connection.promise();