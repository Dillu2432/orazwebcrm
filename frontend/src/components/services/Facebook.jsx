import React from 'react';
import "../../assets/css/global.css";
import "../../assets/css/services.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/facebook.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";
import person1 from "../../assets/image/person1.jpeg"

const FacebookPage = () => {
    const steps = [
  { title: "In-Depth Discovery & Goal Setting", description: "We begin by understanding your business, audience, and objectives." },
  { title: "Strategy Development", description: "We craft a tailored plan outlining targeting, formats, and budget." },
  { title: "Creative & Copy", description: "Our team designs engaging ads and writes persuasive copy." },
  { title: "Setup & Launch", description: "We configure and launch your campaigns with precision tracking." },
  { title: "Monitoring & Optimization", description: "We monitor and refine campaigns daily for peak performance." },
  { title: "Reporting & Analysis", description: "We deliver clear, actionable reports with insights and improvements." },
  { title: "Continuous Improvement", description: "We evolve strategies to ensure sustainable, long-term growth." }
];

    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">FACEBOOK ADVERTISING</h1>
                    <p className="lead">Fast-Track Your Success on the World’s Leading Social Media Platform</p>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row justify-content-center align-items-center">

                    <div className="col-lg-12 mb-4">
                            <h2 className="display-5 text-center fw-bold text-success">
                            Run Targeted Campaigns and Achieve Measurable Results
                        </h2>
                        <p className="lead text-muted fw-semibold  fs-5 mb-2">
                            In today's dynamic digital landscape, merely having an online presence isn't enough; it demands a proactive and intelligent approach to reaching your ideal customers. This is where Facebook Advertising shines, offering an unparalleled platform for targeted campaigns that deliver tangible, measurable results. At orazweb solutions, we specialize in empowering businesses like yours to fully leverage the immense potential of the Meta platform (Facebook, Instagram, Messenger, and Audience Network), transforming your advertising spend into valuable conversions and accelerating your business growth.

                        </p>

                    </div>
                    <div className="col-md-5 text-center">
                        <img
                            src={image1}
                            alt="Custom Website Visual"
                            className="img-fluid rounded "
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>

                </div>
                {/* what si facebook */}
                <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-md-5 text-center">
                        <img
                            src={person1}
                            alt="Custom Website Visual"
                            className="img-fluid rounded "
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-lg-6 mb-4">
                        <h4 className="display-5  fw-bold text-success">What Is Facebook Advertising?</h4>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            Facebook Advertising refers to the strategically paid campaigns executed across the vast Meta ecosystem. This includes the flagship Facebook social media platform, the visually-driven Instagram, the widely used Messenger application, and the extensive Audience Network of third-party apps and websites. These advertisements are seamlessly integrated into the user experience, appearing in various compelling formats such as engaging video ads, eye-catching image ads, interactive carousel ads, and immersive Instant Experiences. Unlike organic posts, which rely on algorithmic reach, Facebook Ads provide businesses with the profound ability to precisely target specific demographics, interests, behaviors, and even re-engage individuals who have previously interacted with their brand. This granular control ensures that your advertising message reaches the most relevant and receptive audience, maximizing efficiency and impact. It's a powerful tool for driving awareness, generating leads, and boosting sales by connecting directly with your prospective customers where they spend their time online.                        </p>
                    </div>
                </div>
                {/* Section 1: why to choose*/}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Why Facebook Advertising is Your Business's Next Big Leap
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            In the fast-evolving digital landscape of 2025, smart advertising isn't just about showing up; it's about making an impact. Here's how Facebook Advertising, powered by orazweb solutions, provides the ultimate edge for your business:                        </p>
                        <div className="row g-4">
                            {/* Card 1 */}
                            <div className="col-md-4">
                                <div className="h-100 border shadow-sm rounded overflow-hidden d-flex flex-column">
                                    <div className="p-4 box-head-1 text-white d-flex flex-column align-items-center justify-content-center text-center">
                                        <i className="bi bi-broadcast-pin fs-3 mb-2"></i>
                                        <h5 className="fw-bold mb-0">Extensive Reach</h5>
                                    </div>
                                    <div className="p-4 box-body-1 text-muted flex-grow-1">
                                        <p className="mb-0 fw-semibold">
                                            Imagine having access to a global customer base, refined to your local audience. With Facebook’s massive reach, your message lands exactly where it matters most — and we make sure of it.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="col-md-4">
                                <div className="h-100 border shadow-sm rounded overflow-hidden d-flex flex-column">
                                    <div className="p-4 box-head-2 text-white d-flex flex-column align-items-center justify-content-center text-center">
                                        <i className="bi bi-currency-dollar fs-3 mb-2"></i>
                                        <h5 className="fw-bold mb-0">Flexible Budgeting</h5>
                                    </div>
                                    <div className="p-4 box-body-2 text-muted flex-grow-1">
                                        <p className="mb-0 fw-semibold">
                                            Control your spend with confidence. Start small, scale smart, and trust our team to make every rupee work harder for you.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col-md-4">
                                <div className="h-100 border shadow-sm rounded overflow-hidden d-flex flex-column">
                                    <div className="p-4 box-head-3 text-white d-flex flex-column align-items-center justify-content-center text-center">
                                        <i className="bi bi-crosshair2 fs-3 mb-2"></i>
                                        <h5 className="fw-bold mb-0">Precise Targeting</h5>
                                    </div>
                                    <div className="p-4 box-body-3 text-muted flex-grow-1">
                                        <p className="mb-0 fw-semibold">
                                            Facebook's algorithms allow hyper-targeted advertising beyond basic demographics. We’ll reach users based on interests, behaviors, and purchase habits — ensuring higher conversions and lower waste.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="col-md-4">
                                <div className="h-100 border shadow-sm rounded overflow-hidden d-flex flex-column">
                                    <div className="p-4 box-head-4 text-white  d-flex flex-column align-items-center justify-content-center text-center">
                                        <i className="bi bi-graph-up-arrow fs-3 mb-2"></i>
                                        <h5 className="fw-bold mb-0">Detailed Analytics</h5>
                                    </div>
                                    <div className="p-4 box-body-4 text-muted flex-grow-1">
                                        <p className="mb-0 fw-semibold">
                                            Facebook gives you real-time insights into your campaign performance. We translate that data into actions to refine strategies, boost ROI, and make sure you always know how your investment is performing.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="col-md-4">
                                <div className="h-100 border shadow-sm rounded overflow-hidden d-flex flex-column">
                                    <div className="p-4 box-head-5 text-white d-flex flex-column align-items-center justify-content-center text-center">
                                        <i className="bi bi-check-circle fs-3 mb-2 text-white"></i>
                                        <h5 className="fw-bold mb-0">Ease of Use</h5>
                                    </div>
                                    <div className="p-4 box-body-5 text-muted flex-grow-1">
                                        <p className="mb-0 fw-semibold">
                                            We simplify Facebook’s powerful tools, so you don’t have to stress. Orazweb handles setup, optimization, and reporting — letting you focus on running your business while we ensure results.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Card 6 */}
                            <div className="col-md-4">
                                <div className="h-100 border shadow-sm rounded overflow-hidden d-flex flex-column">
                                    <div className="p-4 box-head-6 text-white d-flex flex-column align-items-center justify-content-center text-center">
                                        <i className="bi bi-cpu fs-3 mb-2"></i>
                                        <h5 className="fw-bold mb-0">Advanced Automation</h5>
                                    </div>
                                    <div className="p-4 box-body-6 text-muted flex-grow-1">
                                        <p className="mb-0 fw-semibold">
                                            Leverage Facebook's AI to optimize ad delivery, bidding, and audience targeting. We fine-tune every setting to ensure peak performance — less manual work, more business growth.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Section 2:  orazweb's Facebook Advertising Services */}
                <section className="py-5" >

                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            orazweb's Facebook Advertising Services: Your Path to Digital Dominance
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            At orazweb solutions, we don't just run ads; we craft comprehensive Facebook Advertising strategies designed to maximize your online presence, amplify your brand message, and achieve your specific business objectives. Our holistic services are built on a foundation of precision, creativity, and continuous optimization, ensuring your campaigns deliver real, measurable results.
                        </p>
                        <div className="row g-4">
                            {[
                                {
                                    title: 'In-Depth Data Analysis',
                                    icon: 'bi-graph-up-arrow',
                                    bodyClass: 'box-1',
                                    description: `We start with a deep dive into the numbers. Our team conducts thorough data analysis of your current digital footprint, market trends, and competitor activities.`
                                },
                                {
                                    title: 'Precision Audience Targeting',
                                    icon: 'bi-person-bounding-box',
                                    bodyClass: 'box-2',
                                    description: `Reaching the right people is paramount. We use Facebook's tools to target ideal customers by interests, behaviors, and more.`
                                },
                                {
                                    title: 'Compelling Ad Design and Creative Strategy',
                                    icon: 'bi-palette-fill',
                                    bodyClass: 'box-3',
                                    description: `Our creative team designs scroll-stopping visuals with powerful messaging using static, carousel, or instant experiences.`
                                },
                                {
                                    title: 'Strategic Ad Campaign Monitoring',
                                    icon: 'bi-eye-fill',
                                    bodyClass: 'box-4',
                                    description: `We vigilantly monitor your campaigns in real-time, ensuring optimal performance, fixing issues early, and driving results.`
                                },
                                {
                                    title: 'Persuasive Ad Copywriting',
                                    icon: 'bi-pencil-square',
                                    bodyClass: 'box-5',
                                    description: `We write impactful, persuasive copy that resonates with your audience and inspires clicks, actions, and conversions.`
                                },
                                {
                                    title: 'Optimized Landing Page Creation',
                                    icon: 'bi-layers-fill',
                                    bodyClass: 'box-6',
                                    description: `Landing pages designed for speed, clarity, and conversion — tailored to match ad messaging and boost ROI.`
                                },
                                {
                                    title: 'Professional Video & Photography',
                                    icon: 'bi-camera-reels-fill',
                                    bodyClass: 'box-7',
                                    description: `We craft high-quality visuals and videos that tell your story, showcase your product, and grab instant attention.`
                                },
                                {
                                    title: 'Strategic Retargeting Campaigns',
                                    icon: 'bi-arrow-repeat',
                                    bodyClass: 'box-8',
                                    description: `Re-engage warm leads with retargeting ads that gently push them back into the funnel for higher conversions.`
                                },
                                {
                                    title: 'Continuous A/B Testing',
                                    icon: 'bi-sliders',
                                    bodyClass: 'box-9',
                                    description: `We constantly run A/B tests on your ad elements to find what works best and improve campaign performance.`
                                }
                            ].map((card, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className={`h-100 text-black border shadow-sm rounded overflow-hidden d-flex flex-column ${card.bodyClass}`}>
                                        <div className={`p-4 d-flex flex-column align-items-center justify-content-center text-center`}>
                                            <i className={`bi ${card.icon} fs-3 mb-2`}></i>
                                            <h5 className="fw-bold fs-4 mb-0">{card.title}</h5>
                                        </div>
                                        <div className={`p-4 flex-grow-1 `}>
                                            <p className="mb-0 fw-semibold">{card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/*  Orazweb's Facebook Advertising Process*/}
             <section className="py-5" style={{ backgroundColor: '#f7fcec' }}>
  <div className="container text-center">
    <h2 className="display-5 fw-bold text-success">
      Orazweb's Facebook Advertising Process
    </h2>
    <p className="lead fs-5 text-muted fw-semibold mt-4">
      Our streamlined process ensures your Facebook advertising campaigns are efficient, effective, and results-driven:
    </p>

    <div className="row justify-content-center mt-5">
      {/* Vertical Line & Step Content */}
      <div className="col-12 col-md-10 d-flex flex-column flex-md-row">
        {/* Vertical Line (Hide on mobile) */}
        <div className="step-line me-md-4 d-none d-md-block"></div>

        {/* Step Content */}
        <div className="flex-grow-1">
          {steps.map((step, index) => (
            <div key={index} className="d-flex align-items-start mb-5 flex-column flex-md-row text-start">
              <div className={`step-circle text-white me-md-3 mb-3 mb-md-0 bg-step-${index + 1}`}>
                <div className="step-label">STEP<br />{index + 1}</div>
              </div>
              <div>
                <h6 className="badge text-dark fs-5 fw-bold mb-2">{step.title}</h6>
                <p className="text-muted mb-0">{step.description}</p>
              </div>
            </div>
          ))}
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
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success mb-4">
                            Why Choose <span className="text-dark">orazweb</span> for Your Facebook Advertising?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
                            Partnering with orazweb solutions for your Facebook Advertising means choosing a team genuinely invested in your digital growth and success. Here’s why we are the right choice:
                        </p>

                        <div className="row g-4 text-start">
                            {[
                                {
                                    icon: "bi-lightbulb-fill",
                                    title: "Unrivaled Expertise & Cutting-Edge Strategies",
                                    description:
                                        "Our team comprises seasoned Facebook advertising specialists who live and breathe the platform. We stay updated on trends and best practices, powering your campaigns with the most current strategies."
                                },
                                {
                                    icon: "bi-bar-chart-line-fill",
                                    title: "Unwavering Results-Oriented Approach",
                                    description:
                                        "We focus on conversions and growth, not just clicks. Our goal is to show clear, measurable results and maximize your Return on Ad Spend (ROAS)."
                                },
                                {
                                    icon: "bi-sliders2",
                                    title: "Customized Strategies, Not Generic Solutions",
                                    description:
                                        "Your business is unique — and your strategy should be too. We design tailored Facebook ad plans that match your goals, audience, and market perfectly."
                                },
                                {
                                    icon: "bi-chat-left-text-fill",
                                    title: "Transparent Communication & Proactive Reporting",
                                    description:
                                        "You’ll always know what’s going on. We provide open, clear communication and reports with performance data, insights, and recommendations."
                                },
                                {
                                    icon: "bi-person-check-fill",
                                    title: "Dedicated Support & Expert Guidance",
                                    description:
                                        "Think of us as part of your team. We offer expert, responsive support throughout the journey, helping you feel confident and informed."
                                },
                                {
                                    icon: "bi-cash-coin",
                                    title: "Optimized, Cost-Effective Solutions for Maximum ROI",
                                    description:
                                        "Your budget matters. We maximize every rupee spent, ensuring efficiency, minimized waste, and high-performing ads that drive ROI."
                                }
                            ].map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="h-100 border rounded shadow-sm p-4 bg-white d-flex flex-column hover-lift">
                                        <div className="mb-3 text-success text-center">
                                            <i className={`bi ${item.icon} fs-1`}></i>
                                        </div>
                                        <h5 className="fw-bold text-dark mb-2 text-center">{item.title}</h5>
                                        <p className="text-muted fw-semibold mb-0">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </section>

            </div>
        </div>
    );
};

export default FacebookPage;