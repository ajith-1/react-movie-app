import React,{useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';

function Navbar() {
      const [isMenuOpen, setMenuOpen] = useState(false);
      const [query, setQuery] = useState('');
      const navigate=useNavigate();

  const handleMenuClick = () => {
        setMenuOpen(!isMenuOpen);
  };

const handleBtnClick=(event)=>{
  if(query.length>0){
    navigate(`/search/${query}`);
    setQuery('')
  }
}

  const searchQueryHandler=(e)=>{
    if(e.key === "Enter" && query.length>0){
      handleBtnClick();
    }
  }
 

  return (
    <>      
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo"><img src={logo} alt='Logo'/><div className='title'>Movie <span>Plex</span></div></div>
          <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to={'/'} className='list'><span>Home</span></Link></li>
              <li><Link to={'/movie'} className='list'><span>Movie</span></Link></li>
              <li><Link to={'/tvshow'} className='list'><span>TV Show</span></Link></li>
            </ul>
          </div>
          {/* search input */}
          <div className="navbar-search">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Example : Iron Man"
              className='search-input'
              onKeyUp={searchQueryHandler}
            />
            <button className="search-icon" type='submit'  onClick={handleBtnClick}>
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuClick}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Navbar;