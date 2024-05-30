import {asyncHandler} from "../utils/asyncHandler";
import {ApiError} from "../utils/ApiError.js"


const registerUser = asyncHandler( async (req, res) =>{
   // get user details from frontend
   // validation
   //check if user already exist
   // check for images
   // upload cloudnary , avatar
    // create object

    //check for user creation
    // return res

    const {fullName, email, username, password} = req.body
    
        console.log("email: ",email);

        // if (fullName === "") {
        //     throw new ApiError(400, "fullname is required")

        // }

        if (
            [fullName, email, username, password].some((field) => 
            
            field?.trim() === "")
        ) {

            throw new ApiError(400, "All field is required")
            
        }


})

export {registerUser}