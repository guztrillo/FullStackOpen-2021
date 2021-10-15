require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors')
const Person = require('./models/person');

app.use(cors())

app.use(express.json());

app.use(express.static('build'))

morgan.token('body', function getId(req) {
     return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));


// let persons = [
//      {
//           "id": 1,
//           "name": "Arto Hellas",
//           "number": "040-123456"
//      },
//      {
//           "id": 2,
//           "name": "Ada Lovelace",
//           "number": "39-44-5323523"
//      },
//      {
//           "id": 3,
//           "name": "Dan Abramov",
//           "number": "12-43-234345"
//      },
//      {
//           "id": 4,
//           "name": "Mary Poppendieck",
//           "number": "39-23-6423122"
//      }
// ];


app.get('/', (request, response) => {
     response.send('<h1>Hello World!</h1>')
})



app.get('/api/persons', (request, response) => {
     Person.find({}).then(people => {
          response.json(people)
     })
})

app.get('/info', (request, response) => {
     const date = new Date();
     Person.find({}).then(people => {
          response.send(`<p>Phonebook has info for ${people.length} people</p> <p>${date}</p>`)
     })
})

app.get('/api/persons/:id', (request, response, next) => {
     // const id = Number(request.params.id);
     // const person = persons.find(per => per.id === id);
     // person ? response.json(person) : response.status(404).end();
     Person.findById(request.params.id).then(person => {
          person ? response.json(person) : response.status(404).end()
     }).catch(err => next(err))

})

app.delete('/api/persons/:id', (request, response, next) => {
     // const id = Number(request.params.id);
     // persons = persons.filter(per => per.id !== id);
     // response.status(204).end()
     Person.findByIdAndRemove(request.params.id)
          .then(() => {
               response.status(204).end()
          })
          .catch(err => next(err))
})

app.put('/api/persons/:id', (request, response, next) => {
     const personData = request.body;
     const person = {
          name: personData.name,
          number: personData.number
     }
     Person.findByIdAndUpdate(request.params.id, person, { new: true, runValidators: true, context: 'query'})
          .then(updatedPerson => response.json(updatedPerson))
          .catch(err => next(err))
})

// const generateId = () => {
//      return Math.floor(Math.random() * (10000000 - 100)) + 100
// }

app.post('/api/persons/', (request, response, next) => {
     const personData = request.body;
     // const regex = new RegExp('^' + personData.name.replace(/\s+/g, '') + '$', 'i');

     // if (!personData.name.trim() || !personData.number.trim()) {
     //      return response.status(400).json({
     //           error: 'content missing'
     //      })
     // }
     // else if (persons.some(per => regex.test(per.name.replace(/\s+/g, '')))) {
     //      return response.status(400).json({
     //           error: 'name must be unique'
     //      })
     // }
     const person = new Person({
          name: personData.name.trim(),
          number: personData.number.trim(),
     })
     person.save().then(savedPerson => {
          response.json(savedPerson);
     })
     .catch(err => next(err)) 
})

const unknownEndpoint = (request, response) => {
     response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
     console.error(error.message)

     if (error.name === 'CastError') {
          return response.status(400).send({ error: 'malformatted id' })
     }
      else if (error.name === 'ValidationError') {
          return response.status(400).json({ error: error.message })
     }
     next(error)
}

app.use(errorHandler)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`)
})


