import React from 'react'
import "./Cart.css"
import {FaCartPlus} from "react-icons/fa"
import { Link } from 'react-router-dom'

export default function Cart() {
  return (


    <>


<Link exact="true"   to="/viewcart">
        <FaCartPlus className='hlo'/>
        </Link>
    
    </>
  )
}
