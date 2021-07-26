import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import HomePage from './HomePage'
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../routes/coordinator'
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
    height: 30vh;
`
const Blocos = styled.div`
    border: 1px solid black;
    margin: 2%;
    padding: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
`
const Body = styled.div`
    background-color: black;
    height: 110vh;
`
const Titulo = styled.h1`
    text-align: center;
    color: white;
`
const FilmsPage = () =>{
    const [filter,setFilter]=useState('')
    const [films,setFilms]=useState([])

    const onChangeFilter=(event)=>{
        setFilter(event.target.value)
    }

    useEffect(()=>{
        axios.get(`${BASE_URL}/api/films/`)
        .then((res)=>{
            setFilms(res.data.results)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    console.log(films.sort(),'sort')
    const orderElements = () =>{
        return films
        .sort((a,b)=> filter==='a-z' ? a.title.localeCompare(b.title) : filter==='z-a'?
        b.title.localeCompare(a.title): '...' )
    }
    console.log(films)
    return(
    <Body>
        <Header  onChangeFilter={onChangeFilter} filter={filter}/> 
        <Titulo>Filmes</Titulo>
        <Container>
        {films.map((x)=>{
            orderElements()
            return (
                <Blocos>
                    <Imagem src='https://thedisneyblog.com/wp-content/uploads/2018/02/star-wars-on-tv-unsplash.jpg'/>
                    <h4>Nome do filme: {x.title}</h4>
                    <h4>Diretor: {x.director}</h4>
                </Blocos>
            )
        })}
        </Container>
    </Body>
        )
}
export default FilmsPage