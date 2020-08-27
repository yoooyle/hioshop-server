const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'hiolabsDB',
    prefix: 'hiolabs_',
    encoding: 'utf8mb4',
    host: 'mysql',
    port: '3306',
    user: 'root',
    password: '123123123',
    dateStrings: true
};
