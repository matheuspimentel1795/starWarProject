import React from 'react'
import { useHistory } from 'react-router'
import { goToFilms, goToPlanets, goToStarWarList } from '../routes/coordinator'
import styled from 'styled-components'
import './styled.css'
const Fundo = styled.div`
    background-color: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const Image = styled.img`
    width: 100%;
    height: 100vh;
`
const HomePage = () =>{
    const history = useHistory()
    return(
    <Fundo>
        <Image src='https://www.xtrafondos.com/wallpapers/star-wars-logo-3654.jpg'/>
        <div className='dividir-botoes'>
        <button onClick={()=>goToStarWarList(history)} >People</button>
        <button onClick={()=>goToPlanets(history)} >Planets</button>
        <button onClick={()=>goToFilms(history)}>Films</button>
        </div>
        
    </Fundo>
        )
}
export default HomePage