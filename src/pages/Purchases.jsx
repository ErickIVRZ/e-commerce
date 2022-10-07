import React, { useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {getPurchasesThunk } from '../store/slice/purchases.slice';

const Purchases = () => {

  const dispatch=useDispatch()
  const purchases=useSelector(state=>state.purchases)
  const navigate=useNavigate()


  useEffect(()=>{
    dispatch(getPurchasesThunk())
  },[])

  return (
    <div>
      <h1>purchases</h1>
      {
        purchases.map(item=>(
          <div key={item.id}>
            {
              item.cart.products.map((product)=>(
               
                  
              <p key={product.id} onClick={()=>navigate(`/product/${product.id}`)}>{product.title}</p>
                 

              
              ))
            }
          </div>
        ))
      }
      
      

      
      
    </div>
  );
};

export default Purchases;