
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

function App() {
  
  return (
    <div className="">
  <Header/>
  <Outlet/>

    </div>
  );
}

export default App;
