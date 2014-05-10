var crypto = require('crypto')




exports.index = function (req, res) {
  res.render('home/index')
}

exports.singin = function(req, res) {
	var name = req.body.name
		,	 id = ''

	if(!name) return res.redirect('/')
	if(!req.cookies.id){
		id = crypto.createHash('md5').update(name).digest("hex");
		res.cookie('name',name, { expires: new Date(Date.now() + 9000000), httpOnly: true})
		res.cookie('id', id, { expires: new Date(Date.now() + 9000000), httpOnly: true})
	}
	return res.redirect('/app')
}
