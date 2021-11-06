import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Carta from '../pages/Carta'
import Cart from '../pages/Cart'
import Quienes from '../pages/Quienes'
import Reservas from '../pages/Reservas'
import Servicios from '../pages/Servicios'
import Login from '../pages/Login'
import Register from '../pages/RegistroU'



const Routes = () => {
    return (
        <switch>
            <Route path='/Home' exact component={Home}/>
            <Route path='/Carta'  component={Carta}/>
            <Route path='/Quienes'  component={Quienes}/>
            <Route path='/Reservas'  component={Reservas}/>
            <Route path='/Servicios'  component={Servicios}/>
            <Route path='/Cart'  component={Cart}/>
            <Route path='/Login'  component={Login}/>
            <Route path='/Registro'  component={Register}/>
        </switch>
    )
}

export default Routes

