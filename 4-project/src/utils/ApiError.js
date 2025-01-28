class ApiError extends Error {
  constructor(
  statusCode,
  message = "Something went wrong",
  errors = [],
  statck = ""
  ){
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.mesage = message
    this.success = false
    this.errors = errors

    if(statck){
      this.stack = statck
    }
    else{
      Error.captureStackTree(this, this.constructor)
    }
  }
}

export {ApiError}
