import { redirect } from "react-router-dom"

export default function authLoader (authState) {    
    if(authState.isLoading || !authState.isAuthenticated) {
        return null;
    }

    return redirect('/home');
};