import { Box, Typography, Stack } from "@mui/material"
import Logo from "../../assets/logo.png"
import userLogo from "../../assets/user.png"
import styles from "./ChatCard.module.css"


export default function ChatCard({type, isUser, content, time}) {


    return (
        <Box
        className={type === "chat" ? styles.chat : styles.history}
        >

            <img src={isUser ? userLogo : Logo} alt={isUser ? "chat-user-icon" : "chat-ai-icon"} className={styles.logo} />

            <Stack spacing={2}
            sx={{
                justifyContent: "space-evenly",
                padding: "10px"
            }}
            >

                <Typography
                component="span"
                fontSize="1rem"
                fontWeight="700"
                >{isUser ? "You" : "Soul AI"}</Typography>

                <Typography
                component="p"
                fontSize="1rem"
                style={{
                    marginTop:"0.5rem"
                }}
                >{content}</Typography>

                <Typography
                style={{
                    textTransform: "uppercase",
                    color: "grey",
                    fontSize: "0.75rem",
                }}
                >{time}</Typography>

            </Stack>

        </Box>
    )
}