import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import NavScrollExample from './Navbar';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Home from './Home';

import  Register from "./Register"
import ProductDetails from './ProductDetails';
import { ViewCart } from './ViewCart';
import { SignIn } from './SignIn';
import Test from './Test';
function App() {
  return (
    <>
  
  

  <NavScrollExample/>


<Routes>





             <Route exact='true' path="/"   element={<Home/>}></Route>
             
             <Route  exact='true' path="/register"   element={<Register/>}></Route>
             <Route  exact='true' path="/product/:proid"   element={<ProductDetails/>}></Route>
             <Route   path="/viewcart"   element={<ViewCart/>}></Route>
             <Route   path="/SignIn"   element={<SignIn/>}></Route>
             <Route   path="/Test"   element={<Test/>}></Route>





</Routes>
    
    
    
    </>
  );
}

export default App;
