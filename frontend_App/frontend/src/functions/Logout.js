import { URL } from "../components/Constants";
import { ClearCookie, GetCookie } from "./Cookies";

export default function Logout() {
    fetch(`${URL}/dj-rest-auth/logout/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${GetCookie('access')}`
        },
        body: JSON.stringify({
            'refresh': GetCookie('refresh')
        })
    })
        .then(response => {
            if(response.status === 200){
                ClearCookie();
                window.location.href = '/login';
            }            
        })
        
}