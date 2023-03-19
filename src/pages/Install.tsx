import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

function Install(): JSX.Element {
  const systems = [
    { name: "Windows", installerName: "win.exe" },
    { name: "Linux", installerName: "linux" },
    { name: "MacOS", installerName: "macos" },
  ]
  return (
    <div className="w-full md:flex items-center justify-center flex-col">
      <div className="text-white bg-gray-900 h-full max-w-3xl mt-16 px-2">
        <Navbar />
        <div className="flex items-center justify-center flex-col mb-4">
          <h1 id="installGuide" className="font-bold text-4xl mt-4">Installation Guide</h1>
          <p className="text-center italic mb-2">At the moment, Boron only supports building from source as it does not have a proper installer for any OS yet :(</p>

          <h1 className="font-bold text-xl mt-4">Building From Source</h1>

          <p className="text-center">Boron requires <code>nodejs, yarn, tsc (typescript compiler) git and pkg </code>installed globally for building from source.</p>
          <p className="text-center">Open your prefered terminal and paste the build boron for your OS. Make sure to install all the required dependencies before installing Boron</p>

          <div className="my-5 w-full px-3">
            <h1 className="text-2xl font-semibold mb-2">* Dependencies</h1>
            <p className="my-2">Install the following dependencies for your OS before installing Boron</p>
            <p className="text-xl">NodeJS - <a href="https://nodejs.org/en" target={"_blank"} className="text-blue-500">https://nodejs.org/en</a></p>
            <p className="text-xl">Typescript - <a href="https://www.typescriptlang.org/" target={"_blank"} className="text-blue-500">https://www.typescriptlang.org</a></p>
            <p className="text-xl">yarn - <a href="https://yarnpkg.com/" target={"_blank"} className="text-blue-500">https://yarnpkg.com</a></p>
            <p className="text-xl">git - <a href="https://git-scm.com/" target={"_blank"} className="text-blue-500">https://git-scm.com</a></p>
            <p className="text-xl">pkg - <a href="https://www.npmjs.com/package/pkg" target={"_blank"} className="text-blue-500">https://npmjs.com/pkg</a></p>
          </div>

          {systems.map((system) => {
            const copyMsg = `git clone https://github.com/nav343/Boron.bor.git && cd ./Boron.bor && yarn && tsc && yarn build && ./dist/build/boron-${system.installerName}`
            return (
              <div className="m-2 md:w-full">
                <h1 className="font-bold mt-4">* {system.name}</h1>
                <p className="bg-gray-800 p-5 text-red-500 rounded-xl">git clone https://github.com/nav343/Boron.bor.git <br />
                  <p className="text-yellow-500">cd ./Boron.bor</p>
                  <p className="text-green-500">yarn</p>
                  <p className="text-blue-500">tsc</p>
                  <p className="text-blue-500">yarn build</p>
                  ./dist/build/boron-{system.installerName} [filename or <i>blank</i>]
                </p>
                <button onClick={() => window.navigator.clipboard.writeText(copyMsg).then(() => console.log("hi")).catch(err => console.log(err))} className="bg-white text-gray-900 font-semibold transition ease-linear duration-100 p-2 rounded-xl hover:rounded-2xl px-3 mt-2">Copy</button>
              </div>
            )
          })}
        </div>

        <div className="flex items-center justify-center flex-col mb-5">
          <h1 className="font-bold text-2xl">Done?</h1>
          <Link to={"/docs"} className="text-center text-blue-500 text-xl font-semibold hover:text-indigo-500 transition ease-linear duration-300">Read the Docs !!</Link>
        </div>

        <Footer />
      </div>
    </div>
  )
}
export default Install
