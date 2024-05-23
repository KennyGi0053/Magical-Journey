import Faqs from '../Faqs/Faqs'
import Recomendadas from '../Recomendadas/Recomendadas'
import Rentasdestacadas from '../Rentas destacadas/Rentasdestacadas'
import sanFrancisco from '../assets/sanFrancisco.jpg'

const Home = () => {
  return (
  <div className="w-full h-3/4">
    <div className="w-full h-full flex flex-col absolute space-y-96 py-4 items-center ">
        <input className="outline-none p-3 rounded-full shadow-sm transition duration-300 focus-whitin:shadow-sm focus:ring-2 focus:w-11/12" placeholder='SanFrancisco' type="search" name="" id="" />
        <button className="w-48 rounded-full text-lg font-semibold p-4 bg-white shadow-lg transition transition-all duration-500 ease-in-out hover:bg-primary hover:text-white transform hover:-translate-y-1 hover:scale-110">
            Explorar
        </button>
    </div>
    <div className="w-full h-full">
        <img src={sanFrancisco} />
    </div>
    <Recomendadas/>
    <Rentasdestacadas/>
    <Faqs/>

  </div>
  )
}

export default Home