class ApiResponse {
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.success=statusCode < 400

    }
}

export {ApiResponse}



// Now every response looks same: so frontend get standarixed response

// {
//    "statusCode": 200,
//    "data": {...},
//    "message": "User fetched",
//    "success": true
// }