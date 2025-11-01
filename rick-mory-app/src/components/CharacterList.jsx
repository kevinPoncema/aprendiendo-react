import React, { useEffect, useState } from 'react';
import Card from './Card';



function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(async () => {
        let data = await fetch('https://rickandmortyapi.com/api/character?page=' + page);
        if (!data.ok) return;
        let json = await data.json();
        setCharacters(json.results);
    }, [page]);
   
    const handleNextPage = () => {
        setPage(page + 1);
    };

    const handleBeforePage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <>
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {characters.map((char) => (
                    <Card
                        key={char.id}
                        name={char.name}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        image={char.image}
                        origin={char.origin.name}
                    />
                ))}
            </div>

            <div className="mt-6 flex justify-center space-x-4">
                <button className="px-4 py-2 bg-gray-200 rounded" onClick={handleBeforePage}>
                   Anterior
                </button>
                <button className="px-4 py-2 bg-gray-200 rounded" onClick={handleNextPage}>
                   Siguiente
                </button>
            </div>
        </div>
    </>
    );
}
export default CharacterList;