import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import CollageDetails from './Components/CollageDetails/CollageDetails.jsx';
import Register from './Components/Share/Register.jsx';
import Login from './Components/Share/Login.jsx';
import Authprovider from './Components/Authntication/Authprovider.jsx';
import PrivetRoute from './Components/Authntication/PrivetRoute.jsx';
import Home from './Components/Home.jsx';
import Collage from './Components/Collage/Collage.jsx';
import Admission from './Components/Admission/Admission.jsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/collageDetails/:id",
        element: <PrivetRoute><CollageDetails></CollageDetails></PrivetRoute>,
      },
      {
        path: "/collagePage",
        element: <PrivetRoute><Collage></Collage></PrivetRoute>,
      },
      {
        path: "/admissionPage",
        element: <PrivetRoute><Admission></Admission></PrivetRoute>,
      },
    ]
  },

  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/userLogin",
    element: <Login></Login>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </QueryClientProvider>
  </React.StrictMode>
);