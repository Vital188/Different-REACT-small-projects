function Base ({twocolors}) {

    return (
        <>
        <h1 style={{
            color: twocolors > 1 ? 'red' : 'blue'
        }}>Bebrai ir zebros</h1>
        </>
    )
}

export default Base