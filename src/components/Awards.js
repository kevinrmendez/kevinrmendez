import React from 'react'

const Awards = React.createClass({
    render(){
    return(
<div>
<h2 className="title">{this.props.title}</h2>
<div className ="section section3 group">
    <div>
        <div className="col">
            <h4 className="subtitle"> Junction</h4>
            <p>First Place junction Hackathon Kesko e-commerce track</p>
            <a href="https://hackjunction.com/"></a>
            <img src="assets/img/junction_logo.png" />
        </div>
        <div className="col">
            <h4 className="subtitle"> Software Factory </h4>
            <p> First place at Oulu University Software factory project</p>
            <a href="https://noppa.oulu.fi/noppa/kurssi/817614s/esite"></a>
            <img src="assets/img/oulu_university_logo.jpg" />
        </div>
    </div>
</div>
</div>
)
}
})



export default Awards