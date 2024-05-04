export default function Steps(props) {
    return (
        <div className="stepsContainer">
            <div className={props.number.includes(1) ? "step active" : "step"}></div>
            <div className={props.number.includes(2) ? "step active" : "step"}></div>
            <div className={props.number.includes(3) ? "step active" : "step"}></div>
            <div className={props.number.includes(4) ? "step active" : "step"}></div>
        </div>
    )
}