import { Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import styles from "./Carousel.module.css"
import Ad1 from "../../Assets/hero/adCarousel/slide1.png"
import Ad2 from "../../Assets/hero/adCarousel/slide2.png"
import { Pagination } from "swiper/modules"
import 'swiper/css/pagination'
import Doc1 from "../../Assets/medical/doc1.png"
import Typography from "@mui/material/Typography";

export default function Carousel ({type}) {

    return (
        
        <div className={styles.container}>

            {/* Carousel - Ads */}
            {
                (type === "ad") && (

                    <Swiper
                    spaceBetween={50}
                    breakpoints={{
                        0 : {
                            slidesPerView: "auto"
                        },
                        1200: {
                            slidesPerView: 3
                        }
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                    >

                        <SwiperSlide
                        style={{width: "300px"}}
                        >
                            <div className={styles.imageContainer} >
                                <img src={Ad1} alt="ad-1-image" className={styles.image}/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide
                        style={{width: "300px"}}
                        >
                            
                            <div className={styles.imageContainer} >
                                <img src={Ad2} alt="ad-2-image" className={styles.image}/>
                            </div>
                            
                        </SwiperSlide>

                        <SwiperSlide
                        style={{width: "300px"}}
                        >
                            
                            <div className={styles.imageContainer} >
                                <img src={Ad1} alt="ad-1-image" className={styles.image}/>
                            </div>
                            
                        </SwiperSlide>

                    </Swiper>
                )
            }

            {/* Carousel - Med */}
            {
                (type === "med") && (
                    

                    <Swiper
                    spaceBetween={10}
                    breakpoints={{
                        0 : {
                            slidesPerView: "auto"
                        },
                        1200: {
                            slidesPerView: 2
                        },
                        1300: {
                            slidesPerView: 3
                        }
                    }}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                    >

                        <SwiperSlide
                        style={{width: "fit-content"}}
                        >
                            <div className={styles.medContainer}>
                                <img src={Doc1} alt="doc-image" />

                                <Typography variant="h5"
                                color="#1B3C74"
                                >Dr. Heena Sachdeva</Typography>
                                <Typography variant="h6"
                                color="#2AA7FF"
                                >Orthopaedics</Typography>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide
                        style={{width: "fit-content"}}
                        >
                            <div className={styles.medContainer}>
                                <img src={Doc1} alt="doc-image" />

                                <Typography variant="h5"
                                color="#1B3C74"
                                >Dr. Heena Sachdeva</Typography>
                                <Typography variant="h6"
                                color="#2AA7FF"
                                >Orthopaedics</Typography>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.medContainer}>
                                <img src={Doc1} alt="doc-image" />

                                <Typography variant="h5"
                                color="#1B3C74"
                                >Dr. Heena Sachdeva</Typography>
                                <Typography variant="h6"
                                color="#2AA7FF"
                                >Orthopaedics</Typography>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.medContainer}>
                                <img src={Doc1} alt="doc-image" />

                                <Typography variant="h5"
                                color="#1B3C74"
                                >Dr. Heena Sachdeva</Typography>
                                <Typography variant="h6"
                                color="#2AA7FF"
                                >Orthopaedics</Typography>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={styles.medContainer}>
                                <img src={Doc1} alt="doc-image" />

                                <Typography variant="h5"
                                color="#1B3C74"
                                >Dr. Heena Sachdeva</Typography>
                                <Typography variant="h6"
                                color="#2AA7FF"
                                >Orthopaedics</Typography>

                            </div>
                        </SwiperSlide>


                    </Swiper>
                )
            }

        </div>
    )
}