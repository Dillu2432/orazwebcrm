import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/2701822.jpg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const BrandingServicesPage = () => {
    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">BRANDING SERVICES</h1>
                    <p className="lead">In today's dynamic online world, your brand is the very heartbeat of your business. We build powerful brand identities that connect, convert, and command attention, ensuring your digital presence truly shines.</p>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* Is Your Brand Speaking Your Truth? Section */}
                <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-12 text-center mb-5">
                        <h1 className="display-5 fw-bold">
                            Is Your Brand Speaking Your Truth?
                        </h1>
                        <p className="lead text-muted mb-2">
                            In today's crowded digital landscape, your brand is more than just a name or a logo — it's the very soul of your business.
                        </p>
                        <p className="text-muted">
                            But what if your brand isn't truly reflecting your vision, connecting with your audience, or standing out from the noise?
                        </p>
                    </div>

                    {/* Left: Text Content */}
                    <div className="col-lg-6 mb-4">
                        <h4 className="fw-semibold mb-4 text-dark">You might be experiencing:</h4>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-start mb-3">
                                <i className="bi bi-eye-slash-fill text-danger me-3 fs-5"></i>
                                <span>A feeling of being <strong>invisible</strong> in a sea of competitors.</span>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                                <i className="bi bi-puzzle-fill text-info me-3 fs-5"></i>
                                <span>A <strong>fragmented online presence</strong> where your website, social media, and marketing materials don't tell the same story.</span>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                                <i className="bi bi-lightbulb-off-fill text-warning me-3 fs-5"></i>
                                <span>Difficulty in <strong>articulating what makes your business special</strong> and why customers should choose you.</span>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                                <i className="bi bi-person-x-fill text-primary me-3 fs-5"></i>
                                <span><strong>Struggling to attract your ideal client</strong> because your message isn't clear or compelling enough.</span>
                            </li>
                            <li className="d-flex align-items-start mb-3">
                                <i className="bi bi-clock-history text-secondary me-3 fs-5"></i>
                                <span>A sense that your brand simply <strong>doesn't feel "modern" or "relevant"</strong> anymore.</span>
                            </li>
                        </ul>

                        <p className="lead text-muted mt-4">
                            If any of this resonates, it's a clear signal. It's time to invest in <strong>professional branding services</strong> that align your identity with your ambition.
                        </p>

                        <p className="text-dark">
                            At <strong>Orazweb Solutions</strong>, we don’t just build websites — we craft the essence of your brand. Authentic, memorable, and strategically positioned for success.
                        </p>
                    </div>

                    {/* Right: Image */}
                    <div className="col-md-5 text-center">
                        <img
                            src={image1}
                            alt="Custom Website Visual"
                            className="img-fluid rounded "
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>
                </div>




                {/* Section 1: The Orazweb Approach */}
                <section className="py-5" style={{ backgroundColor: '#e0f2f1' }}>
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <img
                                src={image2}
                                alt="Custom Website Visual"
                                className="img-fluid rounded "
                                style={{ maxHeight: '350px', objectFit: 'fit' }}
                            />
                            <div className="col-lg-10 col-md-11 py-5">
                                <h2 className="fw-bold mb-4 ">
                                    The Orazweb Approach: Building Brands for the Digital Age
                                </h2>
                                <p className="lead text-muted mb-3">
                                    At Orazweb Solutions, we understand that a powerful brand is the cornerstone of every successful digital venture.
                                    Our <strong>branding services</strong> are deeply integrated with our <strong>website development expertise</strong>, ensuring your brand not only looks exceptional but also performs brilliantly online.
                                </p>
                                <p className="text-black ">
                                    We don’t just design; we dive deep into what makes your business unique. We analyze your market, understand your audience,
                                    and then strategize to create a brand identity that truly connects and converts.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Section 2: Unpacking Brand Identity */}
                <section className="py-5" >
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="fw-bold display-6">
                                Unpacking Brand Identity: <span className="text-success">Beyond Visuals</span>
                            </h2>
                            <p className="lead text-muted">
                                <strong className="text-dark">Branding</strong> is the art and science of shaping how the world perceives your business—
                                a complete ecosystem that leaves a lasting impression.
                            </p>
                        </div>

                        {/* Identity Grid */}
                        <div className="row g-4">
                            <div className="col-md-3">
                                <div className="p-4 border rounded bg-white shadow-sm h-100 text-center">
                                    <i className="bi bi-lightbulb-fill fs-1 text-success mb-3"></i>
                                    <h5 className="fw-bold">Your Logo</h5>
                                    <p className="text-muted">The iconic symbol that defines your essence and creates instant brand recall.</p>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="p-4 border rounded bg-white shadow-sm h-100 text-center">
                                    <i className="bi bi-palette-fill fs-1 text-info mb-3"></i>
                                    <h5 className="fw-bold">Color & Typography</h5>
                                    <p className="text-muted">Your visual language that sparks emotion and maintains consistency across all touchpoints.</p>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="p-4 border rounded bg-white shadow-sm h-100 text-center">
                                    <i className="bi bi-chat-dots-fill fs-1 text-warning mb-3"></i>
                                    <h5 className="fw-bold">Brand Messaging</h5>
                                    <p className="text-muted">The voice, tone, and story you share to connect with your ideal audience.</p>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="p-4 border rounded bg-white shadow-sm h-100 text-center">
                                    <i className="bi bi-person-fill fs-1 text-primary mb-3"></i>
                                    <h5 className="fw-bold">Brand Personality</h5>
                                    <p className="text-muted">The relatable, human traits that make your brand unforgettable.</p>
                                </div>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="my-5 text-center">
                            <h3 className="fw-bold">When a Fresh Start is Needed: <span className="text-danger">Rebranding</span></h3>
                            <p className="lead text-muted">
                                Rebranding is the strategic reinvention of your identity. You may need it when:
                            </p>
                        </div>

                        {/* Rebranding Grid */}
                        <div className="row g-4">
                            <div className="col-md-3">
                                <div className="p-4 border rounded bg-white shadow-sm h-100 text-center">
                                    <i className="bi bi-arrow-repeat fs-1 text-secondary mb-3"></i>
                                    <h5 className="fw-bold">Business Evolution</h5>
                                    <p className="text-muted">Your services or market has changed, and your brand needs to reflect that shift.</p>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="p-4 border rounded bg-white shadow-sm h-100 text-center">
                                    <i className="bi bi-x-circle-fill fs-1 text-danger mb-3"></i>
                                    <h5 className="fw-bold">Outdated Branding</h5>
                                    <p className="text-muted">Your current brand no longer aligns with your values or visual trends.</p>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="p-4 border rounded bg-white shadow-sm h-100 text-center">
                                    <i className="bi bi-exclamation-triangle-fill fs-1 text-warning mb-3"></i>
                                    <h5 className="fw-bold">Reputation Reset</h5>
                                    <p className="text-muted">You want to shift public perception or move away from past associations.</p>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="p-4 border rounded bg-white shadow-sm h-100 text-center">
                                    <i className="bi bi-graph-up-arrow fs-1 text-success mb-3"></i>
                                    <h5 className="fw-bold">Expansion & Growth</h5>
                                    <p className="text-muted">You're scaling fast or merging, and your identity needs to reflect that momentum.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


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

                {/* Section 3: Why Strong Branding is Non-Negotiable */}
                <section className="py-5">
                    <div className="container text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-11 custom-section">
                                <h2 className="fw-bold mb-4">
                                    Why Strong Branding is Non-Negotiable for Your Digital Success
                                </h2>
                                <p className="text-black">
                                    In today’s visually driven, information-rich world, a strong brand isn’t a luxury—it’s a necessity.
                                    Here’s how <strong>professional branding services</strong> elevate your business:
                                </p>

                                <div className="row mt-5">
                                    {[
                                        ['bi-star-fill', 'Magnetize Your Audience', 'A distinct brand attracts ideal customers who resonate with your values.'],
                                        ['bi-award-fill', 'Build Instant Recognition', 'A consistent brand makes you instantly recognizable across channels.'],
                                        ['bi-shield-fill-check', 'Foster Trust & Credibility', 'A professional brand signals quality and authority.'],
                                        ['bi-heart-fill', 'Drive Deeper Connections', 'Branding builds emotional bonds that turn visitors into loyal advocates.'],
                                        ['bi-globe2', 'Enhance Website Performance', 'Branding guides more intuitive and conversion-optimized designs.'],
                                        ['bi-hourglass-split', 'Future-Proof Your Growth', 'A strong identity provides flexibility while staying true to your core.'],
                                    ].map(([icon, title, text], i) => (
                                        <div key={i} className="col-md-4 mb-4">
                                            <div className="p-4 border rounded shadow-sm text-center h-100" style={{ backgroundColor: '#f6f6f6' }}>
                                                <div className="d-flex align-items-center justify-content-center mb-3">
                                                    <i className={`bi ${icon} me-2`} style={{ color: '#778d48', fontSize: '2rem' }}></i>
                                                    <h5 className="fw-bold mb-0">{title}</h5>
                                                </div>
                                                <p className="text-muted mb-0">{text}</p>
                                            </div>
                                        </div>

                                    ))}
                                </div>

                                <p className="lead text-muted mt-4">
                                    At Orazweb Solutions, we don’t just build pretty faces; we build powerful, strategic brand identities designed for sustained digital growth and success.
                                </p>


                            </div>
                        </div>
                    </div>
                </section>

                {/* Orazweb's Signature Branding Solutions Section */}
                <section className="py-5 bg-light">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-10 col-md-11 text-center">
        <h2 className="fw-bold mb-4" data-aos="fade-up">Our Collaborative Branding Journey</h2>
        <p className="lead text-muted" data-aos="fade-up" data-aos-delay="100">
          At Orazweb Solutions, our <strong>custom branding services</strong> are built on a foundation of collaboration and clarity.
          We guide you through a proven process designed for efficiency and impactful results:
        </p>

        <div className="timeline mt-5">
          {[
            ['bi-search', 'Immerse & Discover', 'We dive deep into your vision, market, and goals to uncover your brand\'s unique DNA.'],
            ['bi-pencil-square', 'Strategize & Design', 'We craft your brand strategy, visuals, and messaging, iterating with you for perfect alignment.'],
            ['bi-code-slash', 'Build & Integrate', 'Your brand comes alive with meticulous implementation, especially across your website.'],
            ['bi-rocket-fill', 'Launch & Nurture', 'We launch your brand and provide ongoing support for consistent growth and impact.']
          ].map(([icon, title, desc], i) => (
            <div
              key={i}
              className="d-flex flex-column flex-md-row align-items-center gap-4 mb-5"
              data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={i * 150}
            >
              <div className="text-center">
                <i className={`bi ${icon}`} style={{ color: '#778d48', fontSize: '2.5rem' }}></i>
              </div>
              <div className="text-md-start text-center">
                <h5 className="fw-bold mb-2">{title}</h5>
                <p className="text-muted mb-0">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>





                {/* Why Partner with Orazweb Section */}
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-11 text-center">
                                <h2 className="fw-bold mb-4">Why Partner with Orazweb for Your Brand Journey?</h2>
                                <p className="lead text-muted">
                                    Choosing Orazweb Solutions means partnering with a team that understands the intricate connection between powerful branding and successful <strong>website development</strong>.
                                </p>

                                <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                                    {[
                                        ['bi-code-square', 'Digital-First Expertise', 'We design brands that are built for exceptional online performance.'],
                                        ['bi-lightbulb', 'Strategic & Holistic Approach', 'We create brand strategies aligned with your business goals.'],
                                        ['bi-gem', 'Tailored to Your Vision', 'Every branding solution is custom-built, not templated.'],
                                        ['bi-handshake-fill', 'Clear Collaboration', 'We foster transparent communication from concept to launch.'],
                                        ['bi-graph-up', 'Long-Term Partnership', 'We support your brand beyond launch as it evolves.'],
                                        ['bi-search', 'SEO-Centric by Design', 'We build brands optimized for search engine visibility.'],
                                    ].map(([icon, title, desc], i) => (
                                        <div key={i} className="col">
                                            <div className="p-4 h-100 border rounded bg-white shadow-sm">
                                                <i className={`bi ${icon} text-warning fs-2 mb-3`}></i>
                                                <h5 className="fw-bold">{title}</h5>
                                                <p className="text-muted">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default BrandingServicesPage;