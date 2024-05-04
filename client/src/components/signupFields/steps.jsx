export default function Steps(props) {
    return (
        <div className="stepsContainer">
            <div className={props.number == 1 ? "step active" : "step"}></div>
            <div className={props.number == 2 ? "step active" : "step"}></div>
            <div className={props.number == 3 ? "step active" : "step"}></div>
            <div className={props.number == 4 ? "step active" : "step"}></div>
        </div>
    )
}