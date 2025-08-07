import httpStatus from "http-status";
import bcrypt from "bcrypt";
import { User } from "./user.model.js";
import { jwtHelpers } from "../../helpers/jwr-helpers.js";
import config from "../../config/index.js";
import AppError from "../../errors/App-Error.js";

const createUser = async (payload) => {
  const isUserExists = await User.findOne({ email: payload.email });
  if (isUserExists) {
    throw new AppError(httpStatus.BAD_REQUEST, "User already exists");
  }
  // get a random avatar
  const avatar = `https://api.dicebear.com/9.x/adventurer/svg?seed=${payload.username}`;

  // hash the password
  const hashedPassword = await bcrypt.hash(payload.password, 6);
  // create a new user
  const user = new User({
    username: payload.username,
    email: payload.email,
    password: hashedPassword,
    profileImage: avatar,
  });
  await user.save();

  const accessToken = jwtHelpers.generateToken(
    {
      id: user.id,
      email: user.email,
      role: user.role,
      username: user.username,
    },
    config.jwt__access_secret,
    config.jwt__access_expire_in
  );
  return {
    user,
    accessToken,
    createdAt: user.createdAt,
  };
};

const getAllUsers = async () => {
  const users = await User.find({}).sort({ createdAt: -1 });
  return users;
};
const deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);
  if (!deletedUser) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }
  return deletedUser;
};

export const UserServices = {
  createUser,
  getAllUsers,
  deleteUser,
};
