import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Navbar.css';
import logo from '../assets/image/logo-health-orazweb.png';
import '../assets/css/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-light border-bottom nav-top">
        <nav className="navbar navbar-expand-lg secondary-bg">
          <div className="container">
            {/* Social Icons */}
            <div className="d-flex align-items-center gap-4 fs-15px">
              <a href="#" className="text-dark"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-dark"><i className="fab fa-linkedin-in"></i></a>
            </div>

            {/* Contact Info */}
            <div className="ms-auto d-flex flex-column flex-md-row align-items-md-center text-end gap-5 mt-1 mt-md-0">
              <div className="d-flex fs-15px align-items-center hover-bounce fw-bold">
                <i className="bi bi-geo-alt-fill me-2 text-success"></i>
                <span>Kunjwani, Jammu, J&K, India</span>
              </div>
              <div className="d-flex fs-15px align-items-center hover-bounce fw-bold">
                <i className="bi bi-telephone-fill me-2 text-success"></i>
                <span><a href="tel:+1234567890" className="text-decoration-none text-dark">+91 9797602332</a></span>
              </div>
              <div className="d-flex fs-15px align-items-center hover-bounce fw-bold">
                <i className="bi bi-envelope-fill me-2 text-success"></i>
                <span><a href="mailto:aramco.care@email.com" className="text-decoration-none text-dark">contact@orazweb.com</a></span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar nav-bottom navbar-expand-lg sticky-top ${scrolled ? 'bg-white shadow-sm' : 'transparent-navbar transition-navbar'}`}>
        <div className="container">
          <a className="navbar-brand fw-bold d-flex align-items-center fs-4" href="/">
            <img src={logo} alt="Logo" height="70" className="me-2" />
          </a>

          <button className="navbar-toggler" type="button" onClick={toggleMenu} aria-controls="navbarNav" aria-expanded={menuOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center fs-15px">

              <li className="nav-item"><a className="nav-link nav-hover fw-bold" href="/">HOME</a></li>

              {/* SERVICES Dropdown */}
              <li className="nav-item dropdown hover-dropdown">
                <a className="nav-link dropdown-toggle fw-bold primary-text-cl" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  SERVICES
                </a>
                <ul className="dropdown-menu p-4 services-dropdown w-100 shift-left-dropdown dropdown">
                  <li>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="fw-bold dropdown-header">Search Engine Optimization</div>
                        <a className="dropdown-item" href="/local-seo">Local SEO</a>
                        <a className="dropdown-item" href="/technical-seo">Technical SEO</a>
                        <a className="dropdown-item" href="/shopify_seo">Shopify SEO</a>
                        <a className="dropdown-item" href="/wordpress_seo">WordPress SEO</a>
                        <a className="dropdown-item" href="/seo-audit">SEO Audit</a>
                        <div className="fw-bold dropdown-header mt-3">Pay Per Click (PPC) Marketing</div>
                        <a className="dropdown-item" href="/search_engine_marketing">Search Engine Marketing (SEM)</a>
                        <a className="dropdown-item" href="/google_ads_management">Google Ads Management</a>
                        <a className="dropdown-item" href="/youTube_advertising">YouTube Management</a>
                      </div>
                      <div className="col-md-4">
                        <div className="fw-bold dropdown-header">Social Media Marketing</div>
                        <a className="dropdown-item" href="/social_media_management">Social Media Management</a>
                        <a className="dropdown-item" href="/social-media_franchise">Franchise Social Media</a>
                        <a className="dropdown-item" href="/social-media_enterprise">Enterprise Social Media</a>
                        <div className="fw-bold dropdown-header mt-3">Social Media Advertising</div>
                        <a className="dropdown-item" href="/facebook">Facebook</a>
                        <a className="dropdown-item" href="/linkedin">LinkedIn</a>
                        <a className="dropdown-item" href="/instagram">Instagram</a>
                      </div>
                      <div className="col-md-4">
                        <div className="fw-bold dropdown-header">Web Design & Development</div>
                        <a className="dropdown-item" href="/branding-services">Branding Service</a>
                        <a className="dropdown-item" href="/custom-website">Custom Website</a>
                        <a className="dropdown-item" href="/web-design">Web Designing</a>
                        <a className="dropdown-item" href="/wordpress-website">WordPress Website</a>
                        <a className="dropdown-item" href="/shopify-website">Shopify Website</a>
                        <a className="dropdown-item" href="/services/web/ecommerce">Ecommerce Website</a>

                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              {/* WHO WE SERVE Dropdown */}
              <li className="nav-item dropdown hover-dropdown">
                <a className="nav-link dropdown-toggle fw-bold primary-text-cl" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  WHO WE SERVE
                </a>
                <ul className="dropdown-menu p-4 services-dropdown w-100 shift-left-dropdown dropdown">
                  <li>
                    <div className="row">
                      <div className="col-md-4">
                        <a href="/health" className="dropdown-header fw-bold text-decoration-none d-block">Health</a>

                        <a href="/fitness" className="dropdown-header fw-bold mt-3 text-decoration-none d-block">Fitness</a>

                        <a href="/gym" className="dropdown-header fw-bold mt-3 text-decoration-none d-block">Gym</a>

                        <a href="/yoga" className="dropdown-header fw-bold mt-3 text-decoration-none d-block">Yoga</a>
                      </div>
                      <div className="col-md-4">
                        <a href="/medical" className="dropdown-header fw-bold mt-3 text-decoration-none d-block">Medical</a>

                        <a href="/Spirituality" className="dropdown-header fw-bold mt-3 text-decoration-none d-block">Spirituality</a>

                        <a href="/wellness" className="dropdown-header fw-bold mt-3 text-decoration-none d-block">Wellness</a>
                      </div>
                    </div>

                  </li>
                </ul>
              </li>

              <li className="nav-item"><a className="nav-link fw-bold nav-hover" href="/about">ABOUT</a></li>
              <li className="nav-item"><a className="nav-link fw-bold nav-hover" href="/blog">BLOG</a></li>
              <li className="nav-item"><a className="nav-link fw-bold nav-hover" href="/contact">CONTACT</a></li>

              {/* Free Consultation */}
              <li className="nav-item">
                <div className="btn btn-free-consult px-4 py-2 fw-bold d-flex flex-column align-items-start gap-1">
                  <span className="d-flex align-items-center gap-2">
                    <i className="bi bi-telephone-fill text-success fs-5"></i>
                    <a href="/free-consultation" className="text-decoration-none text-dark fw-bold">Free Consultation</a>
                  </span>
                  <span className="ps-4 text-nowrap">
                    <a href="tel:919797602332" className="text-decoration-none text-dark">+91 9797602332</a>
                  </span>
                </div>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
