import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode === 'white'?'white':'dark'} bg-${props.mode === 'white'?'white':'dark'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href = "/">{props.Text}</a>
        </li>
        </ul>
     
     {/*<form className="d-flex" role="search">
        <input className="form-control me-2" type="Search" placeholder="Search" aria-label="search"></input>
        <button className="btn btn-outline-success" type="submit">Search</button>
  </form>*/}

      <div className={`form-check form-switch text-${props.mode === 'white'?'dark':'white'}`}>
  <input className="form-check-input" onClick={props.toggleMode1} type="checkbox" role="switch" id="myBox"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.blBtn}</label>
</div>

<div className={`form-check form-switch text-${props.mode === 'white'?'dark':'white'}`}>
  <input className="form-check-input mx-3" onClick={props.toggleMode2} type="checkbox" role="switch" id="myBox"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.grBtn}</label>
</div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired, Text: PropTypes.string.isRequired}

Navbar.defaultProps = {title: 'Set title here', Text : 'About us'}