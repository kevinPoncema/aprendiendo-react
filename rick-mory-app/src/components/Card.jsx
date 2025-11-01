function Card({ name, status, species, gender, image, origin, location, firstSeen }) {
    // Determina el color del estado (verde para "Alive")
    const statusColor = status === 'Alive' ? 'text-green-400' : 'text-gray-400';
    const statusDot = status === 'Alive' ? 'bg-green-400' : 'bg-red-400';

    return (
        // Contenedor principal con sombra y fondo oscuro
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition duration-300 hover:shadow-cyan-500/50">
            <div className="flex h-full">
                <div className="w-2/5 md:w-5/12 flex-shrink-0">
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-full h-full object-cover rounded-l-xl" 
                        loading="lazy"
                    />
                </div>
                
                <div className="w-3/5 md:w-7/12 p-3 sm:p-4 flex flex-col justify-center text-white">
                    <h2 className="text-xl sm:text-2xl font-extrabold mb-1 leading-tight">
                        {name}
                    </h2>
                    <p className="text-sm sm:text-base mb-3 flex items-center">
                        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${statusDot}`}></span>
                        <span className={`font-semibold ${statusColor}`}>{status}</span> 
                        <span className="text-gray-400 ml-2 text-sm">- {species}</span>
                    </p>
                    
                    <div className="space-y-2 text-sm">
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                                Última ubicación conocida:
                            </p>
                            <p className="font-semibold text-base leading-tight">
                                {location}
                            </p>
                        </div>
                
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                                Género:
                            </p>
                            <p className="font-semibold text-base leading-tight">
                                {gender}
                            </p>
                        </div>
                        
                        <div>
                            <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                                Origen:
                            </p>
                            <p className="font-semibold text-base leading-tight">
                                {origin}
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Card;