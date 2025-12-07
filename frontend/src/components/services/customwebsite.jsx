import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import "../../assets/css/global.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import image1 from "../../assets/image/cs1.jpeg";

const Customwebsite = () => {
  const comparisonData = [
  {
    feature: 'Uniqueness',
    template: 'Shared design, often looks generic, hard to differentiate.',
    custom: "Completely unique, a true digital reflection of your brand's essence."
  },
  {
    feature: 'Branding',
    template: 'Limited ability to express unique brand personality & story.',
    custom: 'Deep integration of brand identity, values, and a compelling narrative.'
  },
  {
    feature: 'Functionality',
    template: '"What you see is what you get"; limited features & integrations.',
    custom: 'Built-to-spec features, tailor-made for your business processes, scalable.'
  },
  {
    feature: 'Scalability',
    template: 'Can become restrictive and costly as your business grows.',
    custom: 'Designed for growth, easy to add features, content, and expand functionalities.'
  },
  {
    feature: 'Performance',
    template: 'Can be bloated with unused code, potentially impacting speed.',
    custom: 'Optimized for lightning-fast speed and peak performance from the ground up.'
  },
  {
    feature: 'SEO Potential',
    template: 'Good for basic SEO, but harder for advanced optimization.',
    custom: 'Built with SEO best practices for superior ranking potential and visibility.'
  },
  {
    feature: 'Maintenance',
    template: 'Often simpler to start, but updates can break customisations.',
    custom: 'Requires expert handling, but offers seamless updates and long-term stability.'
  },
  {
    feature: 'Initial Cost',
    template: 'Lower upfront investment.',
    custom: 'Higher upfront investment.'
  },
  {
    feature: 'Long-term Value',
    template: 'Can lead to expensive rebranding/redevelopment later on.',
    custom: 'A strategic asset, delivers powerful long-term ROI and sustainable growth.'
  }
];

  return (
    <>
      <div className="container ">
        <div className='backgroundStyle'>
          <div className='overlayStyle'>
            <h1 className="fw-bold display-5">CUSTOM WEBSITE DESGIN AND DEVELOPMENT</h1>
            <p className="lead">Stand Out In This Saturated Digital Landscape With A Custom Fit Website</p>
          </div>
        </div>
        {/* Main Heading */}
        <div className="container bg-white my-5 p-5">


          <div className="row my-5 text-center">
            <div className="col-12">
              <h1 className="display-4 fw-bold">
                Crafting Your Digital Masterpiece: Custom Web Design & Development by Orazweb Solutions
              </h1>
              <p className=" mt-3 text-black">
                In today's bustling digital marketplace, your website isn't just an online brochure – it's your brand's heartbeat, its primary sales tool, and the first impression for countless potential customers. At Orazweb Solutions, we believe your online presence should be as unique and ambitious as your business itself. That's why we specialize in **custom web design and development**, building digital experiences that don't just look good, but perform exceptionally, resonate deeply, and truly represent your brand's unique story.
              </p>
            </div>
          </div>

          {/* Why Your Business Needs a Custom Web Design */}
          <div className="row mb-5 align-items-center custom-section">
            <div className="col-md-8">
              <h2 className="mb-4 fw-bold">
                Why a Custom Website is Your Business's Next Strategic Leap
              </h2>
              <p className="text-black">
                You've probably considered website templates – they're quick, affordable, and seem like an easy way to get online. But here's the honest truth: while templates get you <em>online</em>, they rarely help you truly <em>stand out</em> or <em>scale</em>.
              </p>
              <p className="text-black">
                Think of it this way: Would you wear a mass-produced, one-size-fits-all suit to a critical business pitch, or a perfectly tailored outfit that commands attention and confidence? Your website is no different.
              </p>
              <p className="text-black">
                Here’s why a <strong>custom web design</strong> isn't just a luxury, but a strategic necessity for your business's future:
              </p>

              {/* Grid inside UL */}
              <ul className="row list-unstyled">
                <li className="col-md-6 mb-4">
                  <div className="feature-box bg-soft-primary">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Unique Brand Identity:</strong> A custom design ensures your website tells <em>your</em> story.
                  </div>
                </li>
                <li className="col-md-6 mb-4">
                  <div className="feature-box bg-soft-secondary">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Superior User Experience:</strong> Designed around your audience for maximum engagement.
                  </div>
                </li>
                <li className="col-md-6 mb-4">
                  <div className="feature-box bg-soft-info">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Unrestricted Functionality:</strong> No limits—build exactly what you need.
                  </div>
                </li>
                <li className="col-md-6 mb-4">
                  <div className="feature-box bg-soft-warning">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Scalability & Future-Proofing:</strong> Grow without outgrowing your site.
                  </div>
                </li>
                <li className="col-md-6 mb-4">
                  <div className="feature-box bg-soft-success">
                    <i className="bi bi-check-circle text-success me-2"></i>
                    <strong>Enhanced SEO Performance:</strong> Optimized from the ground up for visibility.
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-md-4 text-center">
              <img src={image1} alt="Custom Website Visual" className="img-fluid rounded shadow" />
            </div>
          </div>


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

          {/* Custom vs. Template Comparison Table */}
        <div className="row mb-5">
  <div className="col-12">
    <h2 className="mb-4 fw-bold">
      Tailored Masterpiece or Off-the-Shelf Solution? Custom vs. Template Websites Demystified
    </h2>

    <div className="table-responsive px-3 px-md-5">
      <table className="table table-bordered custom-colored-table responsive-compare-table">
        <thead className=" d-md-table-header-group">
          <tr>
            <th><strong>Feature</strong></th>
            <th><strong>Template Website</strong></th>
            <th><strong>Custom-Fit Website</strong></th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((item, i) => (
            <tr key={i}>
              <td data-label="Feature" className="fw-bold">{item.feature}</td>
              <td data-label="Template Website">{item.template}</td>
              <td data-label="Custom-Fit Website">{item.custom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>



          {/* What's Right for Your Business */}
          <div className="row mb-5 px-5">
            <div className="col-12 text-center custom-section">
              <h2 className="mb-3 fw-bold">
                Making the Right Call: Is a Custom Website the Perfect Fit for Your Business Goals?
              </h2>
              <p className="text-black">
                The journey to a powerful online presence starts with a crucial choice.
                Let’s explore which path truly aligns with your ambitions and business stage.
              </p>
            </div>

            <div className="col-md-6">
              <div className="p-4 bg-soft-primary border rounded-4 h-100 shadow-sm">
                <h4 className="text-black mb-4">
                  <i className="bi bi-stars me-2 text-warning"></i>
                  A Template Website Might Be Right If:
                </h4>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-4">
                    <i className="bi bi-lightbulb-fill text-warning fs-20px me-3"></i>
                    <div>
                      <strong>You're in the very early stages</strong> with a minimal budget,
                      needing a basic online placeholder to validate an idea.
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <i className="bi bi-easel-fill text-warning fs-20px me-3"></i>
                    <div>
                      <strong>Your requirements are extremely simple</strong> — an
                      informational site without unique features or integrations.
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <i className="bi bi-clock-fill text-warning fs-20px me-3"></i>
                    <div>
                      <strong>Speed is your top priority</strong> — just to get online fast,
                      not to stand out or scale significantly.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 mt-4 mt-md-0">
              <div className="p-4 bg-success bg-opacity-10 border border-success rounded-4 h-100 shadow-sm">
                <h4 className="text-success mb-4">
                  <i className="bi bi-lightning-charge-fill me-2 text-success"></i>
                  Choose Custom Web Design & Development If:
                </h4>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-start mb-4">
                    <i className="bi bi-trophy-fill text-success fs-20px me-3"></i>
                    <div>
                      <strong>You’re ready to win your market.</strong> You need a memorable,
                      premium brand presence that captivates.
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <i className="bi bi-gear-fill text-success fs-20px me-3"></i>
                    <div>
                      <strong>You need unique functionality.</strong> You require
                      tailor-made tools, features, and integrations.
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <i className="bi bi-graph-up-arrow text-success fs-20px me-3"></i>
                    <div>
                      <strong>You’re built for growth.</strong> Your platform should scale as
                      your business grows — without limits.
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <i className="bi bi-currency-dollar text-success fs-20px me-3"></i>
                    <div>
                      <strong>Your website is a revenue driver.</strong> It’s a strategic
                      sales and marketing engine, not just a brochure.
                    </div>
                  </li>
                  <li className="d-flex align-items-start mb-4">
                    <i className="bi bi-shield-fill-check text-success fs-20px me-3"></i>
                    <div>
                      <strong>You value long-term ROI.</strong> It’s an investment in
                      performance, conversion, and competitive edge.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 text-center mt-5">
              <p>
                <span className="text-dark fw-semibold">At Orazweb Solutions</span>, we’re here to guide you with clarity and creativity.
                Whether you're starting small or going big — we help you make the right digital move.
              </p>
            </div>
          </div>


          {/* Why Custom is the Best Option */}
          <div className="row mb-5">
            <div className="col-12 text-center custom-section">
              <h2 className="mb-4 fw-bold">
                Beyond Expectations: Why Bespoke Web Design is Your Brand's Ultimate Growth Catalyst
              </h2>
              <p className="text-black">
                For brands serious about making a mark and achieving sustained success, a custom-built website isn't just a preference – it's a strategic imperative.
              </p>
            </div>

            {/* Boxes Start */}
            <div className="row g-4 mt-2 px-5">
              <div className="col-md-6">
                <div className="p-4 bg-light border-start border-5 border-primary rounded shadow-sm h-100">
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-star-fill me-2 text-warning"></i>Unleash Your Brand's Full Potential
                  </h5>
                  <p className="mb-0 text-muted">
                    Every pixel and interaction is designed to reinforce your brand, building trust, recognition, and deep customer loyalty.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 bg-light border-start border-5 border-success rounded shadow-sm h-100">
                  <h5 className="fw-bold text-success mb-2">
                    <i className="bi bi-star-fill me-2 text-warning"></i>Gain a Commanding Competitive Edge
                  </h5>
                  <p className="mb-0 text-muted">
                    A custom site helps you stand out, showcasing your unique value and captivating your audience.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 bg-light border-start border-5 border-warning rounded shadow-sm h-100">
                  <h5 className="fw-bold text-warning mb-2">
                    <i className="bi bi-star-fill me-2 text-warning"></i>Maximize Your Return on Investment (ROI)
                  </h5>
                  <p className="mb-0 text-muted">
                    Get better conversions and fewer long-term costs compared to patching or rebranding template sites.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="p-4 bg-light border-start border-5 border-info rounded shadow-sm h-100">
                  <h5 className="fw-bold text-info mb-2">
                    <i className="bi bi-star-fill me-2 text-warning"></i>Achieve Seamless Integration & Efficiency
                  </h5>
                  <p className="mb-0 text-muted">
                    Custom sites integrate smoothly with your tools—CRM, ERP, automation—streamlining your operations.
                  </p>
                </div>
              </div>

              <div className="col-md-12">
                <div className="p-4 bg-light border-start border-5 border-danger rounded shadow-sm h-100">
                  <h5 className="fw-bold text-danger mb-2">
                    <i className="bi bi-star-fill me-2 text-warning"></i>Be Fully Optimized for Search Engines (Like Q)
                  </h5>
                  <p className="mb-0 text-muted">
                    Clean code, fast loading, mobile-first design, and SEO from the ground up ensures you’re found by the right people.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 text-center mt-5">
              <p className="lead fw-semibold">
                At <span className="text-primary">Orazweb Solutions</span>, we don’t just build websites — we build digital foundations for your business’s ultimate success.
              </p>
            </div>
          </div>

          {/* Our Services */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="mb-4 fw-bold">
                Your Vision, Our Expertise: Orazweb Solutions' Bespoke Web Design & Development Services
              </h2>
              <p className="lead text-muted">
                At Orazweb Solutions, we offer a comprehensive suite of <strong>custom web design and development services</strong> tailored to bring your unique vision to life and drive tangible results:
              </p>
            </div>

            <div className="row g-4 mt-2 px-5">
              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#f0f9ff' }}>
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-search me-2 text-primary"></i>Discovery & Strategic Planning
                  </h5>
                  <p className="text-muted mb-0">
                    We begin by deeply understanding your business, goals, audience, and competition.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#fff8e1' }}>
                  <h5 className="fw-bold text-warning mb-2">
                    <i className="bi bi-palette-fill me-2 text-warning"></i>Intuitive UI/UX Design
                  </h5>
                  <p className="text-muted mb-0">
                    Stunning UIs with intuitive experiences to engage your users.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#e6f5ea' }}>
                  <h5 className="fw-bold text-success mb-2">
                    <i className="bi bi-hammer me-2 text-success"></i>Bespoke Web Development
                  </h5>
                  <p className="text-muted mb-0">
                    Robust, scalable, and secure development tailored to your needs.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#fceef5' }}>
                  <h5 className="fw-bold text-danger mb-2">
                    <i className="bi bi-cart-fill me-2 text-danger"></i>Advanced E-commerce Solutions
                  </h5>
                  <p className="text-muted mb-0">
                    Powerful online stores with seamless payments and user flow.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#e0f7fa' }}>
                  <h5 className="fw-bold text-info mb-2">
                    <i className="bi bi-gear-fill me-2 text-info"></i>Custom CMS Integration
                  </h5>
                  <p className="text-muted mb-0">
                    Easy-to-manage content systems built for your control and flexibility.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#f9fbe7' }}>
                  <h5 className="fw-bold text-secondary mb-2">
                    <i className="bi bi-link-45deg me-2 text-secondary"></i>Third-Party Integrations
                  </h5>
                  <p className="text-muted mb-0">
                    Seamless connections with CRM, ERP, marketing, and other tools.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#f3e5f5' }}>
                  <h5 className="fw-bold text-dark mb-2">
                    <i className="bi bi-speedometer2 me-2 text-dark"></i>Performance & Security
                  </h5>
                  <p className="text-muted mb-0">
                    Fast, secure, and responsive sites that perform across all platforms.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="p-4 rounded-4 shadow-sm h-100" style={{ backgroundColor: '#ede7f6' }}>
                  <h5 className="fw-bold text-primary mb-2">
                    <i className="bi bi-headset me-2 text-primary"></i>Ongoing Support & Maintenance
                  </h5>
                  <p className="text-muted mb-0">
                    Continuous improvement and post-launch support that evolves with your goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 text-center mt-5">
              <p className="lead fw-semibold">
                <strong>Our Process:</strong> From concept to launch and beyond — we collaborate closely to ensure your success.
              </p>
            </div>
          </div>



          {/* FAQ Section */}


          {/* Final Call to Action */}
          {/* <div className="row text-center mt-5">
          <div className="col-12">
            <h2 className="mb-4">Ready to elevate your brand with a custom digital experience?</h2>
            <p className="lead mb-4">Let's chat about your unique vision and how Orazweb Solutions can bring it to life!</p>
            <div className="d-grid gap-2 d-md-block">
              <a href="/contact" className="btn btn-primary btn-lg me-md-3 mb-2 mb-md-0">Get Your Free Consultation Today!</a>
              <a href="/portfolio" className="btn btn-outline-primary btn-lg">Explore Our Custom Web Design Portfolio</a>
            </div>
          </div>
        </div> */}
        </div>

      </div>
      <div className="row mb-5">
        <div className="col-12">
          <h2 className="mb-4 fw-bold text-center">
            <i className="bi bi-question-circle-fill me-2 "></i>
            Navigating Your Custom Website Journey: Answers to FAQs
          </h2>

          <div className="accordion" id="faqAccordion">
            {[
              {
                id: "One",
                question: "Q1: How long does a custom website design and development process typically take?",
                answer:
                  "The timeline for a custom website at Orazweb Solutions varies by complexity and features. Typically, a full project ranges from 8 to 16 weeks, from discovery to launch.",
              },
              {
                id: "Two",
                question: "Q2: What is the investment for a custom website from Orazweb Solutions?",
                answer:
                  "It depends on pages, complexity, integrations, and support level. We provide a transparent quote after understanding your scope. It's a long-term investment with excellent ROI.",
              },
              {
                id: "Three",
                question: "Q3: Will I be able to update the content on my custom website myself?",
                answer:
                  "Absolutely. We integrate user-friendly CMS systems and provide training so you can easily manage and update your content—no coding required.",
              },
              {
                id: "Four",
                question: "Q4: Is a custom website truly better for SEO?",
                answer:
                  "Yes. Custom websites are built with clean code, fast performance, and mobile-first design—key factors in SEO. We also follow on-page SEO best practices.",
              },
              {
                id: "Five",
                question: "Q5: What kind of support does Orazweb offer after launch?",
                answer:
                  "We offer complete post-launch support including maintenance, security updates, performance checks, and new feature development based on your growth.",
              },
              {
                id: "Six",
                question: "Q6: What's the biggest benefit of choosing a custom site over a template?",
                answer:
                  "Limitless potential, true brand uniqueness, custom functionality, and scalability—your website becomes a powerful growth engine for your business.",
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

export default Customwebsite;