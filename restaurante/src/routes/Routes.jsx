import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Carta from '../pages/Carta'
import Cart from '../pages/Cart'
import Quienes from '../pages/Quienes'
import Reservas from '../pages/Reservas'
import Servicios from '../pages/Servicios'


const Routes = () => {
    return (
        <switch>
            <Route path='/' exact component={Home}/>
            <Route path='/Carta'  component={Carta}/>
            <Route path='/Quienes'  component={Quienes}/>
            <Route path='/Reservas'  component={Reservas}/>
            <Route path='/Servicios'  component={Servicios}/>
            <Route path='/Cart'  component={Cart}/>
        </switch>
    )
}

export default Routes

