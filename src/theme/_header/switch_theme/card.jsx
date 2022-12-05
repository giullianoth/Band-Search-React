const Card = (props) => {

    return (
        <div className="card">
            <div className="card_img" style={{ backgroundImage: `url(${props.image})` }}></div>
        </div>
    );
}

export default Card;