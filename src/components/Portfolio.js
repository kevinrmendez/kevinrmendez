import React from 'react'

const Portfolio = React.createClass({
    render(){
        return(
    <div>
        <h2 className="title"> {this.props.title}</h2>
    <div className="section portfolio group">
        <div className="col  ">
        <h1> treenataanko.store</h1>
        <a href="https://treenataanko.store"><img src="assets/img/treenataanko_desktop.PNG" alt="treenataanko desktop design"/></a>
          <p className="project-description"> 
              Treenataanko.fi is a personal training company from helsinki. It was
              required to develop an e-commerce site where their services could be 
              purchased from. This site was developed using wordpress and woocommerce plugin
            </p>
        </div>
         <div className="col ">
        <h1> unitour</h1>
        <a href="http://unitour.000webhostapp.com"><img src="assets/img/unitour_desktop.PNG" alt="unitour desktop design"/></a>
          <p className="project-description"> 
              Unitour is the name of the mobile that my team developed for Oulu University 
              in order to help the new students get to know the campus. In this project I was
               part of the development team of the mobile game using Android Studio and also I 
               was responsible to create the website of the app, which it was developed using 
               Wordpress CMS
            </p>
        </div>
         <div className="col ">
        <h1> mrssantasite</h1>
        <a href="http://www.mrssantasite.com"><img src="assets/img/mrssantasite_desktop.PNG" alt="mrssantasite desktop siteo"/></a>
          <p className="project-description"> 
              Mrssantasite is a website that promotes finnish Christmas and the story of Mrs Santa. 
              For this project it was developed an e-commerce site that will allow Mrs Santa to sell 
              christmas souvenirs. It was developed using Wordpress CMS and WP-ECOMMERCE plugin
            </p>
        </div>
    </div>       
    </div>
        )
    }
})

export default Portfolio