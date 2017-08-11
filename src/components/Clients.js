import React from 'react'

const Clients = React.createClass({
    render(){
        return(
            <div className="clients">
                <h1 className="title">Clients</h1>
                <div className="container border">
                    <div className="col"><a href="http://www.mrssantasite.com"><img src="assets/img/mrssantasite_logo.PNG" alt="mrssantasite logo"/></a></div>
                    <div className="col"><a href="http://unitour.000webhostapp.com"><img src="assets/img/unitour_logo.PNG" alt="unitour logo"/></a></div>
                    <div className="col"><a href="https://treenataanko.store"><img src="assets/img/treenataankostore_logo.png" alt="treenataanko logo"/></a></div>
                </div>
            </div>
        )
    }
})
export default  Clients