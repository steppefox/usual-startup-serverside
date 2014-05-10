var _ = require('lodash')
	,	fails = require('../../config/fails.json')
	,	companies = require('../../config/companies.json')
	,	projects = require('../../config/projects.json')
	,	features = require('../../config/features.json')
	,	helpers = require('../helpers/helpers.js')
	,	users = {}
	,	keys = []
	, current = {index:0}



exports.index = function (req, res) {
  res.render('app/index')
}


exports.join = function(req,res) {

	if(!users[req.cookies.id]){
		users[req.cookies.id] = {
				id: req.cookies.id
			, name: req.cookies.name
			, socket: req.io
		}
	}

	keys = Object.keys(users)
	console.log(current.index)
	if(keys.length === 3){
		req.io.emit('statusWait', true)
		req.io.broadcast('statusWait', true)
		exports.step(req,res)
	}

	// if(keys.length > 3){
	// 	return true;
	// }
}

exports.step = function(req, res, fromJoin) {
	// console.log(current.index)
	var player = users[keys[current.index]]
	
	project = helpers.getOneProjectAndRemove()
	feature = helpers.getTwoFeaturesAndRemove()

	player.data = {project:project, features:feature};

	player.socket.emit('giftCardsMP', player.data)
	player.socket.broadcast('giftCards', project)

	current.index++;
	if(current.index > keys.length){
		current.index = 0
	}
}

exports.disconnect = function(req, res) {
	delete users[req.cookies.id]
}


