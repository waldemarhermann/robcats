const Card = (props) => {
    return (    
        <div className="bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/test${props.id}?set=set4`} alt="catphoto" />
            <div>
                <h3>{props.name}</h3>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card;