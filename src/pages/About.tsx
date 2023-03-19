import logo from '../assets/boron_logo.png'
import Navbar from '../components/Navbar'

function About(): JSX.Element {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center flex-col w-full h-full text-center px-2 text-white mt-20">
        <img src={logo} className="w-32 h-32" />
        <h1 className='font-bold text-2xl my-2'>Boron Programming Language</h1>
        <p className='max-w-3xl'>Boron Programming Language was created <a href='https://github.com/nav343' target={"_blank"} className="text-blue-600">@nav343</a> (me), and named after the 5th element in the periodic table (i couldn't think of any better name :D). I created as a fun project, mainly for learning how interpreters, parsers and lexers work and wrote it in Typescript because - </p>
        <p className='mt-1'>1. I knew JS/TS more than any other language, <br />2. Found a really useful playlist on youtube, <br />3. Typescript is fun :)</p>
        <p className='mt-2 p-2 px-4 rounded-xl bg-green-500 font-medium'>Support the project by contributing or atleast starring the <a href='https://github.com/nav343/Boron.bor' target={"_blank"} className="text-blue-700">repo</a> on Github 💝</p>
      </div>
    </>
  )
}
export default About
