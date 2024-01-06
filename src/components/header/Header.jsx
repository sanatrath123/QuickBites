import React from 'react'

function Header() {
    return (
      <header className=' mx-auto max-w-screen-xl mt-2 '>
        <nav className='flex items-center justify-between border-solid border-2 border-indigo-600'>
          {/* logo */}
          <div>
            <img src="/public/Logo1.jpg" alt="logo" className="w-40 h-40" />
          </div>
  
          {/* search bar */}
          <form className="flex items-center w-80">
            <label className="sr-only">Search</label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-80"
                placeholder="Search"
              />
              <button
                type="submit"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
              ></button>
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </form>
  
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
  