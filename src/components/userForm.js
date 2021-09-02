import React, { useState } from "react";

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const handleErrors = (e, funct, name) => {
        funct(e.target.value);
        if (name === "FirstName") {
            if (e.target.value.length < 1) {
                setFirstNameError("First Name is required!");
            } else if (e.target.value.length < 3) {
                setFirstNameError("First Name must be 3 characters or longer!");
            } else setFirstNameError("");
        } else if (name === "LastName") {
            if (e.target.value.length < 1) {
                setLastNameError("Last Name is required!");
            } else if (e.target.value.length < 3) {
                setLastNameError("Last Name must be 3 characters or longer!");
            } else setLastNameError("");
        } else if (name === "Email") {
            const validEmail = new RegExp(
                "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
            );
            if (e.target.value.length < 1) {
                setEmailError("email is required!");
            } else if (e.target.value.length < 6) {
                setEmailError("email must be 5 characters or more!");
            } else if (!validEmail.test(e.target.value)) {
                setEmailError("Must be valid email!");
            } else setEmailError("");
        } else if (name === "Password") {
            if (e.target.value.length < 1) {
                setPasswordError("Password is required!");
            } else if (e.target.value.length < 8) {
                setPasswordError("password must be 8 characters or more!");
            } else setPasswordError("");
        } else if (name === "ConfirmPassword") {
            if (e.target.value != password) {
                setConfirmPasswordError("password must match!");
            } else setConfirmPasswordError("");
        }
    };

    return (
        <div>
            <form className="form-control" onSubmit={createUser}>
                {hasBeenSubmitted ? (
                    <h3>Thank you for submitting the form!</h3>
                ) : (
                    <h3>Welcome, please submit the form.</h3>
                )}

                <div>
                    <label>First Name: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) =>
                            handleErrors(e, setFirstName, "FirstName")
                        }
                    />
                    {firstNameError ? (
                        <p style={{ color: "red" }}>{firstNameError}</p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label>Last Name: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) =>
                            handleErrors(e, setLastName, "LastName")
                        }
                    />
                    {lastNameError ? (
                        <p style={{ color: "red" }}>{lastNameError}</p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label>Email Address: </label>
                    <input
                        className="form-control"
                        type="text"
                        onChange={(e) => handleErrors(e, setEmail, "Email")}
                    />
                    {emailError ? (
                        <p style={{ color: "red" }}>{emailError}</p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        className="form-control "
                        type="password"
                        onChange={(e) =>
                            handleErrors(e, setPassword, "Password")
                        }
                    />
                    {passwordError ? (
                        <p style={{ color: "red" }}>{passwordError}</p>
                    ) : (
                        ""
                    )}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input
                        className="form-control "
                        type="password"
                        onChange={(e) =>
                            handleErrors(
                                e,
                                setConfirmPassword,
                                "ConfirmPassword"
                            )
                        }
                    />
                    {confirmPasswordError ? (
                        <p style={{ color: "red" }}>{confirmPasswordError}</p>
                    ) : (
                        ""
                    )}
                </div>
                <input
                    className="btn btn-primary m-3"
                    type="submit"
                    value="Create User"
                />
            </form>
        </div>
    );
};

export default UserForm;
