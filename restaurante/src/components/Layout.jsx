import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'

import Header from './Header.jsx'
import Footer from './Footer'
import Routes from '../routes/Routes'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header{...props} />
                    <div className="container">
                        
                        <div className="main">
                            <Routes /><div className="container">{props.children}</div>
                        </div>
                    </div>
                    <Footer />

                </div>
            )} />

        </BrowserRouter>
    )
}

export default Layout
