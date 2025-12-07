import React from 'react';
import '../../assets/css/sector.css';
import yoga1 from '../../assets/image/gym.jpeg'
import yoga2 from '../../assets/image/gyym2.jpg'

const GymBodybuildingPage = () => {
  const categories = [
    {
      name: "Gym Owners",
      color: "linear-gradient(135deg, #fceabb, #f8b500)",
    },
    {
      name: "Fitness Influencers",
      color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
    },
    {
      name: "Gym Chains",
      color: "linear-gradient(135deg, #f6d365, #fda085)",
    },
    {
      name: "Supplement Startups",
      color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
    },
  ];
  return (
    <div className='container '>
      <div className='backgroundStyle'>
        <div className='overlayStyle'>
          <h1 className="fw-bold display-5">GYM DIGITAL SOLUTIONS</h1>
        </div>
      </div>
      <div className="health-page-container container-fluid">



        <section className="health-section health-bg-white">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 col-md-11 text-center text-lg-start">
              <h1 className="health-h1-custom">
                Forge Your Digital Strength: Orazweb Powers Your Performance
              </h1>
              <p className="health-lead-text">
                In the high-energy world of gyms and bodybuilding, success is built on dedication, results, and a powerful presence. At Orazweb Solutions, we don't just understand the grind; we understand the ambition that fuels every rep, every transformation, and every thriving fitness community. We are dedicated to providing **high-impact digital solutions** that attract your target audience, supercharge your brand, and drive significant growth.
              </p>
              <p className="health-lead-text">
                Whether you're building local legends, inspiring a global fitness movement, or fueling peak performance with cutting-edge supplements, we speak your language and craft digital strategies designed for maximum gain.
              </p>
              <a href="/contact" className="health-btn-primary-custom">
                Build Your Brand's Digital Muscle
              </a>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <img
                src={yoga1}  // Replace this with your actual image path
                alt="gym Digital Strategy"
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
              Who We Serve in the Gym Industry
            </h2>
            <p className="health-lead-text text-center mb-5 px-5">
              At <strong>Orazweb Solutions</strong>, we specialize in crafting impactful digital solutions tailored to the unique needs of fitness professionals and businesses. Whether you run a gym, a fitness studio, offer personal training, or provide virtual coaching — we empower your growth with strategic design, smart technology, and results-driven digital strategies that energize your brand and drive member engagement.
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
        <section className="health-section bg-light py-5">
          <div className="container">
            <h2 class="text-center health-h2-custom px-5">
              Orazweb: Digital Growth for Jammu's Gyms & Fitness Businesses
            </h2>
            <p class="health-lead-text text-center mb-5 px-5">
              We provide specialized digital strategies for <strong>gyms, studios, and fitness brands</strong>, helping you stand out and thrive online in Jammu.
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
                    text: `At Orazweb, we empower fitness businesses and professionals in Jammu to thrive online, recognizing that today's audience first turns to the internet for fitness solutions. We craft digital spaces that embody your energy and expertise, building not just websites, but comprehensive digital ecosystems designed for growth.`,
                  },
                  {
                    icon: "bi-laptop",
                    text: `For <strong>Gym Owners</strong>, if your strength haven needs more members and better class attendance, we build dynamic websites showcasing your facilities and community. Our aggressive <strong>local SEO</strong> ensures you're found first for "gyms near me," while seamless online sign-up and booking systems, member success stories, and engaging content convert visitors into loyal members.`,
                  },
                  {
                    icon: "bi-phone",
                    text: `For <strong>Fitness Influencers</strong>, aiming to amplify your message and monetize your brand, your digital platform needs to be as powerful as your influence. We create high-performance personal brand websites, serving as your content and merchandise hub. We optimize your social media presence with viral content strategies, integrating <strong>eCommerce solutions</strong> for selling programs, guides, or apparel, ensuring your influence drives sustainable income and deeper fan connections.`,
                  },
                  {
                    icon: "bi-file-earmark-medical",
                    text: `For <strong>Gym Chains</strong>, striving for a unified digital experience and consistent member acquisition across multiple locations, your network demands a cohesive, scalable digital strategy. We develop centralized website solutions for consistent branding with localized content for each branch. We deploy comprehensive <strong>multi-location SEO and paid advertising</strong> for maximum visibility, coupled with advanced <strong>online reputation management</strong> and robust </strong>membership system integrations</strong> for optimized performance.`,
                  },
                  {
                    icon: "bi-hospital",
                    text: `For <strong>Supplement Startups</strong>, looking to cut through the noise and build trust, your innovative products need a compelling digital storefront. We build <strong>high-converting eCommerce websites</strong> focusing on clear product information and seamless checkout. We implement advanced <strong>SEO for product discoverability</strong> and launch highly targeted <strong>digital advertising campaigns</strong>. Our strategies also include influencer collaborations, user-generated content, and educational material to position your brand as a trusted authority in sports nutrition.`,
                  },

                  {
                    icon: "bi-stars",
                    text: `At Orazweb, we don't just build websites; we build your digital foundation for trust, growth, and impact in the vibrant fitness industry, helping more people discover the healthy lifestyle they seek through you`,
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
        {/* Orazweb's Digital Performance Toolkit Section */}
        <section className="health-section health-bg-mint py-5">
          <div className="container">
            <h2 className="text-center health-h2-custom px-5">
              Orazweb's Digital Health Toolkit: What We Can Do For You
            </h2>

            <p className="health-lead-text text-center mb-5">
              Our comprehensive suite of specialized digital services is designed to build your brand's strength and endurance in the online arena:
            </p>
            <div className="row px-4 py-3">
              {[
                "Custom Website Design & Development: Creating visually impressive, user-friendly, and high-converting platforms tailored to the intensity and focus of the gym and bodybuilding world.",
                "Targeted Search Engine Optimization (SEO): Boosting your visibility so dedicated fitness enthusiasts and potential customers find you first, whether they're searching for a local gym or specific supplements.",
                "High-Impact Content Marketing: Developing engaging content like workout routines, nutrition plans, transformation stories, and expert articles that showcase your knowledge and inspire action.",
                "Dynamic Social Media Strategy & Management: Crafting a powerful presence on visual platforms (Instagram, YouTube, TikTok) to showcase transformations, engage your community, and go viral.",
                "Precision Digital Advertising (PPC & Social Ads): Running highly targeted campaigns on Google, Facebook, Instagram, and other platforms to attract specific demographics of gym-goers, bodybuilders, or supplement buyers.",
                "Robust eCommerce Solutions: Building secure, efficient online stores for selling memberships, workout programs, apparel, supplements, or digital guides.",
                "Online Reputation & Community Management: Actively building a positive brand image through reviews, testimonials, and direct engagement with your audience.",
                "Advanced Analytics & Performance Tracking: Providing detailed insights into your digital campaigns, helping you understand what works best and continually optimize for maximum ROI.",
                "Strategic Branding & Messaging: Defining a strong, authentic brand voice that resonates with your target audience and sets you apart in the competitive fitness landscape.",
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
        {/* Ready to Dominate Your Digital Fitness Space? Section */}
        <section className="health-section health-bg-white text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-11">
              <h2 className="health-h2-custom">Ready to Dominate Your Digital Fitness Space?</h2>
              <p className="health-lead-text">
                The world of gyms and bodybuilding is about pushing limits and achieving peak performance. Let Orazweb Solutions be your ultimate digital training partner. We'll help you build an unstoppable online presence that attracts more members, drives more sales, and cements your legacy in the fitness industry.
              </p>
              <a href="/contact" className="health-btn-primary-custom">
                Contact us today for a complimentary digital strategy session. Let's build your brand's strongest online physique!
              </a>
            </div>
          </div>
        </section>
      </div >
    </div >
  );
};

export default GymBodybuildingPage;