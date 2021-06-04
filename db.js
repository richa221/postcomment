const {
	Client
} = require('pg')
const client = new Client({
	user: 'postgres',
	host: 'localhost',
	database: 'UserDatabase',
	password: 'Welcome@v.m1',
	port: 5432,
})
module.exports = client;