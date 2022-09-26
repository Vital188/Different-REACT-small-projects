function Single ({item}) {

    

    return (
        <ul className="list">
        <li >Country: {item.name}</li>
        <li > Region: {item.region} </li>
        <li > Area: {item.area}</li>
        </ul>
    )
}

export default Single