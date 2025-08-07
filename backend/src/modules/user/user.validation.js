import { z } from 'zod';

const createUserValidationSchema = z.object({
  body: z.object({
    username: z.string({ required_error: 'Name is required' }),
    email: z.string({ required_error: 'Email is required' }).email('Invalid email format'),
    password: z.string({ required_error: 'Password is required' }).min(8,"Password must be at least 8 characters"),
  }),
});


export const UserValidations={
    createUserValidationSchema,
}