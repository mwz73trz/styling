import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Teams from "./components/Teams";
import Players from "./components/Players";
import DropDownList from "./components/DropDownList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/dropdownlist" element={<DropDownList />} />
      </Routes>
    </div>
  );
}

export default App;
