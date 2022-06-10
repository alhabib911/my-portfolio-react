import { Route, Routes } from 'react-router-dom';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import GetInTouch from './GetInTouch/GetInTouch';
import MyAllProjects from './MyAllProjects/MyAllProjects';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import MyRecentProject from './Pages/MyRecentProject/MyRecentProject';
import KelongGroup from './ProjectDetails/KelongGroup';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element = {<AboutMe></AboutMe>}></Route>
        <Route path='/project' element = {<MyAllProjects></MyAllProjects>}></Route>
        <Route path='/contact' element ={<GetInTouch></GetInTouch>}></Route>
        <Route path='/kelong' element= {<KelongGroup></KelongGroup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
