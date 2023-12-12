import Carousel from "react-bootstrap/Carousel";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles.homeContainer}>
            <Carousel className={styles.carousel} slide={false}>
                <Carousel.Item>
                    <div className={styles.imgContainer}>
                        <img
                            src="/public/drone-shot.jpg"
                            alt="school-render"
                            className={styles.slide}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.imgContainer}>
                        <img
                            src="/public/entrance-render.jpg"
                            alt="school-render"
                            className={styles.slide}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.imgContainer}>
                        <img
                            src="/public/decking-render.jpg"
                            alt="school-render"
                            className={styles.slide}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.imgContainer}>
                        <img
                            src="/public/library-render.jpg"
                            alt="school-render"
                            className={styles.slide}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.imgContainer}>
                        <img
                            src="/public/dormitory-render.jpg"
                            alt="school-render"
                            className={styles.slide}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.imgContainer}>
                        <img
                            src="/public/lounge-area.jpg"
                            alt="school-render"
                            className={styles.slide}
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
            <h3>ЗЕЛЕН ОБРАЗОВАТЕЛЕН ЦЕНТЪР ЕЛА</h3>
            <p>
                В края на 2019 година ни се случи това, за което дълго мечтаехме
                – да намерим място достатъчно голямо, сред природата, но лесно
                достъпно и по някакъв начин да е символично свързано с
                образованието, което да превърнем в Зелен образователен център
                (ЗОЦ). Така Сдружението купи бившото училище в с. Стъргел от
                местен предприемач, който е имал намерение да го превърне в
                старчески дом. Работим по съживяването на местното училище и
                вече сме вложили над 800 000 лв. Когато го завършим там ще
                продължим да провеждаме безплатните си образователните програми
                за деца от уязвими групи като ги съчетаем с платени лагери и
                събития, така че основната дейност на Сдружението „подкрепа на
                деца и младежи да намерят своя път в живота и/или да преодолеят
                труден етап, през който преминават“ да бъде в много по-малка
                степен зависима от донори и проекти.
            </p>
        </div>
    );
}

export default Home;
