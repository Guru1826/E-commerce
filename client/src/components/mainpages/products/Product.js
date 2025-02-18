import React, { useContext } from 'react';
import { GlobalState } from '../../../GlobalState';
import ProductList from '../utils/ProductLists/ProductList';

const Product = () => {
  const state = useContext(GlobalState);
  const [products] = state.productAPI.products;
  const [isAdmin] = state.userAPI.isAdmin

  console.log(state);
  return (
    <div className='products'>
      {
        products.map(product => {
          return <ProductList key={product._id} product={product} isAdmin={isAdmin}/>; // Pass individual product object
        })
      }
    </div>
  );
}

export default Product;
