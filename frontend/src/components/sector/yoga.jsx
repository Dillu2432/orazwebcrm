import React from 'react';
import '../../assets/css/sector.css';
import yoga1 from '../../assets/image/yoga1.jpeg'
import yoga2 from '../../assets/image/yoga2.jpg'


const YogaPage = () => {

  const categories = [
    {
      name: "Local Yoga Studios",
      color: "linear-gradient(135deg, #fceabb, #f8b500)",
    },
    {
      name: "YouTube Yoga Influencers",
      color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
    },
    {
      name: "Yoga Coaches",
      color: "linear-gradient(135deg, #f6d365, #fda085)",
    },
    {
      name: "International Retreats",
      color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    },

  ];
  return (
    <div className='container'>
      {/* Background with overlay and intro */}
      <div className='backgroundStyle'>
        <div className='overlayStyle text-center text-white py-5'>
          <h1 className="fw-bold display-5">YOGA DIGITAL SOLUTIONS</h1>

        </div>
      </div>

      {/* Yoga Page Container */}
      <div className="health-page-container container-fluid">

        {/* Hero Section */}
        <section className="health-section health-bg-white py-5">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-11 text-center text-lg-start">
              <h1 className="health-h1-custom">
                Finding Your Zen in the Digital World: Orazweb Powers Your Yoga Journey
              </h1>
              <p className="health-lead-text">
                In the tranquil yet vibrant world of yoga, presence is everything – both on the mat and online. At Orazweb Solutions, we don't just understand the poses; we understand the purpose behind every flow, every breath, and every community built around this ancient practice. We're dedicated to providing <strong>harmonious digital solutions</strong> that align your passion for yoga with a powerful, peaceful, and profitable online presence.
              </p>
              <p className="health-lead-text">
                Whether you're cultivating a local studio community, guiding a global audience, or leading transformative retreats, we speak your language and craft digital strategies that help your light shine brighter.
              </p>
              <a href="/contact" className="health-btn-primary-custom">
                Start Your Yoga Journey Online
              </a>
            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <img src={yoga1} alt="Yoga Digital Strategy" className="img-fluid rounded shadow" />
            </div>
          </div>
        </section>

        {/* Your Specialty, Our Digital Expertise Section */}
        <section className="health-section bg-light py-5">
          <div className="container">
            <h2 className="text-center health-h2-custom px-5">
              Who We Serve in the Yoga & Wellness Community
            </h2>
            <p className="health-lead-text text-center mb-5 px-5">
              At <strong>Orazweb Solutions</strong>, we specialize in creating impactful digital solutions tailored to the unique needs of yoga instructors, studios, and wellness professionals. Whether you're guiding students through mindfulness and movement, running a yoga studio, offering online classes, or building a holistic wellness brand — we empower your journey with calming design, intuitive technology, and results-driven digital strategies that reflect your mission and connect deeply with your audience.
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
            <h2 className="text-center health-h2-custom px-5">Your Path, Our Digital Expertise</h2>
            <p className="health-lead-text text-center mb-5 px-5">
              We partner with a diverse range of yoga professionals and businesses, offering <strong>specialized digital strategies</strong> designed to bring clarity and growth to your unique journey:
            </p>

            {/* Content Wrapper */}
            <div className=" gap-4 px-4 align-items-start justify-content-center">

              {/* Image Section */}
              <div className="text-center">
                <img
                  src={yoga2}
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
                    text: `At Orazweb, we understand the unique energy of the yoga and wellness world. We craft digital experiences that not only reflect your serene practice but also powerfully connect you with your audience, from your local community to a global stage.`,
                  },
                  {
                    icon: "bi-laptop",
                    text: `For <strong>Local Yoga Studios</strong>, if your haven for mindfulness struggles to fill classes or reach new practitioners, we can help. We create serene, user-friendly websites with <strong>hyper-local SEO</strong> to attract your community, integrating seamless <strong>class scheduling and payment systems</strong>, and building <strong>community features</strong> that drive connection and attendance.`,
                  },
                  {
                    icon: "bi-phone",
                    text: `For <strong>YouTube Yoga Influencers</strong> who inspire flows but need to monetize and grow their personal brand, your influence deserves a platform as expansive as your reach. We build dedicated <strong>content hubs</strong>, optimize for <strong>video SEO</strong>, enable robust <strong>eCommerce</strong> for products and programs, and help expand your influence with strategic <strong>audience engagement tools</strong> and <strong>email list growth strategies</strong>.`,
                  },
                  {
                    icon: "bi-file-earmark-medical",
                    text: `For <strong>Yoga Coaches</strong> struggling to scale their coaching or automate client management, your guidance deserves a streamlined digital presence. We design <strong>professional coaching websites</strong>, implement efficient <strong>consultation scheduling</strong>, and enable <strong>secure client portals</strong> to deliver personalized plans and track results with ease.`,
                  },
                  {
                    icon: "bi-hospital",
                    text: `For <strong>International Retreats</strong> offering transformative experiences worldwide but needing to simplify promotion and bookings, your global vision requires a robust digital foundation. We develop <strong>visual-rich retreat websites</strong> with comprehensive <strong>global SEO, multi-currency booking capabilities</strong>, immersive content showcasing your unique experiences, and targeted <strong>international digital marketing campaigns</strong> to attract a worldwide audience.`,
                  },

                  {
                    icon: "bi-stars",
                    text: `At Orazweb, we don't just build websites; we cultivate your digital sanctuary, ensuring your practice thrives, inspires, and expands its reach globally.`,
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
              Orazweb's Digital Yoga Toolkit: What We Can Do For You
            </h2>
            <p className="health-lead-text text-center mb-5 px-5">
              Our comprehensive suite of specialized digital services is designed to bring peace, prosperity, and expansive reach to your yoga brand:
            </p>
            <div className="row px-4 py-3">
              {[
                "Custom Website Design & Development: Tailored for yoga professionals to grow your digital presence with harmony and authenticity.",
                "SEO: Tailored for yoga professionals to grow your digital presence with harmony and authenticity.",
                "Content Creation: Tailored for yoga professionals to grow your digital presence with harmony and authenticity.",
                "Social Media Strategy: Tailored for yoga professionals to grow your digital presence with harmony and authenticity.",
                "Digital Advertising: Tailored for yoga professionals to grow your digital presence with harmony and authenticity.",
                "Booking & Membership Systems: Tailored for yoga professionals to grow your digital presence with harmony and authenticity.",
                "eCommerce Integration: Tailored for yoga professionals to grow your digital presence with harmony and authenticity.",
                "Brand Strategy: Tailored for yoga professionals to grow your digital presence with harmony and authenticity."

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

        <hr></hr>
        {/* Final CTA Section */}
        <section className="health-section health-bg-white text-center py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11">
              <h2 className="health-h2-custom">Ready to Unfold Your Digital Potential?</h2>
              <p className="health-lead-text">
                The digital world holds boundless possibilities for your yoga journey. Let Orazweb Solutions be your trusted guide. We'll help you cultivate a powerful online presence that attracts more students, fills more retreats, and allows your passion for yoga to flourish on a global scale.
              </p>
              <a href="/contact" className="btn btn-lg btn-primary shadow-lg rounded-pill px-5 py-3 animate-btn-pulse"> {/* Enhanced button style with pulse animation idea */}
                <strong>Contact us today for a complimentary digital health assessment!</strong>
              </a>
              <p className="text-muted mt-3 mb-0">Let's discuss your unique needs and goals.</p> {/* Sub-text for clarity */}
            </div>
          </div>
        </section>

      </div>
    </div>

  );
};

export default YogaPage;