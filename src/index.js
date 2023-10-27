require('dotenv').config()

const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')
const express = require('express')
const mongoose = require('mongoose')
const compression = require('compression')

// Initializations
const app = express();
const port = process.env.PORT || 3001
const connectionUrl = process.env.CONNECTION_URL

// Database configuration
/* mongoose.connect(connectionUrl).then(() => {
    console.log('Connected to the database.')
}).catch((err) => {
    console.log('ERROR: Cannot connect to the database.')
    console.log(err)
}) */

// Middleware
app.use(helmet({ contentSecurityPolicy: false }))
app.use(compression());
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.disable('etag')


// Listening the server
app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
})