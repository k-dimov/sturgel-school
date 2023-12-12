import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.iconsContainer}>
                <p>
                    
                    <a href="https://maps.app.goo.gl/c4rjnyFfcPa76sEGA"><FontAwesomeIcon className={styles.icon} icon={faLocationDot} size="2xl" /></a>
                    с. Стъргел, Община Горна Малина
                </p>
            </div>
        </footer>
    );
} 

export default Footer;
