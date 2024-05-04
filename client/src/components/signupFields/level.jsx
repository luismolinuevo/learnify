import { Container, Box } from "@mui/material"
import Steps from "./steps";
import SearchBar from "./searchBar";
import { useState, useEffect } from "react";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../../styles/level.css";

export default function Level() {
    const [search, setSearch] = useState("");
    const [searchError, setSearchError] = useState(false);
    const [active, setActive] = useState([false, false, false]);

    const reasons = [
        "To automate repetitive tasks", "For fun", "Build dynamic pages",
        "To analyze sales", "To develop marching learning models",
        "Build AI applications", "Create games and interactive experiences"
    ];

    function selectTopic(e) {
        let sentence = "";

        if (search == "") {
            sentence = e.target.innerText;
        } else {
            sentence = search + " " + e.target.innerText;
        };

        setSearch(sentence);
        setSearchError(false);
    };

    function searchInput(e) {
        setSearch(e.target.value);
        if (!search == "") {
            setSearchError(false);
        }
    };

    function validateSearch() {
        if (search == "") {
            setSearchError(true)
        } else {
            setSearchError(false);
        }
    };

    function selectActiveAndSet(number) {
        switch (number) {
            case 1:
                setActive([true, false, false]);
                sessionStorage.setItem("level", "Beginner");
                break;
            case 2:
                setActive([false, true, false]);
                sessionStorage.setItem("level", "Intermediate");
                break;
            case 3:
                setActive([false, false, true]);
                sessionStorage.setItem("level", "Advanced");
                break;
        };
    };

    let topics = "";

    function formatTopics() {
        let chosenTopics = sessionStorage.getItem("topics");
        let list = chosenTopics.split(" ");
        if (list.length == 0) {
            topics = "";
        };
        if (list.length == 1) {
            topics = " " + chosenTopics;
        };
        if (list.length > 1) {
            const lastTopic = list.pop();
            list.push("and " + lastTopic);
            topics = " " + list.join(", ");
        };
    };

    formatTopics();

    function setReasons() {
        sessionStorage.setItem("reasons", search);
    }

    return (
        <Container sx={{
            display: "flex", flexDirection: "column", height: "100%",
            justifyContent: "space-around"
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5em" }}>
                <Steps number={[1, 2]} />
                <p>2 of 4</p>
                <h2>Why are you learning{topics}?</h2>
                <SearchBar
                    search={search}
                    searchError={searchError}
                    searchInput={searchInput}
                    validateSearch={validateSearch}
                />
            </Box>

            <Container sx={{
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: "0.2em"
            }}>
                <Box>
                    {
                        reasons.slice(0, 3).map((reason, i) => {
                            return <button
                                onClick={selectTopic}
                                style={{ display: `${search.toLowerCase().includes(reason.toLowerCase()) ? "none" : ""}` }}
                                key={i}
                                className="topic">{reason}
                            </button>
                        })
                    }
                </Box>
                <Box>
                    {
                        reasons.slice(3, 5).map((reason, i) => {
                            return <button
                                onClick={selectTopic}
                                style={{ display: `${search.toLowerCase().includes(reason.toLowerCase()) || search.toLowerCase().includes("adobe xd") ? "none" : ""}` }}
                                key={i + 10}
                                className="topic">{reason}
                            </button>
                        })
                    }
                </Box>
                <Box>
                    {
                        reasons.slice(5).map((reason, i) => {
                            return <button
                                onClick={selectTopic}
                                style={{ display: `${search.toLowerCase().includes(reason.toLowerCase()) ? "none" : ""}` }}
                                key={i + 20}
                                className="topic">{reason}
                            </button>
                        })
                    }
                </Box>
            </Container>

            <Container sx={{ display: "flex", flexDirection: "column", gap: "0.5em" 

            }}>
                <h2>What is your level?</h2>
                <div onClick={() => selectActiveAndSet(1)} className={active[0] ? "levelOption active" : "levelOption"}>
                    <BusinessCenterIcon className="levelIcon" />
                    <div>
                        <h3>Beginner</h3>
                        <p>I am new to{topics}</p>
                    </div>
                </div>
                <div onClick={() => selectActiveAndSet(2)} className={active[1] ? "levelOption active" : "levelOption"}>
                    <BeenhereIcon className="levelIcon" />
                    <div>
                        <h3>Intermediate</h3>
                        <p>I have some knowledge of{topics}</p>
                    </div>
                </div>
                <div onClick={() => selectActiveAndSet(3)} className={active[2] ? "levelOption active" : "levelOption"}>
                    <EngineeringIcon className="levelIcon" />
                    <div>
                        <h3>Advanced</h3>
                        <p>I am a pro, but need to review some{topics} concepts</p>
                    </div>
                </div>
                <a
                    className="continue"
                    style={{ pointerEvents: !active.includes(true) || search == "" || searchError ? "none" : "" }}
                    href="/auth/signup/daily"
                    onClick={setReasons}>
                    Continue <ArrowForwardIcon sx={{
                        height: "0.7em", transform: "translateY(-1px)"
                    }} />
                </a>
            </Container>
        </Container>
    )
}