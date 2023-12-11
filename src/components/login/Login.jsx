import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./Login.module.css";
import useForm from "../../hooks/useForm";


const KEYS = {
    Email: 'email',
    Pass: 'password',
}

const initialState = {
    [KEYS.Email]: '',
    [KEYS.Pass]: '',
}

function Login({submitHandler}) {

    const {formData, onChange, onSubmit} = useForm(submitHandler, initialState);

    return (
        <div className={styles.formContainer}>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
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
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name={KEYS.Pass}
                        type="password"
                        placeholder="Password"
                        className={styles.inputField}
                        onChange={onChange}
                        value={formData[KEYS.Pass]}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;
