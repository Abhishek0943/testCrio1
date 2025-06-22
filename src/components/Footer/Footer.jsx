import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import styles from "./Footer.module.css";
import medifyIcon from "../../Assets/Footer/medify_icon.png"
import Typography from '@mui/material/Typography';
import facebookIcon from "../../Assets/Footer/facebook_icon.png"
import skypeIcon from "../../Assets/Footer/skype_icon.png"
import youtubeIcon from "../../Assets/Footer/youtube_icon.png"
import pinterestIcon from "../../Assets/Footer/pinterest_icon.png"
import arrowBullet from "../../Assets/Footer/bullet.png"


export default function Footer() {


    return (
        <div className={styles.container} >

            <Stack direction="column" spacing={2}
            sx={{
                justifyContent: "space-between",
                height: "70%",
                width: "90%"
            }}
            >

                <Stack direction="row" spacing={2} 
                style={{
                    height : "200px",
                    justifyContent: "space-evenly"
                }}
                >
                    <Stack 
                    sx={{
                        justifyContent: "space-between",
                    }}
                    >
                        <Stack direction="row" spacing={2}>
                            <img src={medifyIcon} alt="medify-icon" />
                            <Typography variant='h6' color='primary' 
                            style={{
                                fontWeight : 'bold'
                            }}
                            >Medify</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}> 
                            <img src={facebookIcon} alt="facebook-icon" />
                            <img src={skypeIcon} alt="skype-icon" />
                            <img src={youtubeIcon} alt="youtube-icon" />
                            <img src={pinterestIcon} alt="pinterest-icon" />
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >About Us</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Our Pricing</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Our Gallery</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Appointment</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Privacy Policy</Typography>
                        </Stack>

                    </Stack>

                    <Stack spacing={2} >
                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Orthology</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Neurology</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Dental Care</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Opthalmology</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Cardiology</Typography>
                        </Stack>
                    </Stack>

                    <Stack direction="column" spacing={2}>
                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >About Us</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Our Pricing</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Our Gallery</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Appointment</Typography>
                        </Stack>

                        <Stack direction="row" spacing={2}>
                            <img src={arrowBullet} alt='arrow-bullet-symbol' className={styles.bullet} />
                            <Typography sx={{
                                color: 'white'
                            }} >Privacy Policy</Typography>
                        </Stack>

                    </Stack>
                </Stack>

                <Stack direction="column" spacing={2}
                sx={{
                    padding: "20px",
                    paddingLeft: "5%",
                    paddingRight: "5%"
                }}
                >
                    <hr className={styles.line} />
                    <Typography
                    sx={{
                        color: 'white'
                    }}
                    >Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</Typography>
                </Stack>

            </Stack>

        </div>
    )
}