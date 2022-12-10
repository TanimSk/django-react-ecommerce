import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import is_valid_token from "./GetPrivateData";

export default function PrivateRoute() {

    let [view, setView] = useState(<article aria-busy="true"></article>);

    useEffect(() => {
        is_valid_token().then(valid => {
            valid ? setView(<Outlet />) : setView(<Navigate to='/login' />)
        });
    }, []);

    return (<>{view}</>);
}