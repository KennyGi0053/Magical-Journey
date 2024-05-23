import Faqs from '../Faqs/Faqs'
import Footer from '../Footer/Footer'
import Recomendadas from '../Recomendadas/Recomendadas'
import Rentasdestacadas from '../Rentas destacadas/Rentasdestacadas'
import TabBar from '../TabBar/TabBar'
import sanFrancisco from '../assets/sanFrancisco.jpg'

const Home = () => {
  return (
  <div className="w-full h-3/4">
    <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-32 lg:justify-start">
        <input className="outline-none p-3 rounded-full shadow-sm transition duration-300 focus-whitin:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden" placeholder='SanFrancisco' type="search" name="" id="" />
        <div className='hidden h-auto lg:w-2/3 lg:flex pb-6'>
            <p className='text-4xl ml-16 font-bold text-white'>Encuentra más ubicaciones como ésta</p>
        </div>
        <button className="w-48 rounded-full text-lg font-semibold p-4 bg-white shadow-lg transition transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16">
            Explorar
        </button>
    </div>
    <div className="w-full h-full lg:h-96 bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
        <img className='lg:hidden' src={sanFrancisco} />
    </div>
    <div id="recomendadas">
    <Recomendadas/>
    </div>
    <div id="rentasdestacadas">
    <Rentasdestacadas/>
    </div>
    <div id='faqs'>
    <Faqs/>
    </div>

    <Footer/>
    <TabBar/>

  </div>
  )
}

export default Home