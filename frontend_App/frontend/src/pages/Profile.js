<<<<<<< HEAD
import { URL } from "../components/Constants";

export default function Profile() {

    const send = () => {
        let test = new FormData();

        fetch(`${URL}/api/test`,
            {
                method: 'POST',
                body: test
            })
            .then(response => response.json())
            .then(data => {
                // if (data['status'] == "OK") NavTo('/login');
                console.log(data);
            });
    }

    return (
        <div className="container" style={{ maxWidth: '36rem' }}>
            <h1>
                Profile
            </h1>

            <form>
                <div className="grid">
                    <label htmlFor="firstname">
                        <input type="text" name="first_name" placeholder="First Name" />
                    </label>

                    <label htmlFor="lastname">
                        <input type="text" name="lastname" placeholder="Last Name" />
                    </label>
                </div>

                {/* address */}

                <label htmlFor="address">
                    <textarea name="address" placeholder="Address" style={{ resize: 'vertical' }}></textarea>
                </label>

                {/* date of birth */}

                <label htmlForfor="date">
                    Date of Birth
                    <input type="date" name="date_of_birth" />
                </label>

                {/* gender */}

                <fieldset>
                    <legend>Size</legend>
                    <label htmlFor="none">
                        <input type="radio" name="gender" defaultValue="small" defaultChecked />
                        None
                    </label>
                    <label htmlFor="male">
                        <input type="radio" name="gender" defaultValue="medium" />
                        Male
                    </label>
                    <label htmlFor="female">
                        <input type="radio" name="gender" defaultValue="large" />
                        Female
                    </label>
                </fieldset>
            </form>
            <button onClick={send}>
                Update
            </button>
=======
export default function Profile() {
    return (
        <div className="container" style={{ maxWidth: '36rem' }}>

            <h2>Profile</h2>

            <form method="POST">

                <div className="grid">
                    <label htmlFor="name">
                        Name
                        <input name="name" type="text" placeholder="Your Name"/>
                    </label>

                    <label htmlFor="gender">
                        Gender
                        <select>
                            <option value="" disabled selected>Select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                </div>

                <label htmlFor="address">
                    Address
                    <textarea name="address" style={{resize: 'vertical'}}></textarea>
                </label>

                <label htmlFor="address">
                    Phone Number
                    <input name="phone_number" type="text" placeholder="Phone Number" />
                </label>

                <label htmlFor="address">
                    Your Birthday
                    <input name="birthday" type="date" placeholder="Birthday" />
                </label>

                <button type="submit">Update</button>
            </form>
>>>>>>> django_drf
        </div>
    );
}