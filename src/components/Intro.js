import React from 'react'

const Intro  = React.createClass({
    render(){
    return(
    <div className="app">
        <h2 className="title">{this.props.title}</h2>
        <div className="header">
            <div className ="intro-header">
            <h3>Kevin Mendez</h3>
            <h3>Frontend developer </h3>
            </div>
            <div className="sub-text">
            <p> Freelance web developer based in Oulu, Finland</p>
            <p> Experienced developing Wordpress sites </p>
            </div>
            <a className="btn btn-intro" href="/portfolio"> Portfolio</a>
            <a className="btn btn-intro" href="static/cv-mendez-2017.pdf" download="cv-mendez.pdf"> CV</a>
        </div>
        <div className="box">
            <p>name</p>
            <p>date</p>
        </div>
        <audio src="assets/audio/raindrops.mid"></audio>
    </div>
    )
    }
})
export default Intro