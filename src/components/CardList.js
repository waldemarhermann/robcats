import Card from './Card';

const CardList = ({cats}) => {

    const arrayCards = cats.map((userCat, i) => {
        return (
            <Card
                key={cats[i].name}
                id={cats[i].id}
                name={cats[i].name}
                email={cats[i].email}
            />
        )
    })

    return (
        <div>
            {arrayCards}
        </div>
    )
}

export default CardList;