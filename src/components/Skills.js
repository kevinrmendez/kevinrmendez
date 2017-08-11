import React from 'react'

const Skills = React.createClass({
    render(){
        return(
    <div>
    <h2 className="title">Skills</h2>
    <div className="border group ">
        <div className="col">
        <h4 className="subtitle"> Web Development </h4>
        <ul>
            <li><img src="assets/img/html5_logo.png" alt="html5 logo"/></li>
            <li><img src="assets/img/css3_logo.png" alt="css3 logo"/></li>
            <li><img src="assets/img/js_logo.png" alt="js logo"/></li>
            <li><img src="assets/img/mysql_logo.png" alt="mysql logo"/></li>`
            <li><img src="assets/img/php_logo.png" alt="php logo"/></li>
        </ul>
        </div>
        <div  className="col">
        <h4 className="subtitle"> Front end frameworks</h4>
            <ul>
                <li><img src="assets/img/react_logo.png" alt="react-logo"/></li>
            </ul>
        </div>
        <div className="col">
        <h4 className="subtitle"> Mobile Development </h4>
        <ul>
            <li><img src="assets/img/android_logo.png"/></li>
        </ul>
        </div>
        <div className="col">
        <h4 className="subtitle">Programming Languages</h4>
         <ul>
            <li><img src="assets/img/java_logo.png" alt="java logo"/></li>
            <li><img src="assets/img/python_logo.png" alt="python logo"/></li>
        </ul>
        </div>
    </div>
    </div>
        )
    }

    })



export default Skills