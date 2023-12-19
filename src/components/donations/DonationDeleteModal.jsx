import { Modal, Button } from "react-bootstrap";
import { remove } from "../../api/donationsApi";

import styles from "./DonationTableRow.module.css";
function DonationDeleteModal({ handleClose, id, setDonations }) {

    const handleDelete = async () => {
        try {
            await remove(id);
            setDonations(state => state.filter(don => don.id !== id));
        } catch (err) {
            console.log(err);
        }

        handleClose();
    };

    return (
        <Modal
            show={true}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton onClick={handleClose}>
                <Modal.Title>Потвърждение</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Дарението ще бъде пермаментно изтрито</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Затвори
                </Button>
                <Button
                    variant="secondary"
                    className={styles.delete}
                    onClick={handleDelete}
                >
                    Изтрий
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DonationDeleteModal;
