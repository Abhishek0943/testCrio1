import { Box, Stack, Typography, IconButton } from "@mui/material"
import HistoryCard from "../components/HistoryCard/HistoryCard"
import { useOutletContext } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

const dummyConvoHistory = [
    [{
    type: "history",
    isUser: true,
    time: "10:33 am",
    content: "Lorem ipsum"
    },
    {
    type: "history",
    isUser: false,
    time: "10:34 am",
    content: "Lorem ipsum"
    }],
    [{
    type: "history",
    isUser: true,
    time: "11:33 am",
    content: "Lorem ipsum 2"
    },
    {
    type: "history",
    isUser: false,
    time: "11:34 am",
    content: "Lorem ipsum 2"
    }]
]


export default function ConversationHistory() {

    const { isMobile, setMenuOpen, convoList } = useOutletContext();

    return (
        <Box
        sx={{
            flexGrow: 1,
        }}
        >
            <Stack direction="row" spacing={2}
            style={{
                justifyContent: "center",
                alignItems: "center",
                margin: "20px",
                position: "relative"
            }}
            >

                {/* Menu icon */}
                {
                    isMobile && (
                        <IconButton
                        onClick={() => {
                            setMenuOpen(true);
                        }}
                        sx={{
                            // position: "absolute",
                            left: 0,
                            top: 0
                        }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )
                }

                <Typography
                fontSize="1.5rem"
                >Conversation History</Typography>


            </Stack>

            <Stack spacing={2}
            sx={{
                marginBottom: "10px",
                height: "75vh",
                overflowY: "auto",
            }}
            >

                {/* conversation chats */}
                {
                    convoList.map((item, index) => {

                        return <HistoryCard data={item} key={index} feedIndex={index} />
                    })
                }

            </Stack>


        </Box>
    )
}