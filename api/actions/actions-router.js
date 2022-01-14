// // Write your "actions" router here!
const express = require('express')
const router = express.Router()
const { validateId } = require('../projects/projects-middleware')
const { validateHasActions } = require('./actions-middlware')

const Actions = require('./actions-model')
const Projects = require('../projects/projects-model')

router.get('/', async (req, res, next) => {
    
    try {
        const actions = await Actions.get()
        res.status(200).json(actions)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', validateId, validateHasActions, async (req, res, next) => {
    try {
        const project = await Projects.get(req.validId.id)
        console.log('FIND MEEEEEE', project.actions)
        const projActions = await Actions.get(project.actions)
        res.status(200).json(projActions)
    } catch (err) {
        next(err)
    }
})


module.exports = router