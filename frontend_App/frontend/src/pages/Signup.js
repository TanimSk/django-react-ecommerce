export default function Signup() {
    return (
        <div className="container" style={{ maxWidth: '40rem' }}>
            <h2>Signup</h2>
            <form>

                <div className="grid">
                    <label htmlFor="firstname">
                        Fist Name
                        <input type="text" placeholder="First Name" required />
                    </label>

                    <label htmlFor="lastname">
                        Last Name
                        <input type="text" placeholder="Last Name" required />
                    </label>
                </div>

                <label htmlFor="email">
                    Email
                    <input type="email" placeholder="Email Address" required />
                </label>

                <label htmlFor="password">
                    Password
                    <input type="password" placeholder="Password" required />
                </label>

                <button type="submit">Sign up</button>

            </form>
        </div>
    );
}