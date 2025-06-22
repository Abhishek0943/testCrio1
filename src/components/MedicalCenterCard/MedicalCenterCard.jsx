import styles from "./MedicalCenterCard.module.css"
import Stack from "@mui/material/Stack"
import CenterLogo from "../../Assets/Search/centerLogo.png"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useState } from "react"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import BasicTabs from "../BookingTab/BookingTab"


const dummyData = {
    "Provider ID": "010001",
    "Hospital Name": "SOUTHEAST ALABAMA MEDICAL CENTER",
    "Address": "1108 ROSS CLARK CIRCLE",
    "City": "DOTHAN",
    "State": "Alabama",
    "ZIP Code": 36301,
    "County Name": "HOUSTON",
    "Phone Number": 3347938701,
    "Hospital Type": "Acute Care Hospitals",
    "Hospital Ownership": "Government - Hospital District or Authority",
    "Emergency Services": "Yes",
    "Meets criteria for meaningful use of EHRs": "Y",
    "Hospital overall rating": 3,
    "Hospital overall rating footnote": "",
    "Mortality national comparison": "Same as the national average",
    "Mortality national comparison footnote": "",
    "Safety of care national comparison": "Above the national average",
    "Safety of care national comparison footnote": "",
    "Readmission national comparison": "Same as the national average",
    "Readmission national comparison footnote": "",
    "Patient experience national comparison": "Below the national average",
    "Patient experience national comparison footnote": "",
    "Effectiveness of care national comparison": "Same as the national average",
    "Effectiveness of care national comparison footnote": "",
    "Timeliness of care national comparison": "Same as the national average",
    "Timeliness of care national comparison footnote": "",
    "Efficient use of medical imaging national comparison": "Same as the national average",
    "Efficient use of medical imaging national comparison footnote": ""
}

const bookingSlots = {
    "Morning": ["11:00 AM"],
    "Afternoon" : ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"],
    "Evening" : ["06:30 PM", "07:00 PM"]
};

// const bookingSlots = ["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"];
const bookingTimes = ["Morning", "Afternoon", "Evening"];

const todayDate = new Date();
const dateList = [];

function getWeek() {
        
        for(let i=0; i<7; i++) {

            todayDate.setDate(todayDate.getDate() + i);
            dateList.push(todayDate.toISOString().split('T')[0]);
        }

        console.log("date list >>", dateList)
}
getWeek();



export default function MedicalCenterCard({center, setBookedDetails}) {

    const [likeCount, setLikeCount] = useState(5)
    const [bookingDisplay, setBookingDisplay] = useState(false);

    

    return (
        <div className={styles.container}>
            <Stack spacing={2}
            sx={{
                width: "100%",
                justifyContent: "center",
                marginTop: "20px"
                // alignItems: "flex-end"
            }}
            >

                {/* Center details */}
                <div className={styles.centerDetail}>

                    {/* Absolute control the logo */}
                    <div className={styles.logoContainer}>

                        <img src={CenterLogo} alt="center-logo-img" />
                    </div>


                    {/* Center details + button to display booking */}
                    <Stack spacing={2}
                    sx={{
                        width: "70%"
                    }}
                    >

                        <Typography variant="h4" color="primary"
                        sx={{
                            fontWeight: 600,
                            fontSize: "24px"
                        }}
                        >{center.Address}</Typography>

                        <Typography>{`${center.City}, ${center.State}`}</Typography>
                        <p
                        style={{margin: 0}}
                        >{center["Hospital Name"]}</p>
                        

                        <Stack direction="row" spacing={2}>

                            <div 
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "45%",
                                gap: "10px",
                                
                            }}
                            >
                                <Typography color="#02A401" 
                                style={{
                                    fontWeight: 700
                                }}
                                >FREE</Typography>

                                <hr style={{width: "100%"}} />

                                <Button variant="contained" 
                                startIcon={<ThumbUpIcon />}
                                sx={{
                                    background: "#02A401",
                                    width: "fit-content"
                                }}
                                >{likeCount}</Button>
                            </div>

                            <div 
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "45%",
                                gap: "10px",
                                
                            }}
                            >
                                <Typography 
                                sx={{
                                    color: "#01A400",
                                    fontWeight: 500
                                }}
                                >Available Today</Typography>

                                <Button
                                variant="contained"
                                type="button"
                                sx={{
                                    textTransform: "none"
                                }}
                                onClick={() => {
                                    setBookingDisplay(!bookingDisplay);
                                }}
                                >Book FREE Center Visit</Button>

                            </div>

                        </Stack>

                        

                    </Stack>


                </div>

                {/* Conditional on click - display booking details */}

                {
                    bookingDisplay && (
                        <div className={styles.bookingTab}>
                            <BasicTabs dateList={dateList} bookingSlots={bookingSlots} bookingTimes={bookingTimes} center={center} setBookedDetails={setBookedDetails} />
                        </div>
                    )
                }

                


            </Stack>
        </div>
    )
}