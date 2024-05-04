import {
    Container, TextField, SvgIcon,
    InputAdornment, Box
} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../../styles/learn.css";
import Steps from "./steps";
import { useState } from "react";
import SearchBar from "./searchBar";

export default function Learn() {
    const [search, setSearch] = useState("");
    const [searchError, setSearchError] = useState(false);


    const topics = [
        "JavaScript", "Python", "NMAP", "Jira", "SQL",
        "React.js", "Figma", "AWS", "Adobe XD",
        "Figma", "Swift", "R", "HTML", "openVAS",
        "NumPy", "C#", "NLP", "Java"
    ];

    function searchInput(e) {
        setSearch(e.target.value);
        if (!search == "") {
            setSearchError(false);
        }
    }

    function validateSearch() {
        if (search == "") {
            setSearchError(true)
        } else {
            setSearchError(false);
        }
    }

    function selectTopic(e) {
        let sentence = "";

        if (search == "") {
            sentence = e.target.innerText;
        } else {
            sentence = search + " " + e.target.innerText;
        };

        setSearch(sentence);
        setSearchError(false);
    }

    return (
        <Container sx={{
            display: "flex", flexDirection: "column", height: "100%",
            justifyContent: "space-around"
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                <Steps number="1" />
                <p>1 of 4</p>
                <p>Tell us a bit about yourself!</p>
                <h3>What would you like to learn?</h3>
                <SearchBar
                    search={search}
                    searchError={searchError}
                    searchInput={searchInput}
                    validateSearch={validateSearch}
                />
            </Box>
            <Container sx={{
                display: "flex", flexDirection: "column", alignItems: "center",
                gap: "0.3em"
            }}>
                <Box>
                    {
                        topics.slice(0, 5).map((topic, i) => {
                            return <button
                                onClick={selectTopic}
                                style={{ display: `${search.toLowerCase().split(" ").includes(topic.toLowerCase()) ? "none" : ""}` }}
                                key={i}
                                className="topic">{topic}
                            </button>
                        })
                    }
                </Box>
                <Box>
                    {
                        topics.slice(5, 9).map((topic, i) => {
                            return <button
                                onClick={selectTopic}
                                style={{ display: `${search.toLowerCase().split(" ").includes(topic.toLowerCase()) || search.toLowerCase().includes("adobe xd") ? "none" : ""}` }}
                                key={i + 10}
                                className="topic">{topic}
                            </button>
                        })
                    }
                </Box>
                <Box>
                    {
                        topics.slice(9, 14).map((topic, i) => {
                            return <button
                                onClick={selectTopic}
                                style={{ display: `${search.toLowerCase().split(" ").includes(topic.toLowerCase()) ? "none" : ""}` }}
                                key={i + 20}
                                className="topic">{topic}
                            </button>
                        })
                    }
                </Box>
                <Box>
                    {
                        topics.slice(14).map((topic, i) => {
                            return <button
                                onClick={selectTopic}
                                style={{ display: `${search.toLowerCase().split(" ").includes(topic.toLowerCase()) ? "none" : ""}` }}
                                key={i + 30}
                                className="topic">{topic}
                            </button>
                        })
                    }
                </Box>
            </Container>
            <a
                className="continue"
                style={{ pointerEvents: search == "" || searchError ? "none" : "" }}
                href="/auth/signup/level"
                onClick={validateSearch}>
                Continue <ArrowForwardIcon sx={{
                    height: "0.7em", transform: "translateY(-1px)"
                }} />
            </a>
        </Container>
    )
}