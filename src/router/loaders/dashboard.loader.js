import { redirect } from "react-router-dom";

export default function dashboardLoader (authState) {
    if(authState.isLoading || authState.isAuthenticated) {
        return null;
    }

    return redirect('/login')
};