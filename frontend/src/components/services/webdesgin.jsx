import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css"; // Ensure this contains your custom styles
import "../../assets/css/global.css"; // Ensure this contains global styles
import 'bootstrap/dist/js/bootstrap.bundle.min'; // For Bootstrap's JS functionalities

// Import your images here
import heroImage from "../../assets/image/cs1.jpeg"; // Replace with your actual hero image path
import digitalHqImage from "../../assets/image/cs1.jpeg"; // Image representing digital HQ
import webDesignBenefits from "../../assets/image/cs1.jpeg"; // Image showing web design advantages
import streamlinedProcessImage from "../../assets/image/cs1.jpeg"; // Image for the streamlined process

const CustomWebDesign = () => {
  return (
    <>
      <div className="container-fluid p-0">
         <div className='backgroundStyle'>
          <div className='overlayStyle'>
            <h1 className="fw-bold display-5">CUSTOM WEB DESIGN & DEVELOPMENT SOLUTIONS</h1>
            <p className="lead">Crafting High-Converting, Search-Optimized Digital Platforms</p>
          </div>
        </div>
        {/* Hero Section */}
       

        {/* Main Content Sections */}
        <div className="container bg-white my-5 p-5">

          {/* Intro Section */}
          <div className="row my-5 text-center">
            <div className="col-12">
              <h1 className="display-4 fw-bold">
                Custom Web Design & Development Solutions for Orazweb
              </h1>
              <p className="mt-3 text-black">
                Your website isn't just a digital brochure. It's your 24/7 salesperson, bustling storefront, friendly receptionist, and powerful brand ambassador, all rolled into one. Cutting corners with your web design is like hitting the brakes on your business before it even starts.
              </p>
              <p className="text-black">
                At **Orazweb**, we don't just build websites; we craft high-converting, search-optimized digital platforms that elevate your brand, connect with your audience, and drive tangible results.
              </p>
              <p className="text-black">
                **Orazweb's** professional web design and development services go beyond just looking good. We engineer websites for peak performance, intuitive user experience, and sustainable growth. Whether you're launching a new venture or revamping an outdated online presence, our expert team is ready to deliver.
              </p>
              <p className="text-black">
                From strategic planning and responsive design to powerful SEO optimization and unwavering ongoing support, Orazweb is your full-service web design partner. We create seamless digital experiences that transform casual visitors into loyal customers.
              </p>
            </div>
          </div>

          ---
          {/* Why Professional Web Design is Crucial for Your Business */}
          <div className="row mb-5 align-items-center custom-section">
            
              <h2 className="mb-4 fw-bold">
                Why Professional Web Design is Crucial for Your Business
              </h2>
              <p className="text-black">
                In today's competitive market, a generic online presence won't cut it. Your website is often the first impression and the central hub of your digital strategy. It needs to reflect your unique brand and actively work to attract, engage, and convert your ideal customers.
              </p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  <div><strong>Your Digital HQ:</strong> It's where customers learn about you, interact with your brand, and make purchasing decisions.</div>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  <div><strong>24/7 Availability:</strong> Your website works tirelessly, informing and converting leads even when you're not.</div>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  <div><strong>Credibility & Trust:</strong> A well-designed, professional website builds immediate credibility with your audience.</div>
                </li>
                <li className="d-flex align-items-start mb-2">
                  <i className="bi bi-check-circle-fill text-primary me-2"></i>
                  <div><strong>Competitive Edge:</strong> Stand out from the crowd with a site that truly represents your brand's unique value.</div>
                </li>
              </ul>
              <p className="text-black mt-3">
                At **Orazweb**, we transform standard sites into business-driving assets. Our professional web design services combine technical know-how with creative vision to build platforms that genuinely convert visitors into customers.
              </p>
           
           
          </div>

          {/* Build Any Website Imaginable – With Orazweb's Expertise */}
          <div className="row mb-5 text-center">
            <div className="col-12">
              <h2 className="display-5 fw-bold">
                Build Any Website Imaginable – With Orazweb's Expertise
              </h2>
              <p className="lead text-muted mt-3">
                The possibilities for your website are limitless, but creating a truly impactful online presence demands more than just basic tools. You need an expert team that can strategically blend design, cutting-edge technology, and seamless functionality to bring your vision to life.
              </p>
              <p className="text-black">
                That's where **Orazweb** excels. We're a specialized web design and development agency crafting truly custom websites. Whether you're launching a new business, refreshing your digital face, or scaling up, our team delivers a website that shines and drives targeted engagement.
              </p>
              <p className="text-black">
                We handle everything: sleek, responsive design, powerful integrations, and performance optimization. Your Orazweb platform will tick every box for your digital success.
              </p>
              
            </div>
          </div>

         
          {/* The Orazweb Advantage: Why Invest in Expert Web Design */}
          <div className="row mb-5 px-5">
            <div className="col-12 text-center custom-section">
              <h2 className="mb-4 fw-bold">
                The Orazweb Advantage: Why Invest in Expert Web Design
              </h2>
              <p className="text-black">
                Here's why partnering with Orazweb for your web design needs pays off:
              </p>
            </div>

            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-primary">
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-pencil-square me-2"></i>Custom Solutions & Scalability
                  </h5>
                  <p className="mb-0 text-muted">
                    We create bespoke designs that genuinely reflect your unique brand identity and can grow with your business. Your site will stand out, not blend in.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-success">
                  <h5 className="fw-bold text-success mb-2">
                    <i className="bi bi-journal-text me-2"></i>Effortless Content Management
                  </h5>
                  <p className="mb-0 text-muted">
                    We build your site on user-friendly platforms, making it simple for you to update content, add new pages, and manage your site without complex coding. You're always in control.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-warning">
                  <h5 className="fw-bold text-warning mb-2">
                    <i className="bi bi-link-45deg me-2"></i>Seamless Integrated Functionality
                  </h5>
                  <p className="mb-0 text-muted">
                    From e-commerce capabilities to interactive forms and robust analytics, we integrate the right tools to extend your website's functionality for optimal performance.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-info">
                  <h5 className="fw-bold text-info mb-2">
                    <i className="bi bi-graph-up me-2"></i>Exceptional Search Engine Visibility
                  </h5>
                  <p className="mb-0 text-muted">
                    Our developers optimize your site's structure, implement crucial SEO elements, and ensure lightning-fast loading speeds. We make sure you're found by your target audience.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-danger">
                  <h5 className="fw-bold text-danger mb-2">
                    <i className="bi bi-currency-dollar me-2"></i>Expertise & Maximum ROI
                  </h5>
                  <p className="mb-0 text-muted">
                    Compared to DIY approaches, Orazweb delivers a polished, optimized site faster and more efficiently, unlocking your website's full potential and driving a stronger return on your investment.
                  </p>
                </div>
              </div>
            </div>
           
          </div>

          {/* Orazweb's Comprehensive Web Design Toolkit */}
          <div className="row mb-5" id="ourServices">
            <div className="col-12 text-center">
              <h2 className="mb-4 fw-bold">
                Orazweb's Comprehensive Web Design Toolkit: Attract More Customers
              </h2>
              <p className="lead text-muted">
                At Orazweb, we build user-experience (UX) focused websites that connect with your audience and align with your business goals. Every element we implement is purposeful, driving maximum return on your investment. We’ll show you how to design a website that truly engages your audience. From a small business to a large enterprise, we manage your project efficiently, from concept to launch.
              </p>
            </div>

            <div className="row g-4 mt-4 px-5">
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#f0f9ff' }}>
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-laptop me-2 text-primary"></i>Professional Web Design & Development
                  </h5>
                  <p className="text-muted mb-0">
                    We craft digital experiences that drive measurable results, starting with a deep dive into your brand vision and goals.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#fff8e1' }}>
                  <h5 className="fw-bold text-warning mb-2">
                    <i className="bi bi-tools me-2 text-warning"></i>Website Management & Maintenance
                  </h5>
                  <p className="text-muted mb-0">
                    Leave the heavy lifting to us. We proactively manage updates, security, optimization, and regular backups, ensuring your site runs perfectly 24/7.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#e6f5ea' }}>
                  <h5 className="fw-bold text-success mb-2">
                    <i className="bi bi-pencil-square me-2 text-success"></i>Content Writing for Web
                  </h5>
                  <p className="text-muted mb-0">
                    Data-driven content (blogs, service pages) that supports your SEO goals and builds trust and authority with your readers.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#fceef5' }}>
                  <h5 className="fw-bold text-danger mb-2">
                    <i className="bi bi-graph-up-arrow me-2 text-danger"></i>Search Engine Optimization (SEO)
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
                    <i className="bi bi-speedometer me-2 text-secondary"></i>Technical SEO & Core Web Vitals
                  </h5>
                  <p className="mb-0 text-muted">
                    Auditing header tags, URL structures, image alt attributes, and sitemaps. We optimize Core Web Vitals for speed and mobile-friendliness.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#f3e5f5' }}>
                  <h5 className="fw-bold text-dark mb-2">
                    <i className="bi bi-cloud-fill me-2 text-dark"></i>Website Hosting
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
                    End-to-end video content creation – from script to final edit – seamlessly integrated into your site for maximum engagement.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#ffebee' }}>
                  <h5 className="fw-bold text-danger mb-2">
                    <i className="bi bi-shield-lock-fill me-2 text-danger"></i>Website Audit & Security
                  </h5>
                  <p className="text-muted mb-0">
                    Comprehensive audits to uncover vulnerabilities, performance bottlenecks, and SEO issues. We offer free malware removal and proactive scans.
                  </p>
                </div>
              </div>
            </div>
          
          </div>

          {/* Why Partner with Orazweb: Your Digital Success Partner */}
          <div className="row mb-5">
            <div className="col-12 text-center custom-section">
              <h2 className="mb-4 fw-bold">
                Why Partner with Orazweb: Your Digital Success Partner
              </h2>
              <p className="text-black">
                To truly stand out online in today's dynamic market, you need more than just standard templates. Your competitors are likely leveraging expert agencies – and so should you.
              </p>
              <p className="text-black">Here's the **Orazweb advantage**:</p>
            </div>

            <div className="row g-4 mt-2 px-5">
              <div className="col-md-6">
                <div className="p-4 bg-light border-start border-5 border-primary rounded shadow-sm h-100">
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-lightning-charge-fill me-2 text-warning"></i>Maximum Efficiency
                  </h5>
                  <p className="mb-0 text-muted">
                    Years of experience mean faster development, higher quality, and quicker launches. Get to market sooner.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 bg-light border-start border-5 border-success rounded shadow-sm h-100">
                  <h5 className="fw-bold text-success mb-2">
                    <i className="bi bi-palette-fill me-2 text-warning"></i>Custom Design Excellence
                  </h5>
                  <p className="mb-0 text-muted">
                    We don't just build sites; we craft your brand's ultimate online representation. Expect a high-performing site that genuinely engages.
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
                  At <span className="text-primary">Orazweb</span>, your website is a critical business asset. We're here to exceed your expectations, developing a platform that becomes your true competitive advantage.
                </p>
              </div>
            </div>
          </div>

          {/* Our Streamlined Web Design Process */}
          <div className="row mb-5 text-center">
            <div className="col-12">
              <h2 className="display-5 fw-bold">
                Our Streamlined Web Design Process
              </h2>
              <p className="lead text-muted mt-3">
                Ready to get started? Partnering with Orazweb means a top-tier client experience and meaningful results.
              </p>
            </div>
            <div className="row g-4 mt-2 justify-content-center">
              <div className="col-md-6 col-lg-3">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-primary">
                  <h5 className="fw-bold text-primary mb-2"><i className="bi bi-search me-2"></i>Discovery & Recommendations</h5>
                  <p className="mb-0 text-muted">We deep-dive into your goals and provide expert recommendations.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-success">
                  <h5 className="fw-bold text-success mb-2"><i className="bi bi-people-fill me-2"></i>Scope & Team Assembly</h5>
                  <p className="mb-0 text-muted">We define your project scope and bring together the perfect team.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-warning">
                  <h5 className="fw-bold text-warning mb-2"><i className="bi bi-rocket-fill me-2"></i>Project Delivery</h5>
                  <p className="mb-0 text-muted">Your dedicated project manager ensures seamless service delivery.</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="p-4 bg-light rounded-4 shadow-sm h-100 border border-info">
                  <h5 className="fw-bold text-info mb-2"><i className="bi bi-key-fill me-2"></i>Full Control & Partnership</h5>
                  <p className="mb-0 text-muted">You gain complete administrative access and control over your new site, with ongoing support.</p>
                </div>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <p className="lead fw-semibold">
                Once live, our website maintenance services ensure your site is always operational and looking its best. Trust Orazweb; focus on your core business.
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
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
            Web Design & Development FAQs
          </h2>

          <div className="accordion" id="faqAccordion">
            {[
              {
                id: "faq1",
                question: "WHAT MAKES A GOOD WEBSITE DESIGN FOR MY BUSINESS?",
                answer:
                  "A good website design is visually appealing, user-friendly, mobile-responsive, optimized for search engines, and effectively guides visitors towards your business goals (e.g., making a purchase, filling out a form). It's also crucial that it accurately reflects your brand identity and values.",
              },
              {
                id: "faq2",
                question: "DO YOU CREATE CUSTOM DESIGNS OR USE PRE-BUILT TEMPLATES?",
                answer:
                  "We primarily focus on **custom website design** to ensure your site is unique, perfectly aligns with your brand, and delivers optimal performance tailored to your specific needs. While templates can offer a quick start, our custom approach guarantees a distinct online presence that truly stands out and supports your long-term business growth.",
              },
              {
                id: "faq3",
                question: "HOW LONG DOES IT TYPICALLY TAKE TO COMPLETE A WEBSITE PROJECT?",
                answer:
                  "Project timelines vary based on the website's complexity, the number of features required, the readiness of content, and the efficiency of client feedback cycles. After a detailed discovery call where we understand your specific requirements, we'll provide a clear, realistic timeline for your custom web project.",
              },
              {
                id: "faq4",
                question: "WHAT TYPES OF BUSINESSES BENEFIT MOST FROM YOUR WEB DESIGN SERVICES?",
                answer:
                  "Our web design and development services are beneficial for a wide array of businesses. This includes **small businesses and startups** looking to establish a strong online footprint, **growing companies** aiming for robust lead generation, and **large enterprises and e-commerce stores** that require scalable and high-performance digital solutions. Essentially, any business striving for significant online visibility, effective lead conversion, and streamlined content management can greatly benefit from our expertise.",
              },
              {
                id: "faq5",
                question: "WILL I BE ABLE TO EDIT AND MANAGE MY WEBSITE AFTER IT’S BUILT?",
                answer:
                  "Yes, absolutely! We build websites on user-friendly Content Management Systems (CMS) and provide comprehensive training. You'll receive full administrative access, enabling you to easily update content, add new pages, manage products (for e-commerce sites), and maintain your site without needing any complex coding knowledge.",
              },
              {
                id: "faq6",
                question: "WILL MY NEW WEBSITE BE MOBILE-FRIENDLY?",
                answer:
                  "Yes, without a doubt. Every website we design and develop is **fully responsive**. This means it automatically adapts and functions perfectly across all devices – from large desktop monitors to tablets and mobile phones – ensuring an optimal user experience regardless of screen size.",
              },
              {
                id: "faq7",
                question: "DO YOU OFFER SEO SERVICES FOR NEW WEBSITES?",
                answer:
                  "Yes, our comprehensive web design services inherently include robust **Search Engine Optimization (SEO)** strategies. From the initial architecture and technical setup to ongoing content optimization and local SEO efforts, we ensure your new site is built to rank high in search results and attract your target audience effectively.",
              },
              {
                id: "faq8",
                question: "CAN YOUR TEAM REDESIGN MY EXISTING WEBSITE?",
                answer:
                  "Definitely! We specialize in **website redesigns**. Our expert team can transform your outdated or underperforming existing website into a modern, high-performing, and engaging digital experience, all while carefully retaining and enhancing your core brand identity.",
              },
              {
                id: "faq9",
                question: "CAN YOU HELP MIGRATE MY EXISTING SITE TO A NEW PLATFORM?",
                answer:
                  "Yes, we provide secure and seamless **migration services**. Our experts meticulously plan and execute the transfer of your existing website's content, data, and functionalities to a new, optimized platform, ensuring minimal downtime and complete data integrity throughout the process.",
              },
              {
                id: "faq10",
                question: "CAN YOU INTEGRATE THIRD-PARTY TOOLS AND SERVICES WITH MY WEBSITE?",
                answer:
                  "Absolutely. We can integrate a wide range of essential **third-party tools and services** with your new website. This includes CRM systems, various payment gateways, marketing automation platforms, custom APIs, and other vital business applications, all designed to enhance your website's functionality and streamline your business operations.",
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

export default CustomWebDesign;