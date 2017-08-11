import React from 'react'

const Footer = React.createClass({
    render(){
        return(
            <footer className="footer group">
                <div className="footer-logo">
                    <a href="https://www.linkedin.com/in/kevin-mendez-45723692"><img src="assets/img/linkedin.png" alt="linkedin logo" /></a>
                    <a href="https://github.com/kevinrmendez"><img src="assets/img/github_logo.PNG" alt="github logo" /></a>
                    <a href="mailto:kevinrmendez@gmail.com"><img src="assets/img/gmail_logo.png" alt="gmail logo" /></a>
                </div>

            </footer>

        )
    }
})

export default Footer