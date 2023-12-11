import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from './Login.module.css';

function Login() {
    return (
        <Form className={styles.formContainer}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" className={styles.inputField}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" className={styles.inputField}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Login;
