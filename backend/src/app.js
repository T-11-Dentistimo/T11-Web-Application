// App template taken from https://git.chalmers.se/courses/dit342/2022/group-04-web which is under an MIT license

const express = require('express')
const morgan = require('morgan')
const path = require('path')
const cors = require('cors')
const history = require('connect-history-api-fallback')

const sessions = require("./controllers/sessions")

// Variables
let port = process.env.PORT || 3000

// Create Express app
let app = express()
// Parse requests of content-type 'application/json'
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// HTTP request logger
app.use(morgan('dev'))
// Allow auth cookies to be passed to the server
let corsConfig = {
    origin: true,
    credentials: true
};
// Enable cross-origin resource sharing for frontend must be registered before api
app.options('*', cors(corsConfig))
app.use(cors(corsConfig))

// Import routes
app.get('/api', function(req, res) {
    res.json({'message': 'Welcome to your DIT356 backend ExpressJS project!'})
})

app.use(sessions)

// Configuration for serving frontend in production mode
// Support Vuejs HTML 5 history mode
app.use(history())
// Serve static assets
let root = path.normalize(__dirname + '/..')
let client = path.join(root, 'frontend', 'dist')
app.use(express.static(client))

// Catch all non-error handler for api (i.e., 404 Not Found)
app.use('/api/*', function (req, res) {
    res.status(404).json({ 'message': 'Not Found' })
})

// Error handler (i.e., when exception is thrown) must be registered last
let env = app.get('env')
// eslint-disable-next-line no-unused-vars
app.use(function(err, req, res, next) {
    console.error(err.stack)
    let err_res = {
        'message': err.message,
        'error': {}
    };
    if (env === 'development') {
        // Return sensitive stack trace only in dev mode
        err_res['error'] = err.stack
    }
    res.status(err.status || 500)
    res.json(err_res)
})

app.listen(port, function(err) {
    if (err) throw err;
    console.log(`Express server listening on port ${port}, in ${env} mode`)
    console.log(`Backend: http://localhost:${port}/api/`)
    console.log(`Frontend (production): http://localhost:${port}/`)
})

module.exports = app
