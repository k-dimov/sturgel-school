import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.iconsContainer}>
                <p>
                    
                    <a href="https://maps.app.goo.gl/c4rjnyFfcPa76sEGA"><FontAwesomeIcon className={styles.icon} icon={faLocationDot} size="2xl" />с. Стъргел, Община Горна Малина</a>
                </p>
                <div className={styles.linkContainer}>
                    <p>
                        <a href="https://www.facebook.com/CentreForInclusiveEdu"><FontAwesomeIcon className={styles.icon} icon={faFacebook} size="2xl" /></a>
                    </p>
                    <p>
                        <a href="https://www.ela-bg.eu/"><FontAwesomeIcon className={styles.icon} icon={faLink} size="2xl" /></a>
                    </p>
                </div>
            </div>
        </footer>
    );
} 

export default Footer;
