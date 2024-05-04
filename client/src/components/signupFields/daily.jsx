import { Container, Box, Input } from "@mui/material"
import Steps from "./steps";
import Slider from '@mui/material/Slider';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../../styles/daily.css";
import { useState } from "react";
import { createLearningPlan } from "../../lib/learningplan";

export default function Daily() {
    const [activeStyles, setActiveStyles] = useState([]);

    const marks = [
        {
            value: 10,
            label: "10min/day"
        },
        {
            value: 30,
            label: ""
        },
        {
            value: 60,
            label: ""
        },
        {
            value: 90,
            label: ""
        },
        {
            value: 120,
            label: "2h/day"
        }
    ];

    const learningStyles = [
        "Logic", "Interaction", "Reading", "Listening", "Hands on projects",
        "Group setting", "With illustrations", "Concepts", "Real world experience", "Step-by-step"
    ];

    function selectActiveStyleAndSet(e) {
        let style = e.target.innerText;
        let styles;
        if (activeStyles.includes(style)) {
            styles = activeStyles.filter(activeStyle => activeStyle !== style)
        } else {
            if (activeStyles.length < 5) {
                styles = [...activeStyles, style];
            } else {
                styles = activeStyles;
            };
        };
        setActiveStyles(styles);
        sessionStorage.setItem("styles", styles);
        console.log(activeStyles);
    };

    function setDailyGoals(e) {
        sessionStorage.setItem("daily", e.target.value);
    };

    function setDeadLine(e) {
        sessionStorage.setItem("deadline", e.target.value);
    };

    async function submitLearningPlan() {
        console.log("test")
        const plan = {
            skill: sessionStorage.getItem("topics"),
            skillLevel: sessionStorage.getItem("level"),
            dailyHours: (sessionStorage.getItem("daily") / 60).toString(),
            deadline: sessionStorage.getItem("deadline"),
            whyLearn: sessionStorage.getItem("reasons"),
            learningStyle: sessionStorage.getItem("styles").split(",")
        };

        const data = await createLearningPlan(plan);
        console.log(data)
        console.log("test2")
    };

    return (
        <Container sx={{
            display: "flex", flexDirection: "column", height: "100%",
            justifyContent: "space-evenly"
        }}>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                <Steps number={[1, 2, 3]} />
                <p>3 of 4</p>
                <h2>What is your daily learning goal?</h2>
                <Slider
                    sx={{ width: "70%", color: "#47B2C0", marginLeft: "2em" }}
                    marks={marks}
                    step={null}
                    valueLabelDisplay="auto"
                    min={10}
                    max={120}
                    defaultValue={60}
                    onChange={setDailyGoals}
                />
            </Container>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
                <h2>Set a deadline</h2>
                <Input onChange={setDeadLine} aria-label="Date" type="date" sx={{ width: "60%", color: "#47B2C0" }} />
            </Container>
            <Container sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
                <h2>How do you prefer learning a new topic?</h2>
                <p>Select up to 5 learning styles</p>
                <Box sx={{ display: "flex", justifyContent: "center", gap: "0.2em" }}>
                    {
                        learningStyles.slice(0, 6).map((style, i) => {
                            return (
                                <div
                                    onClick={selectActiveStyleAndSet}
                                    key={i}
                                    className={activeStyles.includes(style) ? "learningStyle active" : "learningStyle"}
                                >
                                    {style}
                                </div>
                            )
                        })
                    }
                </Box>
                <Box sx={{ display: "flex", justifyContent: "center", gap: "0.2em" }}>
                    {
                        learningStyles.slice(6).map((style, i) => {
                            return (
                                <div
                                    onClick={selectActiveStyleAndSet}
                                    key={i + 10}
                                    className={activeStyles.includes(style) ? "learningStyle active" : "learningStyle"}
                                >
                                    {style}
                                </div>
                            )
                        })
                    }
                </Box>
                <a
                    className="continue"
                    // style={{ pointerEvents: !active.includes(true) || search == "" || searchError ? "none" : "" }}
                    href="/auth/signup/success"
                    // onClick={submitLearningPlan}
                    >
                    Continue <ArrowForwardIcon sx={{
                        height: "0.7em", transform: "translateY(-1px)"
                    }} />
                </a>
            </Container>
        </Container>
    )
}