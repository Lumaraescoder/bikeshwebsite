import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Activitiesdetails from "./pages/Activities-details";
import Activity from "./pages/Activity";
import Blogdetails from "./pages/Blog-details";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Servicedetails from "./pages/Service-details";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import Destination from "./pages/Destination";
import Destinationdetails from "./pages/Destination-details";
import Tourdetails from "./pages/Tour-details";
import Tour from "./pages/Tour";
import Tourguiderdetails from "./pages/Tour-guider-details";
import Cursorfollower from "./components/Cursor-follower";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Cursorfollower />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/activities-details" element={<Activitiesdetails />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/blog-details" element={<Blogdetails />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service-details" element={<Servicedetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<Destination />} />
          <Route
            path="/destination-details/:slug"
            element={<Destinationdetails />}
          />
          <Route path="/tour-details" element={<Tourdetails />} />
          <Route path="/tour" element={<Tour />} />
          <Route path="/tour-guider-details" element={<Tourguiderdetails />} />
        </Routes>
      </BrowserRouter>
      {/* Removed extra margin above footer as requested */}
      <Footer />
    </div>
  );
}

export default App;
