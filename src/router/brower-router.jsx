import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { useAuth } from "../context/auth.context";
import LandingPage from "../Pages/LandingPage/LandingPage";
import authLoader from "./loaders/auth.loader";
import otpLoader from "./loaders/otp.loader";
import LoginPage from "../Pages/Auth/LoginPage";
import SignupPage from "../Pages/Auth/SignupPage";
import ForgetPasswordPage from "../Pages/Auth/ForgetPassword";
import ResetPasswordPage from "../Pages/Auth/ResetPassword";
import EnterOtpPage from "../Pages/Auth/EnterOtpPage";
import dashboardLoader from "./loaders/dashboard.loader";
import HomePage from "../Pages/HomePage/HomePage";
import FilterPage from "../Pages/FiltersPage/FilterPage";
import ViewAllCars from "../Pages/FiltersPage/ViewAllCars";
import CarDetailsPage from "../Pages/CarDetailsPage/CarDeatilsPage";
import CarListingPage from "../Pages/CarListingPage/CarListingPage";
import ContactPage from "../Pages/ContactPage/ContactPage";
import resetLoader from "./loaders/reset.loader";
import PostAdMainPage from "../Pages/Service/PostAdMainPage";
import SellMyCar from "../Pages/SellMyCarPage/SellMyCarScreens/SellMyCarPage";
import PostAds from "../Pages/SellMyCarPage/SellMyCarScreens/PostAdsPage";
import Draft from "../Pages/SellMyCarPage/SellMyCarScreens/DraftPage";
import CarCompanyPage from "../Pages/SellMyCarPage/SellMyCarScreens/CarCompanyPage";
import CarModelPage from "../Pages/SellMyCarPage/SellMyCarScreens/CarModelPage";
import CarVarient from "../Pages/SellMyCarPage/SellMyCarScreens/CarVarient";
import CityPage from "../Pages/SellMyCarPage/SellMyCarScreens/CityPage";
import CarColorPage from "../Pages/SellMyCarPage/SellMyCarScreens/CarColorPage";
import CarMileagePage from "../Pages/SellMyCarPage/SellMyCarScreens/CarMileagePage";
import CarFuelPage from "../Pages/SellMyCarPage/SellMyCarScreens/CarFuelPage";
import CarEnginePage from "../Pages/SellMyCarPage/SellMyCarScreens/CarEngine";
import CarTransmissionPage from "../Pages/SellMyCarPage/SellMyCarScreens/CarTransmission";
import AdsDescription from "../Pages/SellMyCarPage/SellMyCarScreens/AdsTitleandDesPage";
import CarFeaturesPage1 from "../Pages/SellMyCarPage/CarFeaturesScreens/CarFeaturesPage1";
import CarFeaturesPage2 from "../Pages/SellMyCarPage/CarFeaturesScreens/CarFeaturesPage2";
import CarImages from "../Pages/SellMyCarPage/CarImagesScreens/CarImagespage";
import ExteriorImages1 from "../Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages1";
import ExteriorImages2 from "../Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages2";
import ExteriorImages3 from "../Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages3";
import ExteriorImages4 from "../Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages4";
import ExteriorImages5 from "../Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages5";
import ExteriorImages6 from "../Pages/SellMyCarPage/CarImagesScreens/ExteriorImagesScreens/ExteriorImages6";
import InteriorImagesPage1 from "../Pages/SellMyCarPage/CarImagesScreens/InteriorImagesScreens/InteriorImage1";
import InteriorImagesPage2 from "../Pages/SellMyCarPage/CarImagesScreens/InteriorImagesScreens/InteriorImage2";
import InteriorImagesPage3 from "../Pages/SellMyCarPage/CarImagesScreens/InteriorImagesScreens/InteriorImage3";
import InteriorImagesPage4 from "../Pages/SellMyCarPage/CarImagesScreens/InteriorImagesScreens/InteriorImage4";
import InteriorImagesPage5 from "../Pages/SellMyCarPage/CarImagesScreens/InteriorImagesScreens/InteriorImage5";
import WheelsImagesPage1 from "../Pages/SellMyCarPage/CarImagesScreens/WheelsScreens/WheelsPage1";
import WheelsImagesPage2 from "../Pages/SellMyCarPage/CarImagesScreens/WheelsScreens/WheelsPage2";
import WheelsImagesPage3 from "../Pages/SellMyCarPage/CarImagesScreens/WheelsScreens/WheelsPage3";
import WheelsImagesPage4 from "../Pages/SellMyCarPage/CarImagesScreens/WheelsScreens/WheelsPage4";
import WheelsThreadPage1 from "../Pages/SellMyCarPage/CarImagesScreens/WheelsThreadScreens/WheelsThreadPage1";
import WheelsThreadPage3 from "../Pages/SellMyCarPage/CarImagesScreens/WheelsThreadScreens/WheelsThreadPage3";
import WheelsThreadPage4 from "../Pages/SellMyCarPage/CarImagesScreens/WheelsThreadScreens/WheelsThreadPage4";
import WheelsThreadPage2 from "../Pages/SellMyCarPage/CarImagesScreens/WheelsThreadScreens/WheelsThreadPage2";
import InspectionReportPage1 from "../Pages/SellMyCarPage/InspectionReportScreens/InspectionReportPage1";
import InspectionReportPage2 from "../Pages/SellMyCarPage/InspectionReportScreens/InspectionReportPage2";
import InspectionReportPage3 from "../Pages/SellMyCarPage/InspectionReportScreens/InspectionReportPage3";
import PricingPage1 from "../Pages/SellMyCarPage/PricingScreens/Pricingpage1";
import PricingPage2 from "../Pages/SellMyCarPage/PricingScreens/Pricingpage2";
import PricingPage3 from "../Pages/SellMyCarPage/PricingScreens/Pricingpage3";
import PricingPage4 from "../Pages/SellMyCarPage/PricingScreens/Pricingpage4";
import DamgeReportPage1 from "../Pages/SellMyCarPage/DamageReportScreens/DamageReportPage1";
import DamgeReportPage4 from "../Pages/SellMyCarPage/DamageReportScreens/DamageReportPage4";
import DamgeReportPage3 from "../Pages/SellMyCarPage/DamageReportScreens/DamageReportPage3";
import DamgeReportPage2 from "../Pages/SellMyCarPage/DamageReportScreens/DamageReportPage2";
import AdsSuccessScreen from "../Pages/SellMyCarPage/Ads-SuccessScreen";
import MyAdsPage from "../Pages/MyAds/MyAdsPage";
import MyBidsPage from "../Pages/MybidsPage/MyBidsPage";
import MyWatchPage from "../Pages/MyWatchlistPage/MywatchlistPage";
import EditProfilePage from "../Pages/MyProfilePage/EditProfilePage";
import ChangePasswordPage from "../Pages/MyProfilePage/ChangePasswordPage";
import VehicleRegistration from "../Pages/SellMyCarPage/SellMyCarScreens/VehicleRegistration";
import CarOwnerPage from "../Pages/SellMyCarPage/SellMyCarScreens/CarOwnerPage";
import CarHorsePower from "../Pages/SellMyCarPage/SellMyCarScreens/CarHorsePower";
import AccidentDescription from "../Pages/SellMyCarPage/SellMyCarScreens/CarAccidentHistory";
import CarConditionPage from "../Pages/SellMyCarPage/SellMyCarScreens/CarConditionPage";
import Page404 from "../Pages/NotFounf404Page";
import ChatPage from "../Pages/ChatPage/ChatPage";
import CompletedDeals from "../Pages/CompletedDeals/CompletedDeals";
import NotificationSettings from "../Pages/NotificationSettings/NotificationSettings";
import InitialLoadingPage from "../Pages/Service/InitialLoadingPage";
import TermandCondition from "../Pages/TermandConditionPage/TermandCondition";
import PrivacyPolicy from "../Pages/Privacy&PolicyPage/PrivacyPolicy";
import BuyerandSellerProtection from "../Pages/BuyerandSelllerProtectionPage/BuyerandSellerProtection";
import CarVideoPage from "../Pages/SellMyCarPage/CarImagesScreens/CarVideoScreens/CarVideoPage";

const createRouter = (authState) => createBrowserRouter([
    {path: '/', element: <LandingPage/>},
    //Auth Stack
    {
        path: '/', 
        element: <InitialLoadingPage/>,
        loader: () => authLoader(authState),
        children: [
            {path: 'login', element: <LoginPage/>},
            {path: 'signup', element: <SignupPage/>},
            {path: 'reset-pass', element: <ForgetPasswordPage/>},
            {path: 'otp', loader: otpLoader, element: <EnterOtpPage/>},
            {path: 'confirm-reset-pass', loader: resetLoader, element: <ResetPasswordPage/>},
        ]
    },
    //Public Pages
    {path: 'terms-and-conditions', element: <TermandCondition/>},
    {path: 'privacy-policy', element: <PrivacyPolicy/>},
    {path: 'buyer-seller-protection', element: <BuyerandSellerProtection/>},
    //Dashboard stack
    {
        path: '/',
        element:  <InitialLoadingPage/>,
        loader: () => dashboardLoader(authState),
        children: [
            {path: 'home', element: <HomePage/>},
            {path: 'search', element: <FilterPage/>},
            {path: 'all/:type', element: <ViewAllCars/>},
            {path: 'chat', element: <ChatPage/>},
            {path: 'car/:carId', element: <CarDetailsPage/>},
            {path: 'cars/:userId', element: <CarListingPage/>},
            {path: 'contact', element: <ContactPage/>},
            //User
            {path: 'my-ads', element: <MyAdsPage/>},
            {path: 'my-bids', element: <MyBidsPage/>},
            {path: 'completed-deals', element: <CompletedDeals/>},
            {path: 'notification-settings', element: <NotificationSettings/>},
            {path: 'watchlist', element: <MyWatchPage/>},
            {path: 'profile/edit', element: <EditProfilePage/>},
            {path: 'profile/change-password', element: <ChangePasswordPage/>},
            //Post Ad (Sell a car) Stack
            {
                path: 'ad',
                element: <PostAdMainPage/>,
                children: [
                    {path: '', element: <SellMyCar/>},
                    {
                        path: 'post', 
                        element: <PostAds/>,
                        children: [
                            {path: 'vehicle-register', element: <VehicleRegistration/>},
                            {path: 'company', element: <CarCompanyPage/>},
                            {path: 'variant', element: <CarVarient/>},
                            {path: 'model', element: <CarModelPage/>},
                            {path: 'city', element: <CityPage/>},
                            {path: 'mileage', element: <CarMileagePage/>},
                            {path: 'fuel', element: <CarFuelPage/>},
                            {path: 'color', element: <CarColorPage/>},
                            {path: 'engine', element: <CarEnginePage/>},
                            {path: 'transmission', element: <CarTransmissionPage/>},
                            {path: 'owner', element: <CarOwnerPage/>},
                            {path: 'horse-power', element: <CarHorsePower/>},
                            {path: 'condition', element: <CarConditionPage/>},
                            {path: 'title', element: <AdsDescription/>},
                            {path: 'accident', element: <AccidentDescription/>},
                            {path: 'feature-1', element: <CarFeaturesPage1/>},
                            {path: 'feature-2', element: <CarFeaturesPage2/>},
                            {
                                path: 'images', 
                                element: <CarImages/>,
                                children: [
                                    {path: 'exterior-1', element: <ExteriorImages1/>}, 
                                    {path: 'exterior-2', element: <ExteriorImages2/>}, 
                                    {path: 'exterior-3', element: <ExteriorImages3/>}, 
                                    {path: 'exterior-4', element: <ExteriorImages4/>}, 
                                    {path: 'exterior-5', element: <ExteriorImages5/>},
                                    {path: 'exterior-6', element: <ExteriorImages6/>},  
                                    {path: 'interior-1', element: <InteriorImagesPage1/>}, 
                                    {path: 'interior-2', element: <InteriorImagesPage2/>}, 
                                    {path: 'interior-3', element: <InteriorImagesPage3/>}, 
                                    {path: 'interior-4', element: <InteriorImagesPage4/>}, 
                                    {path: 'interior-5', element: <InteriorImagesPage5/>},
                                    {path: 'wheel-1', element: <WheelsImagesPage1/>},
                                    {path: 'wheel-2', element: <WheelsImagesPage2/>},
                                    {path: 'wheel-3', element: <WheelsImagesPage3/>},
                                    {path: 'wheel-4', element: <WheelsImagesPage4/>},
                                    {path: 'tread-1', element: <WheelsThreadPage1/>},
                                    {path: 'tread-2', element: <WheelsThreadPage2/>},
                                    {path: 'tread-3', element: <WheelsThreadPage3/>},
                                    {path: 'tread-4', element: <WheelsThreadPage4/>},
                                    {path: 'video', element: <CarVideoPage/>},
                                ],
                            },
                            {path: 'inspection-1', element: <InspectionReportPage1/>},
                            {path: 'inspection-2', element: <InspectionReportPage2/>},
                            {path: 'inspection-3', element: <InspectionReportPage3/>},
                            {path: 'pricing-1', element: <PricingPage1/>},
                            {path: 'pricing-2', element: <PricingPage2/>},
                            {path: 'pricing-3', element: <PricingPage3/>},
                            {path: 'pricing-4', element: <PricingPage4/>},
                            {path: 'damage-1', element: <DamgeReportPage1/>},
                            {path: 'damage-2', element: <DamgeReportPage2/>},
                            {path: 'damage-3', element: <DamgeReportPage3/>},
                            {path: 'damage-4', element: <DamgeReportPage4/>},
                            {path: 'success', element: <AdsSuccessScreen/>}
                        ],
                    },
                    {path: 'drafts', element: <Draft/>},
                ],
            }
        ],
    },
    {path: "*", element: <Page404/>}
]);;

export default function AppBrowserRouter() {
    const {authState} = useAuth();
    return <RouterProvider router={createRouter(authState)}/>
}