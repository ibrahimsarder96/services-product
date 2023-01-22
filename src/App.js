
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar";
import Navbar2 from "./Pages/Shared/Navbar2";
import Laptop from "./Pages/Services/Laptop";
import Monitor from "./Pages/Services/Monitor";
import Computer from "./Pages/Services/Computer";
import Apple from "./Pages/Services/Apple";
import Printer from "./Pages/Services/Printer";
import Server from "./Pages/Services/Server";
import Onsite from "./Pages/Services/Onsite";
import PickDrop from "./Pages/Services/PickDrop";
import MotherBoard from "./Pages/Services/MotherBoard";


function App() {
  return (
    <div>
     <Navbar></Navbar>
     <Routes>
     <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
     </Routes>
     <Navbar2></Navbar2>
     <Routes>
      <Route path='/laptop' element={<Laptop></Laptop>}></Route>
      <Route path='/computer' element={<Computer></Computer>}></Route>
      <Route path='/monitor' element={<Monitor></Monitor>}></Route>
      <Route path='/apple' element={<Apple></Apple>}></Route>
      <Route path='/printer' element={<Printer></Printer>}></Route>
      <Route path='/server' element={<Server></Server>}></Route>
      <Route path='/onsite' element={<Onsite></Onsite>}></Route>
      <Route path='/pickdrop' element={<PickDrop></PickDrop>}></Route>
      <Route path='/motherboard' element={<MotherBoard></MotherBoard>}></Route>
     </Routes>
    </div>
  );
}

export default App;
