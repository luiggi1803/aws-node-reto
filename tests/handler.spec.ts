const { registrarPlanetBd, obtenerPlanets, obtenerPlanetBd } = require('../handler')
const eventGenerator = require('./testUtils/eventGenerator')
const validators = require('./testUtils/validators')

describe('Lambda Endpoint', () => {

    test('Test POST Registrar Planeta en BD', () => {
        const event = eventGenerator({
            body: {
                namePlanet: 'LuiggiTest',
                climate: 'ClimateTest',
                gravity: 'GravityTest2'
            },
        });

        registrarPlanetBd(event, null, (error, data) => {
            expect(data).toBeDefined();
            expect(validators.isApiGatewayResponse(data)).toBe(true);
            expect(data.statusCode).toBe(200)
        })

    });

    test('Test GET Obtener Planeta BD', () => {
        const event = eventGenerator({
            pathParametersObject: {
                id: '2'
            },
        });

        obtenerPlanetBd(event, null, (error, data) => {
            expect(data).toBeDefined();
            expect(validators.isApiGatewayResponse(data)).toBe(true);
            expect(data.statusCode).toBe(200)
        })

    });

    test('Test GET Obtener Planeta API SWAPI', () => {
        const event = eventGenerator({
            pathParametersObject: {
                id: '2'
            },
        });

        obtenerPlanets(event, null, (error, data) => {
            expect(data).toBeDefined();
            expect(validators.isApiGatewayResponse(data)).toBe(true);
            expect(data.statusCode).toBe(200)
        })

    });
});
