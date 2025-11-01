function Card({ name, status, species, gender, image, origin,  }) {

    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <p>Origin: {origin}</p>
            <img src={image} alt={name} />
        </div>
    );
}

export default Card;