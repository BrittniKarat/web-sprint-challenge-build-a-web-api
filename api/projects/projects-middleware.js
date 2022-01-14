// add middlewares here related to projects
const Projects = require('./projects-model')

const validateId = async (req, res, next) => {
    const project = await Projects.get(req.params.id)
    if(!project){
        next({ status: 404, message: "Project not found" })
    } else {
        req.validId = project
        next()
    }
}

module.exports = { validateId, }