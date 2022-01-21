const personRouter = require('express').Router()
const Person = require('../models/person')

personRouter.get('/', (request, response) => {
     Person.find({}).then(people => {
          response.json(people)
     })
})

personRouter.get('/info', (request, response) => {
     const date = new Date();
     Person.find({}).then(people => {
          response.send(`<p>Phonebook has info for ${people.length} people</p> <p>${date}</p>`)
     })
})

personRouter.get('/:id', (request, response, next) => {
     // const id = Number(request.params.id);
     // const person = persons.find(per => per.id === id);
     // person ? response.json(person) : response.status(404).end();
     Person.findById(request.params.id).then(person => {
          person ? response.json(person) : response.status(404).end()
     }).catch(err => next(err))

})

personRouter.delete(':id', (request, response, next) => {
     // const id = Number(request.params.id);
     // persons = persons.filter(per => per.id !== id);
     // response.status(204).end()
     Person.findByIdAndRemove(request.params.id)
          .then(() => {
               response.status(204).end()
          })
          .catch(err => next(err))
})

personRouter.put(':id', (request, response, next) => {
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

personRouter.post('/', (request, response, next) => {
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

module.exports = personRouter;