import {combineReducers} from "redux";
import { ProductReducer,SelectedProductReducer,Reducermine} from "./ProductReducers";




 const rootReducer= combineReducers({
 


allproducts:ProductReducer,
product:SelectedProductReducer,

Reducermine,





}
);

export default rootReducer;