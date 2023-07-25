module.exports = function(app) {
	const controller = require('./controller')
	const multer = require('multer')
	const upload = multer({dest: './uploads/'})

	// controller Routes
	app.get('/quest/:questId', controller.getQuest)
	app.post('/new-quest', controller.createQuest)
}