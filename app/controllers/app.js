var _ = require('lodash')
	,	fails = require('../../config/fails.json')
	,	companies = require('../../config/companies.json')
	,	projects = require('../../config/projects.json')
	,	features = require('../../config/features.json')
	,	helpers = require('../helpers/helpers.js')
	,	users = {}
	,	dataUsers = {}
	,	keys = []
	, scope = {index:0, step:0, endCnt:[], sockets:{}}



exports.index = function (req, res) {
  res.render('app/index')
}


exports.join = function(req,res) {
	if(!users[req.cookies.id]){
		if(dataUsers[req.cookies.id]){
			users[req.cookies.id] = dataUsers[req.cookies.id]
		}else{
			users[req.cookies.id] = {
					id: req.cookies.id
				, name: req.cookies.name
				, price: 0
				, perPrice: 0
				, activeProject: {}
				, data: {}
			}
		}
		scope.sockets[req.cookies.id] = req.io
		dataUsers[req.cookies.id] = users[req.cookies.id]
		req.io.emit('statusWait', users[req.cookies.id])
	}

	keys = Object.keys(users)
	if(keys.length === 3){
		req.io.emit('start', true)
		req.io.broadcast('start', true)
		exports.step(req, res)
	}

	if(keys.length > 3){
		return false;
	}
}

exports.step = function(req, res) {
	var player = users[keys[scope.index]]
	
	project = helpers.getOneProjectAndRemove()
	feature = helpers.getTwoFeaturesAndRemove()

	player.data = {project:project, features:feature};

	scope.sockets[player.id].emit('giftCardsMP', player.data)
	scope.sockets[player.id].broadcast('giftCards', project)

	scope.index++;
	scope.step++;
	if(scope.index > (keys.length-1)){
		scope.index = 0
	}
}

exports.endStep = function(req, res) {
	scope.endCnt.push(req.cookies.id)
	if(scope.endCnt.length === 3){
		scope.endCnt = []
		exports.step(req, res)
	}
}

exports.disconnect = function(req, res) {
	delete users[req.cookies.id]
}


