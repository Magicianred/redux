import { createStore } from 'redux'
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);
console.log(store);

export default store;