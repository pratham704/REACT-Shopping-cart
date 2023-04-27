import React from 'react'
import "./ProductDet.css"
import { useEffect } from 'react';
import axios from 'axios'
import { Link,  useParams } from 'react-router-dom';
import { solve } from './redux/Actions/Action';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
export const Hello= React.createContext();




const ProductDetails = () => {
	const { proid }= useParams();
	// const geh=useNavigate();
	const dispatch=useDispatch();
    

const [image, setImage] = useState()
const [title, setTitle] = useState()
const [price, setPrice] = useState()
const [category, setCategory] = useState()
const [description, setDescription] = useState()





    
    const fetchproduc = async(id)=>{


        const hlo= await axios.get(`https://fakestoreapi.com/products/${proid}`);

		console.log(proid);
		console.log(hlo.data.category)
		setImage(hlo.data.image);
		setTitle(hlo.data.title)
		setPrice(hlo.data.price)
		setCategory(hlo.data.category);
		setDescription(hlo.data.description)




            };
			


            useEffect(() => {
               if(proid && proid !== " ")  fetchproduc(proid);
                
			
				},[proid]);


				// const Viewed=()=>{
				// 	alert(title)
				// 	geh("/Test")
	

				
					
					
				// 	}

    

  return (
    <>

                    

						
<div className="container" key={proid}>
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={image}  alt="LOADING"/></div>
						</div>
					</div>

					<div className="details col-md-6">
						<h3 className="product-title">{title}</h3>
						<br></br>
						<br></br>
						<br></br>
						<p className="product-description">{description}</p>
                        <br></br>
                        <br></br>
						<h4 className="price">current price: <span>${price}</span></h4>
						<br></br>
						<p className="product-description">{category}</p>


						<br></br>

						

						<div className="action">
							<button className="add-to-cart btn btn-default" type="button" onClick={()=>


                            dispatch(solve(title))
							
							} >add to cart</button>
                            <Link className="remove btn btn-default mx-2 w-3"exact="true" to="/">CLOSE</Link> 
						</div>

					</div>
				</div>
			</div>
		</div>
	</div> 


    </>
  )
};


export default ProductDetails;
  