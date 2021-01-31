import React from 'react';
import { useSelector } from 'react-redux';

const Catalog: React.FC = () => {

  const catalog = useSelector(state => state); 

  console.log(catalog);
  return ( 
    <h2>Catalog</h2>
  );
}

export default Catalog;