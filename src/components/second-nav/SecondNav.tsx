import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { FiUser, FiSearch } from "react-icons/fi";
import { SiPuma } from "react-icons/si";
import { Container } from '../../utils/Utils';
import navData from '../../db/nav-data.json';
import './SecondNav.scss';
const SecondNav = ({setSearchActive} : {setSearchActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
  console.log(navData);
  return (
    <div className='second-nav-wrapper'>
      <Container>
        <div className="second-nav__wrapper">
          <Link to='/'><SiPuma className='puma-icon'/></Link>
          <ul className='second-nav-menu'>
            {navData.dropdown.map((item, index) => (
              <li key={index} className="nav-menu__item">
                <Link className='second-nav__link' to='/'>{item.title}</Link>
                <ul className='second-nav__sub-links'>
                  <li className='left-links'>
                    {item.menu?.map((menu, index) => (
                      <Link
                        className={`left-link ${menu === 'SALE' ? 'red-text' : ''}`}
                        to='/'
                        key={index}
                      >
                        {menu}
                      </Link>
                    ))}
                  </li>
                  {item.subMenu?.map((submenu, index) => (
                    <li className='sub-links__wrapper' key={index}>
                      <Link className='sublink-title' to="/">{submenu.title}</Link>
                      {submenu.items.map((sublinks, index) => (
                        <Link key={index} className='sublink' to='/'>{sublinks}</Link>
                      ))}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className='second-nav-options'>
            <div className='search-wrapper'>
            <button className='second-nav-searchBtn' onClick={() => setSearchActive(true)}><FiSearch className='search-icon'/>SEARCH</button>
            </div>
            <IconButton aria-label="delete">
              <FaRegHeart className='icon'/>
            </IconButton>
            <IconButton aria-label="delete">
              <IoCartOutline className='icon'/>
            </IconButton>
            <IconButton aria-label="delete">
              <FiUser className='icon'/>
            </IconButton>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SecondNav;
