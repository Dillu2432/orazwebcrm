import React, { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../assets/css/global.css';
import '../assets/css/about.css';

import weare from '../assets/image/weaare.png';
import pic1 from '../assets/image/ruhipic.jpeg';
import pic2 from '../assets/image/pic2.jpg';
import image1 from '../assets/image/blackboard.jpeg';
import image2 from '../assets/image/typist.jpeg';
import image3 from '../assets/image/dms.jpeg';
import logoabout from '../assets/image/aboutlog.png'

import { FloatingWhatsApp } from 'react-floating-whatsapp';

const About = () => {

  const categories = [
    {
      name: "Innovative Designs",
      color: "linear-gradient(135deg, #fceabb, #f8b500)",
      description:
        "We create visually stunning, user-friendly websites that leave a lasting impression and reflect your brand identity with precision."
    },
    {
      name: "SEO & Growth-Driven Strategies",
      color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
      description:
        "Our digital marketing approach is backed by data and trends. We help your brand climb search rankings and connect with the right audience effectively."
    },
    {
      name: "Expert Developers & Marketers",
      color: "linear-gradient(135deg, #f6d365, #fda085)",
      description:
        "Our team is made up of passionate professionals who specialize in frontend/backend development, branding, content strategy, and performance marketing."
    },
    {
      name: "24/7 Dedicated Support",
      color: "linear-gradient(135deg, rgb(176, 228, 252), rgb(125, 162, 254))",
      description:
        "We’re here for you — always. Whether it’s technical support or consultation, we provide responsive and reliable assistance whenever you need it."
    },
    {
      name: "Tailored Solutions",
      color: "linear-gradient(135deg, #d5fefd, #80ced6)",
      description:
        "We don’t believe in one-size-fits-all. Every project we handle is personalized to meet your business goals and audience needs."
    },
    {
      name: "Transparent Communication",
      color: "linear-gradient(135deg, #ffd3a5, #fd6585)",
      description:
        "From onboarding to delivery, we keep you in the loop — because great collaboration builds great results."
    }
  ];

  return (

    <div className="home-page">

      {/* Welcome Section */}
      <section className="welcome-section">
        <h5 className="fade-in">Welcome to</h5>
        <h1 className="slide-up">Orazweb Solutions</h1>
      </section>

      {/* About Section */}
      <section className="px-5">
        <div className="row align-items-center">
          <div className="col-12 mb-4">
            <h2 className="fs-5rem text-start">WHO WE ARE?</h2>
          </div>

          <div className="col-md-6 mb-4 mb-md-0">
            <img src={weare} alt="Orazweb Team at Work" className="img-fluid rounded" />
          </div>

          <div className="col-md-6">
            <p className="fs-3 text-start">
              At <strong>Orazweb Solutions</strong>, we are a passionate team of digital creators, strategists, and problem-solvers...
            </p>
            <p className="fs-3 text-start">
              From designing beautiful, responsive websites to executing result-driven SEO and digital marketing campaigns...
            </p>
            <p className="fs-3 text-start">
              What sets us apart is our commitment to understanding your brand’s vision...
            </p>
            <p className="fs-3 text-start">
              At Orazweb Solutions, we believe in the power of innovation, clean code, compelling design...
            </p>
            <p className="fs-3 text-start">
              Let us turn your digital dream into a reality.
            </p>
          </div>
        </div>
      </section>
      {/* About Section */}
<section className="px-5 py-5">
  <div className="row align-items-center">
    <div className="col-12 mb-4">
      <h2 className="fs-5rem text-start">
        The Story Behind Our Logo
      </h2>
    </div>

    <div className="col-md-4 mb-4 mb-md-0">
      <img 
        src={logoabout} 
        alt="Orazweb Team at Work" 
        className="img-fluid rounded shadow" 
      />
    </div>

    <div className="col-md-8">
      <h2 className="fs-3rem text-start">
        The Story Behind Our Logo – Where Ancient Wisdom Meets Digital Innovation
      </h2>
      <p className="fs-3 text-start text-muted">
        The <strong>Orazweb Solutions logo</strong>, inspired by 
        <strong> Wepwawet — the legendary “Opener of the Ways”</strong>, 
        is a powerful emblem of vision, strength, and transformation. 
        Just as Wepwawet guided explorers through uncharted paths, 
        our logo reflects our mission to lead brands boldly into the 
        digital future. With its <strong>bold, modern design and earthy 
        green tones</strong>, it symbolizes growth, innovation, and trust, 
        embodying our promise to break barriers, unlock opportunities, 
        and create purposeful digital journeys that stand the test of time.
      </p>
    </div>
  </div>
</section>


      {/* Why Choose Us */}
      <section className="why-us-section py-5">

        <h2 className="mb-5 fs-5rem text-start">Why Choose Us?</h2>

        <div className="d-flex flex-wrap gap-4 justify-content-center py-5">
          {categories.map((item, index) => (
            <div
              key={index}
              className="category-box-about"
              style={{ background: item.color }}
            >
              <span className="circle-text">{item.name}</span>
              <p className=' fs-4 text-dark'>{item.description}</p>
            </div>
          ))}
        </div>

      </section>
      <section className="py-5 bg-light">
        <div className="container">

          <div className="row g-4">
            <div className="col-md-4 text-center">
              <img
                src={image1}
                alt="Project 1"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-4 text-center">
              <img
                src={image2}
                alt="Project 2"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-4 text-center">
              <img
                src={image3}
                alt="Project 3"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="founder-section py-5 bg-light">
  <div className="container">
    <h2 className="mb-5 fs-5rem text-start">
      Founders' Message
    </h2>

    {/* Founder */}
    <div className="row g-5 align-items-center mb-5">
      {/* <div className="col-md-6 text-center">
        <img
          src={pic2}
          alt="Founder"
          className="rounded-circle shadow mb-3"
          style={{ width: '260px', height: '260px', objectFit: 'cover' }}
        />
        <h4 className="mb-3 fw-semibold">From the Founder</h4>
      </div> */}
      {/* <div className="col-md-6">
        <p className="fs-3 lh-lg text-muted">
          "Orazweb Solutions was born out of a vision to simplify digital growth 
          for businesses. In a world where online presence defines success, we aim 
          to offer not just services, but real value — rooted in innovation, 
          integrity, and performance. Every line of code and every pixel we design 
          is part of your journey toward a stronger brand."
        </p>
        <p className="fw-semibold text-secondary fs-4 mt-3">
          — Dilbagh Singh, Founder, Orazweb Solutions
        </p>
      </div> */}
    </div>

    {/* Co-Founder */}
    <div className="row g-5 align-items-center flex-md-row-reverse">
      <div className="col-md-6 text-center">
        <img
          src={pic1}
          alt="Co-Founder"
          className="rounded-circle shadow mb-3"
          style={{ width: '260px', height: '260px', objectFit: 'cover' }}
        />
        <h4 className="mb-3 fw-semibold">From the Co-Founder</h4>
      </div>
      <div className="col-md-6">
        <p className="fs-3 lh-lg text-muted">
          "What sets Orazweb apart is our client-first mindset. We believe every 
          brand has a story — and our goal is to bring that story to life digitally. 
          With the right blend of strategy, creativity, and technology, we help 
          businesses evolve into digital leaders. Our partnership with you is built 
          on trust, quality, and results."
        </p>
        <p className="fw-semibold text-secondary fs-4 mt-3">
          — Rushal Manhas, Co-Founder, Orazweb Solutions
        </p>
      </div>
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

      {/* <section className="welcome-section py-5">
 <div className="row text-center">
  <div className='col-md-6'>
    <h3 className="text-center mb-4">Write to Us</h3>
    <form className="row g-3">
      <div className="col-md-6">
        <label htmlFor="fullName" className="form-label">Full Name</label>
        <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required />
      </div>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">Email Address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
      </div>
      <div className="col-md-6">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input type="text" className="form-control" id="subject" placeholder="Subject" />
      </div>
      <div className="col-md-6">
        <label htmlFor="date" className="form-label">Date (MM/DD/YY)</label>
        <input type="date" className="form-control" id="date" />
      </div>
      <div className="col-12">
        <label htmlFor="message" className="form-label">Your Message</label>
        <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..." required></textarea>
      </div>
      <div className="col-12 text-center">
        <button type="submit" className="btn btn-primary px-5">Submit</button>
      </div>
    </form>
    </div>
  </div>
</section> */}

    </div >
  );
};

export default About;
