import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { URL, csrf } from "../components/Constants";
import MsgDiv from "../components/MsgDiv";

export default function Signup() {

    let [msg, setMsg] = useState(<></>);

    const submit = (e) => {
        e.preventDefault();

        let form = e.currentTarget;
        let data = new FormData(form);
        data.append('csrfmiddlewaretoken', csrf);

        if (data.get('password1') !== data.get('password2')) {
            setMsg(<MsgDiv msg="Password didn't match!" success={false} />);
        }
        else setMsg(<></>);


        fetch(`${URL}/dj-rest-auth/registration/`,
            {
                method: 'POST',
                body: data
            })
            .then(response => Promise.all([response.json(), response]))
            .then(([data, response]) => {
                console.log(response.status);
                response.status === 201 ?
                    setMsg(<MsgDiv msg={data[Object.keys(data)[0]]} success={true} />)
                    :
                    setMsg(<MsgDiv msg={data[Object.keys(data)[0]]} success={false} />)
            });
    }

    return (
        <div className="container" style={{ maxWidth: '36rem' }}>
            <h2>Signup</h2>
            <form onSubmit={submit} method="POST">

                <label htmlFor="email">
                    Email
                    <input name="email" type="email" placeholder="Email Address" required />
                </label>

                <label htmlFor="password">
                    Password
                    <input name="password1" type="password" placeholder="Password" required />
                </label>

                <label htmlFor="password">
                    Password Again
                    <input name="password2" type="password" placeholder="Password" required />
                </label>

                {msg}

                <button type="submit">Sign up</button>
            </form>
        </div>
    );
}