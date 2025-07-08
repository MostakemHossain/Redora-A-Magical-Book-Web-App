import App from "@/App";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/",
            element: <div>Home Page</div>,
        }
    ]
  },
  {
    path: "*", 
    element: <div>404 - Page Not Found</div>,
  },
]);

export default router;
