import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css"; // Ensure this contains your custom styles
import "../../assets/css/global.css"; // Ensure this contains global styles
import 'bootstrap/dist/js/bootstrap.bundle.min'; // For Bootstrap's JS functionalities

// Import your images here
import heroImage from "../../assets/image/cs1.jpeg";  // Replace with your actual hero image path
import wordpressBenefitImage from "../../assets/image/why-choose-us.jpg"; // Replace with an image showing WordPress benefits
import designProcessImage from "../../assets/image/why-choose-us.jpg"; // Replace with an image for the design process
import whyChooseUsImage from "../../assets/image/why-choose-us.jpg"; // Replace with an image for why choose Orazweb

const Wordpresswebsite = () => {
  return (
    <>
      <div className="container-fluid p-0">
        {/* Hero Section */}
          <div className='backgroundStyle'>
          <div className='overlayStyle'>
            <h1 className="fw-bold display-5">CUSTOM WORDPRESS WEBSITE DESIGN & DEVELOPMENT</h1>
            <p className="lead">Unlock The Full Potential Of The World's Leading CMS With A Bespoke Online Presence</p>
          </div>
        </div>
  
        {/* Main Content Sections */}
        <div className="container bg-white my-5 p-5">

          {/* Intro Section */}
          <div className="row my-5 text-center">
            <div className="col-12">
              <h1 className="display-4 fw-bold">
                Your Brand Deserves a Digital Powerhouse: Custom WordPress Development by Orazweb Solutions
              </h1>
              <p className="mt-3 text-black">
                Your brand deserves more than just a website. It needs a digital powerhouse – your 24/7 salesperson, trusted storefront, and dynamic brand ambassador. Skimping on your WordPress development? That's like putting the brakes on your business before it even starts.
              </p>
              <p className="text-black">
                At **Orazweb**, we build high-converting, search-optimized WordPress websites that don't just look good; they elevate your brand and drive real, measurable results. Our expert WordPress design and development services go deep. We don't just focus on aesthetics; we engineer websites for peak performance, intuitive usability, and sustainable growth. Whether you're launching fresh or revamping an old site, our team is geared up to deliver.
              </p>
              <p className="text-black">
                From strategic blueprints and responsive designs to powerful SEO and unwavering ongoing support, Orazweb is your full-service WordPress partner. We create seamless brand experiences that transform clicks into loyal customers.
              </p>
            </div>
          </div>

          ---
          {/* What Makes WordPress the Smart Choice? */}
          <div className="row mb-5 align-items-center custom-section">
            <div className="col-md-8">
              <h2 className="mb-4 fw-bold">
                What Makes WordPress the Smart Choice for Your Business?
              </h2>
              <p className="text-black">
                WordPress powers over 43% of the internet for a reason. It's renowned for its user-friendliness and incredible flexibility. Born from a vision to empower free storytelling, WordPress evolved into a robust, open-source Content Management System (CMS) that supports everything from personal blogs to complex enterprise solutions.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  <div><strong>Free Software:</strong> No licensing fees for the core platform.</div>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  <div><strong>Highly Extensible:</strong> Modify and extend its code as needed.</div>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  <div><strong>Commercial Use Ready:</strong> Build anything you imagine for business.</div>
                </li>
              </ul>
              <p className="text-black mt-3">
                Think of **themes** as your website's look and feel, and **plugins** as its powerful added features (like contact forms or SEO tools). While a WordPress designer focuses on your brand's visual appeal, our developers tackle the intricate code to bring it all to life.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img src={wordpressBenefitImage} alt="WordPress Ecosystem" className="img-fluid rounded shadow" />
            </div>
          </div>

       
          {/* Build Any Website Imaginable – With Orazweb's Expertise */}
          <div className="row mb-5 text-center">
            <div className="col-12">
              <h2 className="display-5 fw-bold">
                Build Any Website Imaginable – With Orazweb's Expertise
              </h2>
              <p className="lead text-muted mt-3">
                A WordPress site offers limitless possibilities, but it takes more than drag-and-drop. You need a team that masterfully blends design, strategic thinking, and flawless functionality to realize your vision.
              </p>              <p className="text-black">
                That's where **Orazweb** excels. We're a specialized WordPress design and development agency crafting truly custom websites. Whether you're a budding startup, refreshing your digital face, or scaling up, our team delivers a website that shines and drives targeted engagement.
              </p>
              <p className="text-black">
                We handle everything: sleek, responsive design, powerful integrations, and performance optimization. Your Orazweb WordPress platform will tick every box.
              </p>
              <div className="mt-4">
              </div>
            </div>
          </div>

          {/* Why WordPress is Your Business's Best Friend */}
          <div className="row mb-5 px-5">
            <div className="col-12 text-center custom-section">
              <h2 className="mb-4 fw-bold">
                Why WordPress is Your Business's Best Friend (With Orazweb by Your Side)
              </h2>
              <p className="text-black">
                You know what WordPress is, now let's talk about why it's a game-changer for your business. You don't need to be a tech wizard; you just need the right partner.
              </p>
              <p className="text-black mb-4">
                Anyone can download a theme. But transforming it into a business-driving asset demands expertise. Orazweb's professional WordPress services blend technical mastery with creative vision to build a site that truly converts visitors into customers. Here's why investing in Orazweb's expert WordPress development pays off:
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-primary">
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-infinity me-2"></i>Unrivalled Flexibility
                  </h5>
                  <p className="mb-0 text-muted">
                    Custom layouts, unique functionalities, and extensive theme modifications ensure your brand genuinely stands out. Your site, exactly as you envision it.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-success">
                  <h5 className="fw-bold text-success mb-2">
                    <i className="bi bi-pen-fill me-2"></i>Effortless Content Management
                  </h5>
                  <p className="mb-0 text-muted">
                    Once set up by our pros, updating content, adding pages, or managing your site is a breeze – no coding required. You're in control.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-warning">
                  <h5 className="fw-bold text-warning mb-2">
                    <i className="bi bi-boxes me-2"></i>Powerful Plugin Ecosystem
                  </h5>
                  <p className="mb-0 text-muted">
                    Access to 60,000+ free plugins for endless functionality. Our developers know which ones work best together for optimal performance.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-info">
                  <h5 className="fw-bold text-info mb-2">
                    <i className="bi bi-graph-up me-2"></i>SEO-Ready Foundation
                  </h5>
                  <p className="mb-0 text-muted">
                    WordPress is search-friendly, but Orazweb supercharges it. We optimize site structure, implement schema, and ensure lightning-fast loading speeds for top search rankings.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-danger">
                  <h5 className="fw-bold text-danger mb-2">
                    <i className="bi bi-cash-stack me-2"></i>Cost & Time Efficiency
                  </h5>
                  <p className="mb-0 text-muted">
                    Compared to DIY, our WordPress experts deliver an optimized site faster and often more affordably, unlocking your website's full potential.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
            </div>
          </div>

        
          {/* Our Results-Driven WordPress Services / Orazweb's Comprehensive WordPress Toolkit */}
          <div className="row mb-5" id="ourServices">
            <div className="col-12 text-center">
              <h2 className="mb-4 fw-bold">
                Orazweb's Comprehensive WordPress Toolkit: Attract More Customers
              </h2>
              <p className="lead text-muted">
                At Orazweb, we build user-experience (UX) focused WordPress websites that connect with your audience and align with your business goals. Every element we implement is purposeful, driving maximum return on your investment. We’ll show you how to design a WordPress site that truly engages your audience. From a small business to a large enterprise, we manage your project efficiently, from concept to launch.
              </p>
            </div>

            <div className="row g-4 mt-4 px-5">
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#f0f9ff' }}>
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-laptop me-2 text-primary"></i>Professional WordPress Design & Development
                  </h5>
                  <p className="text-muted mb-0">
                    We craft digital experiences that drive measurable results, starting with a deep dive into your brand vision.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#fff8e1' }}>
                  <h5 className="fw-bold text-warning mb-2">
                    <i className="bi bi-tools me-2 text-warning"></i>WordPress Management & Maintenance
                  </h5>
                  <p className="text-muted mb-0">
                    Leave the heavy lifting to us. We proactively manage updates, security, optimization, and regular backups, ensuring your site runs perfectly 24/7.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#e6f5ea' }}>
                  <h5 className="fw-bold text-success mb-2">
                    <i className="bi bi-pencil-square me-2 text-success"></i>Content Writing for WordPress
                  </h5>
                  <p className="text-muted mb-0">
                    Data-driven content (blogs, service pages) that supports your SEO goals and builds trust with your readers, seamlessly integrated into your WordPress site.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#fceef5' }}>
                  <h5 className="fw-bold text-danger mb-2">
                    <i className="bi bi-graph-up-arrow me-2 text-danger"></i>Advanced WordPress SEO
                  </h5>
                  <p className="text-muted mb-0">
                    Beyond basics. We conduct deep competitor analysis, regular audits, and adapt strategies for algorithm updates to boost your search rankings.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#e0f7fa' }}>
                  <h5 className="fw-bold text-info mb-2">
                    <i className="bi bi-percent me-2 text-info"></i>Conversion Rate Optimization (CRO)
                  </h5>
                  <p className="text-muted mb-0">
                    We fine-tune every touchpoint for maximum usability and lead generation. Expect improved conversion rates through analytics, heat mapping, and A/B testing.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#f9fbe7' }}>
                  <h5 className="fw-bold text-secondary mb-2">
                    <i className="bi bi-speedometer me-2 text-secondary"></i>Technical WordPress SEO & Core Web Vitals
                  </h5>
                  <p className="mb-0 text-muted">
                    Auditing header tags, URL structures, image alt attributes, and sitemaps. We optimize Core Web Vitals for speed and mobile-friendliness.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#f3e5f5' }}>
                  <h5 className="fw-bold text-dark mb-2">
                    <i className="bi bi-cloud-fill me-2 text-dark"></i>WordPress Website Hosting
                  </h5>
                  <p className="text-muted mb-0">
                    Competitive pricing includes premium hosting with high-speed servers, enhanced security, and reliable uptime. Fully managed so you can focus on your business.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#ede7f6' }}>
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-universal-access me-2 text-primary"></i>ADA Compliance Services
                  </h5>
                  <p className="text-muted mb-0">
                    We ensure strict adherence to accessibility standards (keyboard navigation, screen reader compatibility, alt text, color contrast) for inclusive user experiences.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#f0f4f7' }}>
                  <h5 className="fw-bold text-dark mb-2">
                    <i className="bi bi-camera-video-fill me-2 text-dark"></i>Video Production & Integration
                  </h5>
                  <p className="text-muted mb-0">
                    End-to-end video content creation – from script to final edit – seamlessly integrated into your WordPress site for maximum engagement.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#ffebee' }}>
                  <h5 className="fw-bold text-danger mb-2">
                    <i className="bi bi-shield-lock-fill me-2 text-danger"></i>WordPress Website Audit & Security
                  </h5>
                  <p className="text-muted mb-0">
                    Comprehensive audits to uncover vulnerabilities, performance bottlenecks, and SEO issues. We offer free malware removal and proactive scans.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
            </div>
          </div>

          
          {/* Why Partner with Orazweb? */}
          <div className="row mb-5">
            <div className="col-12 text-center custom-section">
              <h2 className="mb-4 fw-bold">
                Why Partner with Orazweb? Your Digital Success Partner
              </h2>
              <p className="text-black">
                To truly stand out online in today's Indian market and beyond, you need more than just standard templates. Your competitors are likely leveraging expert agencies – and so should you. Here's the **Orazweb advantage**:
              </p>
            </div>

            <div className="row g-4 mt-2 px-5">
              <div className="col-md-6">
                <div className="p-4 bg-light border-start border-5 border-primary rounded shadow-sm h-100">
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-lightning-charge-fill me-2 text-warning"></i>Maximum Efficiency
                  </h5>
                  <p className="mb-0 text-muted">
                    Years of experience mean faster development, higher quality, and quicker launches. Get to market sooner with your top-tier WordPress site.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 bg-light border-start border-5 border-success rounded shadow-sm h-100">
                  <h5 className="fw-bold text-success mb-2">
                    <i className="bi bi-palette-fill me-2 text-warning"></i>Custom Design Excellence
                  </h5>
                  <p className="mb-0 text-muted">
                    We don't just build sites; we craft your brand's ultimate online representation. Expect a high-performing WordPress site that genuinely engages.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 bg-light border-start border-5 border-warning rounded shadow-sm h-100">
                  <h5 className="fw-bold text-warning mb-2">
                    <i className="bi bi-shield-check-fill me-2 text-warning"></i>Worry-Free Management
                  </h5>
                  <p className="mb-0 text-muted">
                    From staging sites for previews to dedicated support and proactive maintenance, we handle the tech so you can focus on your core business.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 bg-light border-start border-5 border-info rounded shadow-sm h-100">
                  <h5 className="fw-bold text-info mb-2">
                    <i className="bi bi-headset-fill me-2 text-warning"></i>Multi-Layered Support
                  </h5>
                  <p className="mb-0 text-muted">
                    Holistic approach encompassing design, robust SEO foundation, lightning-fast speeds, and mobile-responsiveness – all simultaneously managed by our experts.
                  </p>
                </div>
              </div>

              <div className="col-12 text-center mt-5">
                <p className="lead fw-semibold">
                  At <span className="text-primary">Orazweb Solutions</span>, your WordPress website is a critical business asset. We're here to exceed your expectations, developing a platform that becomes your true competitive advantage.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Orazweb: Your Digital Success Partner (Detailed) */}
          <div className="row mb-5 px-5">
            <div className="col-12 text-center custom-section">
              <h2 className="mb-4 fw-bold">
                Why Orazweb is Your Ultimate Digital Success Partner
              </h2>
              <p className="text-black">
                We're passionate about creating digital experiences that captivate your audience and drive measurable growth. Partnering with Orazweb means gaining a creative force dedicated to transforming your WordPress website into a lead-generating, customer-converting machine.
              </p>
              <p className="text-black mb-4">
                What sets Orazweb apart:
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="p-4 bg-soft-primary border rounded-4 h-100 shadow-sm">
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-lightbulb-fill me-2"></i>Beyond Just WordPress
                  </h5>
                  <p className="mb-0 text-muted">
                    We offer comprehensive digital marketing (SEO, PPC, social media) that aligns perfectly with your website, delivering a holistic strategy.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 bg-soft-secondary border rounded-4 h-100 shadow-sm">
                  <h5 className="fw-bold text-secondary mb-2">
                    <i className="bi bi-person-fill me-2"></i>Client-Centric Strategies
                  </h5>
                  <p className="mb-0 text-muted">
                    Every project starts by understanding your goals, your audience, and your brand personality, ensuring authentic and high-converting results.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 bg-soft-info border rounded-4 h-100 shadow-sm">
                  <h5 className="fw-bold text-info mb-2">
                    <i className="bi bi-cart-check-fill me-2"></i>Sales-Focused Design
                  </h5>
                  <p className="mb-0 text-muted">
                    We're masters at driving sales. Expect clear CTAs, simplified navigation, and continuous A/B testing to maximize your profits.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 bg-soft-warning border rounded-4 h-100 shadow-sm">
                  <h5 className="fw-bold text-warning mb-2">
                    <i className="bi bi-bar-chart-fill me-2"></i>Superior Website Analytics
                  </h5>
                  <p className="mb-0 text-muted">
                    Advanced tracking (Google Analytics 4, heatmaps, user behavior) means you make data-backed decisions for ongoing success.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 bg-soft-success border rounded-4 h-100 shadow-sm">
                  <h5 className="fw-bold text-success mb-2">
                    <i className="bi bi-arrow-clockwise me-2"></i>Always Ahead of the Curve
                  </h5>
                  <p className="mb-0 text-muted">
                    Our experts stay updated on the latest trends, software updates, ADA guidelines, and algorithm changes, keeping your brand at the forefront.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="p-4 bg-soft-danger border rounded-4 h-100 shadow-sm">
                  <h5 className="fw-bold text-danger mb-2">
                    <i className="bi bi-handshake-fill me-2"></i>Your Long-Term Partner
                  </h5>
                  <p className="mb-0 text-muted">
                    Our job extends beyond launch. We offer ongoing maintenance, support, and optimization, ensuring your digital presence remains sharp and successful.
                  </p>
                </div>
              </div>
            </div>
          </div>

        
          {/* Our Streamlined WordPress Process */}
          <div className="row mb-5 text-center">
            <div className="col-12">
              <h2 className="display-5 fw-bold">
                Our Streamlined WordPress Process
              </h2>
              <p className="lead text-muted mt-3">
                Ready to get started? Partnering with Orazweb means a top-tier client experience and meaningful results.
              </p>
            </div>
            <div className="row g-4 mt-2 justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-primary">
                  <h5 className="fw-bold text-primary mb-2"><i className="bi bi-search me-2"></i>Discovery & Recommendations</h5>
                  <p className="mb-0 text-muted">We deep-dive into your goals and provide expert recommendations for your WordPress solution.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-success">
                  <h5 className="fw-bold text-success mb-2"><i className="bi bi-people-fill me-2"></i>Scope & Team Assembly</h5>
                  <p className="mb-0 text-muted">We define your project scope and bring together the perfect team of WordPress experts.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-warning">
                  <h5 className="fw-bold text-warning mb-2"><i className="bi bi-rocket-fill me-2"></i>Project Delivery</h5>
                  <p className="mb-0 text-muted">Your dedicated project manager ensures seamless service delivery and timely launch.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-info">
                  <h5 className="fw-bold text-info mb-2"><i className="bi bi-key-fill me-2"></i>Full Control & Partnership</h5>
                  <p className="mb-0 text-muted">You gain complete administrative access, and we stay in touch, offering reliable support for continued success.</p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <p className="lead fw-semibold">
                Once live, our WordPress maintenance services ensure your website is always operational and looking its best. Trust Orazweb; focus on your core business.
              </p>
            </div>
          </div>

          {/* Contact Form Section (using same structure as "book consultation") */}
          <div className="row mb-5 justify-content-center" id="contactForm">
            <div className="col-md-10 col-lg-8">
              <div className="p-5 rounded-4 shadow bg-light border border-0">
                <h2 className="mb-4 text-center primary-text-cl fw-bold" style={{ fontSize: '1.8rem' }}>
                  Ready for a Website That Works as Hard as You Do? Get Your Free Proposal!
                </h2>
                <p className="text-center text-muted mb-4" style={{ fontSize: '1rem' }}>
                  Let's collaborate and bring your vision to life. Fill out the form and our team will get in touch shortly.
                </p>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" className="form-control rounded-3" placeholder="First Name *" required />
                    </div>

                    <div className="col-md-6">
                      <input type="text" className="form-control rounded-3" placeholder="Last Name *" required />
                    </div>

                    <div className="col-md-6">
                      <input type="text" className="form-control rounded-3" placeholder="Company / Organization *" required />
                    </div>

                    <div className="col-md-6">
                      <input type="url" className="form-control rounded-3" placeholder="Website (optional)" />
                    </div>

                    <div className="col-md-6">
                      <input type="email" className="form-control rounded-3" placeholder="Email Address *" required />
                    </div>

                    <div className="col-md-6">
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0 rounded-start-3">+91</span>
                        <input type="tel" className="form-control rounded-end-3" placeholder="Phone Number *" required />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <select className="form-select rounded-3" required>
                        <option value="">Select Service *</option>
                        <option>WordPress Website Design & Development</option>
                        <option>Custom Web Design & Development</option>
                        <option>E-commerce Solutions</option>
                        <option>SEO & Digital Marketing</option>
                        <option>Branding & Graphic Design</option>
                        <option>Mobile App Development</option>
                      </select>
                    </div>

                    <div className="col-md-6">
                      <select className="form-select rounded-3">
                        <option value="">Company Size</option>
                        <option>1-10</option>
                        <option>11-50</option>
                        <option>51-200</option>
                        <option>201-500</option>
                        <option>500+</option>
                      </select>
                    </div>

                    <div className="col-md-12">
                      <input type="text" className="form-control rounded-3" placeholder="How did you hear about Orazweb?" />
                    </div>

                    <div className="col-md-12">
                      <textarea className="form-control rounded-3" rows="4" placeholder="Tell us about your business..."></textarea>
                    </div>
                  </div>

                  <div className="d-grid mt-4">
                    <button type="submit" className="btn btn-primary btn-lg rounded-3">
                      Submit Request
                    </button>
                  </div>

                  <p className="text-center text-muted mt-4 mb-0">
                    In a hurry? Call us now at <a href="tel:9797602332" className="fw-semibold text-decoration-none text-primary">9797602332</a>
                  </p>
                </form>
              </div>
            </div>
          </div>

        </div> {/* End of main content container */}
      </div> {/* End of container-fluid */}

      {/* FAQ Section */}
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="mb-4 fw-bold text-center">
            <i className="bi bi-question-circle-fill me-2 "></i>
            WordPress Website Design & Development FAQs
          </h2>

          <div className="accordion" id="faqAccordion">
            {[
              {
                id: "faq1",
                question: "WHAT MAKES WORDPRESS A GOOD CHOICE FOR MY WEBSITE?",
                answer:
                  "WordPress is flexible, user-friendly, incredibly powerful with plugins, and inherently SEO-friendly, making it ideal for businesses seeking growth and control. Its vast ecosystem supports everything from simple blogs to complex e-commerce platforms and enterprise solutions.",
              },
              {
                id: "faq2",
                question: "DO YOU CREATE CUSTOM WORDPRESS THEMES OR USE PRE-BUILT TEMPLATES?",
                answer:
                  "We primarily focus on **custom WordPress website design and development** to ensure your site is unique, perfectly aligns with your brand, and delivers optimal performance tailored to your specific needs. While we understand the appeal of pre-built templates, our custom approach guarantees a site that truly stands out and evolves with your business.",
              },
              {
                id: "faq3",
                question: "HOW LONG DOES IT TYPICALLY TAKE TO COMPLETE A WORDPRESS WEBSITE PROJECT?",
                answer:
                  "Project timelines vary based on complexity, specific features required, content readiness, and client feedback cycles. After a detailed discovery call where we understand your vision, we'll provide a clear, realistic timeline for your specific WordPress project.",
              },
              {
                id: "faq4",
                question: "WHAT TYPES OF BUSINESSES BENEFIT MOST FROM YOUR WORDPRESS WEB DESIGN SERVICES?",
                answer:
                  "Our WordPress web design services cater to a diverse range of businesses. From **small businesses and startups** needing a strong initial online presence, to **growing companies** seeking robust lead generation, to **large enterprises and e-commerce stores** requiring scalable and high-performance solutions, any business aiming for powerful online visibility and efficient content management benefits greatly from our expertise.",
              },
              {
                id: "faq5",
                question: "WILL I BE ABLE TO EDIT AND MANAGE MY WEBSITE AFTER IT’S BUILT?",
                answer:
                  "Absolutely! WordPress is renowned for its user-friendly interface. Once your custom site is built and launched, we'll provide comprehensive training and full administrative access, so you can easily update content, add new pages, manage blog posts, and maintain your site without needing any coding knowledge.",
              },
              {
                id: "faq6",
                question: "WILL MY WORDPRESS WEBSITE BE MOBILE-FRIENDLY?",
                answer:
                  "Yes, without a doubt. Every WordPress website we build is designed and developed to be **fully responsive**. This ensures your site looks and functions perfectly across all devices – from desktops and laptops to tablets and mobile phones – providing an optimal user experience regardless of screen size.",
              },
              {
                id: "faq7",
                question: "DO YOU OFFER WORDPRESS SEO SERVICES?",
                answer:
                  "Yes, our comprehensive WordPress services include **advanced SEO strategies**. We go beyond basic optimization, covering everything from technical SEO (site structure, speed, mobile-friendliness) to on-page content optimization and local SEO, to ensure your site ranks high on search engines and attracts your target audience.",
              },
              {
                id: "faq8",
                question: "CAN YOUR WORDPRESS WEB DESIGNER REDESIGN MY EXISTING SITE?",
                answer:
                  "Definitely! We specialize in **WordPress redesigns**. Our team can transform outdated or underperforming existing websites into modern, high-performing, and engaging digital experiences, while carefully retaining and enhancing your core brand identity.",
              },
              {
                id: "faq9",
                question: "CAN YOU HELP MIGRATE MY EXISTING SITE TO WORDPRESS?",
                answer:
                  "Yes, we provide **secure and seamless migration services**. Our experts carefully plan and execute the transfer of your existing website's content, data, and functionality to a new, optimized WordPress platform with minimal downtime and data loss.",
              },
              {
                id: "faq10",
                question: "CAN YOU INTEGRATE THIRD-PARTY TOOLS AND SERVICES WITH MY WORDPRESS WEBSITE?",
                answer:
                  "Absolutely. We can integrate a wide range of **third-party tools and services** with your WordPress website. This includes CRM systems, various payment gateways, marketing automation platforms, custom APIs, and other essential business tools to enhance your website's functionality and streamline your operations.",
              },
            ].map(({ id, question, answer }, index) => (
              <div className="accordion-item" key={id}>
                <div className='container'>
                  <h3 className="accordion-header fs-1rem text-black" id={`heading${id}`}>
                    <button
                      className="accordion-button collapsed fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${id}`}
                      aria-expanded="false"
                      aria-controls={`collapse${id}`}
                    >
                      {question}
                    </button>
                  </h3>
                  <div
                    id={`collapse${id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`heading${id}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body secondary-bg text-muted">
                      {answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wordpresswebsite;