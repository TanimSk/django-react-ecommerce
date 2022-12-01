import { useNavigate } from "react-router-dom";
import { URL, csrf } from "../components/Constants";


export default function Signup() {

    const NavTo = useNavigate();

    const submit = (e) => {
        e.preventDefault();

        let form = e.currentTarget;
        let data = new FormData(form);
        data.append('csrfmiddlewaretoken', csrf);

        fetch(`${URL}/signup`,
            {
                method: 'POST',
                body: data
            })
            .then(response => response.json())
            .then(data => {
                if (data['response'] == "OK") NavTo('/login');
            });
    }

    return (
        <div className="container" style={{ maxWidth: '36rem' }}>
            <h2>Signup</h2>
            <form onSubmit={submit} method="POST">
                <div className="grid">
                    <label htmlFor="firstname">
                        Fist Name
                        <input name="fname" className type="text" placeholder="First Name" required />
                    </label>

                    <label htmlFor="lastname">
                        Last Name
                        <input name="lname" type="text" placeholder="Last Name" required />
                    </label>
                </div>

                <label htmlFor="email">
                    Email
                    <input name="email" type="email" placeholder="Email Address" required />
                </label>

                <label htmlFor="password">
                    Password
                    <input name="pswd" type="password" placeholder="Password" required />
                </label>

                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}