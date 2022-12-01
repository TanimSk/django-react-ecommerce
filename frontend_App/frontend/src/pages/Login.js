import { Link } from "react-router-dom";
import { URL, csrf } from "../components/Constants";

export default function Login() {

    const submit = (e) => {
        e.preventDefault();

        let form = e.currentTarget;
        let data = new FormData(form);
        data.append('csrfmiddlewaretoken', csrf);

        fetch(`${URL}/login`,
            {
                method: 'POST',
                body: data
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                // if(data['response'] == "OK")
            });
    }

    return (
        <div className="container" style={{ maxWidth: '40rem' }}>
            <h2>
                Login
            </h2>
            <form onSubmit={submit}>
                <label htmlFor="email">
                    Email
                    <input name="email" type="email" placeholder="Email Address" required />
                </label>

                <label htmlFor="password">
                    Password
                    <input name="pswd" type="password" placeholder="Password" required />
                </label>

                <button type="submit">Login</button>

                <small style={{ textAlign: 'center', width: '100%', display: 'block' }}>
                    Don't have an account? click <Link to='/signup'>here</Link>
                </small>
            </form>
        </div>
    );
}