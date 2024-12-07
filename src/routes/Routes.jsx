import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import MYProfile from "../pages/MyProfile";
import AddReview from "../pages/AddReview";
import AllReview from "../pages/AllReview";
import ReviewDetails from "../pages/ReviewDetails";
import MyReviews from "../pages/MyReviews";
import PrivateRoutes from "./PrivateRoutes";
import UpdateReviews from "../pages/UpdateReviews";
import WatchList from "../pages/WatchList";
import Error from "../pages/Error";




const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
  },
  {
    path: "/sign-in",
    element: <SignIn />
  },
  {
    path: "/sign-up",
    element: <SignUp />
  },
  {
    path: '/my-profile',
    element: <PrivateRoutes><MYProfile /></PrivateRoutes>
  },
  {
    path: '/add-reviews',
    element: <PrivateRoutes><AddReview /></PrivateRoutes>,
  },
  {
    path: '/all-reviews',
    element: <AllReview />,
    loader: () => fetch('http://localhost:5000/all-reviews')
  },
  {
    path: '/explore-details/:id',
    element: <PrivateRoutes><ReviewDetails /></PrivateRoutes>,
    loader: ({ params }) => fetch(`http://localhost:5000/all-reviews/${params.id}`)
  },
  {
    path: '/my-reviews',
    element: <PrivateRoutes><MyReviews /></PrivateRoutes>,
    
  },
  {
    path: '/update-reviews/:id',
    element: <PrivateRoutes><UpdateReviews /></PrivateRoutes>,
    loader: ({ params }) => fetch(`http://localhost:5000/all-reviews/${params.id}`)
  },
  {
    path: '/my-watchlist',
    element: <PrivateRoutes><WatchList /></PrivateRoutes>
  },
  {
    path: '*',
    element: <Error />,
  },
]);


export default router