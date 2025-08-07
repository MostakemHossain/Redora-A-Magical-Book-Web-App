import config from "../../config/index.js";
import AppError from "../../errors/App-Error.js";
import { jwtHelpers } from "../../helpers/jwr-helpers.js";
import { User } from "../user/user.model.js";
import bcrypt from "bcrypt";
import httpStatus from "http-status";

const loginUser= async(payload)=>{
    const user= await User.findOne({email: payload.email}).select('+password');
    if(!user){
        throw new AppError(httpStatus.UNAUTHORIZED,'Invalid email or password');
    }
    const isPasswordValid= await bcrypt.compare(payload.password,user.password);
    if(!isPasswordValid){
        throw new AppError(httpStatus.UNAUTHORIZED,'Invalid email or password');
    }
    const accessToken = jwtHelpers.generateToken(
        {
          id: user.id,
          email: user.email,
          role: user.role,
          username: user.username,
        },
        config.jwt__access_secret,
        config.jwt__access_expire_in ,
      );
    return {
        user,
        accessToken,
        createdAt:user.createdAt,
    };
}
export const AuthServices= {
    loginUser,
}