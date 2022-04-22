import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import Detailpage from "./pages/Detailpage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="create" element={<Createpage />} />
        <Route path="detail" element={<Detailpage />} />
      </Routes>
    </div>
  );
}

export default App;
