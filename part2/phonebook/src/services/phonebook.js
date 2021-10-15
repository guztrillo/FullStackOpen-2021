import axios from 'axios';
const baseUrl = '/api/persons';

const getAll = () => {
     const request = axios.get(baseUrl);
     return request.then(resp => resp.data);
}

const createItem = (newElement) => {
     const request = axios.post(baseUrl, newElement);
     return request.then(resp => resp.data );
}

const updateItem = (id, newElement) => {
     const request = axios.put(`${baseUrl}/${id}`, newElement);
     return request.then(resp => resp.data)
}

const deleteItem = (id) => {
     const request = axios.delete(`${baseUrl}/${id}`)
     return request.then(resp => resp.data);
}

const phonebook = {
     getAll,
     createItem,
     updateItem,
     deleteItem
}

export default phonebook