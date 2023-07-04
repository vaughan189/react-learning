import './App.css';
import { Route, Routes} from "react-router-dom";
import GaugeExample from './components/GaugeExample';
function App() {
    return (
    
      <div className="App">
        
      <header>
         ThoughtSpot Everywhere D3 Example
        </header>
        
      <Routes>
          <Route path="/" element={<h3>Home</h3>} />
        <Route path="/GaugeExample" element={<GaugeExample />} />    
      </Routes>
      <ul>
          <li> <a className="bm-item" href="/">Home</a></li>
         <li> <a className="bm-item" href="/GaugeExample">GaugeExample</a> </li>
      </ul>
    </div>
  );
 }
 export default App;