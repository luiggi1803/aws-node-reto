const createConnectionMysql = require('./../db/mysql')

const registrarBd = (body, callback) => {
    var connection = createConnectionMysql();
    var values = [[body['namePlanet'], body['climate'], body['gravity']]];

    connection.query('insert into planets(namePlanet,climate,gravity) values ? ;', [values],
        function (error, results, fields) {
            if (error) {
                connection.end();
                return callback(error, undefined)
            } else {
                connection.end();
                return callback(undefined, 'Planet register sucessfully!')
            }
        });
}

const obtenerBd = (id, callback) => {
    var connection = createConnectionMysql();
    var values = [id];

    connection.query('select * from planets where idPlanet=?;', [values],
        function (error, results, fields) {

            if (error) {
                connection.end();
                return callback(error, undefined)
            } else {
                connection.end();
                return callback(undefined, results)
            }

        });
}

module.exports = { registrarBd, obtenerBd }