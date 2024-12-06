import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MYProfile from "../pages/MyProfile";
import AddReview from "../pages/AddReview";
import AllReview from "../pages/AllReview";
import ReviewDetails from "../pages/ReviewDetails";




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
  },
  {
    path: '/all-reviews',
    element: <AllReview />,
    loader: () => fetch('http://localhost:5000/all-reviews')
  },
  {
    path: '/explore-details/:id',
    element: <ReviewDetails />,
    loader: ({ params }) => fetch(`http://localhost:5000/all-reviews/${params.id}`)
  }
]);


export default router