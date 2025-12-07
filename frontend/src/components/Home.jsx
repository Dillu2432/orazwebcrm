import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/home.css';
import '../assets/css/global.css';
import logo from '../assets/image/logo.png';
import { Container } from 'react-bootstrap';
import { motion, AnimatePresence, useInView } from "framer-motion";

import imgSEO from '../assets/image/server1.jpg';
import imgPPC from '../assets/image/server2.jpeg';
import imgSocial from '../assets/image/server3.jpg';
import imgAds from '../assets/image/server4.jpg';
import imgWeb from '../assets/image/server5.jpg';
import about from '../assets/image/weaare.png';
import video from '../assets/image/homeoraz.mp4';
import banner from '../assets/image/banner2.png';
// Star rating component
const StarRating = ({ stars = 5 }) => (
  <div className="mb-3 text-warning">
    {Array.from({ length: stars }, (_, i) => (
      <i key={i} className="bi bi-star-fill me-1"></i>
    ))}
  </div>
);

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const testimonials = [
    {
      name: "Anjali Sharma",
      role: "CEO, BrightTech",
      review: "Orazweb transformed our online presence. Their SEO and website redesign boosted our traffic and conversions drastically!",
      stars: 5,
    },
    {
      name: "Rajeev Mehta",
      role: "Founder, MyFashionCart",
      review: "Excellent support and communication throughout the project. Their team is creative, responsive, and results-driven.",
      stars: 4,
    },
    {
      name: "Priya Kapoor",
      role: "Marketing Lead, EduNext",
      review: "We loved working with Orazweb! Their understanding of social media marketing helped us grow brand awareness fast.",
      stars: 5,
    },
  ];

  const services = [
    {
      title: "Search Engine Optimization",
      color: "linear-gradient(135deg, #c3ecf7, #a0d8ef)",
      items: [
        { label: "Local SEO", link: "/services/local-seo" },
        { label: "Technical SEO", link: "/services/technical-seo" },
        { label: "SEO Audit", link: "/services/seo-audit" },
      ],
    },
    {
      title: "Pay Per Click (PPC) Marketing",
      color: "linear-gradient(135deg, #fde2e4, #f9c5d1)",
      items: [
        { label: "Search Engine Marketing (SEM)", link: "/services/sem" },
        { label: "Google Ads Management", link: "/services/google-ads" },
        { label: "YouTube Management", link: "/services/youtube-ads" },
      ],
    },
    {
      title: "Social Media Marketing",
      color: "linear-gradient(135deg, #f3f9d2, #cdeac0)",
      items: [
        { label: "Social Media Management", link: "/services/smm" },
        { label: "Franchise Social Media", link: "/services/franchise-smm" },
        { label: "Enterprise Social Media", link: "/services/enterprise-smm" },
      ],
    },
    {
      title: "Social Media Advertising",
      color: "linear-gradient(135deg, #fff6e0, #fdd9a0)",
      items: [
        { label: "Facebook", link: "/services/facebook-ads" },
        { label: "LinkedIn", link: "/services/linkedin-ads" },
        { label: "Instagram", link: "/services/instagram-ads" },
      ],
    },
    {
      title: "Web Design & Development",
      color: "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
      items: [
        { label: "Branding Service", link: "/services/branding" },
        { label: "Custom Website", link: "/services/custom-website" },
        { label: "Web Designing", link: "/services/web-designing" },
        { label: "WordPress Website", link: "/services/wordpress" },
        { label: "Shopify Website", link: "/services/shopify" },
        { label: "Ecommerce Website", link: "/services/ecommerce" },
      ],
    },
  ];


  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Banner */}
      <section style={{ backgroundColor: '#f4f4f4', padding: '0' }}>
        <img
          src={banner}
          alt="Homepage Banner"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </section>

      {/* About Section */}
      <section className="about-section py-5" ref={ref}>
        <div className="container">
          <motion.h1
            className="text-center fs-5rem fw-bold mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            ABOUT US
          </motion.h1>

          <div className="row align-items-center">
            <motion.div
              className="col-md-6 mb-4 mb-md-0"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img src={about} alt="About Orazweb" className="img-fluid" />
            </motion.div>

            <motion.div
              className="col-md-6"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="fs-4">
                At Orazweb Solutions, we are a passionate team of digital creators, strategists, and problem-solvers committed to crafting innovative web experiences, driving growth, and helping businesses thrive online.
              </p>
              <p className="fs-4">
                Our dedicated team specializes in web development, app development, and digital marketing. We pride ourselves on delivering top-quality services that drive engagement and growth for all types of businesses.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="about-section bg-light" id='services '>
        <div className="container">
          <motion.h1
            className="text-center fs-5rem fw-bold mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h1>

          <div className="d-flex flex-wrap justify-content-center gap-1">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="flip-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flip-card-inner" style={{ background: service.color }}>
                  <div className="flip-card-front d-flex align-items-center justify-content-center fs-4 fw-bold text-center p-3">
                    {service.title}
                  </div>
                  <div className="flip-card-back d-flex flex-column justify-content-center text-dark p-3">
                    <ul className="service-list mb-0">
                      {service.items.map((item, i) => (
                        <li key={i}>
                          <i className="bi bi-check-circle-fill me-2 text-success"></i>
                          <a href={item.link} className="text-decoration-none text-dark hover-link">
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className=" bg-light">
        <div className="container text-center">

          <motion.h1
            className="text-center fs-5rem fw-bold mb-5"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h1>

          <div className="position-relative mx-auto" style={{ maxWidth: "700px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className="p-4"
              >
                <StarRating stars={testimonials[current].stars} />
                <p className="mb-4 fs-3 fst-italic">"{testimonials[current].review}"</p>
                <h5 className="mb-1 fs-5 fw-semibold">{testimonials[current].name}</h5>
                <small className="text-muted fs-5">{testimonials[current].role}</small>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      <section className="py-5 bg-white">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <h2 className="display-5 fw-bold text-primary">50+</h2>
              <p className="mb-0 text-muted">Projects</p>
              <p className="text-muted">Completed</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h2 className="display-5 fw-bold text-success">10+</h2>
              <p className="mb-0 text-muted">Retainers</p>
              <p className="text-muted">Serviced</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h2 className="display-5 fw-bold text-info">50+</h2>
              <p className="mb-0 text-muted">Happy</p>
              <p className="text-muted">Customers</p>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <h2 className="display-5 fw-bold text-warning">2</h2>
              <p className="mb-0 text-muted">Years</p>
              <p className="text-muted">Experience</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
