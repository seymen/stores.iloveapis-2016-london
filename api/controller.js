// example controller
var amok = require('amokjs');

exports.get = function(req, res) {
	// let amok handle mock responses
	amok.respond(req,res);
};

exports.post = function(req, res) {
	// let amok handle mock responses
	amok.respond(req,res);
};