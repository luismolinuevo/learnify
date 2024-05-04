import { Container, Box } from "@mui/material"
import Steps from "./steps";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Success() {


    return (
        <Container sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly",
                        height: "100%"
        }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
                <Steps number={[1, 2, 3, 4]} />
                <p>4 of 4</p>
                <h2>You're in!</h2>
            </Container>
            <Container sx={{ display: "flex", flexDirection: "column",}}>
                <h4>Start learning now!</h4>
                <p>Your recommended study plan</p>
                <a
                    className="continue"
                    style={{alignSelf: "auto"}}
                    // style={{ pointerEvents: !active.includes(true) || search == "" || searchError ? "none" : "" }}
                    href="/auth/signup/success"
                    // onClick={submitLearningPlan}
                    >
                    Go to course <ArrowForwardIcon sx={{
                        height: "0.7em", transform: "translateY(-1px)"
                    }} />
                </a>
            </Container>
        </Container>
    )
}