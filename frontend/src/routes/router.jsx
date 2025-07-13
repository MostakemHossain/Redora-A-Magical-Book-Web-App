import App from "@/App";
import Home from "@/pages/home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
        {
            path:"/",
            element: <Home/>,
        }
    ]
  },
  {
    path: "*", 
    element: <div>404 - Page Not Found</div>,
  },
]);

export default router;
