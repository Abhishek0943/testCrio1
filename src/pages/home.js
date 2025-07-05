import { Box, Typography, IconButton, Stack } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { useOutletContext } from "react-router-dom";
import ChatCard from "../components/ChatCard/ChatCard";
import Welcome from "../components/Welcome/Welcome";

const dummyData = {
    type: "chat",
    isUser: false,
    time: "10:33 am",
    content: "Lorem ipsum"
}

// AI Chat
export default function ChatWindow() {

    const { isMobile, setMenuOpen, currentConvo, bottomRef } = useOutletContext();
    
    

    return (
        <Box
        sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column"
        }}
        >
            <Stack direction="row" spacing={2}
            sx={{
                padding: "5px",
                alignItems: "center",
                marginLeft: "20px"
            }}
            >

                {
                    isMobile && (
                        <IconButton
                        onClick={() => {
                            setMenuOpen(true);
                        }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )
                }
                
                <header>
                    <Typography
                    variant="h1"
                    fontSize="3rem"
                    fontWeight="700"
                    color="primary"
                    >Bot AI</Typography>
                </header>

                

            </Stack>

            <Box
            sx={{
                flexGrow: 1,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                
            }}
            >

                {/* if convo empty, then welcome */}
                {
                    (currentConvo.length > 0) || (
                        <Welcome />
                    )
                }


                {/* Convo chats */}
                {
                    currentConvo.map((convo, index) => <ChatCard key={index} type="chat" isUser={convo.isUser} time={convo.time} content={convo.content} />)
                }

                <div ref={bottomRef} ></div>
            </Box>
            
        </Box>
    )
}