import { createReducer, on } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";
import { addToBucket, removeFromBucket } from "../actions/bucket.action";

const initialState:Bucket[] = [];

export const bucketReducer = createReducer(initialState,
    on(addToBucket, (state,action)=>{
        const data = {
            id: action.id,
            name: action.name,
            quantity: action.quantity
        }
        // if the id already exists then increase the quantity in the existing object and if it is not there then only append new one
        const itemExists = state.find(ele => ele.id === action.id);
        if (itemExists) {
            return state.map(ele => ele.id === action.id ?  {...ele, quantity:ele.quantity + action.quantity} : ele)
        } else {
           return [...state, data];            
        }
    }), 
    on(removeFromBucket, (state,action) =>{
    //    if the id exists with qty > 1 then decrease the qty else remove the object
    const itemExists = state.find(ele => ele.id === action.id);
      if (itemExists) {
        if (itemExists && itemExists.quantity > 1) {
           return state.map(ele => ele.id === itemExists.id ? {...ele, quantity: ele.quantity - 1} : ele);
        } else {
           return state.filter(ele => ele.id !== action.id)
        }
      } else {
        return state;
      } 
    })
);