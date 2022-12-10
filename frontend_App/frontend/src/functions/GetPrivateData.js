import { URL } from "../components/Constants";
import { ClearCookie, GetCookie, SetCookie } from "./Cookies";

async function GetAccessToken() {
    const request = await fetch(`${URL}/get-access-token/`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            refresh: GetCookie('refresh')
        })
    });


    if (request.status === 200) {
        const dataJSON = await request.json();
        SetCookie('access', dataJSON.access, 5);
        return dataJSON.access;
    }
    else {
        ClearCookie();
        return 'unauthorized';
    }
}


async function CallApi(token) {
    const request = await fetch(`${URL}/is-valid/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    const dataJSON = await request.json();
    return dataJSON;
}


export default async function is_valid_token() {

    let dataJSON = await CallApi(GetCookie('access'));
    if (dataJSON.status === 'OK') return true;

    else {
        const newToken = await GetAccessToken();

        if (newToken === 'unauthorized') return false;

        else {
            dataJSON = await CallApi(newToken);
            if (dataJSON.status === 'OK') return true;
        }
    }
}