import React from 'react';
import { Link } from 'react-router-dom';

import './FooterSection.css'

function Footer() {
  return (
    <footer>

      <div className="bottom-strip-container">
        <div className="title">EXPERIANCED IN:</div>
        <ul>


            <div className="icon-title">React Native</div>
            <div className="icon-title">Python</div>
            <div className="icon-title">C#</div>
            <div className="icon-title">CSS</div>
            <div className="icon-title">React</div>
            <div className="icon-title">Java</div>
            <div className="icon-title">vue</div>


        </ul>
      </div>

      <div className="footer-container">
          <div className="Footer-Logo">
              <span><strong>Lieben</strong> Logistics</span>
          </div>
          <footer className="site-footer">
              <div className="content-container">
                  <div className="row">

                      <div className="col-xs-6 col-md-3">
                          <h6>Quick Links</h6>
                          <ul className="footer-links">
                              <li><a href="#About">About Us</a></li>
                              <li><a href="#Contact">Contact Us</a></li>
                              <li><a href="#">Privacy Policy</a></li>
                              <li><a href="#">Sitemap</a></li>
                              <li><a href="#">Terms of Service</a></li>
                          </ul>
                      </div>
                  </div>

              </div>
              <div className="content-container">
                  <div className="row">
                      <div className="col-md-8 col-sm-6 col-xs-12 padding">
                          <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                              <a href="#"> Lieben Logistics</a>.
                          </p>

                      </div>


                  </div>
              </div>
          </footer>

      </div>

    </footer>
  );
}

export default Footer;
