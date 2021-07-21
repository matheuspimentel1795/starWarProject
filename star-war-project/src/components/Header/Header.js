import React from 'react'
import { useHistory } from 'react-router-dom'
import { goToHomePage } from '../../routes/coordinator'
import './style.css'
const Header = (props) =>{
    
    const history=useHistory()
    return(
        <div className='header'>
            <img className='goBack' onClick = {()=>goToHomePage(history)} src='https://img1.gratispng.com/20180319/qfw/kisspng-creative-commons-license-creative-work-free-conten-back-arrow-5aaffdb7ab2e25.3214296815214831917012.jpg'/>
            <div className='filtro'>
            <p>Filtrar de:</p>
        <select value={props.filter} onChange={props.onChangeFilter}>
            <option value={'...'}>...</option>
            <option value={'a-z'}>A-Z</option>
            <option value={'z-a'}>Z-A</option>
        </select>
            </div>
           
        </div>
    )
}
export default Header