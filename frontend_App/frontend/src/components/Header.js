import { Link } from "react-router-dom";

export default function Header() {

    return (
        <nav className="container-fluid">
            <ul>
                <li>
                    <strong>
                        <Link to='/'>DEMO</Link>
                    </strong>
                </li>
            </ul>
            <ul>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
                <li>
                    <Link to="/login" role="button">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}