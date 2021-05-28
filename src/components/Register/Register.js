import React from 'react';


function Register() {
    return (
        <div className="Register">
            <h1>Register Page</h1>
            <form>
                <div className="form-control">
                    <label>Email</label>
                    <input type="email" />
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="Password" />
                </div>
                <div className="form-control">
                    <label>Re-enter Password</label>
                    <input type="Password" />
                </div>
                <div className="form-control">
                    <button type="submit">Register</button>
                </div>
            </form>

        </div>
    );
}

export default Register;