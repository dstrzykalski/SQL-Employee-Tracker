require('dotenv').config();

const { Client } = require('pg');
const connection = new Client({
    host: 'localhost',
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

module.exports = connection;
