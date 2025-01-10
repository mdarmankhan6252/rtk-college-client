import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyCollege from "../pages/MyCollege/MyCollege";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AdmissionForm from "../pages/Admission/AdmissionForm";
import CollegeDetails from "../components/CollegeDetails";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            index: true,
            element: <Home />
         },
         {
            path: '/colleges',
            element: <Colleges />
         },
         {
            path: '/admission',
            element: <Admission />
         },
         {
            path: '/my-college',
            element: <PrivateRoute><MyCollege /></PrivateRoute>
         },
         {
            path: '/admission/:id',
            element: <PrivateRoute><AdmissionForm /></PrivateRoute>,
            loader: ({ params }) => fetch(`https://rtk-college-server.vercel.app/collegeName/${params.id}`)
         },
         {
            path: '/college/:id',
            element: <PrivateRoute><CollegeDetails /></PrivateRoute>,
            loader: ({ params }) => fetch(`https://rtk-college-server.vercel.app/college/${params.id}`)
         }
      ]
   },
   {
      path: '/login',
      element: <Login />
   },
   {
      path: '/register',
      element: <Register />
   }
]);