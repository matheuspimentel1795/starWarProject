import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToHomePage } from '../routes/coordinator'
import { useHistory } from 'react-router-dom'
import Header from '../components/Header/Header'
import styled from 'styled-components'

/* ----------------------------Estilização ----------------------------------*/
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2%;
    row-gap: 2%;
    margin: 1%;
`
const Imagem = styled.img`
    height: 40vh;
`
const Blocos = styled.div`
    border: 1px solid black;
    margin: 1%;
    padding: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`
const Body = styled.div`
    background-color: black;
    height: 250vh;
`
const Titulo = styled.h1`
    text-align: center;
    color: white;
`
const PlanetsPage = () =>{
    const [filter,setFilter]=useState('')
    const [planets,setPlanets]=useState([])
    
    const onChangeFilter=(event)=>{
        setFilter(event.target.value)
    }

    useEffect(()=>{
        axios.get(`${BASE_URL}/api/planets/`)
        .then((res)=>{
            setPlanets(res.data.results)
            console.log(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    const orderElements = () =>{
        return planets
        .sort((a,b)=> filter==='a-z' ? a.name.localeCompare(b.name) : filter==='z-a'?
        b.name.localeCompare(a.name): '...' )
    }
    return(
    <Body>
        <Header  onChangeFilter={onChangeFilter} filter={filter}/>
        <Titulo>Planetas</Titulo>
        <Container>
        {planets.map((x,index)=>{
            orderElements()
            return(
                <Blocos key={index} >
                    <Imagem src='https://pm1.narvii.com/7184/44a2eb8cba2bcbc8b94ded2cf7e23035b5bb6b84r1-480-360v2_00.jpg'/>
                    <h4>Planeta : {x.name}</h4>
                    <h4>Clima: {x.climate}</h4>
                    <h4>População: {x.population}</h4>
                </Blocos>

            )
        })}
        </Container>
    </Body>
        )
}
export default PlanetsPage