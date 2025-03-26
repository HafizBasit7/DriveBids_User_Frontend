import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import { useAuth } from "../context/auth.context";
import LandingPage from "../Pages/LandingPage/LandingPage";
import authLoader from "./loaders/auth.loader";
import LoginPage from "../Pages/Auth/LoginPage";
import SignupPage from "../Pages/Auth/SIgnupPage";
import ForgetPasswordPage from "../Pages/Auth/ForgetPassword";
import ResetPasswordPage from "../Pages/Auth/ResetPassword";
import EnterOtpPage from "../Pages/Auth/EnterOtpPage";
import dashboardLoader from "./loaders/dashboard.loader";
import HomePage from "../Pages/HomePage/HomePage";
import FilterPage from "../Pages/FiltersPage/FilterPage";
import CarDetailsPage from "../Pages/CarDetailsPage/CarDeatilsPage";
import CarListingPage from "../Pages/CarListingPage/CarListingPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import resetLoader from "./loaders/reset.loader";

const createRouter = (authState) => createBrowserRouter([
    {path: '/', element: <LandingPage/>},
    //Auth Stack
    {
        path: '/', 
        element: <Outlet/>,
        loader: () => authLoader(authState),
        children: [
            {path: 'login', element: <LoginPage/>},
            {path: 'signup', element: <SignupPage/>},
            {path: 'reset-pass', element: <ForgetPasswordPage/>},
            {path: 'otp', element: <EnterOtpPage/>},
            {path: 'confirm-reset-pass', loader: resetLoader, element: <ResetPasswordPage/>},
        ]
    },
    //Dashboard stack
    {
        path: '/',
        element: <Outlet/>,
        loader: () => dashboardLoader(authState),
        children: [
            {path: 'home', element: <HomePage/>},
            {path: 'search', element: <FilterPage/>},
            {path: 'car/:carId', element: <CarDetailsPage/>},
            {path: 'car/:carId/owner', element: <CarListingPage/>},
            {path: 'contact', element: <ContactPage/>},
        ],
    }
]);;

export default function AppBrowserRouter() {
    const {authState} = useAuth();
    return <RouterProvider router={createRouter(authState)}/>
}