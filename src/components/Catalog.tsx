import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../services/api';
import { IProduct } from '../store/modules/cart/types';
import { CoreApp } from './Catalog.style';


const Catalog: React.FC = () => {
 const [catalog, setCatalog] = useState<IProduct[]>([]);

 useEffect(()=>{
   api.get('products').then(response =>{
     setCatalog(response.data);
   })
 },[]) 

  return ( 
    <CoreApp>
          <h2>Cata
            <span>log</span></h2>
          <section>
          
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong>
          <span>R$ {product.price.toFixed(2).toString().replace('.', ',')}</span>
          <img src={product.src}/>
          <button type="button">Comprar</button>
        </article>
        
      ))}
      </section>
    </CoreApp>
  );
}

export default Catalog;