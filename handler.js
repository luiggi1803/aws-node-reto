'use strict';
const planets = require('./src/api/starwars')
const { registrarBd, obtenerBd } = require('./src/models/planet')

module.exports.obtenerPlanets = (event, context, callback) => {
  console.log(event)
  console.log('ID enviado => ' + event.pathParameters.id)
  planets(event.pathParameters.id, (error, planetData) => {

    if (error) {
      const response = {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(error)
      };
      return callback(null, response);
    }


    const response = {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(planetData)
    };
    return callback(null, response);

  })

}

module.exports.registrarPlanetBd = (event, context, callback) => {
  const body = JSON.parse(event['body'])

  registrarBd(body, (error, mensaje) => {
    if (error) {
      const response = {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: error
        })
      };
      return callback(null, response);
    }

    const response = {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: mensaje
      })
    };
    return callback(null, response);


  })


}

module.exports.obtenerPlanetBd = (event, context, callback) => {
  console.log(event)
  console.log('ID enviado => ' + event.pathParameters.id)
  obtenerBd(event.pathParameters.id, (error, datos) => {
    if (error) {
      const response = {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(error)
      };
      return callback(null, response);
    }

    const response = {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datos)
    };
    return callback(null, response);
  })
};
