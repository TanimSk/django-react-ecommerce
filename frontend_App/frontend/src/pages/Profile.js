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
        </div>
    );
}