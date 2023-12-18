import { formatDate } from "../../utils/dateUtils";
import { ButtonGroup, Button } from "react-bootstrap";

import styles from "./DonationTableRow.module.css";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

function DonationTableRow({
    createdOn,
    donationAmount,
    name,
    userId,
    isPublic,
    id,
    findDetails,
}) {

    const currUserId = useContext(AuthContext).uid;

    const currTime = new Date()
    const createdOnTime = new Date(createdOn);
    const timeDifference = Math.floor((currTime - createdOnTime) / (60 * 1000));

    const handleInfoClick = () => {
        findDetails(id)
    }

    return (
        <tr>
            <td className={styles.row}>{formatDate(createdOn)}</td>
            <td className={styles.row}>{name !== '' ? name : 'Анонимен'}</td>
            <td className={styles.row}>{donationAmount} BGN</td>
            {currUserId === userId ? 
                <td className={styles.buttons}>
                    {timeDifference <= 15 ? <Button variant="secondary">Промени</Button> : ''}
                    <Button variant="secondary" onClick={handleInfoClick}>Детайли</Button>
                    <Button variant="secondary" className={styles.delete}>Изтрий</Button>
                </td>
                :
                <td>
                    <Button variant="secondary" onClick={handleInfoClick}>Детайли</Button>
                </td>
            }
        </tr>
    );
}

export default DonationTableRow;
