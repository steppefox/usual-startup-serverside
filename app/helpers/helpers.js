var projects = require('../../config/projects.json')
	,	features = require('../../config/features.json')
	,	_ = require('lodash')

exports.getOneProjectAndRemove = function() {
	var index = getRand(projects.length)
		project = projects.splice(index, 1)
		return project;
}

exports.getOneFeatureAndRemove = function() {
	var index = getRand(features.length)
		feature = features.splice(index, 1)
		return feature;
}

exports.getTwoFeaturesAndRemove = function() {
	var index = []
		,	feature = []

		index[0] = getRand(features.length)
		index[1] = getRand(features.length)

		feature[0] = features.splice(index[0], 1)
		feature[1] = features.splice(index[1], 1)

		return feature;
}

exports.getProjects = function() {
	return projects;
}

exports.getFeatures = function() {
	return features;
}

exports.shuffleProjects = function() {
	return _.shuffle(projects);
}

exports.shuffleFeature = function() {
	return _.shuffle(features);
}

function getRand(size) {
	return Math.floor(Math.random() * (size - 0) + 0);
}