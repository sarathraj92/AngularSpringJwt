import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "./user.state";

const getUsersState= createFeatureSelector<UsersState>('users');


export const getUsersList=createSelector(getUsersState,(state)=>{
    return state.list;
});

export const getUser=createSelector(getUsersState,(state)=>{
    return state.userObj;
})