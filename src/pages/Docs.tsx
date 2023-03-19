import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Docs(): JSX.Element {
  document.title = "Boron | Docs"
  const variableExample = `let name = "nav343";
const nickname = 'nav343'

let exampleInt = 123;
const exampleFloat = 123.1231;

const info = {
  name,
  age: 1
};`

  const functionCode = `func welcomeNewUser(name, otherInfo) {
  print(name)
  print(otherInfo)
}
const otherInfo = {
  age: 123,
  hobby: "making languages"
};

welcomeNewUser("nav343", otherInfo::age)
welcomeNewUser("nav343", otherInfo::hobby)`

  return (
    <div className="w-full md:flex items-center justify-center flex-col">
      <div className="bg-gray-900 h-full max-w-3xl p-3 text-white mt-16">
        <Navbar />
        <h1 className="text-center font-bold text-3xl py-2">Boron Documentation</h1>
        <p className="text-center text-lg">
          Boron is a general purpose, easy to learn, programming language written in Typescript, it has a very simple syntax (kind of like a mixture of rust and typescript). Boron has many functions in-built which other languages don't offer out-of-the box, like writeFile().
        </p>

        <div>
          <h1 className="mt-4 ml-3 font-semibold text-2xl py-3">Editor Setup</h1>
          <div className="flex items-center justify-between w-full px-4">
            <h3 className="font-semibold text-xl">Vim:</h3>
            <a href="https://github.com/nav343/boron.vim" target={"_blank"} className="text-blue-500 text-lg">Syntax Highlighter</a>
          </div>
        </div>

        <div className="my-4 px-3">
          <div>
            <h1 className="font-bold text-2xl">Introduction</h1>
            <p>A step-by-step guide to mastering Boron programming language. We will look at all (literally) the features, functions and properties of Boron Programming language. Boron is a cross-platform, easy to learn, fast and light weight programming language made for fun. Boron interpreter is available for Windows, MacOS and Linux. Boron is dynamically typed and assigns the variable type at runtime depending on the value provided.</p>
          </div>

          <div className="my-2 bg-green-500 rounded-xl p-3 text-center">
            <h1 className="text-lg">💡If you haven't installed Boron interpreter yet, go to <Link to={"/install"} className="text-blue-800">Installation page and download the interpreter</Link></h1>
          </div>

          <div>
            <h1 className="font-bold text-2xl mt-3">Types</h1>
            <p className="my-2">
              Boron has 5 types which are <i className="text-bold text-green-500">string, boolean, number, null</i> and <i className="text-bold text-green-500">object </i>
              As mentioned above, boron is a dynamically typed programming language, so you don't need to specify any of the above types, boron automatically assigns the type at runtime.
              You can check the variable's type by using the <i className="text-bold text-green-500">typeof()</i> native function
              int stands for Integers and can store integer values, like 10, 12332, etc (note that -ve numbers are not supported at the moment)
              float stands for floating point numbers and can store decimal (.) values, like 123.2, 123.12312, etc
              string as the name suggests, stores string values (enclosed in "), like "hi there". String can be multi line or single line.
              object stores key value pairs, like &#123; <text className="text-blue-500">name</text>: <text className="text-green-500">"nav343"</text> &#125;, here "name" is the key and "nav343" is the value, the value can be of any type. Short hand values are valid
            </p>
          </div>

          <div>
            <h1 className="font-bold text-2xl mt-3">Variables</h1>
            <p>
              In programming, a variable is a value that can change, depending on conditions or on information passed to the program. In boron, variables can be assigned using either the <text className="text-red-500">let</text> keyword or the <text className="text-red-500">const</text> keyword.
              Variables assigned with the <text className="text-red-500">let</text> are mutable meaning that their value can be changed and variables assigned with the <text className="text-red-500">const</text> keyword are immutable meaning that their value cannot be changed, no variable can be re-assigned but their values can be changed (only if it is mutable).
              Variable value can be of type int, float, string or object.
              <br /><br />Example:
            </p>
            <Code>{variableExample}</Code>
            <p className="my-2">Values in an object can be accessed by the (member operator, "::"), variable (name) inside (info) can be accessed by (info::name).<br />Here (name) inside (info) is a shorthand and points to the variable (name) in line 1</p>
          </div>

          <div>
            <h1 className="font-bold text-2xl mt-3">Functions</h1>
            <p>
              A function is simply a “chunk” of code that you can use over and over again, rather than writing it out multiple times. In boron you can use the func keyword, followed by an identifier and then by the body, to declare a function. For example -
            </p>
            <Code>{functionCode}</Code>
            <p>Here welcomeNewUser is a function which takes in 2 arguments - name and otherInfo, notice how you don't need to specify a type of these arguments. Now you can use these 2 variables anywhere inside that function scope (inside those &#123;...&#125; basically). For calling the function, you just have to type the name, followed by parentheses and arguments inside them (if any). Arguments are separated by commas ,</p>

            <div className="my-5 bg-green-500 rounded-xl p-3 text-center">
              <h1 className="font-bold text-xl">💡Native Functions</h1>
              <p>Some functions in boron programming language are reserved and are provided out of the box and can be used anywhere inside your project without needing to import any other file(s). The list of all the available native functions is <a target={"_blank"} href="https://github.com/nav343/Boron.bor/wiki/Documentation#native-functions" className="text-blue-700">here</a></p>
            </div>

            <h1 className="text-xl font-semibold text-center">More functions, statements and expressions will be added in the future updates, the documentation will be updated accordingly!!</h1>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

function Code({ children }: { children: string }): JSX.Element {
  return (
    <SyntaxHighlighter customStyle={{ borderRadius: 5, marginTop: 5, marginBottom: 5 }} language="javascript" style={nord} wrapLines={false} showLineNumbers={true}>{children}</SyntaxHighlighter>
  )
}

export default Docs
