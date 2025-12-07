import React from 'react';
import '../../assets/css/sector.css';
import spi1 from '../../assets/image/spi1.jpeg'
import spi2 from '../../assets/image/spi2.jpeg'

const SpiritualityPage = () => {
  const categories = [
    {
      name: "Meditation Apps",
      color: "linear-gradient(135deg, #fceabb, #f8b500)",
    },
    {
      name: "Spiritual Influencers",
      color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
    },
    {
      name: "Retreat Centers",
      color: "linear-gradient(135deg, #f6d365, #fda085)",
    },

    {
      name: "Content Creators (Spirituality & Mindfulness)",
      color: "linear-gradient(135deg, #d4fc79, #96e6a1)",
    },
  ];
  return (
    <div className='container'>
      {/* Background with overlay and intro */}
      <div className='backgroundStyle'>
        <div className='overlayStyle text-center text-white py-5'>
          <h1 className="fw-bold display-5">SPIRITUALITY & MINDFULNESS</h1>

        </div>
      </div>
      <div className="health-page-container container-fluid"> {/* Reusing container for consistency */}

        {/* Hero Section */}
        <section className="health-section health-bg-white py-5">
          <div className="row justify-content-center align-items-center">
            {/* Left Side Image */}


            {/* Right Side Content */}
            <div className="col-lg-6 col-md-11 text-center text-lg-start">
              <h1 className="health-h1-custom mb-4">
                Cultivating Presence, Amplifying Purpose: Your Digital Path to Connection
              </h1>
              <p className="health-lead-text mb-3">
                In a world increasingly seeking inner calm and deeper meaning, the realms of spirituality and mindfulness offer invaluable sanctuary and guidance. At Orazweb Solutions, we understand that your work isn't just about services; it's about fostering transformation, peace, and profound connection. We are dedicated to providing <strong>conscious digital solutions</strong> that bridge the gap between ancient wisdom and modern technology, allowing your message to reach those yearning for clarity and growth.
              </p>
              <p className="health-lead-text mb-4">
                Whether you're guiding daily meditations, inspiring global communities, or curating sacred experiences, we speak your language and craft digital strategies that resonate with authenticity and purpose.
              </p>
              <a href="/contact" className="health-btn-primary-custom">
                Connect with Orazweb
              </a>

            </div>
            <div className="col-lg-5 d-none d-lg-block">
              <img src={spi1} alt="Spiritual Digital Strategy" className="img-fluid rounded-4 shadow-sm" />
            </div>
          </div>
        </section>

        <hr></hr>

        {/* Your Specialty, Our Digital Expertise Section */}
        <section className="health-section bg-light py-5">
          <div className="container">
            <h2 className="text-center health-h2-custom px-5">
              Who We Serve in the Spirituality & Mindfulness Space
            </h2>
            <p className="health-lead-text text-center mb-5 px-5">
              At <strong>Orazweb Solutions</strong>, we specialize in creating meaningful digital experiences tailored to the unique needs of spiritual leaders, mindfulness coaches, meditation guides, and holistic wellness practitioners. Whether you're leading a community, hosting retreats, offering guided meditations, or sharing your spiritual teachings online — we support your journey with serene design, intuitive technology, and purpose-driven digital strategies that reflect your energy and expand your impact.
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
                                    src={spi2}
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
                                        text: `At Orazweb, we understand the profound impact of spiritual and mindfulness practices. We specialize in building digital experiences that resonate with seekers, expanding your reach and deepening engagement, from meditation apps to global retreat centers.`,
                                    },
                                    {
                                        icon: "bi-laptop",
                                        text: `For <strong>Meditation Apps</strong>, if your beacon of calm struggles to attract new users or stand out, we'll help bring it to every hand. We boost visibility through <strong>App Store Optimization (ASO)</strong> and <strong>targeted digital advertising</strong> to reach those actively seeking mindfulness tools. We craft compelling landing pages and user acquisition funnels, and develop strategies for <strong>user retention, in-app engagement</strong>, and leveraging testimonials to build a loyal community.`,
                                    },
                                    {
                                        icon: "bi-phone",
                                        text: `For <strong>Spiritual Influencers</strong> looking to expand their reach, deepen community engagement, or monetize transformative content, your authentic wisdom needs a powerful platform. We craft stunning, intuitively designed personal brand websites as your central digital sanctuary for teachings, insights, and offerings. We integrate <strong>robust content management systems</strong> for blogs, videos, and podcasts, and implement <strong>SEO strategies</strong> to ensure your wisdom is discoverable. We help you explore <strong>monetization pathways</strong> like exclusive content subscriptions and digital product sales, all while maintaining your brand's authenticity.`,
                                    },
                                    {
                                        icon: "bi-file-earmark-medical",
                                        text: `For <strong>Retreat Centers</strong>, if your sanctuary for healing finds it challenging to reach global seekers or manage intricate bookings, your immersive experiences deserve a digital gateway inviting profound connection. We design visually captivating, soul-stirring websites that transport potential attendees. We employ <strong>global SEO strategies</strong> for discoverability, and offer robust <strong>multi-currency booking and payment systems</strong>, virtual tour integration, and immersive multimedia content to inspire heartfelt bookings.`,
                                    },
                                    {
                                        icon: "bi-hospital",
                                        text: `For <strong>Content Creators (Spirituality & Mindfulness)</strong> producing profound wisdom through blogs, podcasts, or videos, but needing help with distribution, audience engagement, or sustainable monetization, your message deserves to be seen, heard, and deeply felt. We optimize existing platforms and build new ones to ensure your content reaches its audience, including <strong>SEO for written and video content, podcast distribution strategies</strong>, and audience engagement features. We help develop diverse <strong>monetization strategies</strong> like advertising, sponsorships, direct sales of digital products, and community-supported models to ensure your valuable work is sustainable and impactful.`,
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

        {/* Orazweb's Digital Mindfulness Toolkit Section */}
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
                "Custom Website Design & Development:Crafting serene, intuitive, and mobile-responsive platforms that reflect your unique philosophy and provide a seamless user experience.",
                "Search Engine Optimization (SEO): Ensuring your practices, content, and offerings resonate with search engines, helping seekers find you first when searching for inner peace.",
                "App Store Optimization (ASO) & Promotion: Boosting the visibility and download rates of your meditation or mindfulness apps.",
                "Empathetic Content Creation & Strategy: Developing profound blogs, guided meditations, insightful articles, and transformative resources that establish your authority and connect deeply.",
                "Soulful Social Media Management: Cultivating an authentic and engaging presence on platforms that resonate with spiritual and mindfulness communities.",
                "Targeted Digital Advertising: Launching conscious campaigns that reach individuals actively seeking spiritual growth, inner peace, or mindful living solutions.",
                "Online Booking & Retreat Management Systems: Implementing seamless solutions for workshop registrations, retreat bookings, and private session scheduling.",
                "Secure eCommerce & Monetization Solutions: Building robust online stores for selling digital products, courses, memberships, or physical goods ethically and effectively.",
                "Authentic Brand Strategy & Messaging: Defining your core essence and ensuring a consistent, powerful brand presence that truly reflects your mission."

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

        {/* Ready to Elevate Your Spiritual & Mindfulness Presence? Section */}
        <section className="health-section health-bg-white text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11">
              <h2 className="health-h2-custom">Ready to Elevate Your Spiritual & Mindfulness Presence?</h2>
              <p className="health-lead-text">
                The journey to inner peace begins with a single step, and your digital journey can begin with Orazweb Solutions. We'll help you cultivate a powerful online presence that connects you with more souls, expands your reach, and allows your profound work to illuminate countless lives.
              </p>
              <a href="/contact" className="health-btn-primary-custom">
                Contact us today for a complimentary digital consultation. Let's discuss how Orazweb Solutions can help you manifest your highest digital vision!
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SpiritualityPage;