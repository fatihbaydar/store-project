import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import About from "./pages/About";
import NotFound from "./pages/NotFound";


function App() {
  return (

    //* route yapısını router dosyasına taşıdık
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/products" element={<Products />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="*" element={<NotFound />} />
    //   </Routes>
    // </BrowserRouter>

  );
}

export default App;