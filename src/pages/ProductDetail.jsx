import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Col, Row,ListGroup,ListGroupItem,Button} from 'react-bootstrap';
import { addPurchasesThunk } from '../store/slice/cart.slice';

const ProductDetail = () => {

const {id}=useParams()
const [buy,setBuy]=useState(0)
const dispatch=useDispatch()

const productsList=useSelector(state=>state.products)


const productDetail=productsList.find(product=>product.id === Number(id))
const relatedProducts=productsList.filter(product=>product.category.id === productDetail.category.id)

console.log(relatedProducts);


useEffect(()=>{
  setBuy(0)
},[id])



const addCart=()=>{
  alert("Agregando producto")
  const product={
    id:id,
    quantity:buy
  }
  dispatch(addPurchasesThunk(product))
  
}

  return (
    <Row>

<Col>
      <h1>ProductDetail</h1>
      <h1>{productDetail?.title}</h1>
      <div>
        <button className='me-3' onClick={()=>setBuy(buy-1)}>

          -


        </button>

        {buy}

        <button  className='me-3' onClick={()=>setBuy(buy+1)}>

          +

        </button>
        

        <Button className="mt-2" onClick={addCart}>
            Add to Favorites
          </Button>
      </div>
      <p>
       
        <img className="img-fluid"  src={productDetail?.productImgs} alt="" />
      
             
      </p>
      <h1>Price:{productDetail?.price}</h1>
      
      </Col>

<Col lg={3}>

      <ListGroup variant="flush">
     
      {
        relatedProducts.map(products=>(
          
          <ListGroup.Item key={products.id}>
            <Link to={`/products/${products.id}`}>
              <img src={products.productImgs} alt="" className='img-fluid'/>
              {products.title}
              </Link>

          </ListGroup.Item>
        ))
      }
     
   


        
       
      </ListGroup>
  
     
      
      </Col>

    

     
      
     
     
     
    

    </Row>
    
  );
};

export default ProductDetail;