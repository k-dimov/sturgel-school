import Carousel from "react-bootstrap/Carousel";
import styles from "./Home.module.css"

function Home() {
    return (
        <Carousel className={styles.carousel} slide={false}>
            <Carousel.Item >
                <div className={styles.imgContainer}>

                    <img src="/public/drone-shot.jpg" alt="school-render" className={styles.slide}/>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className={styles.imgContainer}>

                    <img src="/public/entrance-render.jpg" alt="school-render" className={styles.slide}/>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className={styles.imgContainer}>

                    <img src="/public/decking-render.jpg" alt="school-render" className={styles.slide}/>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className={styles.imgContainer}>

                    <img src="/public/library-render.jpg" alt="school-render" className={styles.slide}/>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className={styles.imgContainer}>

                    <img src="/public/dormitory-render.jpg" alt="school-render" className={styles.slide}/>
                </div>
            </Carousel.Item>
            <Carousel.Item >
                <div className={styles.imgContainer}>

                    <img src="/public/lounge-area.jpg" alt="school-render" className={styles.slide}/>
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Home;
