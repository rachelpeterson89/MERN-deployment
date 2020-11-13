const Pet = require('../models/model.database');

module.exports = {
    index:(req, res) => {
        // easier way to sort perhaps
        // Pet.find().sort({type: 1})
        Pet.find()
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    create:(req, res) => {
        Pet.create(req.body)
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    show:(req, res) => {
        Pet.findOne({_id: req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    update:(req, res) => {
        Pet.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    },
    destroy:(req, res) => {
        Pet.deleteOne({_id: req.params.id})
            .then(data => res.json({results:data}) )
            .catch(err => res.json(err.errors))
    }
}