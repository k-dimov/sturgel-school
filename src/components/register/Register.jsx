import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./Register.module.css";
import useForm from "../../hooks/useForm";

import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const KEYS = {
    Email: "email",
    Pass: "password",
    RePass: "repeatPassword",
};

const initialState = {
    [KEYS.Email]: "",
    [KEYS.Pass]: "",
    [KEYS.RePass]: "",
};

function validate (data) {
    const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{1,4}$/g
    const errorMessages = initialState;
    

    if (!emailPattern.test(data[KEYS.Email])) {
        errorMessages[KEYS.Email] = "Невалиден имейл";
    } else {
        errorMessages[KEYS.Email] = ''
    }

    if (data[KEYS.Pass].length < 6 && data[KEYS.Pass] !== '') {
        errorMessages[KEYS.Pass] = "Паролата трябва да е поне 6 символа";
    } else {
        errorMessages[KEYS.Pass] = ''
    }

    if (data[KEYS.RePass] !== data[KEYS.Pass] && data[KEYS.RePass] !== '') {
        errorMessages[KEYS.RePass] = "Паролите не съвпадат";
    } else {
        errorMessages[KEYS.RePass] = ''
    }

    return errorMessages;
};

function Register({ setUser }) {
    const navigate = useNavigate()

    const [errorsList, setErrorsList] = useState(initialState);

    const registerSubmitHandler = (formData) => {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((user) => {
                setUser(user);
                navigate('/')
            })
            .catch((err) => setErrorsList([err.message]));
    };

    const { formData, onChange, onSubmit, onBlur, errors } = useForm(
        registerSubmitHandler,
        initialState,
        validate
    );

    

    return (
        <div className={styles.formContainer}>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Имейл</Form.Label>
                    <Form.Control
                        type="email"
                        name={KEYS.Email}
                        placeholder="Enter email"
                        className={styles.inputField}
                        onChange={onChange}
                        value={formData[KEYS.Email]}
                        onBlur={onBlur}
                    />
                </Form.Group>
                <p
                    className={
                        errorsList[KEYS.Email] !== ""
                            ? styles.error
                            : styles.noError
                    }
                >{errorsList[KEYS.Email]}</p>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Парола</Form.Label>
                    <Form.Control
                        type="password"
                        name={KEYS.Pass}
                        placeholder="Password"
                        className={styles.inputField}
                        onChange={onChange}
                        value={formData[KEYS.Pass]}
                        onBlur={onBlur}
                    />
                </Form.Group>
                <p
                    className={
                        errorsList[KEYS.Pass] !== ""
                            ? styles.error
                            : styles.noError
                    }
                >{errorsList[KEYS.Pass]}</p>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Потвърждаване</Form.Label>
                    <Form.Control
                        type="password"
                        name={KEYS.RePass}
                        placeholder="Password"
                        className={styles.inputField}
                        onChange={onChange}
                        value={formData[KEYS.RePass]}
                        onBlur={onBlur}
                    />
                </Form.Group>
                <p
                    className={
                        errorsList[KEYS.RePass] !== ""
                            ? styles.error
                            : styles.noError
                    }
                >{errorsList[KEYS.RePass]}</p>
                <Button
                    variant="primary"
                    type="submit"
                    className={styles.button}
                >
                    Създай профил
                </Button>
            </Form>
        </div>
    );
}

export default Register;
