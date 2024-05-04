import { Container, Box } from "@mui/material"
import Steps from "./steps";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../../styles/success.css";

export default function Success() {


    return (
        <Container sx={{
            display: "flex", flexDirection: "column", justifyContent: "space-evenly",
            height: "100%"
        }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
                <Steps number={[1, 2, 3, 4]} />
                <p>4 of 4</p>
                <h2>You're in!</h2>
            </Container>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                <h4>Start learning now!</h4>
                <p>Your recommended study plan</p>
                <a
                    className="continue"
                    style={{ alignSelf: "auto", width: "10em" }}
                    // style={{ pointerEvents: !active.includes(true) || search == "" || searchError ? "none" : "" }}
                    href="/lessonplan/:id"
                // onClick={submitLearningPlan}
                >
                    Go to course <ArrowForwardIcon sx={{
                        height: "0.7em", transform: "translateY(-1px)"
                    }} />
                </a>
            </Container>

            <Container sx={{
                display: "flex", flexDirection: "column", gap: "0.5em"

            }}>
                <div className="levelOption">
                    <img src="/images/lessons.png" />
                    <div>
                        <h3>Lessons / Quizzes</h3>
                        <p>Relevant learning materials and courses.</p>
                    </div>
                </div>
                <div className="levelOption" >
                    <img src="/images/tutoring.png" />
                    <div>
                        <h3>Virtual Tutoring</h3>
                        <p>Receive personalized feedback</p>
                    </div>
                </div>
                <div className="levelOption" >
                    <img src="/images/community.png" />
                    <div>
                        <h3>Join a community of learners</h3>
                        <p>Discuss and ask questions.</p>
                    </div>
                </div>
                <Box sx={{
                    alignSelf: "flex-end", cursor: "pointer"
                }}>
                    <a href="/" style={{
                        display: "flex", textDecoration: "none", color: "#7DC9D3"
                    }}>
                        <p>Continue to Home</p>
                        <ArrowForwardIcon sx={{
                            height: "0.7em", transform: "translateY(-1px)"
                        }} />
                    </a>
                </Box>
            </Container>
        </Container>
    )
}