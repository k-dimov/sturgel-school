import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./Register.module.css";
import useForm from "../../hooks/useForm";

const KEYS = {
    Email: 'email',
    Pass: 'password',
    RePass: 'repeatPassword'
}

const initialState = {
    [KEYS.Email]: '',
    [KEYS.Pass]: '',
    [KEYS.RePass]: '',
}

function Register({submitHandler}) {

    const {formData, onChange, onSubmit} = useForm(submitHandler, initialState);

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
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Парола</Form.Label>
                    <Form.Control
                        type="password"
                        name={KEYS.Pass}
                        placeholder="Password"
                        className={styles.inputField}
                        onChange={onChange}
                        value={formData[KEYS.Pass]}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Потвърждаване</Form.Label>
                    <Form.Control
                        type="password"
                        name={KEYS.RePass}
                        placeholder="Password"
                        className={styles.inputField}
                        onChange={onChange}
                        value={formData[KEYS.RePass]}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className={styles.button}>
                    Създай профил
                </Button>
            </Form>
        </div>
    );
}

export default Register;
