import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import TripsList from './components/TripsList';
import TripDetail from './components/TripDetail';
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/details" element={<TripDetail />}></Route>
        <Route path="/tripslist" element={<TripsList />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/nav" element={<Nav />}></Route>
      </Routes>
    </div>
  );
}

export default App;
