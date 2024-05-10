import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID);
        this.account = new Account(this.client);
    }

    // create account
    async createAccount({email, password , name}){
        try{
            const userAccount = await this.account.create(ID.unique() , email , password , name);
            if(userAccount){
                // call another method for directly login
                this.login({email,password});
            }else{
                return userAccount;
            }
        }catch(error){
            throw error;
        }
    }

    // login 
    async login({email, password}){
        try{    
            return await this.account.createEmailSession(email,password);
        }catch (error){
            throw error;
        }
    }

    // logout
    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log("App Write Service :: Logout :: error",error);
        }
    }

    // directly home page phle se login
    async getcurrentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("App Write Service :: Get CurrentUser :: error",error);
        }
        return null;
    }

    // forget password
    // async forgetPassword(email){
    //     try{
    //         return await this.account.createRecovery(email,'url');
    //     }catch(error){
    //         console.log("App write :: Forget password :: Error",error);
    //     }
    // }


}

const authService = new AuthService()


export default authService;