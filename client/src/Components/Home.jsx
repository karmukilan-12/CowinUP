import React from 'react'
import { Link } from "react-router-dom";
import "./Home.css"
import Navbar from "./Navbar"
import dose from "./Images/dose.svg";
import Footer from './Footer';
import About from './AboutSection';
import FAQSection from './FAQSection';


function Home() {
  return ( 
    <>
    <Navbar/>
     <section id="header" class="d-flex align-items-center">
      <div class="container-fluid nav_bg">
        <div class="row">
          <div class="col-10 mx-auto">
            <div class="row">
            <div class="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>Secure Your Shot, <br />Safeguard Your Health: <strong class="brand-name">Book Your COVID Vaccine Slot Now!</strong></h1>
              <div class="mt-3">
                <Link to="/slot" class="btn-get-started">Book Your Slot</Link>
              </div>
            </div>
            <div class="col-lg-6 order-1 order-lg-2 header-img">
              <img src={dose} class="img-fluid home-img" alt="home-img"/>
            </div>
          </div>
          </div>
        </div>
      </div>
     </section>
     <br></br>
     <br></br>
     <br></br>
     <section>
      <About />
      </section>
      <section>
        <FAQSection />
      </section>
    <section>
      <Footer />
    </section>
    </>
  )
}

export default Home
