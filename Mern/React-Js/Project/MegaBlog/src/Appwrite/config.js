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