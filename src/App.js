import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Sign from "./page/Sign";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Navbar from "./components/Navbar/Navbar";
import Category from "./page/Category";
import Category1 from "./page/Category1";

import Category2 from "./page/Category2";
import Category3 from "./page/Category3";
import Category4 from "./page/Category4";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/category" element={<Category />} />
          <Route path="/category1" element={<Category1 />} />
          <Route path="/category2" element={<Category2 />} />
          <Route path="/category3" element={<Category3 />} />
          <Route path="/category4" element={<Category4 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
