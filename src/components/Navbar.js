import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

//TODO: update so 'Links to' instead of a href
const Navbar = () => {
  return (
    //HERE
    <nav className="navbar navbar-expand-sm navbar-light shadow">
          <div className="container-fluid">
            <a className="navbar-brand mx-xl-4 mx-lg-3 mx-md-2 mx-sm-1 text-warning" href="#">Navbar</a>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item mx-xl-4 mx-lg-3 mx-md-2 mx-sm-1 ">
                        <Link to="/" className="nav-link active" aria-current="page"><strong>Home</strong><span className="visually-hidden">(current)</span></Link>
                    </li>
                    <li className="nav-item mx-xl-4 mx-lg-3 mx-md-2 mx-sm-1 ">
                        <Link to="/brands" className="nav-link active" aria-current="page"><strong>Brands</strong><span className="visually-hidden">(current)</span></Link>
                    </li>
                    <li className="nav-item mx-xl-4 mx-lg-3 mx-md-2 mx-sm-1 ">
                    <Link to="/categories" className="nav-link active" aria-current="page"><strong>Categories</strong><span className="visually-hidden">(current)</span></Link>
                    </li>
                </ul>
                <form className="d-flex my-2 my-lg-0 flex-grow-1 mx-xl-4 mx-lg-3 mx-md-2 mx-sm-1">
                    <input className="form-control me-sm-2" type="text" placeholder="Search"/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="navbar-brand" />
                </form>
            </div>
      </div>
    </nav>
    

  )
}

export default Navbar