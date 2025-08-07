import catchAsync from "../../shared/catch-async.js";
import sendResponse from "../../shared/send-response.js";
import { UserServices } from "./user.services.js";

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "User created successfully",
    data: result,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserServices.getAllUsers();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Users fetched successfully",
    data: users,
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const userId = req.params.id;
  await UserServices.deleteUser(userId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User deleted successfully",
  });
});

export const UserController = {
  createUser,
  getAllUsers,
  deleteUser,
};
