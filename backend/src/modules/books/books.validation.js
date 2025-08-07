import { z } from "zod";

const createBookValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Title is required" }),

    caption: z.string({ required_error: "Caption is required" }),

    image: z
      .string({ required_error: "Image URL is required" })
      .url("Image must be a valid URL"),

    rating: z
      .number({ required_error: "Rating is required" })
      .min(1, "Rating must be at least 1")
      .max(5, "Rating must be at most 5"),
    author: z.string({ required_error: "Author is required" }),
    genre: z.array(z.string()).optional(), 
    publishedYear: z
      .number({ required_error: "Published year is required" })
      .min(1000, "Published year is too early")
      .max(new Date().getFullYear(), "Published year cannot be in the future"),

    pages: z
      .number({ required_error: "Page count is required" })
      .min(1, "Book must have at least 1 page"),

    language: z.string().optional(),

    available: z.boolean().optional(),

    reviews: z.number().min(0, "Reviews cannot be negative").optional(),
  }),
});

export const BookValidations = {
  createBookValidationSchema,
};
