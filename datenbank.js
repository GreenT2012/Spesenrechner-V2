const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: 'password',
    database: 'database'
});

connection.connect();


connection.query(`INSERT INTO user_ids (name, age) VALUES ('${userArr[0].name}', '${userArr[0].age}')`, (error, results) => {
    if (error) throw error;
    console.log('Values inserted');
});

connection.end();