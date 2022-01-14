const Actions = require('./actions-model')

const validateHasActions = async (req, res, next) => {
    try {
        const actions = await Actions.get(req.params.id)
        if(!actions){
            next({ status: 404, message: "Project does not contain actions" })
        } else {
            next()
        }  
    } catch (err) {
        next(err)
    }
}

module.exports = { validateHasActions }