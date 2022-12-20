import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import is_valid_token from "../functions/GetPrivateData";
import Logout from "../functions/Logout";

export default function Header() {

    let [is_authenticated, setAuth] = useState(false);

    useEffect(() => {
        is_valid_token().then(valid => {
            valid ? setAuth(true) : setAuth(false);
        })
    }, []);

    return (
        <nav className="container-fluid">
            <ul>
                <li>
                    <strong>
                        <Link to='/'>DEMO</Link>
                    </strong>
                </li>
            </ul>
            {
                is_authenticated ?
                    <ul>
                        <li>
                            <Link to="/private/profile">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/private/cart">
                                Cart
                            </Link>
                        </li>
                        <li>
                            <a href="#" onClick={Logout}>
                                Logout
                            </a>
                        </li>
                    </ul>
                    :
                    <ul>
                        <li>
                            <Link to="/login" role="button">
                                Login
                            </Link>
                        </li>
                    </ul>
            }

        </nav>
    );
}