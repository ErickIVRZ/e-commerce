import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { Button,Form,InputGroup, ListGroup } from "react-bootstrap";
import {Row,Col,Card} from "react-bootstrap";




const Home = () => {

const productList=useSelector(state=>state.products)
const navigate=useNavigate()
const [categories,setCategories]=useState([])
const [newProductsFiltered,setNewProductsFiltered]=useState([])
const [searchValue, setSearchValue] = useState("");

useEffect(()=>{
  axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/products/categories')
  .then(res=>setCategories(res.data.data.categories
    ))
},[])

useEffect(() => {
  setNewProductsFiltered(productList);
}, [productList]);



console.log(categories);


const filterCategory = (categoryId) => {
  alert(categoryId);
  const filtered = productList.filter((product) => product.category.id === categoryId);
  setNewProductsFiltered(filtered);
};

const searchProducts = () => {
  const filtered = productList.filter((product) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  setNewProductsFiltered(filtered);
};


  return (

    
    <Row>
      <Col lg={3}>
      <h1>Home</h1>
      <ListGroup>   

      {
                categories.map(category => (
                  <ListGroup.Item key={category.id} onClick={() => filterCategory(category.id)} style={{cursor:"pointer"}}>
                   {category.name}                   
                    </ListGroup.Item>
                    
                ))
            }
    </ListGroup>
      
    
      
      </Col>

      <Col>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search News"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <Button variant="outline-secondary" onClick={searchProducts}>
          Button
        </Button>
      </InputGroup>

      <Row xs={1} md={2} xl={3} className="g-4">
      {newProductsFiltered.map(product=> (
        <Col key={product.id}>
          <Card  onClick={()=>navigate(`/products/${product.id}`)} style={{height:"100%"}} >
            <Card.Img variant="top" src={product.productImgs[0]}/>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
              {product.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

      


      {/* <ul>
        {
          newProductsFiltered.map(product=>(
            <li key={product.id} onClick={()=>navigate(`/products/${product.id}`)}>
              <h3>{product.title}</h3>
              <img src={product.productImgs[0]} alt="" style={{height:"400px"}} />
              <h3>{product.description}</h3>
            </li>
          ))
        }
      </ul> */}
   
      
      </Col>

    </Row>
    
      


  );
};

export default Home;