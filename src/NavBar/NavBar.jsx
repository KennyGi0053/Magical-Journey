

const NavBar = ({ toggleDarkMode }) => {
  return (
    <nav className="w-full h-14 hidden bg-white lg:flex p-4 justify-between fixed z-10 dark:bg-gray-900">
        <div className="h-auto w-auto">
            <p className="text-xl text-primary font-black  dark:text-terciary">Magical Journey</p>
        </div>
        <div className="flex space-x-8">
            <a className="font-bold text-md text-primary dark:text-terciary" href="Home">Inicio</a>
            <a className="font-bold text-md text-primary dark:text-terciary" href="#recomendadas">Recomendados</a>
            <a className="font-bold text-md text-primary dark:text-terciary" href="#rentasdestacadas">Rentas</a>
            <a className="font-bold text-md text-primary dark:text-terciary" href="#faqs">FAQS</a>
            <a className="font-bold text-md text-primary dark:text-terciary" href="#footer">Sobre nosotros</a>

        </div>
        <div className="flex space-x-4 cursor-pointer ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path className="fill-current text-primary dark:text-terciary" stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <svg onClick={toggleDarkMode} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path className="fill-current text-primary dark:text-terciary" stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path className="fill-current text-primary dark:text-terciary" stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        </div>
    
        
   
    </nav>
  )
}

export default NavBar