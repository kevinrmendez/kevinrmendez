import React from 'react'

const Intro  = React.createClass({
    render(){
    return(
    <div>
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
            <a className="btn" href="/portfolio"> Portfolio</a>
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