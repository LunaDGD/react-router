import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Page from "./Page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogList from "./BlogList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BlogList" element={<BlogList />} />
            <Route path="/Page" element={<Page />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
