
// controllers
var home = require('../app/controllers/home')
var application = require('../app/controllers/app')

/**
 * Expose
 */
module.exports = function (app, passport) {

    app.io.route('join', application.join)
    app.io.route('disconnect', application.disconnect)


    app.get('/', home.index)
    app.post('/singin', home.singin)
    app.get('/app', valid, application.index)
    
}

function valid(req, res, next){
    if(!req.cookies.id) return res.redirect('/')
    next()
}
