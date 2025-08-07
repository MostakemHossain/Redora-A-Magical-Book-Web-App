import express from 'express';
import userRoutes from '../modules/user/user.route.js';
import authRoutes from '../modules/auth/auth.routes.js';


const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/auth',
    route: authRoutes,
  },
  
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;