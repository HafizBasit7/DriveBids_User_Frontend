import { redirect } from "react-router-dom";


export default function regNoLoader (regNo) {
    if(!regNo) redirect('/ad/post/vehicle-register');
    return null;
}