import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(
    cors({
        origin:process.env.CORS_ORIGIN,
        credentials:true
    })
)

// common middle ware
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// import routes
// import router from './routes/healthcheck.routes.js'
import healthcheckrouter from './routes/healthcheck.routes.js'
// imp: defalut export gryo vne we can give any name to it and its works like i have givem router to healthcheck router
import  userRouter  from './routes/user.route.js'




//routes
app.use("/api/v1/healthcheck",healthcheckrouter)

app.use("/api/v1/users",userRouter)
 

export {app}


















