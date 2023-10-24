import { createReducer, on } from "@ngrx/store";
import { initalState } from "./user.state";
import { addUserSuccess, deleteUserSuccess, getUserSuccess, loadUserFailure, loadUserSuccess, openPopup, updateUserSuccess } from "./user.actions";



const _userReducer= createReducer(initalState,
    on(loadUserSuccess,(state,action)=>{
        
        return{
            ...state,
            list:[...action.list],
            errorMessage:''
        }
    }),
    on(loadUserFailure,(state,action)=>{
        return{
            ...state,
            list:[],
            errorMessage:action.errorMessage
        }
    }),on(addUserSuccess,(state,action)=>{
        
        return{
            ...state,
            list:[...state.list,action.inputData],
            errorMessage:''
        }
    }),
    on(getUserSuccess,(state,action)=>{
        
        return{
            ...state,
            userObj:action.obj,
            errorMessage:''
        }
    }),
    on(updateUserSuccess,(state,action)=>{
        const _newData= state.list.map(obj =>{
            return obj.username === action.inputData.username ? action.inputData : obj
        })
        
        return{
            ...state,
            list:_newData,
            errorMessage:''
        }
    }),
    on(deleteUserSuccess,(state,action)=>{
        const _newData= state.list.filter(o=> o.username!== action.userName)
           
        
        return{
            ...state,
            list:_newData,
            errorMessage:''
        }
    })
    );


export function userReducer(state: any, action: any) {
    return _userReducer(state, action);
}