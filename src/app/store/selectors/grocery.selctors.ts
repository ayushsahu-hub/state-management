import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";


//  selectors are used to filter the data 
// export const selectedGroceries = (state:{groceries:Grocery[]})=> state.groceries;

export const selectedGroceries = createFeatureSelector<Grocery[]>('groceries');

export const selectGroceryByType = (type:string) => createSelector(selectedGroceries, 
    (state)=> state.filter(item => item.type === type))

//  selectors are memoized 