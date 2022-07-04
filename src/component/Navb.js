import React from 'react'
//IMPORTING probtypes
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// probs passing Navb(probs)
export default function Navb(probs) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${probs.mode} bg-${probs.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img src="WC.PNG" alt="bug" width={25} height={30} />

          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/*{probs.title} its prob passing */}
                <Link className="nav-link active" aria-current="page" to="/">{probs.title}</Link>
              </li>
              <li className="nav-item">
                {/*{probs.about} its prob passing */}
                <Link className="nav-link active" aria-current="page" to="/about">{probs.about}</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${probs.mode == 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={probs.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{probs.btntext}</label>
            </div>


          </div>
        </div>
      </nav>
    </div>
  )
}
//probs type:
/*Navb.PropTypes = {
  title: PropTypes.string,
  about: PropTypes.string
}
//seting default probs
Navb.defaultProbs = {
  title: "ikram Home",
  about: "About Ikram"
}
*/
