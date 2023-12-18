import { Modal, Button, Table } from "react-bootstrap";
import { formatDate } from "../../utils/dateUtils";

function DonationInfoModal({ handleClose, details }) {
    return (
        <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={true}
            onHide={handleClose}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Детайли
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered>
                   <tbody>
                        <tr>
                            <td>Дата</td>
                            <td>{formatDate(details.data.createdOn)}</td>
                        </tr>
                        <tr>
                            <td>Име</td>
                            <td>{details.data.name}</td>
                        </tr>
                        <tr>
                            <td>Сума</td>
                            <td>{details.data.donationAmount} BGN</td>
                        </tr>
                        <tr>
                            <td>Съобщение</td>
                            <td>{details.data.public ? details.data.message : 'Скрито от дарителя'}</td>
                        </tr>
                   </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DonationInfoModal;
