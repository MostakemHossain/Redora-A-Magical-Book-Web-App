import catchAsync from "../../shared/catch-async.js";
import sendResponse from "../../shared/send-response.js";
import { AuthServices } from "./auth.services.js";


const loginUser = catchAsync(async(req,res)=>{
    const result= await AuthServices.loginUser(req.body);
    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: "User logged in successfully",
        data: result,
    })
});

export const AuthController={
    loginUser
}