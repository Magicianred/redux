import { createStore } from 'redux'

const store = createStore(()=> {
  return {
    id: 3,
    name: 'Priscila',
    email: 'priscila.andreani@gmail.com'
  }
});

export default store;