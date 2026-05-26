const  asyncHandler= (requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
    }
}
export {asyncHandler}



// asyncHandler is used to avoid writing repetitive try-catch blocks in every async route/controller.

// It makes backend code cleaner and automatically forwards errors to Express error middleware.