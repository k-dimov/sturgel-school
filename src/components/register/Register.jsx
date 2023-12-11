import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./Register.module.css";

function Register() {
    return (
        <div className={styles.formContainer}>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        className={styles.inputField}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className={styles.inputField}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        className={styles.inputField}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Register;
