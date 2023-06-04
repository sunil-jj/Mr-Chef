
// import './App.css';
//import MainMenu from './Components/MainMenu';

//import CategoryDetails from './Components/CategoryDetails';
import Navbar from "./Components/Navbar"
import AllRoute from './Components/Routes/AllRoute';
import Loading from "./Components/loading";
import Successfullpage from "./Components/successfullpage";
import MobNavbar from "./Components/MobNavbar";
import CombinedNavbar from "./Components/CombinedNavbar";


function App() {
  return (
    <div className="App">
      {/* <Navbar position={"sticky"}/> */}
      <CombinedNavbar/>
      <AllRoute/>

      {/* <MobNavbar/> */}

    </div>
  );
}

export default App;


