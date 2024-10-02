import { useState, useEffect, useCallback } from 'react'
import axios from "axios"
import { IoSearchCircleSharp } from "react-icons/io5";
import './App.css'

function App() {

  const [imgpoke, setImgpoke] = useState(null)
  const [namepoke, setNamepoke] = useState("")
  const [heightpoke, setHeigtpoke] = useState("")
  const [elementpoke, setElementpoke] = useState("")

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/5").then((response) => {
      const data = response.data
      setImgpoke(data.sprites.front_default)
      setNamepoke(data.name)
      setHeigtpoke(data.height)
      setElementpoke(data.types[0].type.name)
      console.log(data)
    })
  }, [])

  //  https://pokeapi.co/api/v2/pokemon/id:1


  return (
    <div className="container">
      <div className="contpoke">
        <div className="boxinput">
          <input type="text" placeholder='Filtrar pokemon' autoFocus />
          <IoSearchCircleSharp className='searchpoke' title='Buscar Pokemon'/>
        </div>

        {imgpoke &&
          <div className="boxpokemon">
            <div className="pokemondetails">
              <div className="boximgpoke">
                <img src={imgpoke} alt="Pokemon" />
              </div>

              <div className="details">
                <h1 className='namepoke'>
                  {namepoke}
                </h1>

                <div className='heightpoke'>
                  <p>Altura:</p>  
                  <p>
                  {heightpoke}
                  </p>
                </div>

                <p className='elementpoke'>
                  {elementpoke}
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default App
