import { Link } from "react-router-dom";
import { URL, csrf } from "../components/Constants";
import MsgDiv from "../components/MsgDiv";
import { useState } from "react";

export default function Login() {

    let [msg, setMsg] = useState(<></>);

    const submit = (e) => {
        e.preventDefault();

        let form = e.currentTarget;
        let data = new FormData(form);
        data.append('csrfmiddlewaretoken', csrf);

        fetch(`${URL}/dj-rest-auth/login/`,
            {
                method: 'POST',
                body: data
            })
            .then(response => response.json())
            .then(data => {
                // if (data['status'] == "OK") NavTo('/login');
                console.log(data);
                setMsg(<MsgDiv msg={data[Object.keys(data)[0]]} success={false} />)
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
                    <input name="password" type="password" placeholder="Password" required />
                </label>
                
                {msg}

                <button type="submit">Login</button>

                <small style={{ textAlign: 'center', width: '100%', display: 'block' }}>
                    Don't have an account? click <Link to='/signup'>here</Link>
                </small>
            </form>
        </div>
    );
}