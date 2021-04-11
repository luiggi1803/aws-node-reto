const request = require('request')

const planets = (idPlanet, callback) => {
    const url = 'http://swapi.py4e.com/api/planets/' + idPlanet + '/'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to StarWars services ', undefined)
        } else if (body.error) {
            callback('Unable to find StarWars. Try another search. ', undefined)
        } else {
            callback(undefined, body)
        }
    })
}

module.exports = planets