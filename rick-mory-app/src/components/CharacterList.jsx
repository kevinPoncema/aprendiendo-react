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
        <div className="character-list">
            {characters.map((char) => (
                <Card
                    key={char.id}
                    name={char.name}
                    status={char.status}
                    species={char.species}
                    image={char.image}
                    origin={char.origin.name}
                />
            ))}
        </div>

        <div>
            <button onClick={handleNextPage}>
               +
            </button>
            <button onClick={handleBeforePage}>
               -
            </button>
        </div>
    </>
    );
}
export default CharacterList;