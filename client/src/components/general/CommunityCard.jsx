import { Button } from "@mui/material";
import "../../styles/CommunityCardStyles.css";
import { useState } from 'react';
import EastIcon from "@mui/icons-material/East";

const buttonStyle = { backgroundColor: "#47B2C0", color: "white" }

export default function CommunityCard(props) {
    const [hasJoined, setHasJoined] = useState(false);
    return (
        <div className="community-card">
            <div className="card-image-container"><img src="/images/communitycardicon.png" alt="" className="card-image" /></div>
            <p className="card-title">{props.title}</p>
            <div style={{ display: "flex" }} className="card-context">
                <p style={{fontSize: "0.8em"}}>People are talking about</p>
                <EastIcon />
            </div>
            <div className="button-container">
                <Button size="small" onClick={() => setHasJoined(!hasJoined)} style={buttonStyle}>Join</Button>
            </div>
            <img src="/images/communitycardavatar.png" alt="" className="community-avatars" />
        </div>
    )
}