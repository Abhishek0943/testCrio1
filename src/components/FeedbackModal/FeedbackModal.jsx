import Modal from "react-modal"
import { Box, Stack, Typography, TextField, Button } from "@mui/material"
import { useState } from "react";


export default function FeedbackModal ({isOpen, setIsOpen, feedRef, addFeedback}) {

    const [feedValue, setFeedValue] = useState("");


    const handleSubmit = () => {
        addFeedback(feedValue, feedRef);
        setIsOpen(false);
    }

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={() => {
            setIsOpen(false);
        }}
        style={{
            content: {
                height: "fit-content",
                top: "35%",
            }
        }} 
        >
            
            <Stack spacing={2} >

                <Typography
                variant="h3"
                fontSize="1.5rem"
                >Provide your feedback</Typography>

                <TextField multiline 
                value={feedValue}
                onChange={(e) => {
                    setFeedValue(e.target.value);
                }}
                />

                <Stack direction="row"
                sx={{
                    justifyContent: "flex-end"
                }}
                >
                    <Button
                    onClick={handleSubmit}
                    variant="contained"
                    >Submit</Button>
                </Stack>

            </Stack>

            

        </Modal>
    )
}