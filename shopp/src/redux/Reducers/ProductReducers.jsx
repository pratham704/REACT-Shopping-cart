import { ActionTypes } from "../Constants/Action-types";
const initialState={

products:[


],
}


export const ProductReducer=(state=initialState, { type,payload})=>{


switch (type) {
    case ActionTypes.SET_PRODUCTS:
        return {...state, products: payload};
        

    default:
        return state;
}

};


export const SelectedProductReducer=(state = {}, {type,payload})=>{


switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
        return {...state, ...payload};
        
        case ActionTypes.REMOVE_PRODUCTS:
        return {};
        

    default:
        return state;
}


};


export const Reducermine=(state=[],action)=>{
switch (action.type) {
    case 'inc':
        return [state,action.payload];
        

    default:
        return(state)
}




}


// export const Reducermine=(state= 'sup',action)=>{
// switch (action.type) {
//     case 'inc':
//         return(action.payload);
        

//     default:
//         return(state)
// }




// }