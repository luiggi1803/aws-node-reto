var mysql = require('mysql');
var config = require('./../../config/config.json')

const createConnectionMysql = function createConnectionMysql() {
    var params = {
        host: config.dbhost,
        user: config.dbuser,
        password: config.dbpassword,
        database: config.dbdatabase
    };

    return mysql.createConnection(params);
}

module.exports = createConnectionMysql