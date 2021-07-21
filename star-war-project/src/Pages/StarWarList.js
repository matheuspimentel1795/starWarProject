import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { BASE_URL } from '../constants/urls'
import styled from 'styled-components'
import { useHistory } from 'react-router'
import { goToHomePage, goToStarWarDetails } from '../routes/coordinator'
import Header from '../components/Header/Header'

/* ----------------------------Estilização ----------------------------------*/
const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
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
const Imagem = styled.img`
    height: 30vh;
`
const Titulo = styled.h1`
    text-align: center;
    color: white;
`
const Body = styled.div`
    background-color: black;
`

const StarWarList = () =>{   
    const [filter,setFilter]=useState('')
    const [starWarDetails,setStarWarDetails] = useState([])
    const history = useHistory()
    const onChangeFilter=(event)=>{
        setFilter(event.target.value)
    }
    useEffect(()=>{
        axios.get(`${BASE_URL}/api/people/`)
        .then((res)=>{
            setStarWarDetails(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
   
    const orderElements = () =>{
        return starWarDetails
        .sort((a,b)=> filter==='a-z' ? a.name.localeCompare(b.name) : filter==='z-a'?
        b.name.localeCompare(a.name): '...' )
    }
    return(
    <Body>
        <Header  onChangeFilter={onChangeFilter} filter={filter}/>
        <Titulo >Lista de Star war</Titulo >
        <Container>
            
        {starWarDetails.map((x,index)=>{
            orderElements()
            const id = index+1
            return (
              
                    <Blocos key={index}>
                    <Imagem src='https://cdn.awsli.com.br/600x450/954/954937/produto/40816902/534ba55716.jpg'/>
                    <h4>Nome: {x.name}</h4>
                    <h4>Nascimento: {x.birth_year}</h4>
                    <button onClick={()=>goToStarWarDetails(history,id)}>Clique aqui para maiores detalhes sobre!</button>
                    </Blocos>
                
            )
        })}
        </Container>
    </Body>
        )
}
export default StarWarList