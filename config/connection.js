const { Client } = require('pg');
const connection = new Client({
    host: 'localhost',
    port: 3001,
    user: 'postgres',
    password: '14010ds',
    database: 'employee_tracker'
});

module.exports = connection;
