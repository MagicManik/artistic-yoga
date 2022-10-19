import Home from "./components/Home/Home";
import Navbar from "./components/Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import MyAccount from "./components/MyAccount/MyAccount";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<MyAccount />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
