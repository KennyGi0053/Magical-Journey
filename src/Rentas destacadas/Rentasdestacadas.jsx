import chicago from '../assets/chicago.jpg'
import LA from '../assets/LA.jpg'
import miami from '../assets/miami.jpg'
import bali from '../assets/bali.jpg'
const Rentasdestacadas = () => {
  return (
    <div className="h-full w-full px-6 dark:bg-gray-900 ">
    <p className=" text-3xl text-primary font-semibold pb-8 mt-6 dark:text-terciary">
        Rentas destacadas
    </p>
    <div
        className="w-ful h-full grid grid-cols-1 lg:grid-cols-2 lg:place-items-center gap-4 lg:place-content-stretch "
    >
        <div
            className="relative w-full h-96 rounded-lg overflow-hidden lg:col-span-2"
        >
            <img
                className="object-cover h-full w-full"
                src={chicago}
                alt=""
            />
            <div className="absolute top-0 left-0 ">
                <p className="text-3xl px-8 pt-8 pb-2 font-semibold text-light text-white dark:text-terciary">Chicago</p>
                <p className="text-sm pl-8 text-light mr-24 text-white font-bold dark:text-terciary">
                    2 habitaciones, baño y cocina con vista la ciudad
                </p>
            </div>
        </div>
        <div
            className="relative w-full h-96 rounded-lg overflow-hidden lg:row-span-2 lg:h-[49rem]"
        >
            <img className="object-cover h-full w-full" src={LA} alt="" />
            <div className="absolute top-0 left-0">
                <p className="text-3xl px-8 pt-8 pb-2 font-semibold text-light text-white dark:text-terciary">Los Angeles</p>
                <p className="text-sm pl-8 text-light mr-24 text-white font-bold dark:text-terciary">
                    2 habitaciones, baño y cocina en Beverly Hills
                </p>
            </div>
        </div>
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <img
                className="object-cover h-full w-full"
                src={miami}
                alt=""
            />
            <div className="absolute top-0 left-0">
                <p className="text-3xl px-8 pt-8 pb-2 font-semibold text-light text-white dark:text-terciary">Miami</p>
                <p className="text-sm pl-8 text-light mr-24 text-white font-bold dark:text-terciary">
                    3 habitaciones, baño y cocina con vista al mar
                </p>
            </div>
        </div>
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
            <img
                className="object-cover h-full w-full"
                src={bali}
                alt=""
            />
            <div className="absolute top-0 left-0">
                <p className="text-3xl px-8 pt-8 pb-2 font-semibold text-light text-white dark:text-terciary">Bali</p>
                <p className="text-sm pl-8 text-light mr-24 text-white font-bold dark:text-terciary">
                    1 habitación, baño, cocina y piscina
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default Rentasdestacadas