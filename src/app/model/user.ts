export interface User {
    id?:number;
    firstName:string;
    lastName:string;
    email:string;
    userName:string;
    password:string;
    phoneNumber:string;
    gender:string;
    image?:string;
    enabled?:boolean;
    accountNonExpired?:boolean;
    acccountNonLocked?:boolean;
    credentialsNonExpired?:boolean;
    
    deleted?:boolean

    authorities?:[
        {
            authority:string;
        }
    ]
    
    
}

export interface UserCred{
    userName:string;
    password:string;
}


export interface CustomToken{
    token:string;
    user:User;
}