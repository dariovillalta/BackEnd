var regaloController = require('./controllers/regaloController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1, Students')}}},
	{method: 'GET', path: '/v1/regalo', config: regaloController.getregaloSERVER},
  {method: 'POST', path: '/v2/regalo', config: regaloController.createregaloSERVER},
  {method: 'PUT', path: '/v3/regalo', config: regaloController.modificarregaloSERVER},
  {method: 'DELETE', path: '/v4/regalo/{nombre}', config: regaloController.borrarregaloSERVER},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout}
];
