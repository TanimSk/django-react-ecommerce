import { useEffect, useRef, useState } from "react";
import { URL } from "../components/Constants";
import MsgDiv from "../components/MsgDiv";
import { GetCookie } from "../functions/Cookies";

export default function Profile() {
    const optionRef = useRef(null);
    let [msg, setMsg] = useState(<></>);

    let [profileData, setProfileData] = useState({
        name: "",
        gender: "",
        address: "",
        phone_number: "",
        birthday: ""
    });

    useEffect(() => {
        fetch(`${URL}/user-profile/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${GetCookie('access')}`
            }
        })
            .then(response => response.json())
            .then(data => {

                setProfileData({
                    name: data.name,
                    gender: data.gender,
                    address: data.address,
                    phone_number: data.phone_number,
                    birthday: data.birthday
                });

                optionRef.current.value = data.gender;
            });
    }, []);

    const updateProfile = (e) => {
        e.preventDefault();

        let data = new FormData(e.currentTarget);

        fetch(`${URL}/user-profile/`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${GetCookie('access')}`
            },
            body: data
        })
            .then(response => response.status)
            .then(status => {
                status === 201 ?
                setMsg(<MsgDiv msg='Profile Updated!' success={true} />)
                :
                setMsg(<MsgDiv msg='Something went wrong! Try again' success={false} />)
            });
    }

    return (
        <div className="container" style={{ maxWidth: '36rem' }}>

            <h2>Profile</h2>

            <form onSubmit={updateProfile}>

                <div className="grid">
                    <label htmlFor="name">
                        Name
                        <input defaultValue={profileData.name} name="name" type="text" placeholder="Your Name" />
                    </label>

                    <label htmlFor="gender">
                        Gender
                        <select ref={optionRef} name='gender'>
                            <option value="" disabled selected>Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                </div>

                <label htmlFor="address">
                    Address
                    <textarea defaultValue={profileData.address} name="address" style={{ resize: 'vertical' }}>
                    </textarea>
                </label>

                <label htmlFor="address">
                    Phone Number
                    <input defaultValue={profileData.phone_number} name="phone_number" type="text" placeholder="Phone Number" />
                </label>

                <label htmlFor="address">
                    Your Birthday
                    <input defaultValue={profileData.birthday} name="birthday" type="date" placeholder="Birthday" />
                </label>
                {msg}
                <button type="submit">Update</button>
            </form>
        </div>
    );
}