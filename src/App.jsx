import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import HomePage from "./components/homepage";
import Restaurant from "./components/restaurant";
import MenuSection from "./components/menusection";
import Test from "./components/test";
import ContactSection from "./components/contactsection";
import Map from "./components/map";
import Footer from "./components/footer";
import AboutUs from "./components/Aboutus"; 
import AboutFood from "./components/AboutF";
import MissionSection from "./components/missionsection";
import ContactUs from "./components/contactus";
import ContactForm from "./components/contactform";
import ContactInfo from "./components/contactinfo";
import Gallery from "./components/gallery";
import ImageGallery from "./components/imagegallery";
import Menu from "./components/menu";
import LassiMenu from "./components/lassimenu";
import ThakaliSet from "./components/thaliset";
import Roti from "./components/Roti";
import CofeeItem from "./components/cofeeitem";
import JuiceItem from "./components/juiceitem";

const App = () => {
  return (
    <Router>

      <Routes>
        {/* Home Page Route */}
        <Route
          path="/"
          element={
            <>
               <Navbar />
              <HomePage />
              <Restaurant />
              <MenuSection />
              <Test />
              <ContactSection />
              <Map />
              <Footer />
            </>
          }
        />
        
        {/* About Us Route */}
        <Route path="/about-us" element={
          <>
          <AboutUs />
          <AboutFood />
          <MissionSection />
          <Footer/>
          </>
          } 
        />
        {/* Contact Us Route */}
        <Route path="/menu" element={
          <>
          <Menu />
          <LassiMenu />
          <ThakaliSet />
          <Roti />
          <CofeeItem />
          <JuiceItem/>
          <Footer />
          </>
          } 
        />
        {/* Gallery Route */}
        <Route path="/gallery" element={
          <>
            <Gallery/>
            <ImageGallery />
            <Footer/>
          </>
        }
        />
        {/* Contact Us Route */}
        <Route path="/contact-us" element={
          <>
          <ContactUs />
          <ContactForm />
          <ContactInfo />
          <Map />
          <Footer />
          </>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
