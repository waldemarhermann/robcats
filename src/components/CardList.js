import Card from './Card';

const CardList = (props) => {
    return (
        <div>
            {
                props.catCats.map((userCats, i) => {
                    return (
                        <Card 
                            key={props.catCats[i].name}
                            id={props.catCats[i].id}
                            name={props.catCats[i].name}
                            email={props.catCats[i].email}
                        />
                    )
                })
            }
        </div>
    )
}

export default CardList;