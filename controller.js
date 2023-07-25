const fs = require('fs')

exports.getQuest = function(req, res) {
	fs.readFile(`./quests/${req.params.questId}`, 'utf8', (err, data) => {
		res.json(JSON.parse(data))
	})
}

exports.createQuest = function(req, res) {

}