import React from 'react'
import './styles.css'
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component{

render() {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded sticky">
        <a className="navbar-brand" href="#"><img src="https://vignette.wikia.nocookie.net/logopedia/images/8/84/Electronics_Boutique_Logo_1994.svg/revision/latest/scale-to-width-down/180?cb=20150921204951" alt="EB Games Logo" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
         

        <div className="collapse navbar-collapse" id="navbarsExample09">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <NavLink exact = {true} className="nav-link" to="/home">Home</NavLink>
                </li>
                <li className="nav-item active">
                    <NavLink className="nav-link" to="/">Products<span class="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="./contact.html">Contact</NavLink>
                </li>

            </ul>

        </div>
        </nav>
    
    );
    
}
}
