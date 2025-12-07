import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaHeart,
  FaCalendar,
  FaUser,
  FaComment,
  FaStar,
  FaLinkedin,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  FaCheckCircle,
} from 'react-icons/fa';
import '../assets/css/Navbar.css'; // Your custom CSS
import instgram from '../assets/image/instagram.PNG';
import logofooter from '../assets/image/logo.png';

const Footer = () => {
  return (
    <footer className="footer-05 text-white">
      <div className="container">
        {/* Top Row */}
        <div className="row border-bottom mb-5 pb-4 align-items-center">
          <div className="col-md-6 mb-md-0 mb-4 footer-logo">
            <h2 className="logo">
              <a href="https://www.orazweb.com/" className="text-white  text-decoration-none">
                <img src={logofooter} style={{ width: 40, height: 64, backgroundSize: 'cover' }} />
                Orazweb <span>Solutions</span>
              </a>
            </h2>
          </div>
          <div className="col-md-6 mb-md-0 mb-4 text-md-end">
            <ul className="ftco-footer-social d-flex justify-content-md-end justify-content-center p-0 mb-0 gap-3 list-styled">
              <li>
                <a href="#" className="social-icon"><FaLinkedin size={24} /></a>
              </li>
              <li>
                <a href="#" className="social-icon"><FaFacebookF size={24} /></a>
              </li>
              <li>
                <a href="#" className="social-icon"><FaInstagram size={24} /></a>
              </li>
            </ul>
          </div>

        </div>

        {/* Main Footer */}
        <div className="row">
          {/* Contact + Newsletter */}
          <div className="col-md-6 col-lg-3 mb-4">
            <h2 className="footer-heading">Contact</h2>
            <ul className="list-styled d-flex flex-column gap-3 fs-5">
              <li>
                <i className="fas fa-map-marker-alt me-2"></i>
                Bandhu Rakh, Kunjwani, Jammu, J&K -180010
              </li>
              <li>
                <i className="fas fa-phone-alt me-2"></i>
                +91-9876543210
              </li>
              <li>
                <i className="fas fa-envelope me-2"></i>
                info@example.com
              </li>
            </ul>


            <form className="subscribe-form mt-3 fs-5">
              <div className="form-group gap-2 d-flex">
                <input type="text" className="form-control rounded-start" placeholder="Enter email address" />
                <button type="submit" className="btn btn-light rounded-end">
                  <FaArrowAltCircleRight />
                </button>
              </div>
            </form>
          </div>

          {/* Latest News */}
          <div className="col-md-6 col-lg-3 mb-4 footer-blog">
            <h2 className="footer-heading">Latest Blog</h2>

            <div className="block-21 d-flex mb-3">
              <div className="img me-3 rounded" style={{ width: 64, height: 64, backgroundImage: `url('/images/image_1.jpg')`, backgroundSize: 'cover' }} />
              <div className="text">
                <h3 className="heading fs-5"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><FaCalendar /> Oct. 16, 2019</div>
                  <div><FaUser /> Admin</div>
                  <div><FaComment /> 19</div>
                </div>
              </div>
            </div>

            <div className="block-21 d-flex">
              <div className="img me-3 rounded" style={{ width: 64, height: 64, backgroundImage: `url('/images/image_2.jpg')`, backgroundSize: 'cover' }} />
              <div className="text">
                <h3 className="heading"><a href="#">Even the all-powerful Pointing has no control about</a></h3>
                <div className="meta">
                  <div><FaCalendar /> Oct. 16, 2019</div>
                  <div><FaUser /> Admin</div>
                  <div><FaComment /> 19</div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Sellers */}


          <div className="col-md-6 col-lg-3 mb-4 footer-service">
            <h2 className="footer-heading">Our Services</h2>
            <div className="featured">
              <ul className="list-styled d-flex flex-column gap-3 fs-5">
                <li className="d-flex align-items-center">
                  <FaCheckCircle className="me-2" />
                  <a href="/seo" className="text-white text-decoration-none">Search Engine Optimization</a>
                </li>
                <li className="d-flex align-items-center">
                  <FaCheckCircle className="me-2" />
                  <a href="/ppc-marketing" className="text-white text-decoration-none">Pay Per Click Marketing</a>
                </li>
                <li className="d-flex align-items-center">
                  <FaCheckCircle className="me-2" />
                  <a href="/social-media-marketing" className="text-white text-decoration-none">Social Media Marketing</a>
                </li>
                <li className="d-flex align-items-center">
                  <FaCheckCircle className="me-2" />
                  <a href="/social-media-advertising" className="text-white text-decoration-none">Social Media Advertising</a>
                </li>
                <li className="d-flex align-items-center">
                  <FaCheckCircle className="me-2" />
                  <a href="/web-design-development" className="text-white text-decoration-none">Web Design & Development</a>
                </li>
              </ul>
            </div>
          </div>


          {/* Instagram */}
          <div className="col-md-6 col-lg-3 mb-4 footer-insta">
            <h2 className="footer-heading">Instagram</h2>
            <div className="row g-1">

              <img src={instgram} />

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="row mt-5 pt-4 border-top">
          <div className="col-md-6 col-lg-8">
            <p className="mb-0">
              Copyright © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="col-md-6 col-lg-4 text-md-end">
            <p className="mb-0">
              Made with by <a href="https://www.orazweb.com/" className="text-white" target="_blank" rel="noreferrer">Orazweb</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
