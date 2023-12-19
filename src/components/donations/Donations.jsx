import { Table, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from "./Donations.module.css";
import DonationModal from "./DonationModal";
import { sortByDate } from "../../utils/dateUtils";

import { firestore } from "../../config/firebase";
import { collection, getDocs } from "@firebase/firestore";
import DonationTableRow from "./DonationTableRow";
import DonationInfoModal from "./DonationInfoModal";

import AuthContext from "../../contexts/authContext";
import { useContext } from "react";
import DonationDeleteModal from "./DonationDeleteModal";


const modalInitalState = {
    show: false,
    details: {},
}

function Donations() {
    const [showDonationModal, setShowDonationModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(modalInitalState);
    const [showInfoModal, setShowInfoModal] = useState(modalInitalState);
    const [donations, setDonations] = useState([]);

    const user = useContext(AuthContext);


    useEffect(() => {
        getDocs(collection(firestore, "donations"))
            .then((data) => {
                const donationsList = [];
                data.forEach((doc) => {
                    donationsList.push({ id: doc.id, data: doc.data() });
                });
                setDonations(donationsList);
            })
            .catch((err) => console.log(err));
    }, []);

    const handleCloseDonationModal = () => setShowDonationModal(false);
    const handleShowDonationModal = () => setShowDonationModal(true);

    const handleCloseInfoModal = () => setShowInfoModal(state => ({...state, show: false}));

    const findDetails = (id) => {
        const details = donations.find(don => don.id === id);
        setShowInfoModal({details, show: true});
    }

    const handleCloseDeleteModal = () => setShowDeleteModal(state => ({...state, show: false}));

    const deleteDonation = (id) => {
        setShowDeleteModal({id, show: true});
    }

    return (
        <>
            {showDonationModal && (
                <DonationModal
                    handleClose={handleCloseDonationModal}
                    setDonations={setDonations}
                />
            )}

            {showInfoModal.show && (
                <DonationInfoModal 
                    handleClose={handleCloseInfoModal}
                    details={showInfoModal.details}
                />
            )}

            {showDeleteModal.show && (
                <DonationDeleteModal
                    handleClose={handleCloseDeleteModal}
                    id={showDeleteModal.id}
                    setDonations={setDonations}
                />
            )}

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

                <Button
                    variant="primary"
                    size="lg"
                    className={`${styles.bigButton} ${styles.button}`}
                    onClick={handleShowDonationModal}
                    disabled={user.uid ? false : true}
                >
                    Дари!
                </Button>
                {!user.uid && (<p className={styles.warning}>Влезте или се регистрирайте за да дарите</p>)}
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
                        {sortByDate(donations).map((donation) => (
                            <DonationTableRow
                                key={donation.id}
                                {...donation.data}
                                isPublic={donation.data.public}
                                id={donation.id}
                                findDetails={findDetails}
                                deleteDonation={deleteDonation}
                            />
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Donations;
