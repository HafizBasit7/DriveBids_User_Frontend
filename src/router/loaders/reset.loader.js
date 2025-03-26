import { redirect } from "react-router-dom";

export default function resetLoader({request}) {
    const url = new URL(request.url);
    const otp = url.searchParams.get("otp");
    
    if(!otp || otp === '') {
        return redirect('/otp');
    }
    return null;
};