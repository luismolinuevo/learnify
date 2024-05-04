import { Container, Box } from "@mui/material"
import Steps from "./steps";
import SearchBar from "./searchBar";
import { useState, useEffect } from "react";


export default function Level() {
    const [search, setSearch] = useState("");
    const [searchError, setSearchError] = useState(false);

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

    let topics = "";

    function formatTopics() {
        let chosenTopics = sessionStorage.getItem("topics");
        let list = chosenTopics.split(" ");
        const lastTopic = list.pop();
        list.push("and " + lastTopic);
        topics = list.join(", ");
    }

    formatTopics();

    return (
        <Container sx={{
            display: "flex", flexDirection: "column", height: "100%",
            justifyContent: "space-around"
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
                <Steps number={[1,2]} />
                <p>2 of 4</p>
                <h2>Why are you learning {topics}?</h2>
                <SearchBar
                    search={search}
                    searchError={searchError}
                    searchInput={searchInput}
                    validateSearch={validateSearch}
                />
            </Box>
        </Container>
    )
}