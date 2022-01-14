const express = require('express');
const projectRouter = require('./projects/projects-router')
const server = express();


// const actionRouter = require('./actions/actions-router')

server.use(express.json())
server.use('/api/projects', projectRouter)
// server.use('/api/actions', actionRouter)
// Configure your server here
// Build your actions router in /api/actions/actions-router.js
// Build your projects router in /api/projects/projects-router.js
// Do NOT `server.listen()` inside this file!
server.get('/', (req, res) => {
    res.send(`<h2> Let the fun begin </h2>`)
})

server.use('*', (req, res) => {
    res.status(404).json({ message: `${req.method} ${req.baseUrl} is not a valid address`})
})

server.use((err, req, res, next) => {
    console.log('DEATH')
    res.status(500).json({message: ` You've encountered the following error: *** ${err.message} ***`})
})

module.exports = server;
