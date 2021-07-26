import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header/Header'
import { BASE_URL } from '../constants/urls'
import styled from 'styled-components'
const Body = styled.div`
    background-color: black;
    color: white;
    height:100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Container = styled.div`
    border: 1px solid white;
    width: 80%;
    margin: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2%;
`
const Texto = styled.h2`
    text-align: center;
    background-color: black;
    color: white;
`

const VehiclesPage = () =>{
    const [vehicles,setVehicles]=useState([])
    const [filter,setFilter] = useState('')
    const onChangeFilter = (event) =>{
        setFilter(event.target.value)
    }
    const orderElements = () =>{
        return vehicles 
        .sort((a,b)=> filter==='a-z' ? a.name.localeCompare(b.name): filter==='z-a' ? b.name.localeCompare(a.nome): '...')
    }
    useEffect(()=>{
        axios.get(`${BASE_URL}/api/vehicles`)
        .then((res)=>{
            setVehicles(res.data.results)
            console.log(vehicles)
        })
    },[])
    return(
        <div>
            <Header onChangeFilter={onChangeFilter} filter={filter}/>
            <Texto>VeÍculos</Texto>
            <Body>
            {vehicles.map((x)=>{
                orderElements()
                return( 
                    <Container>
                        <h2>{x.name}</h2>
                        <h2>{x.model}</h2>
                        </Container>
                )
            })}
              </Body>
        </div>
    )
}
export default VehiclesPage