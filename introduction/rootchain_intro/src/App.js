import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Title from "./js/Title.js";
import Benefit from "./js/Benefit.js";
import Gs from "./js/Gs.js";
import Case from "./js/Case.js";
import Tech from "./js/tech.js";

function App() {

  return (
    <div className="App">

      {/*  START nav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand pulse" href="#main"><img src={process.env.PUBLIC_URL + "/images/logoL.png"} width="60%" alt="logo"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#R-nav" aria-controls="R-nav" aria-expanded="false">Menu</button>

          <div className="collapse navbar-collapse" id="R-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#benefit" className="nav-link">Benefit</a></li>
              <li className="nav-item"><a href="#case" className="nav-link">Case</a></li>
              <li className="nav-item"><a href="#tech" className="nav-link">Technology</a></li>
              <li className="nav-item"><a href="#contactUs" className="nav-link">Contact us</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/*  END nav */}

      {/*  START main */}
      <div className="main-wrap bg-sky" data-stellar-background-ratio="0.5" id="main">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center" data-aos="fade-down" data-aos-easing="ease" data-aos-delay="500">
  
            <div className="col-md-6 d-flex align-items-end">
                <div className="text w-100">
                  <p className="mb-3 r-main-sub">For Fast and Secure Business<br/>Enterprise Blockchain Solution</p>
                  <p className="mb-5 r-main-title">The Best Way<br/>To Protect<br/>Enterprise Values</p>
                  <p><a href="#contactUs" className="btn py-3 px-4 mr-3 mt-2 pulse shadow">Contact us</a> </p>
              </div>
            </div>
            
            <div className="col-md-6 d-none d-md-block">
              <div className="main-back mx-auto">
                <img src={process.env.PUBLIC_URL + "/images/logoS.png"} className="main-back-img mx-auto" alt="main-back" />
              </div>
              <div className="main-front mx-auto">
                <img src={process.env.PUBLIC_URL + "/images/circle.png"} className="main-front-img mx-auto" alt="main-front" />
              </div>
            </div>
            
          </div>
        </div>
      </div> 
      {/*  END main */}

      {/* ***************************************************************************************************************** */}

      {/*  START benefit */}
      <section className="R-section" id="benefit">
      <div className="container">
        <Title sub="benefit" main="why choose us"></Title>
        <Benefit></Benefit>
      </div>
      </section>
      {/*  END benefit */}

      {/*  START benefit */}
      <section className="R-section">
      <div className="container" id="gs">
        <Title sub="benefit" main="We've proved"></Title>
        <Gs></Gs>
      </div>
      </section>
      {/*  END benefit */}

      {/*  START case */}
      <section className="R-section" id="case">
        <div className="container">
          <Title sub="case" main="We worked with"></Title>
          <Case></Case>
        </div>
      </section>
      {/*  END case */}

      {/*  START tech */}
      <section className="R-section bg-sky" id="tech">
        <div className="container">
          <Title sub="technology" main="how it works"></Title>
          <Tech></Tech>
        </div>
      </section>
      {/*  END tech */}


      {/* ***************************************************************************************************************** */}

      {/*  START footer */}
      <footer className="R-footer mt-5" id="contactUs">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-6 col-md mb-3">
                <h4 className="R-footer-title mb-3">Contact us</h4>
                <table>
                  <tbody>
                    <tr>
                      <td className="text-right pr-3"><span className="fas fa-home"/></td>
                      <td><a href="http://www.sgablc.kr" target="_blank" className="footer-hover">http://www.sgablc.kr</a></td>
                    </tr>
                    <tr>
                      <td className="text-right pr-3"><span className="fas fa-paper-plane"/></td>
                      <td>sgablc@sgacorp.kr</td>
                    </tr>
                    <tr>
                      <td className="text-right pr-3"><span className="fas fa-phone-alt"/></td>
                      <td>+82 70 5204 0066</td>
                    </tr>
                    <tr>
                      <td className="text-right pr-3"><span className="fas fa-fax"/></td>
                      <td>+82 2 6499 1813</td>
                    </tr>
                    <tr>
                      <td className="text-right align-top pr-3"><span className="fas fa-map-marker-alt"/></td>
                      <td><a href="http://kko.to/XU5U14lYB" target="_blank" className="footer-hover">
                          [05836] SGABLC Co., Ltd. 11th Street 25<br/>
                          Bubwon-Ro, Song-Pa Gu, Seoul, Korea</a></td>
                    </tr>
                  </tbody>
                </table>
             </div>
             <div className="col-md-6 col-md mb-3 d-none d-md-block">
                <h4 className="R-footer-title mb-3">Menu</h4>
                <div>
                  <ul className="navbar-nav ml-auto">
                    <li><a href="#main" className="footer-hover">-&nbsp;&nbsp;&nbsp; Main</a></li>
                    <li><a href="#benefit" className="footer-hover">-&nbsp;&nbsp;&nbsp; Benefit</a></li>
                    <li><a href="#case" className="footer-hover">-&nbsp;&nbsp;&nbsp; Case</a></li>
                    <li><a href="#tech" className="footer-hover">-&nbsp;&nbsp;&nbsp; technology</a></li>
                  </ul>
                </div>
             </div>
            </div>
          </div>

         <div className="container-fluid px-0 py-3 bg-white">
            <div className="container">
                <div className="row">
                <div className="R-footer-right col-md-12 text-center">
                    <p className="mt-0">COPYRIGHT©2020 SGABLC CO., LTD. ALL RIGHTS RESERVED.</p>
                </div>
                </div>
            </div>
        </div>
      </footer>
      {/*  END footer */}
    </div>
  );
}

export default App;
