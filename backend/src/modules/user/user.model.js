import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      required: [true, "Email is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters long"],
    },
    profilePhoto: {
      type: String,
      default:"",
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    bio: {
      type: String,
    },
    address: {
      type: String,
    },
    status: {
      type: String,
      enum: ['active', 'pending', 'deleted'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

export const User = mongoose.model('User', userSchema);
