

export const goToStarWarList = (history) =>{
    history.push('/lista-star-war')
}

export const goToStarWarDetails = (history,id) =>{
    history.push(`/detalhes-star-war/${id}`)
}

export const goToHomePage = (history) =>{
    history.push('/')
}

export const goToFilms = (history) =>{
    history.push('/films')
}
export const goToPlanets = (history) =>{
    history.push('/planets')
}
export const goToVehicles = (history)=>{
    history.push('/vehiclesPage')
}