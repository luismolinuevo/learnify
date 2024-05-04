import {
    Container, TextField, SvgIcon,
    InputAdornment, Box
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../../styles/learn.css";
import Steps from "./steps";



export default function Learn() {

    return (
        <Container sx={{
            display: "flex", flexDirection: "column", height: "100%",
            justifyContent: "space-around"
        }}>
            <Box sx={{display: "flex", flexDirection: "column", gap: "1em"}}>
                <Steps />
                <p>1 of 4</p>
                <p>Tell us a bit about yourself!</p>
                <h3>What would you like to learn?</h3>
                <TextField
                    size="small"
                    sx={{ width: "70%" }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SvgIcon>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7142 13.7142L11.4285 11.4285" stroke="#171A1F" stroke-width="1.37143" stroke-miterlimit="10" stroke-linecap="square" />
                                        <path d="M6.85707 11.4285C9.3818 11.4285 11.4285 9.3818 11.4285 6.85707C11.4285 4.33234 9.3818 2.28564 6.85707 2.28564C4.33234 2.28564 2.28564 4.33234 2.28564 6.85707C2.28564 9.3818 4.33234 11.4285 6.85707 11.4285Z" stroke="#171A1F" stroke-width="1.37143" stroke-miterlimit="10" stroke-linecap="square" />
                                        <path d="M4.57153 6.85725C4.57153 6.25104 4.81235 5.66966 5.241 5.241C5.66966 4.81235 6.25104 4.57153 6.85725 4.57153" stroke="#171A1F" stroke-width="1.37143" stroke-miterlimit="10" />
                                    </svg>
                                </SvgIcon>
                            </InputAdornment>
                        )
                    }}
                />
            </Box>
            <div>Bubbles</div>
            <button className="continue">
                Continue <ArrowForwardIcon sx={{
                    height: "0.7em", transform: "translateY(-1px)"
                }} />
            </button>
        </Container>
    )
}