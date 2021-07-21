import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FilmsPage from '../Pages/FilmsPage'
import HomePage from '../Pages/HomePage'
import PlanetsPage from '../Pages/PlanetsPage'
import StarWarDetail from '../Pages/StarWarDetail'
import StarWarList from '../Pages/StarWarList'

const Router =()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/lista-star-war'>
                    <StarWarList/>
                </Route>
                <Route exact path='/films'>
                    <FilmsPage/>
                </Route>
                <Route exact path='/planets'>
                    <PlanetsPage/>
                </Route>
                <Route exact path='/detalhes-star-war/:id'>
                    <StarWarDetail/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router