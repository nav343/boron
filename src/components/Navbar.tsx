import { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/boron_logo.png'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { HiMenuAlt1 } from 'react-icons/hi'

function Navbar() {
  let links = [
    { name: "Home", link: "/" },
    { name: "Installation", link: "/install" },
    { name: "Docs", link: "/docs" },
    { name: "About", link: "/about" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 right-0'>
      <div className='md:flex items-center justify-between bg-opacity-90 bg-gray-900 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-default flex items-center font-sans 
      text-white'>
          <span className='mr-2 mt-1'>
            <img className='w-8 h-8' src={logo} />
          </span>
          Boron
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-white'>
          {open ? <AiOutlineCloseCircle /> : <HiMenuAlt1 />}
        </div>

        <ul className={`md:flex md:items-center md:pb-0 absolute md:static pb-4 md:bg-transparent bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-14' : 'top-[-490px]'}`}>
          {
            links.map((link) => (
              <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <Link to={link.link} className='text-white hover:text-gray-400 duration-500'>{link.name}</Link>
              </li>
            ))
          }
          <a target={"_blank"} href='https://github.com/nav343/Boron.bor' className='text-white hover:text-gray-400 duration-500 text-xl md:ml-9'>Source</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar

