import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Case from "./Case.js";

function App() {
  return (
    <div className="App">

      {/*  START nav */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container">
          <a className="navbar-brand R-logo" href="#main"><img src={process.env.PUBLIC_URL + "/images/logoL.png"} width="60%" alt="logo"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#R-nav" aria-controls="R-nav" aria-expanded="false">Menu</button>

          <div className="collapse navbar-collapse" id="R-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#case" className="nav-link">Case</a></li>
              <li className="nav-item"><a href="#contactUs" className="nav-link">Contact us</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/*  END nav */}

      {/*  START main */}
      <div className="main-wrap" data-stellar-background-ratio="0.5" id="main">
        <div className="overlay"></div>
        <div className="container">
          <div className="row no-gutters slider-text align-items-center">
  
            <div className="col-md-6 d-flex align-items-end">
                <div className="text w-100">
                  <p className="mb-3 r-main-sub">For Fast and Secure Business<br/>Enterprise Blockchain Solution</p>
                  <p className="mb-5 r-main-title">The Best Way<br/>To Protect<br/>Enterprise Values</p>
                  <p><a href="#contactUs" className="btn py-3 px-4 mr-3 mt-2">Contact us</a> </p>
              </div>
            </div>
            
            <div className="col-md-6 d-none d-md-block">
              <div className="main-back mx-auto">
                <img src={process.env.PUBLIC_URL + "/images/bg_text.png"} className="main-back-img mx-auto" alt="main-back" />
              </div>
              <div className="main-front mx-auto">
                <img src={process.env.PUBLIC_URL + "/images/grey_circle2.png"} className="main-front-img mx-auto" alt="main-front" />
              </div>
            </div>
            
          </div>
        </div>
      </div> 
      {/*  END main */}

      {/*  START case */}
      <section className="R-section" id="case">
        <div className="container">
          <div className="row justify-content-center pb-5">
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Services</span>
              <h2>Case</h2>
            </div>
          </div>

          <Case></Case>
        </div>
      </section>
      {/*  END case */}

      {/*  START footer */}
      <footer className="R-footer" id="contactUs">
        <div className="container">
          <div className="row mb-5">
            <div className="col-sm-12 col-md mb-3">
                <h2 className="R-footer-title mb-4">Contact us</h2>
                <table>
                  <tbody>
                    <tr>
                      <td className="text-right pr-4">Web</td>
                      <td><a href="http://www.sgablc.kr" target="_blank" id="contact-web">http://www.sgablc.kr</a></td>
                    </tr>
                    <tr>
                      <td className="text-right pr-4">E-mail</td>
                      <td>sgablc@sgacorp.kr</td>
                    </tr>
                    <tr>
                      <td className="text-right pr-4">Tel</td>
                      <td>+82 70 5204 0066</td>
                    </tr>
                    <tr>
                      <td className="text-right pr-4">Fax</td>
                      <td>+82 2 6499 1813</td>
                    </tr>
                    <tr>
                      <td className="text-right align-top pr-4">Address</td>
                      <td>[05836] SGABLC Co., Ltd. 11th Street 25<br/>
                          Bubwon-Ro, Song-Pa Gu, Seoul, Korea</td>
                    </tr>
                  </tbody>
                </table>
             </div>
            </div>
          </div>

         <div className="container-fluid px-0 py-3 bg-white">
            <div className="container">
                <div className="row">
                <div className="R-footer-right col-md-12 text-center">
                    <p className="mt-0">COPYRIGHT©2020 SGA BLC CO.,LTD. ALL RIGHTS RESERVED.</p>
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
