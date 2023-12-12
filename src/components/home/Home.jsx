import Carousel from "react-bootstrap/Carousel";
import styles from "./Home.module.css"

function Home() {
    return (
        <Carousel>
            <Carousel.Item className={styles.imgContainer}>
                    <img src="/public/6455.jpg" alt="school-render" />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;
