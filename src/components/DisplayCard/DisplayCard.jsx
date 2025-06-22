import styles from "./DisplayCard.module.css"
import Stack from "@mui/material/Stack"
import DoctorIcon from "../../Assets/displayCard/Doctor.png"
import Typography from "@mui/material/Typography"
import LabIcon from "../../Assets/displayCard/Drugstore.png"
import HospitalIcon from "../../Assets/displayCard/Hospital.png"
import CapsuleIcon from "../../Assets/displayCard/Capsule.png"
import AmbulanceIcon from "../../Assets/displayCard/Ambulance.png"


export default function DisplayCard() {

    return (
        <div className={styles.container}>

            <Stack direction="row" spacing={2}
            sx={{
                padding: "10px",
                justifyContent: "space-evenly"
            }}
            >
                <div className={styles.card}>

                    <div className={styles.imgDiv}>
                        <img src={DoctorIcon} alt="doctor-img" />
                    </div>

                    <Typography variant="h5" color="gray" >Doctor</Typography>

                </div>

                <div className={styles.card}>

                    <div className={styles.imgDiv}>
                        <img src={LabIcon} alt="lab-img" />
                    </div>

                    <Typography variant="h5" color="gray" >Labs</Typography>

                </div>

                <div className={styles.card}>

                    <div className={styles.imgDiv}>
                        <img src={HospitalIcon} alt="hospital-img" />
                    </div>

                    <Typography variant="h5" color="gray" >Hospitals</Typography>

                </div>

                <div className={styles.card}>

                    <div className={styles.imgDiv}>
                        <img src={CapsuleIcon} alt="store-img" />
                    </div>

                    <Typography variant="h5" color="gray" >Medical Store</Typography>

                </div>

                <div className={styles.card}>

                    <div className={styles.imgDiv}>
                        <img src={AmbulanceIcon} alt="ambulance-img" />
                    </div>

                    <Typography variant="h5" color="gray" >Ambulance</Typography>

                </div>

            </Stack>
        </div>
    )
}