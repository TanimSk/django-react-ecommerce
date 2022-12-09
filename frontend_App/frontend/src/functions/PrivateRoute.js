import { useEffect, useState } from "react";
import { URL } from "../components/Constants";
import { Navigate, Outlet } from "react-router-dom";
import { GetCookie } from "./Cookies";

export default function PrivateRoute() {

    let [view, setView] = useState(<article aria-busy="true"></article>);

    useEffect(() => {
        let access_token = GetCookie('access');

        fetch(`${URL}/is-valid/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 'OK') setView(<Outlet />);
                else setView(<Navigate to="/" />);
            });
    }, []);

    return (<>{view}</>);
}





