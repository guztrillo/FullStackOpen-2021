import React, { useEffect, useState } from 'react'
import { Filter } from './Filter';
import { Form } from './Form';
import { Notification } from './Notification';
import { Persons } from './Persons';
import phonebook from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('');
  const [message, setMessage] = useState(null)
  const [success, setSuccess] = useState(false)
  const regex = new RegExp(filter, 'ig');

  useEffect(() => {
    phonebook.getAll()
      .then(initialData => setPersons(initialData))
      .catch(err => console.log(err))
  }, [])

  const handleNewName = (e) => {
    setNewName(e.target.value)
  }

  const handleNewNumber = (e) => {
    setNewNumber(e.target.value)
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const handleMessage = (message, type) => {
    setMessage(message)
    setSuccess(type)
    setTimeout(() => {
      setMessage(null)
    }, 3000);
  }

  const handleNewPerson = (e) => {
    e.preventDefault();
    let personIndex;
    const regex = new RegExp('^' + newName.replace(/\s+/g, '') + '$', 'i');
    const somebody = persons.some((person, index) => {
      if (regex.test(person.name.replace(/\s+/g, ''))) {
        personIndex = index;
        return true;
      }
      return false;
    })
    if (somebody) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        handleUpdate(persons[personIndex].id)
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      phonebook.createItem(newPerson)
        .then(newContact => {
          setPersons(persons.concat(newContact));
          handleMessage(`Added ${newContact.name}`, true)
        })
        .catch(err => handleMessage(err.response.data.error, false))
    }
    setNewName('');
    setNewNumber('')
  }

  const handleUpdate = (id) => {
    const phone = persons.find(person => person.id === id);
    const changeNumber = { ...phone, number: newNumber };

    phonebook.updateItem(id, changeNumber)
      .then(updatePerson => {
        setPersons(persons.map(person => person.id !== id ? person : updatePerson));
        handleMessage(`Updated ${updatePerson.name}`, true)
      })
      .catch(err => {
        handleMessage(err.response.data.error, false)
        // setPersons(persons.filter(person => person.id !== id))
      })
  }

  const handleDelete = (elem) => {
    if (window.confirm(`Delete ${elem.name}?`)) {
      phonebook.deleteItem(elem.id)
        .then(deleted => {
          setPersons(persons.filter(person => person.id !== elem.id))
          handleMessage(`Deleted ${elem.name}`, true)
        })
    }
  }

  const personsToShow = filter.length < 1
    ? persons
    : persons.filter(person => person.name.match(regex))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} success={success} />
      <Filter filter={filter} handleFilter={handleFilter} />
      <h3>add a New</h3>
      <Form newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} handleNewPerson={handleNewPerson} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  )
}

export default App;
