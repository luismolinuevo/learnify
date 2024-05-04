import { Button } from "@mui/material";
import "../../styles/CommunityCardStyles.css";
import {useState} from 'react';

const buttonStyle = {backgroundColor: "#47B2C0", color: "white"}

export default function CommunityCard(props) {
    const {title = "WeData"} = props;
    const [hasJoined, setHasJoined] = useState(false);
    return (
        <div className="community-card">
            <div className="card-image"></div>
            <p className="card-title">{title}</p>
            <p className="card-context">People Are Talking About</p>
            <div className="button-container">
                <Button onClick={() => setHasJoined(!hasJoined)} style={buttonStyle}>Join</Button>
            </div>
        </div>
    )
}