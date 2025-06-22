import styles from "./MobileAppPromo.module.css"
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import googlePlay from "../../Assets/mobileApp/google_play.png"
import appleStore from "../../Assets/mobileApp/apple_store.png"
import mobileImg from "../../Assets/mobileApp/mobilePic.png"
import arrowVector from "../../Assets/mobileApp/Vector.png"
import { useSnackbar } from "notistack";
import { useState } from "react";

export default function MobileAppPromo() {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    const [number, setNumber] = useState("");


    return (
        <div className={styles.container} >
            
            <div className={styles.mobileImg}>
                <img src={mobileImg} alt="mobile-pic" />
            </div>

            <div className={styles.info}>

                <img src={arrowVector} alt="arrow-vector" className={styles.arrow} />

                <Stack sx={{
                    height: "100%",
                    justifyContent: "space-evenly"
                }}>
                    <div>
                        <Typography
                        sx={{
                            color: "#1B3C74",
                            fontWeight: 700,
                            fontSize: "48px"
                        }}
                        >Download the</Typography>
                        <Typography
                        color="primary"
                        sx={{
                            fontWeight: 700,
                            fontSize: "48px"
                        }}
                        >Medify <span style={{
                            color: "#1B3C74",
                        }}>App</span></Typography>
                    </div>

                    <Stack>
                        <Typography sx={{
                            fontWeight: 700,
                            fontSize: "16px"
                        }} >Get the link to download the app</Typography>
                        <Stack direction="row" spacing={2}>

                            <TextField
                                placeholder="Enter phone number"
                                type="number"
                                value={number}
                                onChange={(e) => {
                                    setNumber(e.target.value);
                                }}
                                id="outlined-start-adornment"
                                sx={{ m: 1, width: '25ch', background: "white" }}
                                slotProps={{
                                    input: {
                                    startAdornment: <InputAdornment position="start" sx={{
                                        fontWeight: 700
                                    }} >+91</InputAdornment>,
                                    },
                                }}
                            />

                            <Button variant="contained" 
                            onClick={() => {

                                if(number.length === 10){
                                    enqueueSnackbar("App link has been sent to your mobile number", {
                                    variant: "success"
                                    })
                                }else{
                                    enqueueSnackbar("Mobile number should be 10 digits", {
                                        variant: "error"
                                    })
                                }

                                
                            }}
                            >Send SMS</Button>

                        </Stack>
                    </Stack>
                    
                    <Stack direction="row" spacing={2}>
                        
                        <div>
                            <img src={googlePlay} alt="google-play-icon" />
                        </div>

                        <div>
                            <img src={appleStore} alt="apple-store-icon" />
                        </div>
                    </Stack>

                </Stack>
            </div>
            
        </div>
    )
}