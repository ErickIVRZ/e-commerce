import React, { useEffect } from "react";
import { ListGroup, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartThunk, PurchaseCartThunk } from "../store/slice/cart.slice";

const FavoritesSidebar = ({ show, handleClose }) => {

const dispatch=useDispatch()
const carts = useSelector((state) => state.cart);

useEffect(()=>{
  dispatch(getCartThunk())
},[])



  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
      <ListGroup>
          {carts.map((cart) => (
            <Link key={cart.id} as={Link} to={`/products/${cart.id}`}>
            <p>{cart.title}</p>
            </Link>
          
          ))}
        </ListGroup>
        <button onClick={()=>dispatch(PurchaseCartThunk())}>CheckOut</button>
       
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FavoritesSidebar;
