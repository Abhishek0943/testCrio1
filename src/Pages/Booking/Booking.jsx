import Faq from "../../Components/FAQ/Faq"
import Navbar from "../../Components/Navbar/Navbar"
import styles from "./Booking.module.css"
import { useOutletContext } from "react-router-dom"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import CenterLogo from "../../Assets/Search/centerLogo.png"
import Button from "@mui/material/Button"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const dummyData = {
        "Hospital Name": "southeast alabama medical center",
        "City": "DOTHAN",
        "State": "Alabama",
        "Hospital Type": "General",
        "Hospital overall rating": "4.5",
        bookingDate: "2024-12-15",
        bookingTime: "10:00 AM",
      }

function BookedCard({detail}) {

    // console.log("detail >>", detail);

    const convertDate = (date) => {

        const temp = new Date(date);

        return temp.toLocaleDateString('en-In', {
            day: "2-digit",
            month: "long",
            year: "numeric"
        })
    }

    return (
        <div className={styles.bookedContainer}>

            <Stack direction="row" spacing={2}>

                {/* logo */}

                <div className={styles.logoDiv}>
                    <img src={CenterLogo} alt="center-logo"/>
                </div>


                {/* text */}
                <Stack spacing={2}>

                    <Typography variant="h3" 
                    sx={{
                        fontWeight: 600,
                        fontSize: "20px",
                        color: "#14BEF0",
                        textTransform: "capitalize"
                    }}
                    >{detail["Hospital Name"]}</Typography>

                    <p
                    style={{
                        textTransform: "capitalize",
                        fontWeight: 700,
                        color: "#414146",
                    }}
                    >{`${detail.City}, ${detail.State}`}</p>
                    <p
                    style={{
                        marginTop: 0
                    }}
                    >{detail["Hospital Type"]}</p>


                    <Button variant="contained" 
                    startIcon={<ThumbUpIcon />}
                    sx={{
                        background: "#02A401",
                        width: "fit-content"
                    }}
                    >5</Button>
                </Stack>

                {/* button for time and day */}
                <Button variant="outlined" 
                sx={{
                    height: "fit-content"
                }}
                >{detail.bookingTime}</Button>

                <Button variant="outlined" 
                sx={{
                    height: "fit-content",
                    fontWeight: 700,
                    color: "#007100",
                    borderColor: "#007100"
                }}
                >{convertDate(detail.bookingDate)}</Button>


            </Stack>
        </div>
    )

}

export default function Booking() {

    const {bookedDetails} = useOutletContext();

    return (
        <div>
            <Navbar home />
            
            <div className={styles.headingContainer}>
                <h1
                className={styles.heading}
                >My Bookings</h1>
            </div>

            {/* Booking results */}

            <div className={styles.bookedResults}>

                {
                    (bookedDetails.length !== 0) || <p>No bookings yet</p>
                }

                <Stack spacing={3}>

                    {
                        bookedDetails.map((item, index) => <BookedCard key={index} detail={item} />)
                    }

                </Stack>
            </div>


        </div>
    )
}