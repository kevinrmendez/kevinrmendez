import React from 'react'
import ReactDOM from 'react-dom'
import {Nav} from './Nav'
import {Contact} from './Contact'
import About from './About'
import Skills from './Skills'
import Awards from './Awards'
import Intro from './Intro'
import Portfolio from './Portfolio'
import ScrollableAnchor from 'react-scrollable-anchor'
import Clients from './Clients'
import Footer from './Footer'
import { configureAnchors } from 'react-scrollable-anchor'
const App = React.createClass({
    getInitialState(){
        return null
    },componentWillMount(){
    configureAnchors({offset: -100, scrollDuration: 500})
    },
    render(){
        return(
        <div>
            <Nav />
            {this.props.children}
            <Footer />
            {/*
            <Intro />
             <ScrollableAnchor id={'about'}>
                <About title="About" />
            </ScrollableAnchor>
             <ScrollableAnchor id={'skills'}>
                <Skills title="Skills" />
            </ScrollableAnchor>
             <ScrollableAnchor id={'awards'}>
                <Awards title="Awards" />
            </ScrollableAnchor>
            <ScrollableAnchor id={'contact'}>
            <Contact title="Contact"/>
            </ScrollableAnchor>
             <Clients title="Clients" />
            */}
        </div>
        )
    },

    })

    export default App