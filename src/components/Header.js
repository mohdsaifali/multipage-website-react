import React from 'react'

const Header = () => {
  return (
    <>  
    <div className="container">

    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand"><h1>Bunzo</h1></a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  

    </> 
  )
}

export default Header