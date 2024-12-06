import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MYProfile from "../pages/MyProfile";
import AddReview from "../pages/AddReview";




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
  },
  {
    path: '/my-profile',
    element: <MYProfile/>
  },
  {
    path: '/add-reviews',
    element: <AddReview/>,
  }
]);


export default router