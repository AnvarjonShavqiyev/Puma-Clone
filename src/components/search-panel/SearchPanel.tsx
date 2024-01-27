import { FiSearch } from "react-icons/fi";
import IconButton from '@mui/material/IconButton';
import { AiOutlineClose } from "react-icons/ai";
import './SearchPanel.scss'
import { Container } from "../../utils/Utils";
import searchData from '../../db/search-data.json'
import { Link } from "react-router-dom";
const SearchPanel = ({ isSearchActive, setSearchActive } : {isSearchActive: boolean, setSearchActive: React.Dispatch<React.SetStateAction<boolean>>}) => {
  console.log(isSearchActive + '...'); 
  return (
      <div className={`search-panel-wrapper ${isSearchActive ? 'active' : ''}`}>
            <Container>
              <div className="input-search-wrapper">
                <div className="search-input">
                  <input type="text" placeholder='SEARCH PUMA.COM' />
                  <IconButton aria-label="delete">
                    <FiSearch className="search-btn" onClick={() => setSearchActive(false)}/>
                  </IconButton>
                </div>
                <IconButton aria-label="delete">
                  <AiOutlineClose className="cancel-icon" onClick={() => setSearchActive(false)}/>
                </IconButton>
              </div>
            </Container>
            <div className="search-options-wrapper">
              <Container>
                <div className="search-options__wrapper">
                    <div className="tranding__wrapper">
                      <h3 className="trandings-title">{searchData.trandings.title}</h3>
                      {
                        searchData.trandings.sublinks.map(link => {
                            return <Link className="trandings-link" to='/'>{link}</Link>
                        })
                      }
                    </div>
                    <div className="suggested-products__wrapper">
                    <h3 className="trandings-title">{searchData.searchProducts.title}</h3>
                    <Link to='/' className="suggested__products">
                        {
                          searchData.searchProducts.products.map(product => {
                            return <div className="product__wrapper">
                              <img className="product-img" src={product.image} alt="" />
                              <div className="product-info">
                                <p className="product-name">{product.name}</p>
                                <strong>${product.price}</strong>
                              </div>
                            </div>
                          })
                        }
                    </Link>
                    </div>
                </div>
              </Container>
            </div>
      </div>
  );
}

export default SearchPanel;
