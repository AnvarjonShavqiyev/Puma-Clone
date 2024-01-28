import Nav from '../../components/nav/Nav'
import SearchPanel from '../../components/search-panel/SearchPanel'
import SecondNav from '../../components/second-nav/SecondNav'
import './Home.scss'
import Hero from '../../components/hero/Hero'
import Categories from '../../components/cateries/Categories'
import Footer from '../../components/footer/Footer'
import Feedback from '../../components/feedback/Feedback'
import Discount from '../../components/discount/Discount'
interface HomeProps {
  isSearchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home:React.FC<HomeProps> = ({ isSearchActive, setSearchActive}) => {
  return (
    <div className='home'>
      <SearchPanel isSearchActive={isSearchActive} setSearchActive={setSearchActive}/>
      <Nav/>
      <SecondNav setSearchActive={setSearchActive}/>
      <Hero/>
      <Categories/>
      <Feedback/>
      <Discount/>
      <Footer/>
    </div>
  )
}

export default Home