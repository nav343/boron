import logo from '../assets/boron_logo.png'

function Footer(): JSX.Element {
  return (
    <div className='flex items-center justify-center flex-col'>
      <img src={logo} className="w-16 h-16" />
      <h1 className='font-bold text-2xl'>Boron</h1>
      <p className='italic mb-4'>Made with 💝 by nav343</p>
    </div>
  )
}

export default Footer
