import httpStatus from "http-status"
import AppError from "../errors/App-Error.js";
import config from "../config/index.js";
import { jwtHelpers } from "../helpers/jwr-helpers.js";
const auth = (...roles) => {
  return async (req, res, next) => {
    try {
      const token = req.headers.authorization;
    
      if (!token) {
        throw new AppError(httpStatus.BAD_REQUEST, "You are not authorized");
      }
      const verifiedUser =  jwtHelpers.verifyToken(
        token,
        config.jwt__access_secret
      );

      req.user = verifiedUser;

      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new AppError(httpStatus.BAD_REQUEST, "You are not authorized");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

export default auth;