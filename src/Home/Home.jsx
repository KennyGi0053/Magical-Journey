import { useState } from 'react'
import Faqs from '../Faqs/Faqs'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import Recomendadas from '../Recomendadas/Recomendadas'
import Rentasdestacadas from '../Rentas destacadas/Rentasdestacadas'
import TabBar from '../TabBar/TabBar'
import sanFrancisco from '../assets/sanFrancisco.jpg'

const Home = () => {
    const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
      <div className={`${darkMode ? 'dark' : ''} w-full h-full`}>
      <NavBar toggleDarkMode={toggleDarkMode}/>
    <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center lg:space-y-0 lg:items-start lg:pt-32 lg:justify-start dark:bg-gray-900">
        <input className="outline-none p-3 rounded-full shadow-sm transition duration-300 focus-whitin:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden" placeholder='SanFrancisco' type="search" name="" id="" />
        <div className='hidden h-auto lg:w-2/3 lg:flex pb-6'>
            <p className='text-4xl ml-16 font-bold text-white dark:text-terciary'>Encuentra más ubicaciones como ésta</p>
        </div>
        <button className="w-48 rounded-full text-lg font-semibold p-4 bg-white shadow-lg transition transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110 lg:ml-16 dark:bg-terciary dark:text-white">
            Explorar
        </button>
    </div>
    <div className="w-full h-full lg:h-96 lg:bg-sanFranciscoDesktop lg:bg-cover lg:bg-center">
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
    <div id='footer'>
    <Footer/>

    </div>
    <TabBar/>

  </div>
  )
}

export default Home