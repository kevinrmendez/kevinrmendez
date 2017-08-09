import React from 'react'
import {Link} from 'react-router'
import '../scss/style.scss'

export const Nav = React.createClass({

    render(){
        return(
    <nav>
        <Link to ='/'>Home</Link>
        <Link to='/about'>About </Link>
        <Link to='/skills'>Skills </Link>
        <Link to='/clients'>Clients </Link>
        <Link to="/contact">Contact </Link>
    </nav>
        )
    }
    })


