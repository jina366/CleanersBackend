const { Pool } = require('pg');

const connectionString =
    process.env.DATABASE_URL

console.log('connection up', connectionString);

let client = new Pool({
    connectionString
})

client.on('error', (e) => {
    console.error('Database error', e);
})

module.exports = client;
