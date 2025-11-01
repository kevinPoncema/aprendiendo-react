import React, { useEffect, useState } from 'react';
import Card from './Card';



function CharacterList() {
  const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [info, setInfo] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        let cancelled = false;
        async function fetchCharacters() {
            setCargando(true);
            try {
                const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
                if (!res.ok) {
                    setCharacters([]);
                    setInfo({});
                    throw new Error('No se encontraron datos para la página.');
                }

                const json = await res.json();
                if (!cancelled) {
                    setCharacters(json.results);
                    setInfo(json.info);
                }
            } catch (err) {
                console.error('Failed fetching characters:', err);
                if (!cancelled) {
                    setCharacters([]);
                    setInfo({});
                }
            } finally {
                if (!cancelled) setCargando(false);
            }
        }
        fetchCharacters();
        return () => {
            cancelled = true;
        };
    }, [page]);
   
    const handleNextPage = () => {
        if (info.next) {
            setPage(prevPage => prevPage + 1);
        }
    };

    const handleBeforePage = () => {
        if (info.prev) {
            setPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 font-sans">
            
            {/* 1. PAGINACIÓN FIJA (Sticky Header) */}
            <div className="sticky top-0 z-50 bg-gray-900 border-b border-gray-700 py-3 shadow-lg">
                <div className="max-w-7xl mx-auto flex justify-center items-center space-x-4">
                    
                    <button 
                        className={`px-6 py-2 rounded-full font-bold transition duration-300 ${info.prev ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-md' : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`} 
                        onClick={handleBeforePage}
                        disabled={!info.prev || cargando}>
                        Anterior
                    </button>
                    
                    <p className="px-4 py-2 text-white font-mono text-lg">Página {page}</p>
                    <button 
                        className={`px-6 py-2 rounded-full font-bold transition duration-300 ${info.next ? 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-md' : 'bg-gray-700 text-gray-500 cursor-not-allowed'}`} 
                        onClick={handleNextPage}
                        disabled={!info.next || cargando}>
                        Siguiente
                    </button>
                    
                </div>
            </div>

            <div className="container mx-auto p-4 pt-8 max-w-7xl">
                <h1 className="text-4xl font-bold text-center text-white mb-8">
                    Rick and Morty Explorer
                </h1>
                  
                {cargando && <p className="text-center text-cyan-400 text-xl mt-12">Cargando personajes...</p>}
                
                {(!cargando && characters.length === 0) && (
                    <p className="text-center text-red-400 text-xl mt-12">
                        No se encontraron personajes para esta página.
                    </p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {characters.map((char) => (
                        <Card
                            key={char.id}
                            name={char.name}
                            status={char.status}
                            species={char.species}
                            gender={char.gender}
                            image={char.image}
                            origin={char.origin.name}
                            location={char.location.name} // Añadido: Última ubicación
                            firstSeen={char.episode[0]} // Simplificación: Solo el primer episodio
                        />
                    ))}
                </div>
                
                {/* Espacio para que la paginación no tape el último elemento */}
                <div className="h-20"></div> 
            </div>
        </div>
    );
}
export default CharacterList;