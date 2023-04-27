import React from 'react'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios'
import { setProducts } from './redux/Actions/Action';
import "./ProductComp.css"
import { Link } from 'react-router-dom';




export default function ProductComponent() {


    const products= useSelector((sta)=>sta.allproducts.products);
    // const {id,title}=products[0];
    const dispatch= useDispatch();


const fetchpro=async()=>{


const hlo= await axios.get("https://fakestoreapi.com/products");
dispatch(setProducts(hlo.data));


    };


useEffect(() => {
  

 fetchpro();
})


const renderList= products.map((e)=>{

const {title,image,price,category,id}=e;
// style={{ width: '20rem ', top:'9rem', margin:'1rem 1rem 1rem 2.5rem'}}

return(

<Link exact="true" to={`/product/${id}`} key={id}>
<Card className='Card'  >

      <Card.Img  className= 'Img'variant="top" src={image}  />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text >
          {category}
        </Card.Text>
      </Card.Body>
      
      <Card.Body>
      <Card.Text >
          ${price}
        </Card.Text>

      </Card.Body>

     
    </Card>
    </Link>
   
    


)






})


  return (
   <>

{renderList }

   </>
  )
}
