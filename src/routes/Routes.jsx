import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";




const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/sign-in",
    element: <SignIn/>
  },
  {
    path: "/sign-up",
    element: <SignUp/>
  }
]);


export default router