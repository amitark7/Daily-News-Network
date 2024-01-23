import React, { useContext, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { newsContext } from '../context/newsContext';

const Headers = () => {

  const [city, setCity] = useState('')
  const { setSearch } = useContext(newsContext)

  const handleSearch = () => {
    setSearch(city)
  }

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none heading_text">
            Daily News Network
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li><Link to="/business" className="nav-link px-2 text-white">Business</Link></li>
            <li><Link to="/sports" className="nav-link px-2 text-white">Sports</Link></li>
            <li><Link to="/science" className="nav-link px-2 text-white">Science</Link></li>
            <li><Link to="/entertainment" className="nav-link px-2 text-white">Entertainment</Link></li>
            <li><Link to="/health" className="nav-link px-2 text-white">Health</Link></li>
            <li><Link to="/technology" className="nav-link px-2 text-white">Technology</Link></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 position-relative" role="search">
            <input type="search" className="form-control form-control-dark text-bg-dark" onChange={(e) => setCity(e.target.value)} placeholder="Search..." aria-label="Search" />
            <Link to='/search' className='text-white'><CiSearch onClick={handleSearch} className='search_icon' /></Link>
          </form>
        </div>
      </div>
    </header>
  )
}

export default Headers
