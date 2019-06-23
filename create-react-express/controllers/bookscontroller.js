//require db 
// import db from ("../models")
const db = require("../models")

module.exports = {
    findAllSaved: (req, res) => {
        db.SavedBooks
        .find()
        .then(function(result){
            res.json(result)
        })
        .catch(err => res.status(422).json(err));
    },

    create: (req, res) => {
        db.SavedBooks
        .create({
            title: req.body.title,
            link: req.body.link,
            thumbnail: req.body.thumbnail,
            author: req.body.author,
            description: req.body.description,
            key: req.body.key
        })
        .then(res.end())
    },
    remove: (req, res) => {
        db.SavedBooks
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
}