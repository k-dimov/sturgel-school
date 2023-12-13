import { Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./Donations.module.css";
import DonationModal from "./DonationModal";

import { firestore } from "../../config/firebase";
import {collection, getDocs} from "@firebase/firestore"

function Donations() {
    const [showModal, setShowModal] = useState(false);
    const [donations, setDonations] = useState([]);

    useEffect(() => {
        getDocs(collection(firestore, 'donations'))
            .then(data => {
                const donationsList = [];
                data.forEach(doc => {
                    donationsList.push({id: doc.id, data:doc.data()})
                });
                setDonations(donationsList);
                console.log(donations)
            })
            .catch(err => console.log(err));
    }, []);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
            {showModal && <DonationModal handleClose={handleClose} setDonations={setDonations}/>}
            <div className={styles.infoContainer}>
                <h3 className={styles.heading}>Как мога да се включа?</h3>
                <p className={styles.paragraph}>
                    Сдружение за споделено учене ЕЛА е организация, регистрирана
                    в обществена полза, която не генерира печалба и не
                    разпределя дивиденти. Сдружението работи повече от 20 години
                    с деца и младежи, на които помага да намерят своя път в
                    живота и/или да преодолеят труден етап, през който
                    преминават. Също така работим с училища, родители и учители,
                    които осъзнато подкрепят децата в изграждането на социалните
                    и емоционалните им умения.
                </p>
                <p className={styles.paragraph}>
                    За да осъществим всички наши смели мечти за занимания и
                    приключения сред природата, имаме основна сграда (бивше
                    училище, построено 1930 г.) с 900 кв.м. разгъната площ,
                    работилница от 280 кв.м., голям двор 4000 кв.м. и много,
                    много работа…. Затова ни е нужна вашата помощ: ако имате
                    желание да доброволствате на място, да дарите строителни
                    материали или спортни съоръжения можете да се свържете с
                    нас. Ако искате да се включите с финансова подкрепа, можете
                    да го направите чрез бутона по-долу. Благодарим!
                </p>

                <Button variant="primary" size="lg" className={`${styles.bigButton} ${styles.button}`} onClick={handleShow}>
                    Дари!
                </Button>
            </div>

            <div className={styles.tableContainer}>
                <Table striped bordered hover className={styles.table}>
                    <thead>
                        <tr>
                            <th>Дата</th>
                            <th>Име</th>
                            <th>Сума</th>
                            <th>Детайли</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Donations;
