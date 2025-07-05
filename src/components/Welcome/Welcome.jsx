import { Box, Stack, Typography } from "@mui/material"
import Logo from "../../assets/logo.png"
import styles from "./Welcome.module.css"
import { useOutletContext } from "react-router-dom"
import Grid from '@mui/material/Grid';



function QuestionCard ({question}) {

    const { setSearch, formRef, textRef } = useOutletContext();

    return (
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "15px",
            margin: "15px",
            background: "white",
            gap: "10px",
            "&:hover" : {
                cursor: "pointer"
            }
        }}
        className={styles.card}
        onClick={() => {
            setSearch(question);
            // if(textRef.current) {
            //     textRef.current.value = question;
            // }

            setTimeout(() => {
                formRef.current?.requestSubmit();
            }, 0)

            
        }}
        >
            
            <Typography
            variant="h3"
            fontSize="1.5rem"
            >{question}</Typography>

            <Typography
            color="grey"
            >Get immediate AI generated response</Typography>

        </Box>
    )
}


export default function Welcome () {

    const { isMobile } = useOutletContext();

    return (
        <Box
        sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end"
        }}
        >

            <Stack spacing={2}
            sx={{
                width: "100%"
            }}
            >
                
                {/* Welcome test & AI symbol */}
                <Stack spacing={1}
                sx={{
                    justifyContent: "center",
                    alignItems: "center"
                }}
                >

                    <Typography
                    variant="h3"
                    fontSize="2rem"
                    textAlign="center"
                    >How Can I Help You Today ?</Typography>
                    
                    <img src={Logo} alt="ai-logo" className={styles.logo} />

                </Stack>

                {/* Quick look at response needed */}
                <Box sx={{ 
                    flexGrow: 1,
                    width: "100%"
                 }}>

                    <Grid container spacing={2}>

                        <Grid size={isMobile ? 12 : 6}>
                            <QuestionCard question="Hi, what is the weather" />
                        </Grid>

                        <Grid size={isMobile ? 12 : 6}>
                            <QuestionCard question="Hi, what is my location" />
                        </Grid>

                        <Grid size={isMobile ? 12 : 6}>
                            <QuestionCard question="What is a Promise in JavaScript?" />
                        </Grid>

                        <Grid size={isMobile ? 12 : 6}>
                            <QuestionCard question="Can you explain RESTful APIs?" />
                        </Grid>

                    </Grid>

                </Box>

            </Stack>
        </Box>
    )
}