import React from 'react';
import { useSelector, useStore } from 'react-redux';

const Catalog: React.FC = (id, name) => {

  //receber todoo estado do componente
  const store = useStore();
  const stateOfStore = store.getState();
  console.log('useStore e getState', stateOfStore);

  //o useSelector permite uma maior granularidade da informação
  const state = useSelector(state => state);
  console.log('state<Objeto>, state.id, state.name', state, state.id, state.name);

  return ( 
    <h2>Catalog</h2>
  );
}

export default Catalog;