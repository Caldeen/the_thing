import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const SuccessSnackbar = ({ open, onClose }) => {
    

    return <>
        <Snackbar open={open} autoHideDuration={1000} onClose={onClose}>
                <Alert onClose={onClose} severity='success' sx={{width:'100%'}}>
                    Success
                </Alert>
        </Snackbar>
    </>
}
export default SuccessSnackbar