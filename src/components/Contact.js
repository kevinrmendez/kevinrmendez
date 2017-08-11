import React from 'react'

const Contact = React.createClass({
    getInitialState(){
        return{
            show:true
        }
    },
    toggle(){
        var showTemp = !this.state.show
      console.log('click')
      this.setState(
          {show:showTemp}
      )
      console.log(this.state.show)
    },
    render(){
        var style;
        if(this.state.show){
            style={display: 'block'}
        }else{
            style={display: 'none'}
        }
        return(
            <div>
            <h2 className="title"> Contac</h2>
            <p className="header contact-header"> Send me a message! </p>
            <div className="contact-form">
            <form style={style}>
                <input type="text" name="name" placeholder="name" required />
                <input type="email" name="email" placeholder="me@email" required/>
                <textarea placeholder="message " required></textarea>
                <input type="submit" value="Submit"/>
            </form>
            </div>
            </div>
        )
    }
})
export default Contact