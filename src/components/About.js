import React from 'react'

const About = React.createClass({
    render(){
        return (
        <div className="section">
        <div className="img-about">
        <img  src="assets/img/nerd.jpg" />
        </div>
        <h2 className="title"> {this.props.title}</h2>
        <div className="text-about">
          <p> Hi there!my name is Kevin Mendez and I am a junior front end developer living
              in Oulu Finland. At the moment I have more knowledge on the front side, but at some
              point of my career I want to become a full stack developer. I have experience developing
              android apps and websites.
              Master degree student at University of Oulu during the day, coder at night!
            </p>
            
    </div>
    </div>

        )
    }

})
 

export default About 