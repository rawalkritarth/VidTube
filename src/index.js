import { app } from "./app.js";

import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path:"./.env"
})

const port =process.env.PORT || 7000



connectDB()
.then(()=>{
    app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})
})
.catch((error)=>{
    console.log("MOngo error",error)
})























