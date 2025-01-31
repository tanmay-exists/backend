import {asyncHandler} from '../utils/asyncHandler.js'
import {ApiError} from '../utils/ApiError.js'
import {User} from '../models/user.model.js'

const registerUser = asyncHandler( async (req,res) => {
  // get user details from frontend
  // validation - not empty
  // check if user already exist - username, email
  // check for images. avatar
  // upload them to cloudinary
  // create user object - create entry in DB
  // remove password and refresh token field from response
  // check for user creation
  // return response
  
  const {fullName, email, username, password} = req.body
  console.log("email: ", email)
  

  // if(fullName === ""){
  //   throw new ApiError(400, "full name is required")
  // }
  // this way we will be required to write checks for every field, better use following approach
  if(
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ){
    throw new ApiError(400, "All fields are required")
  }
  const existedUser = User.findOne({
    $or: [{username}, {email}]
  })
  if(existedUser){
    throw new ApiError(409, "User with email of username already exists")
  }


  const avatarLocalPath = req.files?.avatar[0]?.path
  const coverImageLocalPath = req.files?.coverImage[0]?.path
  if(!avatarLocalPath){
    throw new ApiError(400, "Avatar file is required")
  }

})

export {registerUser}
