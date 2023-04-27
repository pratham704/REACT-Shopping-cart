import { ActionTypes } from "../Constants/Action-types";
export const setProducts=(products)=>
{
return{
type: ActionTypes.SET_PRODUCTS,
payload: products
};

}



export const selectedProducts=(product)=>
{
return{
type:ActionTypes.SELECTED_PRODUCTS,
payload:product
};

}
export const remove_selected=()=>
{
return{
type:ActionTypes.REMOVE_PRODUCTS,
}

}



export const solve=(tit)=>{


return{


    type:'inc',
    payload:tit,
};



}