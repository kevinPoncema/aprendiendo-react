function Card({ name, status, species, gender, image, origin }) {

    return (
        <div className="bg-white rounded-lg shadow p-4 flex items-center space-x-4">
            <img src={image} alt={name} className="w-28 h-28 rounded-md object-cover flex-shrink-0" />
            <div className="flex-1">
                <h2 className="text-lg font-semibold">{name}</h2>
                <div className="mt-2 text-sm text-gray-700 space-y-1">
                    <p><span className="font-medium">Status:</span> {status}</p>
                    <p><span className="font-medium">Species:</span> {species}</p>
                    <p><span className="font-medium">Gender:</span> {gender}</p>
                    <p><span className="font-medium">Origin:</span> {origin}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;