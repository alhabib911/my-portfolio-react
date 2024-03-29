import { Route, Routes } from 'react-router-dom';
import Blogs from '../src/Blogs/Blogs';
import AboutMe from './AboutMe/AboutMe';
import './App.css';
import GetInTouch from './GetInTouch/GetInTouch';
import MyAllProjects from './MyAllProjects/MyAllProjects';
import NotFoundPage from './NotFoundPage/NotFoundPage';
import Home from './Pages/Home/Home';
import Dental from './ProjectDetails/Dental';
import KelongGroup from './ProjectDetails/KelongGroup';
import Knot from './ProjectDetails/Knot/Knot';
import ZM from './ProjectDetails/ZM';

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
        <Route path='/knot' element={<Knot/>}></Route>
        <Route path='/zm' element = {<ZM></ZM>}></Route>
        <Route path='/dental' element ={<Dental></Dental>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
