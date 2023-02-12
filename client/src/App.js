import Header from "./js/Header";
import Footer from "./js/Footer";
import Home from "./routes/Home";
import ContactUs from "./routes/ContactUs";
import Quote from "./routes/Quote";
import Success from "./routes/Success";
import Reviews from "./routes/Reviews";
import Faq from "./routes/Faq";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/quote" element={<Quote />}></Route>
        <Route path="/submitted" element={<Success />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
