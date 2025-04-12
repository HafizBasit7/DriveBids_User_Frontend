import { redirect } from "react-router-dom";

export default function otpLoader({request}) {
    const url = new URL(request.url);
    const email = url.searchParams.get("email");
    
    if(!email || email === '') {
        return redirect('/reset-pass');
    }
    return null;
};