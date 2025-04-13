import { Outlet } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
import { useAuth } from "../../context/auth.context";

export default function InitialLoadingPage () {
    const {authState} = useAuth();

    if(!authState.isLoading) {
        return <Outlet/>
    }

    return <Loader/>
};