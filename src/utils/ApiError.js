class ApiError extends error{
    constructor(
        statusCode,
        message ="Something went wrong",
        errors =[],
        statck =""

    ){
        super(message) //overwrite
       this.statusCode = statusCode
       this.data = null
       this.message = message
       this.success = false
       this.errors = errors

       if(statck){
        this.statck =statck
       }else{
        Error.captureStackTrace(this,this.constructor)
       }
    }
}

export {ApiError}