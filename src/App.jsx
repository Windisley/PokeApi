import { useState, useEffect, useCallback } from 'react'
import axios from "axios"
import { IoSearchCircleSharp } from "react-icons/io5";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import './App.css'

function App() {

  const [imgpoke, setImgpoke] = useState(null)
  const [namepoke, setNamepoke] = useState()
  const [heightpoke, setHeigtpoke] = useState("")
  const [elementpoke, setElementpoke] = useState("")
  const [idpoke, setIdpoke] = useState(1)
  const [valueinput, setValueinput] = useState(1)

  
  function increment(){
    setIdpoke(id=> Math.min(id+=1, 300))
   }

   function decrement(){
    setIdpoke(id=> Math.max(id-=1, 1))
   
   }


  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${idpoke}`).then((response) => {
      const data = response.data
      setImgpoke(data.sprites.front_default)
      setNamepoke(data.name)
      setHeigtpoke(data.height)
      setElementpoke(data.types[0].type.name)
      console.log(data)
    })
  }, [idpoke])

  //  https://pokeapi.co/api/v2/pokemon/id:1
  
  function changevalue(value){
    setValueinput(parseInt(value.target.value))

  }

  console.log("input" + valueinput)
  console.log("id"+ idpoke)
  function searchpoke(){
    setIdpoke(valueinput)
    
  }
  
  return (
    <div className="container">
      <div className="contpoke">
        <div className="boxinput">
          <input type="number" placeholder='Informe o id do pokemon' onChange={changevalue} autoFocus />
          <IoSearchCircleSharp className='searchpoke' title='Buscar Pokemon' onClick={searchpoke}/>
        </div>

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
                {elementpoke }
              </p>
            </div>
           <div className="arrows">
              <div  onClick={decrement}>
              <FaArrowAltCircleLeft className='arrow'/>
              </div>
              <div  onClick={increment}>
              <FaArrowAltCircleRight className='arrow'/>
              </div>
           </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default App
