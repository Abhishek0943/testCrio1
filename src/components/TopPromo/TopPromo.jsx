import styles from "../TopPromo/TopPromo.module.css"
import Typography from '@mui/material/Typography';

export default function TopPromo() {

    return (
        <div className={styles.promo}>
            <Typography
            sx={{
                color: "white"
            }}
            > The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</Typography>
        </div>
    )
}