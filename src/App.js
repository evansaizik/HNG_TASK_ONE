import Container from "./components/Body/Container";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from 'react-router-dom';
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Container />}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
