import React from 'react';
import "../../assets/css/global.css";
import "../../assets/css/services.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/linkedin.jpeg";

import person1 from "../../assets/image/person3.jpeg"

const LinkedinPage = () => {
const linkedinSteps = [
  { step: 1, bgClass: 'bg-step-1', title: 'Audience & Objective Discovery', description: 'Identify target professionals and define campaign goals.' },
  { step: 2, bgClass: 'bg-step-2', title: 'Strategic Planning', description: 'Develop tailored B2B strategies and messaging.' },
  { step: 3, bgClass: 'bg-step-3', title: 'Creative Development', description: 'Craft compelling visuals and LinkedIn-optimized copy.' },
  { step: 4, bgClass: 'bg-step-4', title: 'Campaign Setup & Launch', description: 'Configure ads and launch with precision tracking.' },
  { step: 5, bgClass: 'bg-step-5', title: 'Monitoring & Optimization', description: 'Continuously refine campaigns for higher ROI.' },
  { step: 6, bgClass: 'bg-step-6', title: 'Reporting & Insights', description: 'Deliver data-driven reports with actionable insights.' }
];

    const instagramBenefits = [

        {
            title: "Audience Targeting",
            icon: "bi-broadcast-pin",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Unlike any other platform, LinkedIn allows for hyper-granular audience targeting based on professional attributes — job title, company, seniority, skills, and more. Reach decision-makers and professionals with unmatched precision to maximize your ROI."
        },
        {
            title: "Content Sharing & Engagement",
            icon: "bi-journal-richtext",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Use Sponsored Content, Document Ads, and Thought Leader Ads to share whitepapers, case studies, and insights. Establish your business as a credible authority and build lasting professional relationships."
        },
        {
            title: "Advanced Analytics",
            icon: "bi-graph-up-arrow",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Track lead generation, conversion rates, demo requests, and cost per qualified lead. LinkedIn analytics go beyond impressions, helping refine your strategy and prove tangible returns."
        },
        {
            title: "Event Promotion",
            icon: "bi-calendar-event-fill",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Promote webinars, conferences, or product launches to the right audience using Event Ads. Seamlessly integrate registrations and dynamically show attendee interest — boosting event success."
        },
        {
            title: "B2B Marketing",
            icon: "bi-building",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "From Lead Gen Forms and Sponsored InMail to Account-Based Marketing, LinkedIn is the go-to B2B platform. Target decision-makers, collect quality leads, and accelerate your sales cycle."
        },
        {
            title: "Influence & Trust",
            icon: "bi-award-fill",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "LinkedIn’s professional environment boosts your brand's trust and influence. By sharing value consistently, you earn respect, drive engagement, and build long-term loyalty with key decision-makers."
        }

    ];
    const instagramSteps = [
        {
            step: 1,
            title: 'Discovery & Goals',
            description: 'We begin by understanding your business objectives, target professional audience, and budget.',
            bgClass: 'bg-step-1',
        },
        {
            step: 2,
            title: 'Strategy Development',
            description: 'We then craft a tailored LinkedIn advertising plan, outlining professional targeting, ad formats, and KPIs.',
            bgClass: 'bg-step-2',
        },
        {
            step: 3,
            title: 'Creative & Copy',
            description: 'Our team designs professional ads and writes compelling, industry-focused copy.',
            bgClass: 'bg-step-3',
        },
        {
            step: 4,
            title: 'Setup & Launch',
            description: 'We meticulously configure and launch your campaigns, including precise professional targeting and tracking.',
            bgClass: 'bg-step-4',
        },
        {
            step: 5,
            title: 'Monitoring & Optimization',
            description: 'We daily monitor and refine professional campaigns for peak lead generation and engagement.',
            bgClass: 'bg-step-5',
        },
        {
            step: 6,
            title: 'Reporting & Analysis',
            description: 'You get clear reports on professional performance and strategic insights.',
            bgClass: 'bg-step-6',
        },
        {
            step: 7,
            title: 'Continuous Improvement',
            description: 'We constantly adapt strategies based on professional trends and campaign data for sustained growth.',
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
            <div className="container bg-white my-5 p-5">
                {/* Introducation */}
                <div className="row justify-content-center align-items-center">

                     <div className="col-lg-12 mb-4">
                        <h1 className="display-5 fw-bold ">
                            LinkedIn Advertising for orazweb solutions: Precision for Professional Growth
                        </h1>
                        <p className="lead text-muted fw-semibold  fs-5 mb-2">
                            In the professional world, reaching key decision-makers and high-value B2B audiences requires a specialized approach. This is where LinkedIn Advertising stands apart, offering an unparalleled platform to connect with professionals, build industry authority, and drive specific business outcomes. At orazweb solutions, we specialize in empowering businesses like yours to fully leverage LinkedIn's immense potential, transforming professional engagement into valuable leads, talent acquisition, and significant business growth.                        </p>
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
                        <h4 className="display-5  fw-bold text-success">What Is LinkedIn Advertising?</h4>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            <strong> LinkedIn Advertising</strong> refers to the strategically paid campaigns executed directly within the LinkedIn professional networking platform. These advertisements are seamlessly integrated into the user experience, appearing in various compelling formats across users' feeds, profiles, and inboxes. Unlike broader social media platforms, LinkedIn Ads provide businesses with the profound ability to precisely target professionals based on their job title, industry, company, seniority, skills, education, and professional interests. This granular, B2B-focused control ensures your advertising message reaches the most relevant and influential audience, maximizing both efficiency and impact. It's a powerful tool for driving lead generation, building brand credibility, recruiting top talent, and boosting sales by connecting directly with your prospective clients and employees in a professional context.
                        </p>
                    </div>
                </div>
                {/* Section 1: Why Your Business Needs LinkedIn Advertising */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Why Your Business Needs LinkedIn Advertising
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            In 2025, LinkedIn Advertising is an indispensable cornerstone of any successful B2B marketing, sales, or recruitment strategy. Here's why it's absolutely crucial for professional growth:
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


                {/* Section 2:  Why Your Business Needs linkedin Advertising*/}
                {/* Section 2:  Why Your Business Needs Instagram Advertising */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success">
                            orazweb's LinkedIn Advertising Services: Your Partner for Professional Growth
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            At orazweb solutions, we don't just run ads; we craft comprehensive LinkedIn Advertising strategies designed to connect you with the right professionals, amplify your message, and achieve your specific B2B objectives. Our holistic services are built on a foundation of precision, industry insight, and continuous optimization.
                        </p>
                        <div className="row g-4 mt-4">
                            {[
                                {
                                    title: 'Strategic Campaign Planning & Goal Alignment',
                                    icon: 'bi-flag-fill',
                                    bodyClass: 'box-1',
                                    description: `We start with a deep dive into your business to align on B2B objectives, audience, and competition — building a tailored LinkedIn strategy that supports lead gen, brand awareness, or talent acquisition.`
                                },
                                {
                                    title: 'Hyper-Precise Audience Targeting & Segmentation',
                                    icon: 'bi-broadcast-pin',
                                    bodyClass: 'box-2',
                                    description: `Using LinkedIn’s advanced tools, we target professionals based on job titles, industries, seniority, skills, company size, and more — reaching exactly the decision-makers that matter to your business.`
                                },
                                {
                                    title: 'Compelling Ad Creative & Professional Copywriting',
                                    icon: 'bi-megaphone-fill',
                                    bodyClass: 'box-3',
                                    description: `We craft professional ad creatives for Sponsored Content, Message Ads, and Video Ads. Our copy speaks directly to B2B pain points — persuasive, clear, and conversion-driven.`
                                },
                                {
                                    title: 'Strategic Ad Campaign Monitoring & Optimization',
                                    icon: 'bi-eye-fill',
                                    bodyClass: 'box-4',
                                    description: `We monitor campaign performance in real-time — refining bids, optimizing creative, and tweaking targeting to ensure your LinkedIn ads are consistently effective and goal-oriented.`
                                },
                                {
                                    title: 'Optimized Landing Page Strategy',
                                    icon: 'bi-layers-fill',
                                    bodyClass: 'box-5',
                                    description: `We optimize landing pages to resonate with B2B audiences — focusing on clean design, relevant messaging, and clear CTAs to increase conversions from ad clicks.`
                                },
                                {
                                    title: 'High-Impact Lead Generation Forms & InMail',
                                    icon: 'bi-envelope-paper-fill',
                                    bodyClass: 'box-6',
                                    description: `We implement Lead Gen Forms and Message Ads to capture qualified leads directly on LinkedIn — making it seamless for prospects to convert without leaving the platform.`
                                },
                                {
                                    title: 'Professional Video & Thought Leadership Content',
                                    icon: 'bi-camera-video-fill',
                                    bodyClass: 'box-7',
                                    description: `We support your brand’s authority with video explainers, thought leadership clips, and long-form content like whitepapers or webinars — professionally crafted for maximum impact.`
                                },
                                {
                                    title: 'Strategic Retargeting & Account-Based Marketing (ABM)',
                                    icon: 'bi-arrow-repeat',
                                    bodyClass: 'box-8',
                                    description: `We re-engage professionals who interacted with your content and create ABM campaigns targeting specific companies — delivering highly personalized LinkedIn ad experiences.`
                                },
                                {
                                    title: 'Transparent Reporting & Strategic Insights',
                                    icon: 'bi-graph-up',
                                    bodyClass: 'box-9',
                                    description: `We provide clear, insightful reports with actionable metrics — helping you understand performance, optimize future strategy, and prove ROI on every LinkedIn ad dollar spent.`
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
      Orazweb's LinkedIn Advertising Process: Your Path to Results
    </h2>
    <p className="lead fs-5 text-muted fw-semibold mt-4">
      Our streamlined process is designed for efficiency and impact, ensuring your LinkedIn advertising campaigns effectively drive your professional and B2B objectives.
    </p>

    <div className="row justify-content-center mt-5">
      <div className="col-12 col-md-10 d-flex flex-column flex-md-row">
        {/* Vertical Line (visible only on md and above) */}
        <div className="step-line me-md-4 d-none d-md-block"></div>

        {/* Step Content */}
        <div className="flex-grow-1">
          {linkedinSteps.map((stepItem) => (
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
                            Why Choose <span className="text-dark">orazweb</span> for Your LinkedIn Advertising?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
                            Partnering with orazweb solutions for your LinkedIn Advertising means choosing a team genuinely invested in your professional growth and B2B success. Here’s why we are the right choice:                        </p>

                        <div className="row g-4 text-start">
                            {[
                                {
                                    icon: "bi-briefcase-fill",
                                    title: "Unrivaled B2B Expertise & Cutting-Edge Strategies",
                                    description:
                                        "Our team comprises seasoned LinkedIn advertising specialists who understand the unique dynamics of professional marketing. We stay meticulously updated on B2B trends, platform features, and best practices in 2025 to reach decision-makers effectively.",
                                },
                                {
                                    icon: "bi-bar-chart-line-fill",
                                    title: "Unwavering Results-Oriented Approach",
                                    description:
                                        "We focus on tangible, measurable B2B results that directly impact your sales pipeline, lead generation, or talent acquisition. Every campaign is optimized to deliver maximum ROAS and real business outcomes.",
                                },
                                {
                                    icon: "bi-person-gear",
                                    title: "Customized Strategies for Professional Goals",
                                    description:
                                        "No generic playbooks here. We build tailored LinkedIn strategies around your specific B2B goals — whether that's capturing leads, enhancing employer branding, or driving high-value account engagement.",
                                },
                                {
                                    icon: "bi-chat-dots-fill",
                                    title: "Transparent Communication & Proactive Reporting",
                                    description:
                                        "We keep you informed with regular reports showcasing key LinkedIn campaign metrics, wins, and actionable insights. Our communication is honest, clear, and focused on progress and ROI.",
                                },
                                {
                                    icon: "bi-people-fill",
                                    title: "Dedicated Support & Expert Guidance",
                                    description:
                                        "We act as an extension of your B2B team — offering strategic support, answering questions, and guiding your campaign execution with professional expertise every step of the way.",
                                },
                                {
                                    icon: "bi-cash-coin",
                                    title: "Optimized, Cost-Effective Solutions for Maximum ROI",
                                    description:
                                        "We make every rupee work hard. Our team strategically manages your LinkedIn ad spend, eliminating waste and focusing on high-performing formats to ensure your investment leads to scalable growth.",
                                },
                            ].map((item, index) => (
                                <div className="col-md-4" key={index}>
                                    <div className="h-100 border rounded shadow-sm p-4 bg-white d-flex flex-column hover-lift">
                                        <div className="mb-3 text-primary text-center">
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

export default LinkedinPage;