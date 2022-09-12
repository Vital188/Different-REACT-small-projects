
const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];
function Sortas () {

    return (
        dogs.sort((a,b) => a.length - b.length)
    )
}

export default Sortas;