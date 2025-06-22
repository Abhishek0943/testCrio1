import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"
import styles from "./Faq.module.css"
import DocPic from "../../Assets/faq/docPic.png"
import SmileyIcon from "../../Assets/faq/emoji.png"
import PresentIcon from "../../Assets/faq/present.png"
import AddIcon from '@mui/icons-material/Add';


export default function Faq() {


    return (
        <div
        style={{paddingTop: "30px"}}
        >

            <Stack spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center"

            }}
            >

                <Typography color="primary" >Get Your Answer</Typography>
                <Typography variant="h4" color="#1B3C74" 
                style={{
                    fontWeight: 700
                }}
                >Frequently Asked Questions</Typography>

                <Stack direction="row" spacing={2}
                sx={{
                    justifyContent: "space-evenly",
                    alignItems: "center"
                }}
                >

                    <div className={styles.container1}>

                        <img src={DocPic} alt="doc-pic" className={styles.image1} />
                        <img src={PresentIcon} alt="present" className={styles.image2} />

                        <Stack direction="row" spacing={2} className={styles.image3}>
                            <img src={SmileyIcon} alt="smiley" 
                            style={{
                                width: "50px"
                            }}
                            />

                            <Stack spacing={1}>
                                <Typography
                                variant="h5"
                                color="#1B3C74"
                                fontWeight={700}
                                >84+</Typography>

                                <Typography
                                color="grey"
                                >
                                    Happy Patients
                                </Typography>

                            </Stack>

                        </Stack>

                    </div>

                    <Stack direction="row" spacing={3}>

                        <Stack spacing={2}>


                            <Typography variant="h6" color="#1B3C74" 
                            style={{
                                fontWeight: 700
                            }}
                            >Why choose our medical for your family?</Typography>
                            





                            <Typography variant="h6" color="#1B3C74" 
                            style={{
                                fontWeight: 700
                            }}
                            >Why we are different from others?</Typography>






                            <Typography variant="h6" color="#1B3C74" 
                            style={{
                                fontWeight: 700
                            }}
                            >Trusted & experience senior care & love</Typography>






                            <Typography variant="h6" color="#1B3C74" 
                            style={{
                                fontWeight: 700
                            }}
                            >How to get appointment for emergency cases</Typography>



                        </Stack>

                        <Stack spacing={3}>
                            <AddIcon sx={{color: "#2AA8FF" }} />
                            <AddIcon sx={{color: "#2AA8FF" }} />
                            <AddIcon sx={{color: "#2AA8FF" }} />
                            <AddIcon sx={{color: "#2AA8FF" }} />
                        </Stack>
                        

                    </Stack>

                </Stack>

            </Stack>


        </div>
    )
}