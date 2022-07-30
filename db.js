const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'ADMIN',
    host: 'localhost',
    port: 5432,
    database: 'welbex_db'
})

module.exports = pool;

