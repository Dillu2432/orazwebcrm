import React from 'react';
import "../../assets/css/global.css";
import "../../assets/css/services.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/instagram.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";
import person1 from "../../assets/image/person2.jpeg"

const InstageamPage = () => {


    const instagramBenefits = [
        {
            title: "Extensive Reach",
            icon: "bi-broadcast-pin",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Imagine having access to a global customer base, refined to your local audience. With Facebook’s massive reach, your message lands exactly where it matters most — and we make sure of it."
        },
        {
            title: "Flexible Budgeting",
            icon: "bi-currency-dollar",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Control your spend with confidence. Start small, scale smart, and trust our team to make every rupee work harder for you."
        },
        {
            title: "Precise Targeting",
            icon: "bi-crosshair2",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Facebook's algorithms allow hyper-targeted advertising beyond basic demographics. We’ll reach users based on interests, behaviors, and purchase habits — ensuring higher conversions and lower waste."
        },
        {
            title: "Detailed Analytics",
            icon: "bi-graph-up-arrow",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Facebook gives you real-time insights into your campaign performance. We translate that data into actions to refine strategies, boost ROI, and make sure you always know how your investment is performing."
        },
        {
            title: "Ease of Use",
            icon: "bi-check-circle",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "We simplify Facebook’s powerful tools, so you don’t have to stress. Orazweb handles setup, optimization, and reporting — letting you focus on running your business while we ensure results."
        },
        {
            title: "Advanced Automation",
            icon: "bi-cpu",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Leverage Facebook's AI to optimize ad delivery, bidding, and audience targeting. We fine-tune every setting to ensure peak performance — less manual work, more business growth."
        }
    ];
    const instagramSteps = [
        {
            step: 1,
            title: 'Discovery & Goals',
            description: 'We begin by understanding your business, visual brand, audience, and objectives.',
            bgClass: 'bg-step-1',
        },
        {
            step: 2,
            title: 'Strategy Development',
            description: 'We then craft a tailored Instagram advertising plan outlining targeting, visual formats, and budget.',
            bgClass: 'bg-step-2',
        },
        {
            step: 3,
            title: 'Creative & Copy',
            description: 'Our team designs visually stunning ads and writes engaging, concise copy.',
            bgClass: 'bg-step-3',
        },
        {
            step: 4,
            title: 'Setup & Launch',
            description: 'We meticulously configure and launch your campaigns within Instagram/Meta Ads Manager, including tracking.',
            bgClass: 'bg-step-4',
        },
        {
            step: 5,
            title: 'Monitoring & Optimization',
            description: 'We daily monitor and refine visual campaigns for peak engagement and conversions.',
            bgClass: 'bg-step-5',
        },
        {
            step: 6,
            title: 'Reporting & Analysis',
            description: 'You get clear reports on visual performance and key insights.',
            bgClass: 'bg-step-6',
        },
        {
            step: 7,
            title: 'Continuous Improvement',
            description: 'We constantly adapt strategies based on visual trends and campaign data to ensure sustained growth.',
            bgClass: 'bg-step-7',
        },
    ];
    return (

        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">FACEBOOK ADVERTISING</h1>
                    <p className="lead">Fast-Track Your Success on the World’s Leading Social Media Platform</p>
                </div>
            </div>
            {/* wintroducation */}
            <div className="container bg-white my-5 p-5">
                {/* Is Your Brand Speaking Your Truth? Section */}
                <div className="row justify-content-center align-items-center">

                    <div className="col-lg-12 mb-4">
                        <h1 className="display-5 fw-bold ">
                            Instagram Advertising for orazweb solutions: Visually Engage, Convert Your Audience                        </h1>
                        <p className="lead text-muted fw-semibold  fs-5 mb-2">
                            In today's highly visual and socially-driven digital landscape, having an impactful presence on Instagram is no longer optional – it's essential. This is where Instagram Advertising shines, offering an unparalleled platform to visually captivate your audience, build genuine connections, and drive measurable results. At orazweb solutions, we specialize in empowering businesses like yours to fully leverage Instagram's immense potential, transforming visual engagement into valuable conversions and significantly accelerating your brand's growth.
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

                {/* what */}
                <div className="row my-5 justify-content-center align-items-center">
                    {/* Left: Text Content */}
                    <div className="col-md-5 text-center">
                        <img
                            src={person1}
                            alt="Custom Website Visual"
                            className="img-fluid rounded "
                            style={{ maxHeight: '400px', objectFit: 'cover' }}
                        />
                    </div>
                    <div className="col-lg-6 mb-4">
                        <h4 className="display-5  fw-bold text-success">What Is Instagram Advertising?</h4>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            <strong>Instagram Advertising</strong> refers to the strategically paid campaigns executed within the Instagram platform, which is part of the broader Meta ecosystem. These advertisements are seamlessly integrated into the user experience, appearing in various compelling and highly visual formats across users' feeds, Stories, Reels, and the Explore tab. Unlike organic posts, which rely on algorithmic reach, Instagram Ads provide businesses with the profound ability to precisely target specific demographics, interests, behaviors, and even re-engage individuals who have previously interacted with their brand. This granular control ensures your visually rich advertising message reaches the most relevant and receptive audience, maximizing both efficiency and impact. It's a powerful tool for driving brand awareness, generating leads, and boosting sales by connecting directly with your prospective customers through compelling visuals and engaging content.                            </p>
                    </div>
                </div>
                {/* Section 1:                             Why Your Business Needs Instagram Advertising                        
 */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Why Your Business Needs Instagram Advertising
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            In today's visual-first digital world, Instagram isn't just a social platform; it's a powerful advertising channel that your business can't afford to ignore. Here's why integrating Instagram Advertising into your strategy is a smart move for growth:
                        </p>
                        <div className="row g-4">
                            {instagramBenefits.map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="h-100 border shadow-sm rounded overflow-hidden d-flex flex-column">
                                        <div className={`p-4 ${item.headClass} text-white d-flex flex-column align-items-center justify-content-center text-center`}>
                                            <i className={`bi ${item.icon} fs-3 mb-2`}></i>
                                            <h5 className="fw-bold mb-0">{item.title}</h5>
                                        </div>
                                        <div className={`p-4 ${item.bodyClass} text-muted flex-grow-1`}>
                                            <p className="mb-0 fw-semibold">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>


                {/* Section 2:  Why Your Business Needs Instagram Advertising */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success">
                            orazweb's Instagram Advertising Services: Your Path to Digital Dominance
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            At orazweb solutions, we don't just run ads; we craft comprehensive Instagram Advertising strategies designed to maximize your visual impact, amplify your brand message, and achieve your specific business objectives. Our holistic services are built on a foundation of precision, creativity, and continuous optimization, ensuring your campaigns deliver real, measurable results.
                        </p>

                        <div className="row g-4 mt-4">
                            {[
                                {
                                    title: 'In-Depth Data Analysis',
                                    icon: 'bi-graph-up-arrow',
                                    bodyClass: 'box-1',
                                    description: `We start with a deep dive into your Instagram performance, market trends, and competitors. This analysis reveals visual preferences, user behavior, and opportunities to build a data-driven campaign foundation.`
                                },
                                {
                                    title: 'Precision Audience Targeting',
                                    icon: 'bi-person-bounding-box',
                                    bodyClass: 'box-2',
                                    description: `We use Meta’s advanced targeting to define your ideal Instagram audience based on interests, behaviors, life events, and engagement patterns — ensuring every ad reaches the right eyes.`
                                },
                                {
                                    title: 'Compelling Ad Design and Creative Strategy',
                                    icon: 'bi-palette-fill',
                                    bodyClass: 'box-3',
                                    description: `Our creatives are built to stop the scroll — dynamic Reels, stunning visuals, and native-first layouts that look beautiful and convert in-feed, in Stories, and beyond.`
                                },
                                {
                                    title: 'Strategic Ad Campaign Monitoring',
                                    icon: 'bi-eye-fill',
                                    bodyClass: 'box-4',
                                    description: `We track every metric in real-time, spot trends early, and proactively fine-tune your campaigns to ensure high efficiency, maximum engagement, and consistent performance.`
                                },
                                {
                                    title: 'Persuasive Ad Copywriting',
                                    icon: 'bi-pencil-square',
                                    bodyClass: 'box-5',
                                    description: `Short, sharp, and engaging — we write copy that clicks. Our captions, CTAs, and hooks are tailored for Instagram’s fast-scrolling audience, aligned with your brand tone.`
                                },
                                {
                                    title: 'Optimized Landing Page Creation',
                                    icon: 'bi-layers-fill',
                                    bodyClass: 'box-6',
                                    description: `We create or optimize landing pages that load fast, align visually with your Instagram ad, and drive conversions with strong content, clarity, and clear CTAs.`
                                },
                                {
                                    title: 'Professional Video & Photography',
                                    icon: 'bi-camera-reels-fill',
                                    bodyClass: 'box-7',
                                    description: `Reels, Stories, and lifestyle photography that shine. We shoot and produce high-quality visuals to elevate your brand and ensure Instagram success.`
                                },
                                {
                                    title: 'Strategic Retargeting Campaigns',
                                    icon: 'bi-arrow-repeat',
                                    bodyClass: 'box-8',
                                    description: `We re-engage users who interacted with your Instagram or website. Personalized retargeting ads nurture warm leads and guide them closer to conversion.`
                                },
                                {
                                    title: 'Continuous A/B Testing',
                                    icon: 'bi-sliders',
                                    bodyClass: 'box-9',
                                    description: `We run strategic A/B tests across visuals, copy, CTAs, and placements — optimizing every campaign element to uncover what converts best.`
                                }


                            ].map((card, index) => (


                                <div className="col-md-4" key={index}>
                                    <div className={`h-100 text-black border shadow-sm rounded overflow-hidden d-flex flex-column ${card.bodyClass}`}>
                                        <div className="p-4 d-flex flex-column align-items-center justify-content-center text-center">
                                            <i className={`bi ${card.icon} fs-3 mb-2`}></i>
                                            <h5 className="fw-bold fs-4 mb-0">{card.title}</h5>
                                        </div>
                                        <div className="p-4 flex-grow-1">
                                            <p className="mb-0 fw-semibold">{card.description}</p>
                                        </div>
                                    </div>
                                </div>



                            ))}
                        </div>
                    </div>
                </section>


                <section className="py-5" style={{ backgroundColor: '#f7fcec' }}>
  <div className="container text-center">
    <h2 className="display-5 fw-bold text-success">
      Orazweb's Instagram Advertising Process: Your Path to Results
    </h2>
    <p className="lead fs-5 text-muted fw-semibold mt-4">
      Our streamlined process is designed for efficiency and impact, ensuring your Instagram advertising campaigns are effective and consistently deliver the results you need.
    </p>

    <div className="row justify-content-center mt-5">
      <div className="col-12 col-md-10 d-flex flex-column flex-md-row">
        {/* Vertical Line (hidden on mobile) */}
        <div className="step-line me-md-4 d-none d-md-block"></div>

        {/* Step Content */}
        <div className="flex-grow-1">
          {instagramSteps.map((stepItem) => (
            <div
              className="d-flex align-items-start mb-5 flex-column flex-md-row text-start"
              key={stepItem.step}
            >
              <div className={`step-circle ${stepItem.bgClass} text-white me-md-3 mb-3 mb-md-0`}>
                <div className="step-label">
                  STEP<br />{stepItem.step}
                </div>
              </div>
              <div>
                <h6 className="badge text-dark fs-5 fw-bold mb-2">
                  {stepItem.title}
                </h6>
                <p className="text-muted mb-0">{stepItem.description}</p>
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
                            Why Choose <span className="text-dark">orazweb</span> for Your Instagram Advertising?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
                            Partnering with orazweb solutions for your Instagram Advertising means choosing a team deeply invested in your visual brand success and digital growth. Here’s what sets us apart:
                        </p>

                        <div className="row g-4 text-start">
                            {[
                                {
                                    icon: "bi-camera-reels-fill",
                                    title: "Unrivaled Expertise & Visual-First Strategy",
                                    description:
                                        "Our team consists of Instagram advertising specialists who understand the platform's unique visual language and algorithms. We stay ahead with trends like Reels, Stories, and Shopping features to ensure your campaigns visually resonate and perform."
                                },
                                {
                                    icon: "bi-bar-chart-line-fill",
                                    title: "Results-Driven & ROI Focused",
                                    description:
                                        "We prioritize outcomes — not just vanity metrics. Our focus is on real results like conversions, leads, and sales. Every campaign is optimized to deliver clear, measurable Return on Ad Spend (ROAS)."
                                },
                                {
                                    icon: "bi-palette-fill",
                                    title: "Tailored Visual Strategies, Never Templates",
                                    description:
                                        "Your brand is one-of-a-kind, and your campaign should be too. We create custom Instagram strategies aligned to your brand’s aesthetic, audience, and business goals — never generic templates."
                                },
                                {
                                    icon: "bi-chat-left-text-fill",
                                    title: "Transparent Communication & Visual Reporting",
                                    description:
                                        "You’ll always have visibility into your campaigns. We provide clear, easy-to-understand reports with visual performance metrics, engagement insights, and strategic suggestions."
                                },
                                {
                                    icon: "bi-person-check-fill",
                                    title: "Dedicated Creative Support & Guidance",
                                    description:
                                        "Think of us as your creative partners. From idea to execution, we offer expert support in both strategy and visual content that helps you feel informed, empowered, and confident every step of the way."
                                },
                                {
                                    icon: "bi-cash-coin",
                                    title: "Budget-Conscious Campaigns Built for Growth",
                                    description:
                                        "We treat your budget as our own. Our team ensures maximum ROI by allocating your ad spend wisely, running A/B tests, and optimizing for performance to eliminate waste and maximize impact."
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

export default InstageamPage;