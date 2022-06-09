import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Header from './Pages/Header/Header';
import MyRecentProject from './Pages/MyRecentProject/MyRecentProject';
import Skill from './Pages/Skill/Skill';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <Skill></Skill>
      <MyRecentProject></MyRecentProject>
      <Routes>
        <Route path='/'>Home</Route>
      </Routes>
    </div>
  );
}

export default App;
