## MegaBlog : Project Implementation

# We installing some dependencies :- 

```
# Installation of Dependencies 

- npm i @reduxjs/toolkit
- npm i react-redux
- npm i react-router-dom
- npm i appwrite
- npm i @tinymce/tinymce-react
- npm i html-react-parser
- npm i react-hook-form

# Check this dependencies in the package.json

 "dependencies": {
    "@reduxjs/toolkit": "^2.2.3",
    "@tinymce/tinymce-react": "^5.0.1",
    "appwrite": "^14.0.0",
    "html-react-parser": "^5.1.10",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^9.1.0",
    "react-hook-form": "^7.51.2",
    "react-router-dom": "^6.22.3"
  }

```

# Set Up the Environment Variables :-
```
# Created .env file in the parent directory and added in git ignore :-

- if we created with application with create-react-app then we can write the .env file like this syntax

REACT_APP_WRITE_URL="test environment"

- and access with 

console.log(process.env.REACT_APP_WRITE_URL)

- but this application we created with Vite so we write .env file like this

VITE_APP_WRITE_URL="TEST ENV"
VITE_APP_WRITE_PROJECT_ID=""
VITE_APP_WRITE_DATABASE_ID=""
VITE_APP_WRITE_COLLECTION_ID=""
VITE_APP_WRITE_BUCKET_ID=""

- and access with 

console.log(import.meta.env.VITE_APP_WRITE_URL)

# And we created one more file .env.sample in the parent directory and copy those environment variable into the .env.sample because we can hide the .env for our purposes but then many more people access this project so peoples can set our own variables and access the application , inside the .env.sample file we just empty those variable with the string like this..

VITE_APP_WRITE_URL=""
VITE_APP_WRITE_PROJECT_ID=""
VITE_APP_WRITE_DATABASE_ID=""
VITE_APP_WRITE_COLLECTION_ID=""
VITE_APP_WRITE_BUCKET_ID=""

```

# So, Now we can setup the appwrite
[ClickHere To Sign Up Appwrite]('https://appwrite.io/')

- Click Create Project. 
- Set the Name.
- Set the region.
- Open setting copy those url and project id and set into the environment variables.
- Create Database and copy the id in the .env variable,Inside the Database create table or collection inside the database and copy the id and paste the id inside the .env file. 
- Inside the database create rows or attributes and indexes,Select settings and give permission to all users or you are given.
- Create a storage and copy the id paste the id inside .env and set the permission to all users. 

# Create a folder called Conf 
- inside the folder create one file conf.js 
```
-- Inside this file import all the env variables because we can not hardcode the values or the rewrite bugs in the id for the production ready.

const conf = {
    appwriteUrl : String(import.meta.env.VITE_APP_WRITE_URL),
    appwriteProjectID : String(import.meta.env.VITE_APP_WRITE_PROJECT_ID),
    appwriteDatabaseID : String(import.meta.env.VITE_APP_WRITE_DATABASE_ID),
    appwriteCollectionID : String(import.meta.env.VITE_APP_WRITE_COLLECTION_ID),
    appwriteBucketID : String(import.meta.env.VITE_APP_WRITE_BUCKET_ID)
}

export default conf

```

# Authentication Service :-
[CLICK HERE TO SEE AUTH DOCUMENTS]('https://appwrite.io/docs/products/auth')

- Getting started with docs 
- So first we create Folder Appwrite then inside that we create auth.js file

```
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
    async currentUser(){
        try{
            return await this.account.get();
        }catch(error){
            console.log("App Write Service :: Get CurrentUser :: error",error);
        }
        return null;
    }

    // forget password
    // async forgetPassword({email}){
    //     try{
    //         return await this.account.createRecovery(email,'url');
    //     }catch(error){
    //         console.log("App write :: Forget password :: Error",error);
    //     }
    // }


}

const authService = new AuthService()


export default AuthService;

```

# Database Service 
[CLICK HERE TO SEE STORAGE DOCUMENTS]('https://appwrite.io/docs/products/storage/')
- create one file config.js into the Appwrite.

```
import conf from "../conf/conf";
import { Client, ID , Databases , Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID)
        this.databases = new Databases(this.client);
        this.bucket =   new Storage(this.client);
    }

    // create a post
    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }

            )
        }catch(error){
            console.log("Appwrite Service :: createPost :: error",error);
        }
    }

    // update document
    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        }catch{
            console.log("Appwrite Service :: updatePost :: error",error);
        }
    }

    // delete Post 
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )
            return true;
        } catch(error){
            console.log("Appwrite Service :: deletePost :: error",error);
            return false;
        }
    }

    // search the specific document
    async getPost(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
            )
        }catch(error){
            console.log("Appwrite Service :: GetPost :: error",error);
            return false;
        }
    }

    // list all the document with indexes include on active status
    async getPosts(queries = [Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
            )
        }catch(error){
            console.log("Appwrite Service :: Listdocuments :: error",error);
            return false;
        }
    }

    // file upload service
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file,
            )
        }catch{
            console.log("Appwrite Service :: UploadFile :: error",error);
            return false;
        }
    }

    // delete file service
    async deleteFile(fileID){
        try{
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                fileID,
            )
            return true;
        }catch(error){
            console.log("Appwrite Service :: deleteFile :: error",error);
            return false;
        }
    }

    // file preview
    getfilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileID,
        )
    }

    // download file

    downloadFile(fileID){
        return this.bucket.getFileDownload(
            conf.appwriteBucketID,
            fileID,
        )
    }
    
    

}

const service = new Service()


export default service
```

# Created A Redux for login or logout state management 

- created one folder called store 
- created one file store.js

```
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer:{}
});

export default store
```
- created one file authSlice.js 

```
import { createSlice } from "@reduxjs/toolkit";

const InitialState ={
    status : false,
    userData: null,
}

const authSlice = createSlice({
    name : "auth",
    InitialState,
    reducers : {
        login : (state,action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout : (state,action) => {
            state.status = false;
            state.userData = null;
        }
    }
});

export const {login,logout} = authSlice.actions
export default authSlice.reducer;

```

# App.jsx

```
import { useState , useEffect } from "react"
import {useDispatch} from "react-redux"
import authService from "./Appwrite/auth"
import {login,logout} from "./store/authSlice"
import { Footer, Header } from "./components"
import {Outlet} from 'react-router-dom'

function App() {
   
  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    authService.getcurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}));
      }else{
        dispatch(logout())
      }
    })
    .finally(()=> setLoading(false))
  },[])


  return !loading? (<div className="min-h-screen flex flex-wrap content-between bg-gray-400">
    <div className="w-full block">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>) : (null)
}

export default App

```




