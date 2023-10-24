import { createEntityAdapter,EntityState } from "@ngrx/entity";
import { User } from "../model/user";

export interface UsersState extends EntityState<User> {
  list:User[];
  errorMessage:string
  userObj:User
    
  }

export const UserAdapter = createEntityAdapter<User>();

export const initalState:UsersState=UserAdapter.getInitialState({
  list:[],
  errorMessage:'',
  userObj:{
    
    firstName:'',
    lastName:'',
    userName:'',
    phoneNumber:'',
    gender:'',
    email:'',
    password:''

  }
  
    
  
  
}); 