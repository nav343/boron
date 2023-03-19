import { Link } from 'react-router-dom'
import logo from './assets/boron_logo.png'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {
  document.title = "Boron Lang | Home"
  return (
    <div className="text-white bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 cursor-default select-none">
      <Navbar />
      <MainContent />
      <Features />
      <Footer />
    </div>
  )
}
function MainContent(): JSX.Element {
  return (
    <div className='py-4 w-full h-[95vh] flex flex-col justify-center items-center'>
      <img src={logo} className="w-48 h-48" />
      <h1 className='text-4xl font-semibold'>Boron</h1>
      <p className='text-center text-white text-xl'>A tiny programming language made with Typescript.</p>

      <Link to={"/install"} className='px-5 py-3 rounded-2xl bg-white text-gray-900 text-2xl hover:scale-110 ease-linear duration-100 mt-2 font-semibold'>Get Boron !!</Link>
    </div>
  )
}

function Features(): JSX.Element {
  const features: { title: string, description: string }[] = [{
    title: "~Blazingly~ Fast",
    description: "Boron interpreter takes just about 0.2 seconds to compile, pretty fast right?"
  }, {
    title: "Easy to Learn",
    description: "Boron has a very simple syntax and is super easy to learn."
  },
  {
    title: "Free and Open-Source",
    description: "Boron is completely free to use and is open source, you can build it on your own and make changes to the language itself."
  },
  {
    title: "Small",
    description: "The interpreter itself is only about 48Mb with all the native methods and functions."
  },
  ]

  return (
    <div className='py-4 flex justify-center items-center w-full h-[96vh] flex-col text-center'>
      <h1 className='font-bold text-3xl text-center pb-5'>Features ✨</h1>

      <div>
        {features.map((feature) => (
          <div className='p-3 rounded-xl border-white border-2 m-3 my-4 md:w-96 bg-gray-100 bg-opacity-10 cursor-pointer hover:scale-90 transition-all duration-100 ease-linear'>
            <h1 className='font-bold text-2xl'>{feature.title}</h1>
            <p className='pt-1'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
