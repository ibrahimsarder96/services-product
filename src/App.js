
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar";
import Navbar2 from "./Pages/Shared/Navbar2";
import Laptop from "./Pages/Services/Laptop";
import Monitor from "./Pages/Services/Monitor";
import Computer from "./Pages/Services/Computer";
import Apple from "./Pages/Services/Apple";
import Printer from "./Pages/Services/Printer";
import Server from "./Pages/Services/Server";
import MotherBoard from "./Pages/Services/MotherBoard";
import Contact from "./Pages/Home/Contact";
import Home from "./Pages/Home/Home";


function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
     <Navbar></Navbar>
     <Navbar2></Navbar2>
     <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/home' element={<Home/>}></Route>
     <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
     </Routes>
     
     <Routes>
      <Route path='/laptop' element={<Laptop></Laptop>}></Route>
      <Route path='/computer' element={<Computer></Computer>}></Route>
      <Route path='/monitor' element={<Monitor></Monitor>}></Route>
      <Route path='/applemacbook' element={<Apple></Apple>}></Route>
      <Route path='/printer' element={<Printer></Printer>}></Route>
      <Route path='/server' element={<Server></Server>}></Route>
      <Route path='/motherboard' element={<MotherBoard></MotherBoard>}></Route>
     </Routes>
    </div>
  );
}

export default App;
