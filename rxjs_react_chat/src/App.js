import { Outlet } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Switcher from './components/Switcher';

function App() {
  return (
    <div className="App">
      <Switcher/>
      <Outlet/>
    </div>
  );
}

export default App;
