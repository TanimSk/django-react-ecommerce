import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="container" style={{ maxWidth: '40rem' }}>
            <h2>
                Login
            </h2>
            <form>
                <label htmlFor="email">
                    Email
                    <input type="email" placeholder="Email Address" required />
                </label>

                <label htmlFor="password">
                    Password
                    <input type="password" placeholder="Password" required />
                </label>

                <button type="submit">Login</button>

                <small style={{textAlign: 'center', width: '100%', display: 'block'}}>
                    Don't have an account? click <Link to='/signup'>here</Link>
                </small>
            </form>
        </div>
    );
}