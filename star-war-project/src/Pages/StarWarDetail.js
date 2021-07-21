import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToStarWarList } from '../routes/coordinator'
import styled from 'styled-components'
const Imagem = styled.img`
    height: 50vh;
    border-radius: 100%;
    
`
const Icone = styled.img`
    width: 5%;
    height: 10vh;
    border-radius: 100%;
`
const Body = styled.div`
    background-color: black;
    height: 100vh;
    color: white;
`
const Container = styled.div`
    text-align: center;
    border:1px solid white;
    background-color: white;
    color:black;
    margin-left: 30%;
    margin-right: 30%;
    padding: 2%;
    margin-top: 3%;
`
const Titulo = styled.h1`
    text-align: center;
`
const StarWarDetail = () =>{
    const history = useHistory()
    const params=useParams()
    const id = params.id
    const [character,setCharacter] = useState([])
    useEffect(()=>{
        axios.get(`${BASE_URL}/api/people/${id}`)
        .then((res)=>{
            setCharacter(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(character)
    return(
    <Body>
         <Icone onClick = {()=>goToStarWarList(history)} src='https://img1.gratispng.com/20180319/qfw/kisspng-creative-commons-license-creative-work-free-conten-back-arrow-5aaffdb7ab2e25.3214296815214831917012.jpg'/>
        <Titulo>Detalhes</Titulo>
        <Container>
        <Imagem src='https://toppng.com/uploads/preview/i-really-love-star-wars-xd-movies-games-and-anything-star-wars-personagens-desenho-11563062387mdjj1ksiid.png'/>
        <h4>Altura: {character.height} m</h4>
        <h4>Cor do Cabelo: {character.hair_color} </h4>
        <h4>Peso: {character.mass} Kg</h4>
        </Container>
        
    </Body>
        )
}
export default StarWarDetail