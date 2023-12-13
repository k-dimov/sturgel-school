import { Modal, Form, Button, InputGroup } from "react-bootstrap";
import styles from "./Donations.module.css";

import { firestore } from "../../config/firebase";
import { addDoc, collection } from "@firebase/firestore";
import useForm from "../../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

const KEYS = {
    Name: "name",
    Donation: "donationAmount",
    Public: "public",
    Message: "message",
    UserId: "userId",
};

const initialState = {
    [KEYS.Name]: "",
    [KEYS.Donation]: "",
    [KEYS.Public]: false,
    [KEYS.Message]: "",
    [KEYS.UserId]: "",
};

const validate = (data) => {
    const errorMessages = {};
    
    if (parseInt(data[KEYS.Donation]) != data[KEYS.Donation]) {
        errorMessages[KEYS.Donation] = "Неправилно въведена сума";
    }
}

function DonationModal({ handleClose }) {
    const user = useContext(AuthContext);

    const docRef = collection(firestore, "donations");

    const submitHandler = (formData) => {
        formData = {
            ...formData,
            [KEYS.Public]: formData[KEYS.Public] === "checked" ? true : false,
            [KEYS.UserId]: user.uid,
            createdOn: new Date().toISOString(),
        };
        try{
            addDoc(docRef, formData);
            handleClose();
        } catch(err){
            console.log(err)
        }
    };

    const { formData, onChange, onSubmit } = useForm(
        submitHandler,
        initialState,
        validate
    );

    return (
        <Modal show={true} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Дарение</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Име</Form.Label>
                        <Form.Control
                            type="name"
                            name="name"
                            autoFocus
                            value={formData[KEYS.Name]}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <InputGroup className="mb-3">
                        <InputGroup.Text>BGN</InputGroup.Text>
                        <Form.Control
                            aria-label="Amount (to the nearest dollar)"
                            name={KEYS.Donation}
                            value={formData[KEYS.Donation]}
                            onChange={onChange}
                        />
                        <InputGroup.Text>.00</InputGroup.Text>
                    </InputGroup>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>
                            Съобщение{" "}
                            <Form.Check
                                inline
                                label="Публично"
                                name="public"
                                type={"checkbox"}
                                id={`inline-checkbox-2`}
                                value={formData[KEYS.public]}
                                onChange={onChange}
                            />
                        </Form.Label>
                        <Form.Control
                            as="textarea"
                            name={KEYS.Message}
                            rows={3}
                            value={formData[KEYS.Message]}
                            onChange={onChange}
                        />
                    </Form.Group>
                    <p className={styles.donationInfo}>
                        В рамките на 15 минути можете да си промените решението
                    </p>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Отказ
                </Button>
                <Button variant="primary" type="submit" className={styles.button} onClick={onSubmit}>
                    Дари
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DonationModal;
