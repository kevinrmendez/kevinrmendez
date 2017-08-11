import React from 'react'
import {Link} from 'react-router'
import '../scss/style.scss'

export const Nav = React.createClass({
   getInitialState(){
       return{
            show:true,
            active : true
        }
   },
       toggle :function(){
        var showTemp = !this.state.show;
      console.log('click')
      this.setState(
          {show:showTemp}
      );
      console.log(this.state.show)
    },
    toggle_menu: function(){
         this.setState(
        {active: !this.state.active}
    )
    console.log(this.state.active);

    },
        componentWillMount(){
        console.log(screen.width);
         if(screen.width < 600){
             this.setState( {show:false})
      }else{
          this.setState( {show:true})
      }
    },
    render(){
      let style;
        if(this.state.show){
            style={display: 'block'}

        }else{
            style={display: 'none'}
        }

        let menuClass = [""];
        if(this.state.active){
            menuClass.push("open")
        }
        return(
    <nav>
        <div className="nav-container group ">
        <Link to="/">
        <div className="nav-title">
        <h1> Kevinrmendez </h1>
        <p> Front end developer </p>
        </div>
        </Link>
        <div id="menu-toggle" className={menuClass.join('')} onClick={this.toggle_menu}>
            <a onClick ={this.toggle}>
                <span></span>
                <span></span>
                <span></span>
            </a>
        </div>
        <div className="nav-links" style={style}>
        <Link to ='/'><div className="item">Home</div></Link>
        <Link to='/about'><div className="item">About</div> </Link>
        <Link to='/skills'><div className= "item">Skills</div> </Link>
        <Link to='/clients'><div className="item">Clients </div></Link>
        <Link to="/contact"><div className="item">Contact </div></Link>
        </div>
        </div>
    </nav>
        )
    }
    })


