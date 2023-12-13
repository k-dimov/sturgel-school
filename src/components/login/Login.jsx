import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./Login.module.css";
import useForm from "../../hooks/useForm";
import { useState } from "react";

import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const KEYS = {
    Email: "email",
    Pass: "password",
};

const initialState = {
    [KEYS.Email]: "",
    [KEYS.Pass]: "",
};

const validate = (data) => {
    const emailPattern = new RegExp("^[w-.]+@([w-]+.)+[w-]{2,4}$", "g");
    const errorMessages = {};

    if (!emailPattern.test(data[KEYS.Email])) {
        errorMessages[KEYS.Email] = "Невалиден имейл";
    }
};

function Login({ setUser }) {

    const navigate = useNavigate()

    const loginSubmitHandler = (formData) => {
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((user) => {
                setUser(user);
                navigate('/');
            })
            .catch((err) => {
                console.log(err)
                setError(true)
            });
    };

    const [error, setError] = useState(false);
    const { formData, onChange, onSubmit } = useForm(
        loginSubmitHandler,
        initialState,
        validate
    );

    return (
        <div className={styles.formContainer}>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имейл</Form.Label>
                    <Form.Control
                        name={KEYS.Email}
                        type="email"
                        placeholder="Enter email"
                        className={styles.inputField}
                        onChange={onChange}
                        value={formData[KEYS.Email]}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Парола</Form.Label>
                    <Form.Control
                        name={KEYS.Pass}
                        type="password"
                        placeholder="Password"
                        className={styles.inputField}
                        onChange={onChange}
                        value={formData[KEYS.Pass]}
                    />
                </Form.Group>
                <p className={error ? styles.loginError : styles.noError}>
                    Неправилен имейл или парола
                </p>
                <Button
                    variant="primary"
                    type="submit"
                    className={styles.button}
                >
                    Влез
                </Button>
            </Form>
        </div>
    );
}

export default Login;
