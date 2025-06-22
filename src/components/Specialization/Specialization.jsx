import Typography from "@mui/material/Typography"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Icon1 from "../../Assets/specialization/Drugstore.png"
import styles from "./Specialization.module.css"
import Button from "@mui/material/Button";
import Carousel from "../Carousel/Carousel";
import VerifiedIcon from '@mui/icons-material/Verified';
import Stack from "@mui/material/Stack";
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import sqImg1 from "../../Assets/medical/sq-1.png"
import sqImg2 from "../../Assets/medical/sq-2.png"

export default function Specialization() {

    return (
        <div>
            
            <div className={styles.spcContainer}>
                
                <Typography variant="h2" 
                style={{
                    textAlign: "center",
                    color: "#1B3C74",
                    fontWeight: 700,
                    marginBottom: "25px"
                }}  
                >Find Specialization</Typography>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} >

                        <Grid size={{md: 6, lg:3}}>
                            <div className={styles.card}>

                                <img src={Icon1} alt="icon-1" />
                                <Typography color="grey" variant="h6">Dentistry</Typography>

                            </div>
                        </Grid>

                        <Grid size={{md: 6, lg:3}}>
                            <div className={styles.card}>

                                <img src={Icon1} alt="icon-1" />
                                <Typography color="grey" variant="h6">Dentistry</Typography>

                            </div>
                        </Grid>

                        <Grid size={{md: 6, lg:3}}>
                            <div className={styles.card}>

                                <img src={Icon1} alt="icon-1" />
                                <Typography color="grey" variant="h6">Dentistry</Typography>

                            </div>
                        </Grid>

                        <Grid size={{md: 6, lg:3}}>
                            <div className={styles.card}>

                                <img src={Icon1} alt="icon-1" />
                                <Typography color="grey" variant="h6">Dentistry</Typography>

                            </div>
                        </Grid>

                        <Grid size={{md: 6, lg:3}}>
                            <div className={styles.card}>

                                <img src={Icon1} alt="icon-1" />
                                <Typography color="grey" variant="h6">Dentistry</Typography>

                            </div>
                        </Grid>

                        <Grid size={{md: 6, lg:3}}>
                            <div className={styles.card}>

                                <img src={Icon1} alt="icon-1" />
                                <Typography color="grey" variant="h6">Dentistry</Typography>

                            </div>
                        </Grid>

                        <Grid size={{md: 6, lg:3}}>
                            <div className={styles.card}>

                                <img src={Icon1} alt="icon-1" />
                                <Typography color="grey" variant="h6">Dentistry</Typography>

                            </div>
                        </Grid>

                        <Grid size={{md: 6, lg:3}}>
                            <div className={styles.card}>

                                <img src={Icon1} alt="icon-1" />
                                <Typography color="grey" variant="h6">Dentistry</Typography>

                            </div>
                        </Grid>
                        
                    </Grid>
                </Box>

                <Button variant="contained" 
                sx={{
                    textTransform: "capitalize"
                }}
                >View All</Button>

            </div>

            <div className={styles.medContainer}>
                <Typography variant="h3" 
                style={{
                    textAlign: "center",
                    color: "#1B3C74",
                    fontWeight: 700,
                    marginBottom: "25px"
                }}  
                >Our Medical Specialist</Typography>

                <Carousel type="med" />
            </div>
            
            <div className={styles.ptContainer}>


                <Stack direction="row" spacing={2}
                sx={{
                    width: "100%",
                    justifyContent: "space-evenly"
                }}
                >

                    <div className={styles.boxStyle}>

                        {/* Text box */}
                        <div className={styles.square1}>
                    
                            <Stack spacing={2}
                            sx={{
                                alignItems: "center"
                            }}
                            >

                                <Stack direction="row" spacing={2}
                                style={{
                                    alignItems: "center"
                                }}
                                >

                                    <WifiCalling3Icon 
                                    style={{
                                        background: "#2AA7FF",
                                        color: "white",
                                        padding: "5px",
                                        borderRadius: "10px"
                                    }}
                                    />
                                    <Typography
                                    color="#1B3C74"
                                    style={{
                                        fontWeight: 700
                                    }}
                                    >Free Consultation</Typography>

                                </Stack>

                                <Typography
                                style={{
                                    margin: "0"
                                }}
                                >Consultation with the best</Typography>

                            </Stack>
                    
                            
                        </div>

                        {/* Image 1 */}
                        <div className={styles.square2}>
                            <img src={sqImg1} alt="sq-img-1" />
                        </div>

                        {/* Image 2 */}
                        <div className={styles.square3}>
                            <img src={sqImg2} alt="sq-img-2" />
                        </div>

                    </div>

                    <div className={styles.boxStyle2}>
                        
                        <Stack spacing={2}
                        >
                            
                            <Typography
                            color="primary"
                            >HELPING PATIENTS FROM AROUND THE GLOBE!!</Typography>
                            <Typography
                            color="primary"
                            variant="h4"
                            >Patient <span style={{color: "#1B3C74"}} >Caring</span></Typography>

                            <Typography color="grey" >
                                Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                            </Typography>

                            <Stack direction="row" spacing={2}>
                                <VerifiedIcon 
                                style={{
                                    color: "#2AA7FF"
                                }}
                                />
                                <Typography
                                color="1B3C74"
                                sx={{fontWeight: 600}}
                                >Stay Updated About Your Health</Typography>

                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <VerifiedIcon 
                                style={{
                                    color: "#2AA7FF"
                                }}
                                />
                                <Typography
                                color="1B3C74"
                                sx={{fontWeight: 600}}
                                >Check Your Results Online</Typography>

                            </Stack>

                            <Stack direction="row" spacing={2}>
                                <VerifiedIcon 
                                style={{
                                    color: "#2AA7FF"
                                }}
                                />
                                <Typography
                                color="1B3C74"
                                sx={{fontWeight: 600}}
                                >Manage Your Appointments</Typography>

                            </Stack>

                        </Stack>
                    </div>

                </Stack>

            </div>

        </div>
    )
}