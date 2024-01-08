import SearchBox from '../SearchBox.jsx'



function Header() {
    return (
      <header className=' mx-auto max-w-screen-xl mt-2 '>
        <nav className='flex items-center justify-between border-solid border-2 border-indigo-600'>
          {/* logo */}
          <div>
            <img src="/public/Logo1.jpg" alt="logo" className="w-40 h-40" />
          </div>
  
          {/* Search box */}
          <SearchBox />
  
          {/* header list */}
          <ul className='flex flex-row p-2 space-x-9'>
            <li className='text-xl text-cyan-100'>HOME</li>
            <li className='text-xl text-cyan-100'>ACCOUNT</li>
            <li className='text-xl text-cyan-100'>SETTING</li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  