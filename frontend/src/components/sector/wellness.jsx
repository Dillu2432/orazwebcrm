import React from 'react';
// Import the global CSS file directly
import '../../assets/css/sector.css';
import health1 from '../../assets/image/health.jpeg'
import health2 from '../../assets/image/health2.jpg'

const WellnessPage = () => {
  const categories = [
    {
      name: "Organic Brands",
      color: "linear-gradient(135deg, #fceabb, #f8b500)",
    },
    {
      name: "Supplement Startups",
      color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
    },
    {
      name: "Wellness Resorts",
      color: "linear-gradient(135deg, #f6d365, #fda085)",
    },
    {
      name: "D2C Product Companies (Wellness Focus)",
      color: "linear-gradient(135deg, #d4fc79, #96e6a1)",
    },
  ];
  return (
    <div className='container '>
      <div className='backgroundStyle'>
        <div className='overlayStyle'>
          <h1 className="fw-bold display-5">WELLNESS DIGITAL SOLUTIONS</h1>
        </div>
      </div>
      <div className="health-page-container container-fluid">
        {/* Hero Section */}
        <section className="health-section health-bg-white">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-11 text-center text-lg-start">
              <h1 className="health-h1-custom">
                Nurturing Growth, Cultivating Connection: Your Wellness Journey, Digitally Empowered                            </h1>
              <p className="health-lead-text">
                In the rapidly expanding world of wellness, where conscious living meets vibrant entrepreneurship, establishing a genuine and impactful digital presence is key. At Orazweb Solutions, we understand that wellness is more than a trend; it’s a commitment to holistic well-being, and your brand embodies this dedication. We are devoted to providing <strong>intuitive digital solutions</strong> that amplify your authentic message, foster deep connections with your audience, and transform your passion for wellness into sustainable growth.                            </p>

              <p className="health-lead-text">
                Whether you're crafting nourishing products, curating transformative experiences, or guiding individuals towards mindful living, we speak your language and design digital strategies that truly nurture your brand's unique purpose.                            </p>
              <a href="/contact" className="health-btn-primary-custom">
                Start Your Digital Health Journey
              </a>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <img
                src={health1}  // Replace this with your actual image path
                alt="Healthcare Digital Strategy"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </section>

        <hr></hr>

        {/* Your Specialty, Our Digital Expertise Section */}
        <section className="health-section bg-light py-5">
          <div className="container">
            <h2 class="text-center health-h2-custom px-5">
              Who We Serve in the Wellness Sector
            </h2>
            <p class="health-lead-text text-center mb-5 px-5">
              At Orazweb Solutions, we craft impactful digital solutions for diverse **wellness professionals**. From coaches and studios to retreat centers and spiritual guides, we empower your journey with thoughtful design, smart technology, and results-driven digital strategy.
            </p>

            <div className="d-flex flex-wrap gap-4 justify-content-center py-5">
              {categories.map((item, index) => (
                <div
                  key={index}
                  className="category-circle"
                  style={{ background: item.color }}
                >
                  <span className="circle-text">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr></hr>
        {/* book consulation */}
        <div className="row mb-5 justify-content-center">
          <div className="col-md-10 col-lg-8">
            <div className="p-5 rounded-4 shadow bg-light border border-0">
              <h2 className="mb-4 text-center primary-text-cl fw-bold" style={{ fontSize: '1.8rem' }}>
                Book a Free Consultation
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
                      <option>Website Design & Development</option>
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
        <hr></hr>

        {/* Your Specialty, Our Digital Expertise Section */}
        <section className="health-section bg-light py-5">
          <div className="container">
            <h2 className="text-center health-h2-custom px-5">
              Your Specialty, Our Digital Expertise: How Orazweb Elevates Your Practice
            </h2>
            <p className="health-lead-text text-center mb-5 px-5">
              We proudly partner with a diverse range of <strong>health and wellness professionals</strong>, offering specialized digital strategies designed specifically to meet your unique challenges and growth opportunities in the online world.
            </p>

            {/* Content Wrapper */}
            <div className=" gap-4 px-4 align-items-start justify-content-center">

              {/* Image Section */}
              <div className="text-center">
                <img
                  src={health2}
                  alt="Healthcare digital solution"
                  className="img-fluid rounded-4 shadow-sm mb-4"
                  style={{ maxHeight: '400px', objectFit: 'cover' }}
                />
              </div>

              {/* Text Section */}
              <div className="px-3 px-md-5">
                {[
                  {
                    icon: "bi-eye-fill",
                    text: `At <strong>Orazweb</strong>, we specialize in digital solutions that connect wellness brands with health-conscious consumers.`,
                  },
                  {
                    icon: "bi-laptop",
                    text: `For <strong>Organic Brands</strong>, we build transparent <strong>e-commerce sites</strong> with <strong>SEO</strong> and compelling content to showcase your natural products and story.`,
                  },
                  {
                    icon: "bi-phone",
                    text: `<strong>Supplement Startups</strong> get high-converting <strong>e-commerce platforms</strong> with <strong>precision SEO</strong> and <strong>digital advertising</strong> to establish credibility and drive sales for science-backed formulations.`,
                  },
                  {
                    icon: "bi-file-earmark-medical",
                    text: `<strong>Wellness Resorts</strong> attract a global clientele with visually captivating websites, <strong>global SEO, multi-currency booking</strong>, and rich multimedia to entice bookings.`,
                  },
                  {
                    icon: "bi-hospital",
                    text: `<strong>D2C Product Companies (Wellness Focus)</strong> receive seamless, brand-centric e-commerce platforms with full-funnel digital marketing and CRM integration to scale acquisition and foster lasting loyalty.`,
                  },
                  {
                    icon: "bi-heart-pulse",
                    text: `We build your digital foundation for trust and growth in the dynamic wellness industry.`,
                  },

                ].map((item, index) => (
                  <div
                    className="p-4 mb-4 rounded-4 shadow-sm bg-white border-start border-end border-4 border-secondary d-flex"
                    key={index}
                  >
                    <i className={`bi ${item.icon} primary-text-cl me-3 fs-3`}></i>
                    <p
                      className="health-lead-text mb-0"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* Orazweb's Digital Health Toolkit Section */}
        <section className="health-section health-bg-mint py-5">
          <div className="container">
            <h2 className="text-center health-h2-custom px-5">
              Orazweb's Digital Health Toolkit: What We Can Do For You
            </h2>
            <p className="health-lead-text text-center mb-5 px-5">
              Our suite of specialized digital services is designed to address the specific needs of the health sector, ensuring your online presence is as robust as your commitment to care:
            </p>

            <div className="row px-4 py-3">
              {[
                "Custom Website & E-commerce Design: Crafting aesthetically pleasing, intuitive, and high-performing digital platforms that authentically represent your brand and facilitate seamless transactions.",
                "Targeted Search Engine Optimization (SEO): Optimizing your online presence to ensure health-conscious consumers find your products, services, or resort first when searching for wellness solutions.",
                "Empathetic Content Marketing: Developing insightful blogs, product guides, wellness tips, and transformative stories that educate, inspire, and build deep trust with your audience.",
                "Authentic Social Media Strategy & Management: Cultivating an engaging presence on relevant platforms (e.g., Instagram, Pinterest, TikTok) to showcase your brand's lifestyle, build community, and drive engagement.",
                "Performance Digital Advertising (PPC & Social Ads): Launching precise, data-driven campaigns to reach specific demographics actively seeking organic products, wellness supplements, resort experiences, or D2C health solutions.",
                "Robust Online Booking & CRM Systems: Implementing seamless solutions for resort bookings, consultations, membership management, and direct customer engagement.",
                "Conversion Rate Optimization (CRO): Analyzing user behavior and optimizing your digital assets to maximize sales, sign-ups, and customer loyalty.",
                "Strategic Brand Storytelling & Messaging: Defining your unique narrative and ensuring consistent, resonant communication across all digital touchpoints, building a powerful and memorable wellness brand."

              ].map((item, index) => (
                <div className="col-md-6 col-lg-6 mb-4" key={index}>
                  <div
                    className="toolkit-box p-4 rounded-4 h-100 bg-white shadow-lg position-relative hover-up-scale" // Changed shadow to 'shadow-lg' and added 'hover-up-scale' for a more pronounced effect
                    style={{
                      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)', // Smoother, slightly slower transition for a modern feel
                      borderLeft: '5px solid', // Making the border slightly thicker
                      borderImage: 'linear-gradient(to bottom, #198754, #20c997) 1', // Using a gradient border!
                    }}
                  >
                    <div className="d-flex align-items-start">
                      <div
                        className="rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0 toolkit-icon-glow" // Added a 'toolkit-icon-glow' class for potential animation
                        style={{
                          width: '55px', // Slightly larger icon circle
                          height: '55px',
                          background: 'linear-gradient(to bottom right, #198754, #28a745)', // A more vibrant green gradient for the circle
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '1.25rem', // Larger numbers
                          boxShadow: '0 8px 20px rgba(25, 135, 84, 0.3)', // A stronger, green-tinted shadow for the icon
                        }}
                      >
                        {index + 1}
                      </div>
                      <div>
                        <h6 className="text-dark mb-1 d-flex align-items-center fs-5 fw-bold"> {/* Bolded the heading text */}
                          <i className="bi bi-star-fill text-warning me-2 fs-5 toolkit-icon-pulse"></i> {/* Changed icon to a star, with a pulse animation idea */}
                          {item.split(":")[0]}
                        </h6>
                        <p className="text-muted small mb-0 lh-base">{item.split(":").slice(1).join(":")}</p> {/* Added lh-base for better line height */}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>



          </div>
        </section>

        {/* Ready to Transform Your Digital Health Impact? Section */}
        <section className="health-section text-center py-5"> {/* Increased vertical padding */}
          <div className="container"> {/* Added container for better content alignment */}
            <div className="row justify-content-center">
              <div className="col-lg-10 col-md-11">
                <h2 className="health-h2-custom display-4 fw-bold mb-4"> {/* Larger, bolder heading */}
                  Ready to Nurture Your Digital Wellness Ecosystem?
                </h2>
                <p className="health-lead-text fs-5 mb-5 mx-auto" style={{ maxWidth: '800px' }}> {/* Slightly larger font, controlled width */}
                  The journey to greater well-being often begins with a single search. Let Orazweb Solutions be your strategic partner in cultivating a thriving digital presence that connects you with more individuals seeking wellness, expands your reach, and allows your brand to flourish globally.                </p>
                <a href="/contact" class="btn btn-lg btn-primary shadow-lg rounded-pill px-5 py-3 animate-btn-pulse">
                  <strong>Contact us today for a complimentary digital wellness consultation!</strong>
                </a>
                <p class="text-muted mt-3 mb-0">
                  Let's discuss your unique needs and how Orazweb can help manifest your highest digital vision.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default WellnessPage;