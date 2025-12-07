import React from 'react';
import '../../assets/css/sector.css';
import health1 from '../../assets/image/health.jpeg'
import health2 from '../../assets/image/health2.jpg'
const MedicalParamedicalPage = () => {

  const categories = [
    {
      name: "Local Clinics & Specialty Practices",
      color: "linear-gradient(135deg, #fceabb, #f8b500)",
    },
    {
      name: "Hospital Chains & Healthcare Systems",
      color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
    },
    {
      name: "Doctors Launching Personal Brands",
      color: "linear-gradient(135deg, #f6d365, #fda085)",
    },

  ];
  return (
    <div className='container '>
      <div className='backgroundStyle'>
        <div className='overlayStyle'>
          <h1 className="fw-bold display-5">MEDICAL AND PARAMEDICAL DIGITAL SOLUTIONS</h1>
        </div>
      </div>
      <div className="health-page-container container-fluid">
        {/* Hero Section */}
        <section className="health-section health-bg-white">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-11 text-center text-lg-start">
              <h1 className="health-h1-custom">
                Precision Digital Solutions for Health & Healing
              </h1>
              <p className="health-lead-text">
                In the critical field of medicine, trust, accessibility, and expertise are paramount. At Orazweb Solutions, we understand the profound responsibility you carry in caring for communities and individual patients. We are dedicated to providing strategic digital solutions that enhance your online presence, streamline patient journeys, and ultimately help you deliver exceptional care.
              </p>
              <p className="health-lead-text">
                Whether you're a cornerstone local clinic, a sprawling hospital network, or a specialist building your personal medical brand, we craft digital strategies with the precision and empathy your profession demands.
              </p>
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
            <h2 className="text-center health-h2-custom px-5">
              Who We Serve in the Medical & Paramedical Sector
            </h2>
            <p className="health-lead-text text-center mb-5 px-5">
              At <strong>Orazweb Solutions</strong>, we specialize in crafting impactful digital solutions tailored to the specific needs of medical and paramedical professionals. Whether you're operating a clinic, diagnostic lab, hospital, nursing institute, or paramedical training center — we empower your services with user-friendly design, advanced technology, and strategic digital tools that enhance patient trust, streamline operations, and support institutional growth.
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
                    text: `At <strong>Orazweb</strong>,  we empower healthcare providers in Jammu to thrive online. We build digital solutions that boost your reach, streamline operations, and build patient trust.`,
                  },
                  {
                    icon: "bi-laptop",
                    text: `For <strong>Local Clinics & Specialty Practices</strong>, we create welcoming, mobile-responsive websites with <strong>local SEO</strong> to ensure patients find you first. We integrate <strong>online appointment booking</strong> and patient testimonials, plus manage your <strong>Google My Business profile</strong> for maximum local visibility.`,
                  },
                  {
                    icon: "bi-phone",
                    text: `For <strong>Hospital Chains & Healthcare Systems</strong>, we develop comprehensive, scalable websites featuring <strong>physician directories, service finders</strong>, and <strong>virtual tours</strong>. We deploy targeted <strong>digital advertising</strong> and <strong>SEO</strong> across all locations, offering <strong>online reputation management</strong> and <strong>telemedicine integration</strong> for a unified brand.`,
                  },
                  {
                    icon: "bi-file-earmark-medical",
                    text: `For <strong>Doctors Launching Personal Brands<strong>, we design professional websites to showcase your expertise and patient success stories. We use <strong>content marketing</strong> and <strong>SEO<strong> to position you as a thought leader, with social media guidance and <strong>online appointment request forms</strong> to attract your ideal patients.`,
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
              Our comprehensive suite of specialized digital services is designed to elevate your medical or paramedical practice and amplify your impact:            </p>

            <div className="row px-4 py-3">
              {[
                "Custom Medical Website Design & Development: Creating secure, intuitive, and mobile-responsive platforms that comply with healthcare standards and prioritize user experience.",
                "Hyper-Local & Medical SEO: Optimizing your online presence to ensure patients find your specific services and locations when they search online.",
                "Strategic Content Marketing: Developing authoritative and empathetic content (health articles, FAQs, service descriptions, patient guides) that educates, informs, and builds trust.",
                "Online Reputation Management: Proactively monitoring and managing patient reviews and testimonials across platforms to build and maintain a stellar online image.",
                "Seamless Online Appointment & Patient Portal Integration: Streamlining patient scheduling, communication, and access to information for improved efficiency and patient satisfaction.",
                "Targeted Digital Advertising (PPC & Social Ads): Running precise campaigns to reach specific patient demographics based on location, medical need, and interests.",
                "Professional Social Media Strategy: Crafting a credible and engaging presence on relevant platforms to share health insights, respond to queries, and foster community trust.",
                "Telemedicine & Virtual Consultation Integration: Enabling secure and convenient remote care options for your patients.",
                "Brand Strategy & Messaging: Defining your unique professional voice and ensuring consistent, trustworthy communication across all digital touchpoints.",

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
                 Ready to Elevate Your Medical Practice in the Digital Age?
                </h2>
                <p className="health-lead-text fs-5 mb-5 mx-auto" style={{ maxWidth: '800px' }}> {/* Slightly larger font, controlled width */}
                  In healthcare, every connection matters. Let Orazweb Solutions be your trusted partner in building a robust digital foundation that connects you with more patients, enhances operational efficiency, and amplifies your commitment to healing.
                </p>
                <a href="/contact" className="btn btn-lg btn-primary shadow-lg rounded-pill px-5 py-3 animate-btn-pulse"> {/* Enhanced button style with pulse animation idea */}
                  <strong>Contact us today for a complimentary digital health assessment!</strong>
                </a>
                <p className="text-muted mt-3 mb-0">Let's discuss your unique needs and goals.</p> {/* Sub-text for clarity */}
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>

  );
};

export default MedicalParamedicalPage;