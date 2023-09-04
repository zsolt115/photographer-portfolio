import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<><Hero /></>} />
        <Route path="/gallery" element={<><Gallery/></>} />
      </Routes>
    </>
  );
}

export default App;

/**https://bootstrapmade.com/demo/PhotoFolio/ */