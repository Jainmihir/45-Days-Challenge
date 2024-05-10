const conf = {
    appwriteUrl : String(import.meta.env.VITE_APP_WRITE_URL),
    appwriteProjectID : String(import.meta.env.VITE_APP_WRITE_PROJECT_ID),
    appwriteDatabaseID : String(import.meta.env.VITE_APP_WRITE_DATABASE_ID),
    appwriteCollectionID : String(import.meta.env.VITE_APP_WRITE_COLLECTION_ID),
    appwriteBucketID : String(import.meta.env.VITE_APP_WRITE_BUCKET_ID)
}

export default conf