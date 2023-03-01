import React, { useEffect, useState } from 'react'

const FetchExample = () => {


    const [pokeList, setPokeList] = useState(null)

    useEffect(() => {
        fetch('././data/data.json')
        .then(response => response.json())
        .then(dataApi => setPokeList(dataApi.results))



    }, [])
    


  return (
    <div style={{backgroundColor: '#ccc'}}>
    <h1 style={{color: '#333'}}>Pokemons</h1>
    <ul>
        {
            pokeList.map(poke => {
                <li>{poke.name}</li>
            })
        }
    </ul>
    </div>



  )
}

export default FetchExample