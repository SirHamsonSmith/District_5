const db = require('../models')

module.exports = app => {
    app.get('/ideas', (req, res) => {
        db.ideas.findAll({})
            .then(r => res.json(r))
            .catch(e => console.log(e))
    })
    app.get('/ideas/:route/:name', (req, res) => {
        const name = req.params.name === "null" ? null : req.params.name;
        db.ideas.findAll({
                where: {
                    [req.params.route]: name
                }
            })
            .then(r => res.json(r))
            .catch(e => console.log(e))
    })
    app.get('/ideas/:topic', (req, res) => {
        db.ideas.findOne({})
            .then(r => res.json(r))
            .catch(e => console.log(e))
    })

    app.get('/users', (req, res) => {
        db.users.findAll({})
            .then(r => res.json(r))
            .catch(e => console.log(e))
    })

    app.post('/ideas', (req, res) => {
        db.ideas.create(req.body)
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
    })
    app.post('/users', (req, res) => {
        db.users.create(req.body)
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    app.post('/votes', (req, res) => {
        db.votes.create(req.body)
            .then(() => {
                res.sendStatus(200)
            })
            .catch(e => console.log(e))
    })

    app.put('/ideas/:topic', (req, res) => {
        db.ideas.update(req.body, {
                where: {
                    topic: req.params.topic
                }
            })
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    app.put('/votes', (req, res) => {
        db.votes.update(req.body, {
          where: {
            topic: req.body.topic
          }
        })
          .then(() => res.sendStatus(200))
          .catch(e => console.log(e))
      })

    app.delete('/ideas/:topic', (req, res) => {
        db.ideas.destroy({
                where: {
                    topic: req.params.topic
                }
            })
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    app.delete('/ideas/:id', (req, res) => {
        db.ideas.destroy({
                where: {
                    topic: req.params.id
                }
            })
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    app.delete('/users/:userName', (req, res) => {
        db.users.destroy({
                where: {
                    userName: req.params.userName
                }
            })
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
    })

    app.delete('/ideas', (req, res) => {
        db.ideas.destroy({
                where: {},
                truncate: true
            })
            .then(() => res.sendStatus(200))
            .catch(e => console.log(e))
    })
}