import { Schema, model } from "mongoose";

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Book title is required"],
    },
    caption: {
      type: String,
      required: [true, "Caption is required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating is required"],
      min: [1, "Rating must be at least 1"],
      max: [5, "Rating must be at most 5"],
    },
    author: {
      type: String,
      required: [true, "Author name is required"],
    },
    genre: {
      type: [String], 
      default: [],
    },
    publishedYear: {
      type: Number,
      min: [1000, "Invalid year"],
      max: [new Date().getFullYear(), "Published year cannot be in the future"],
    },
    pages: {
      type: Number,
      min: [1, "A book must have at least 1 page"],
    },
    language: {
      type: String,
      default: "English",
    },
    available: {
      type: Boolean,
      default: true,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Book = model("Book", bookSchema);
