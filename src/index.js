import { app } from "./app.js";

import dotenv from "dotenv";
import connectDB from "./db/index.js";
dotenv.config({
    path:"./.env"
})

// process-level safety net — catches errors outside Express's request cycle
process.on("unhandledRejection", (reason) => {
  console.error("UNHANDLED REJECTION:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("UNCAUGHT EXCEPTION:", err);
  process.exit(1); // let your process manager (pm2/nodemon/docker) restart it
});


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























