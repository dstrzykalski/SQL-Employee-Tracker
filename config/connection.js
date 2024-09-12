const { Client } = require('pg');
const connection = new Client({
    host: 'localhost',
    user: 'process.env.DB_USER',
    password: 'process.env.DB_PASSWORD',
    database: 'employee_tracker',
    port: 3001
});

module.exports = connection;