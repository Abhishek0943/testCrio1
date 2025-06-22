import Stack from "@mui/material/Stack";
import Logo from "../../Assets/navbar/logo.png"
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import styles from "./Navbar.module.css";


export default function Navbar({home=false}) {

    return (
        <div>
            {
                home && (
                    <div className={styles.nav}>

                        <Stack direction="row" spacing={2}
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "90%"
                        }}
                        >
                            <div className={styles.logoDiv}>
                                <img src={Logo} alt='logo-icon' />
                            </div>
                            

                            <Stack direction="row" spacing={2} 
                            sx={{
                                justifyContent: "space-evenly",
                                alignItems: "center",
                                width: "60%",
                                padding: "10px"
                            }}
                            >
                                <Link className={styles.linkStyle} >Find Doctors</Link>
                                <Link className={styles.linkStyle} >Hospitals</Link>
                                <Link className={styles.linkStyle} >Medicines</Link>
                                <Link className={styles.linkStyle} >Surgeries</Link>
                                <Link className={styles.linkStyle} >Software for Provider</Link>
                                <Link className={styles.linkStyle} >Facilities</Link>
                                <Button color="primary" variant="contained" >My Bookings</Button>
                            </Stack>

                        </Stack>
                        
                    </div>
                )
            }

            {
                home || (
                    <div>
                        Navbar-Alt
                    </div>
                )
            }
        </div>
    )
}