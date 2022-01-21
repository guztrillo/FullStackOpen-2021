const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors')
const logger = require('./utils/logger');
const config = require('./utils/config');
const personRouter = require('./controllers/person')
const middleware = require('./utils/middleware');

app.use(cors())

app.use(express.json());

app.use(express.static('build'))

morgan.token('body', function getId(req) {
     return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

app.get('/', (request, response) => {
     response.send('<h1>Hello World!</h1>')
})

app.use('/api/persons', personRouter)

app.use(middleware.unknownEndpoint)

app.use(middleware.errorHandler)


app.listen(config.PORT, () => {
     logger.info(`Server running on port ${config.PORT}`)
})


