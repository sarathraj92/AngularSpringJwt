import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }



  public saveUser(user: User){
    localStorage.removeItem("user");
    window.localStorage.setItem("user", JSON.stringify(user));
  }

  public saveToken(token: any){
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
  }



  public getToken(): string | null{
    return localStorage.getItem("token");
  }
  
  public static getTokens(): string | null{
    return localStorage.getItem("token");
  }



  public  getUser(): User | null{
    let user1 =localStorage.getItem("user");
   
   
    if(user1!==null){
       const user=JSON.parse(user1) as User;
       return user;

    }
    return null;
  }

  public isLoggedIn():boolean{
    if(localStorage.getItem("user")!== null){
      return true;
    }
    return false;
  }

  

  static hasToken(): boolean{
    if(this.getTokens() === null){
      return false;
    }
    return true;
  }


  public getRole():string | null{
    
    if(this.getUser()==null){
      return null;
    }
    const user=this.getUser();
    
    return '';
  }
 



  // static isAdminLoggedIn(): boolean{
  //   if(this.getTokens() == null){
  //     return false;
  //   }
  //   return true;

  // }

  // static isStudentLoggedIn(): boolean{
  //   if(this.getTokens() == null){
  //     return false;
  //   }
    
  //   return true;

  // }

  public logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
}
