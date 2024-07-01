import './App.css';
import { Route, Routes } from "react-router-dom";
import GaugeExample from './components/Gauge/Gauge';
import Line from './components/Line/Line';


function App() {
  return (

    <div className="App">

      <header>
        ThoughtSpot Everywhere D3 Example
      </header>
      <ul>
        <li> <a className="bm-item" href="/">Home</a></li>
        <li> <a className="bm-item" href="/GaugeExample">GaugeExample</a> </li>
        <li> <a className="bm-item" href="/LineExample">LineExample</a> </li>
      </ul>

      <Routes>
        <Route path="/" element={<h3>Home</h3>} />
        <Route path="/GaugeExample" element={<GaugeExample />} />
        <Route path="/LineExample" element={<Line />} />
      </Routes>
    </div>
  );
}
export default App;