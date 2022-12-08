import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { URL } from "../components/Constants";
import MsgDiv from "../components/MsgDiv";

export default function EmailVerify() {
    const { key } = useParams();
    const NavTo = useNavigate();

    let [msg, setMsg] = useState(<></>);

    const verify = () => {
        let data = new FormData();
        data.append('key', key);

        fetch(`${URL}/dj-rest-auth/registration/verify-email/`,
            {
                method: 'POST',
                body: data
            })
            .then(response => response.json())
            .then(data => {                
                setMsg(<MsgDiv msg={data[Object.keys(data)[0]]} success={false} />);
                if (data[Object.keys(data)[0]]== "ok") NavTo('/login');
            });
    }

    return (
        <div className="container" style={{ maxWidth: '36rem' }}>
            <h1>
                Email Verification
            </h1>
            <p>
                Click the button to verify your email. You can login after the mail has been verified.
            </p>            
            <button onClick={verify}>
                Click here to Verify
            </button>
            {msg}
        </div>
    );
}