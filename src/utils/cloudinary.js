import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'
import dotnev from "dotenv"

dotnev.config()

    // Configuration
    cloudinary.config({ 
        cloud_name:process.env.CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret:process.env.CLOUD_API_SECRET
    });
    
const uploadOnCloudinary = async (localFilePath) =>{
    try {
        if (!localFilePath) return null
        const response = await cloudinary.uploader.upload(
            localFilePath,{
                resource_type:"auto"
            }
        )

        console.log("file is uploaded"+ response.url)

        //del fromm our sever  after uploaed

fs.unlinkSync(localFilePath)
return response
            
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
        
    }
    finally {
        // ALWAYS runs (this is the key fix)
        if (localFilePath && fs.existsSync(localFilePath)) {
            fs.unlinkSync(localFilePath)
        }}
}
export { uploadOnCloudinary}