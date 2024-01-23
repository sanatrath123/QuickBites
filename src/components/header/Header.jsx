
import useOnlinestatus from "../../utils/useOnlinestatus";
import { Link } from "react-router-dom";


function Header() {
  const status = useOnlinestatus()
    return (
      <header className=' mx-auto max-w-screen-xl mt-2 '>
        <nav className='flex items-center justify-between border-solid border-2 border-indigo-600 content-center'>
          {/* logo */}
          <div className='flex flex-wrap  '>
          <img src="../../Logo1.jpg" alt="logo" className="w-20 h-20" ></img>
          <div className='font-bold text-2xl m-2 p-2 text-orange-600'>
              QUICKBITES
          </div>
           <h2 className="mt-4 ml-2 p-1">Deliver To</h2>
           <h2 className="text-red-600 mt-4 ml-0.5 p-1">Bhubaneswar</h2>
          </div>
          {/* header list */}
          <ul className='flex flex-row p-2 space-x-9'>
          <li className='text-xl font-semibold text-cyan-700'>Status
         {status ?"✅" :"❌"}
          </li>
            <li className='text-xl font-semibold text-cyan-700'><Link to={"/"}>HOME</Link></li>
            <li className='text-xl font-semibold text-cyan-700'><Link to={"/about"}>About</Link></li>
            <li className='text-xl font-semibold text-cyan-700'>SETTING</li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  