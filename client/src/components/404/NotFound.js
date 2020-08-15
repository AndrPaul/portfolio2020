import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () =>
    <div className="container">
        <div className="container-404">
        <h1>404</h1>
        <h2>Not found!</h2>
        <p>We are sorry but the page you are looking for does not exist.</p>
        <Link className="btn" to={"/"}>GO <span className="green">HOME</span></Link>
        </div>
      
    </div>

export default NotFound