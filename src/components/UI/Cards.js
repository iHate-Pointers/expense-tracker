import "./Card.css";
//It will return div or 
const Cards = (props) => {
    const classes = "Card " + props.className;
    return (
        <div className = {classes}>{props.children}</div>
    )
}

export default Cards;