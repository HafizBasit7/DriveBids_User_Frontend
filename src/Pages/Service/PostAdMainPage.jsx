import { Outlet } from "react-router-dom";
import CarContextProvider from "../../context/car.context";

export default function PostAdMainPage () {
    return (
        <CarContextProvider>
            <Outlet/>
        </CarContextProvider>
    )
}