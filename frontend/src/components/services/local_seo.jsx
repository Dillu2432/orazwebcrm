import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/localseo.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const LocalseoPage = () => {
    const localSeoFactors = [
        {
            title: "Google Business Profile Optimization",
            icon: "bi-building",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "A complete and optimized GBP boosts your legitimacy and visibility in local search results, helping you show up in Google Maps and local packs."
        },
        {
            title: "Proximity",
            icon: "bi-geo-alt-fill",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "How close your business is to the searcher or the area they're searching in directly affects your chances of ranking in local results."
        },
        {
            title: "Relevance",
            icon: "bi-search-heart",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Relevance is determined by how closely your business matches the searcher’s query, influenced by GBP categories, keywords, and content."
        },
        {
            title: "Prominence",
            icon: "bi-star-fill",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Prominence relates to your overall reputation — reviews, online mentions, and your website's SEO all help improve this factor."
        },
        {
            title: "Online Reviews",
            icon: "bi-chat-left-dots",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "The number, quality, and freshness of reviews impact your credibility and rankings. Responding to reviews also builds trust."
        },
        {
            title: "Citations & NAP Consistency",
            icon: "bi-journal-text",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Your business Name, Address, and Phone must be consistent across all directories to avoid confusing search engines."
        },
        {
            title: "On-Page SEO Signals",
            icon: "bi-code-slash",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Local keywords, optimized meta tags, and location-based content help search engines associate your site with local intent."
        },
        {
            title: "Link Signals",
            icon: "bi-link-45deg",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Backlinks from reputable, local, or industry-related sites improve your domain authority and local search relevance."
        },
        {
            title: "Behavioral Signals",
            icon: "bi-bar-chart-line-fill",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Google watches how users interact with your listings — clicks, direction requests, time on site — to gauge interest and quality."
        },
        {
            title: "Mobile Friendliness & Site Speed",
            icon: "bi-phone-fill",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Most local searches happen on mobile. A fast, responsive site provides better user experience and ranks higher in mobile search."
        }
    ];
    const localSeoSteps = [
        {
            title: "Claim and Optimize Your Google Business Profile (GBP)",
            badgeColor: "primary",
            bgClass: "bg-gradient bg-primary bg-opacity-10",
            icon: "bi-shop",
            points: [
                "Create or claim your free GBP listing.",
                "Complete all fields: Name, Address, Phone (NAP), website, hours, categories, services, products, photos, etc.",
                "Write a compelling business description using relevant keywords.",
                "Verify your listing via postcard, phone, or email.",
            ],
        },
        {
            title: "Conduct Local Keyword Research",
            badgeColor: "success",
            bgClass: "bg-gradient bg-success bg-opacity-10",
            icon: "bi-search",
            points: [
                "Identify location-based search terms (e.g., \"best pizza Jammu\").",
                "Use tools like Google Keyword Planner, Autocomplete, & People Also Ask.",
            ],
        },
        {
            title: "Optimize Website for Local Search (On-Page SEO)",
            badgeColor: "danger",
            bgClass: "bg-gradient bg-danger bg-opacity-10",
            icon: "bi-globe2",
            points: [
                "Ensure consistent NAP info site-wide.",
                "Create location-specific service pages & blog posts.",
                "Use local keywords in titles, headings, and meta descriptions.",
                "Embed Google Map on your contact page.",
                "Ensure mobile-friendly design and fast loading.",
            ],
        },
        {
            title: "Build Local Citations & Directory Listings",
            badgeColor: "info",
            bgClass: "bg-gradient bg-info bg-opacity-10",
            icon: "bi-journal-text",
            points: [
                "List your business on directories like Justdial, IndiaMART, etc.",
                "Maintain consistent NAP across all platforms.",
            ],
        },
        {
            title: "Generate & Manage Online Reviews",
            badgeColor: "warning",
            bgClass: "bg-gradient bg-warning bg-opacity-10",
            icon: "bi-chat-square-heart",
            points: [
                "Encourage satisfied customers to leave reviews.",
                "Respond to reviews (positive & negative) promptly and professionally.",
            ],
        },
        {
            title: "Build Local Backlinks",
            badgeColor: "secondary",
            bgClass: "bg-gradient bg-secondary bg-opacity-10",
            icon: "bi-link-45deg",
            points: [
                "Earn links from local news sites, chambers, blogs, etc.",
                "Participate in local events and sponsorships for citations.",
            ],
        },
        {
            title: "Leverage User Engagement Signals",
            badgeColor: "dark",
            bgClass: "bg-gradient bg-dark bg-opacity-10",
            icon: "bi-graph-up-arrow",
            points: [
                "Encourage calls, direction requests, and clicks from GBP.",
                "Use Google Posts to highlight offers, news, or updates.",
            ],
        },
    ];
    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">Local Search Engine Optimization – Local SEO</h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-12 text-center mb-5">
                        <h1 className="display-5 fw-bold text-success">
                            Local SEO for orazweb solutions: Dominate Your Local Market
                        </h1>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            In a world where "near me" searches are becoming the norm, local businesses need more than just an online presence – they need local visibility. At orazweb solutions, we specialize in empowering businesses like yours to capture the attention of customers right in your neighborhood and service areas. Our expert Local SEO services ensure your business stands out when it matters most, driving foot traffic, calls, and online leads directly to you.
                        </p>
                    </div>

                    {/* Left: Text Content */}

                    <div className="col-lg-6 mb-4">
                        <h2 className="fw-bold mb-4 text-success">What Is Local SEO?</h2>
                        <p className="lead fw-semibold fs-5 mb-3">
                            Local SEO (Search Engine Optimization) is a specialized branch of SEO focused on optimizing your online presence to rank higher in local search results. It's about ensuring your business appears prominently when potential customers in your immediate vicinity, or specific service areas, search for products or services you offer.
                        </p>
                        <p className="lead fw-semibold fs-5 mb-3">
                            Think of it this way: when someone searches for "best bakery near me" or "plumber in [your city name]," local SEO is what helps your business show up at the top, often in the highly visible Google Map Pack results. It's crucial for any business with a physical location or those that serve a specific geographic area, connecting online search intent with offline customer action.
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
                {/* What Are Local SEO Ranking Factors? */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            What Are Local SEO Ranking Factors?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            Local SEO ranking is determined by a combination of factors that Google and other search engines assess to provide the most relevant local results. As of 2025, these key factors include:
                        </p>
                        <div className="row g-4">
                            {localSeoFactors.map((item, index) => (
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
                {/* Section 1: How to Do Local SEO */}

                <section className="py-5 bg-light">
                    <div className="container">

                        <h2 className="display-5 text-center fw-bold text-success">
                            How to Do Local SEO
                        </h2>
                        <p className="lead fs-5 text-center text-muted fw-semibold mt-4">
                            Implementing a successful Local SEO strategy involves a multi-faceted approach. Here's a simplified breakdown of the key steps:                        </p>
                        <div className="row g-4">
                            {localSeoSteps.map((step, index) => (
                                <div className="col-md-6" key={index}>
                                    <div
                                        className={`p-4 border-0 shadow rounded ${step.bgClass} h-100`}
                                    >
                                        <div className="d-flex align-items-center mb-3">
                                            <i className={`bi ${step.icon} me-3 fs-3 text-${step.badgeColor}`}></i>
                                            <h5 className="fw-bold mb-0">{index + 1}. {step.title}</h5>
                                            <span
                                                className={`badge bg-${step.badgeColor} ms-auto`}
                                                style={{ fontSize: "0.8rem" }}
                                            >
                                                Step {index + 1}
                                            </span>
                                        </div>
                                        <ul className="ps-3 mb-0">
                                            {step.points.map((point, i) => (
                                                <li key={i} className="mb-2 text-dark">
                                                    ✅ {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 2: why local seo is vital for your business*/}
                <section className="py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-5 fw-bold text-success">
                                Why Local SEO Is Vital for Your Business
                            </h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                In an increasingly digitized world, local SEO isn't just an advantage – it's a necessity for survival and growth for businesses that serve a specific geographic area.
                            </p>
                        </div>

                        {/* Local SEO Benefits Grid */}
                        <div className="row g-4">
                            {[
                                {
                                    icon: "bi-geo-alt-fill",
                                    title: `Capture "Near Me" Searches`,
                                    desc: `Local SEO ensures your business is visible precisely when customers are searching nearby.`,
                                    color: "text-success"
                                },
                                {
                                    icon: "bi-graph-up",
                                    title: "Higher Conversion Rates",
                                    desc: "Appearing in front of local searchers often means connecting with customers ready to take action.",
                                    color: "text-info"
                                },
                                {
                                    icon: "bi-telephone-plus-fill",
                                    title: "Increased Foot Traffic & Calls",
                                    desc: "More people walking through your door or calling your business directly from search results.",
                                    color: "text-warning"
                                },
                                {
                                    icon: "bi-bar-chart-line-fill",
                                    title: "Stand Out from Competitors",
                                    desc: "Outperform local businesses still relying on traditional advertising or outdated SEO tactics.",
                                    color: "text-primary"
                                },
                                {
                                    icon: "bi-currency-rupee",
                                    title: "Cost-Effective Marketing",
                                    desc: "Reach more local customers with less spend compared to national campaigns.",
                                    color: "text-danger"
                                },
                                {
                                    icon: "bi-shield-check",
                                    title: "Build Trust and Reputation",
                                    desc: "A strong presence, great reviews, and accurate listings earn customer confidence.",
                                    color: "text-secondary"
                                }
                            ].map((item, i) => (
                                <div className="col-md-4" key={i}>
                                    <div className="p-4 border rounded bg-white shadow-sm h-100 text-center">
                                        <i className={`bi ${item.icon} fs-1 mb-3 ${item.color}`}></i>
                                        <h5 className="fw-bold">{item.title}</h5>
                                        <p className="text-muted">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
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

                {/* Section 2: why google my business*/}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success">
                            Why Google My Business Is a Big Part of Local SEO
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            Google My Business (now often referred to as Google Business Profile or GBP) is the undisputed cornerstone of local SEO. It's a free, powerful tool from Google that acts as your business's digital storefront directly on Google Search and Google Maps.
                        </p>

                        <div className="row g-4 mt-4">
                            {[
                                {
                                    title: 'Direct Local Search Visibility',
                                    icon: 'bi-graph-up-arrow',
                                    bodyClass: 'box-1',
                                    description: `An optimized GBP listing is what allows your business to appear in the coveted Google Map Pack (the top 3 local business listings displayed with a map) and within Google Maps search results. This is prime real estate that drives immense traffic.`
                                },
                                {
                                    title: 'Comprehensive Business Information',
                                    icon: 'bi-person-bounding-box',
                                    bodyClass: 'box-2',
                                    description: `GBP allows you to provide a wealth of information to potential customers at a glance: your address, phone number, hours, website, photos, services, products, and even Q&A. This makes it incredibly easy for users to find what they need and contact you.`
                                },
                                {
                                    title: 'Review Management Hub',
                                    icon: 'bi-palette-fill',
                                    bodyClass: 'box-3',
                                    description: `GBP is the primary platform for gathering and responding to Google reviews, which are crucial for building trust and influencing local ranking.`
                                },
                                {
                                    title: 'Engagement Opportunities',
                                    icon: 'bi-eye-fill',
                                    bodyClass: 'box-4',
                                    description: `You can publish "Google Posts" on your GBP to share updates, offers, events, and news directly with potential customers searching for your business.
`
                                },
                                {
                                    title: 'Insights into Customer Behavior',
                                    icon: 'bi-pencil-square',
                                    bodyClass: 'box-5',
                                    description: `GBP provides valuable insights into how customers find your listing, what actions they take (e.g., calls, direction requests, website clicks), and even where they are coming from. This data is invaluable for refining your local strategy.`
                                },
                                {
                                    title: 'Establishes Prominence and Relevance',
                                    icon: 'bi-layers-fill',
                                    bodyClass: 'box-6',
                                    description: `A well-maintained and active GBP signals to Google that your business is legitimate, active, and relevant to local searches, directly contributing to your local search rankings.
`
                                },

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
                {/* Section 3:                                 orazweb Local SEO Services: Your Partner for Local Domination                                </h2>
e */}
                <section className="py-5">
                    <div className="container text-center">
                        <div className="row justify-content-center">

                            <h2 className="display-5 fw-bold text-success">
                                orazweb Local SEO Services: Your Partner for Local Domination                                </h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                At orazweb solutions, we don't just understand local SEO; we master it. Our comprehensive Local SEO services are designed to get your business found by the right local customers, driving more leads, calls, and foot traffic. We handle the complexities so you can focus on running your business.                                </p>
                            <div className="row mt-5">
                                {[
                                    ['bi-star-fill', 'Google Business Profile Optimization & Management', 'Full setup, verification, optimization, and ongoing management of your GBP listing to ensure maximum visibility and engagement.'],
                                    ['bi-award-fill', 'Local Keyword Research & Strategy', 'Identifying the specific local search terms your target customers are using, and integrating them strategically across your online presence.'],
                                    ['bi-shield-fill-check', 'On-Page Local SEO Optimization', 'Optimizing your website’s content, meta tags, and structure with local keywords and NAP consistency.'],
                                    ['bi-heart-fill', 'Local Citation Building & Management', 'Creating and maintaining consistent business listings across a wide network of local and industry-specific directories.'],
                                    ['bi-globe2', 'Online Review Generation & Reputation Management', 'Implementing strategies to encourage positive reviews and actively managing all customer feedback on review platforms.'],
                                    ['bi-journal-richtext', 'Local Content Marketing', 'Developing location-specific blog posts, service pages, and resources that resonate with your local audience.'],
                                    ['bi-code-slash', 'Schema Markup Implementation', 'Adding structured data to your website to help search engines better understand your business information.'],
                                    ['bi-link-45deg', 'Local Link Building', 'Earning high-quality backlinks from relevant local businesses and organizations to boost your authority.'],
                                    ['bi-bar-chart-fill', 'Performance Tracking & Reporting', 'Providing transparent, detailed reports on your local search rankings, traffic, leads, and ROI.'],
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
                        </div>
                    </div>
                </section>

                {/* how local seo services */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success mb-4">
                            How Local SEO Services Drive Lead Generation
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
                            Local SEO isn't just about visibility; it's a powerful lead generation machine for businesses serving specific areas. Here's how our local SEO services directly translate into qualified leads for you:                        </p>

                        <div className="row g-4 text-start">
                            {[
                                {
                                    icon: "bi-bar-chart-line-fill",
                                    title: "High-Intent Traffic",
                                    description:
                                        "People performing local searches (e.g., 'emergency plumber Delhi,' 'hair salon near me') typically have an immediate need and high purchase intent. By ranking for these terms, local SEO delivers visitors who are already primed to become customers."
                                },
                                {
                                    icon: "bi-telephone-forward-fill",
                                    title: "Direct Contact Points",
                                    description:
                                        "An optimized Google Business Profile provides instant access to your phone number, website link, and directions. This makes it incredibly easy for interested prospects to contact you directly with just a tap or click, converting searchers into callers or visitors."
                                },
                                {
                                    icon: "bi-shield-check",
                                    title: "Increased Trust & Credibility",
                                    description:
                                        "A prominent local listing with numerous positive reviews builds immense trust. When a local searcher sees your business highly rated and easily accessible, they are far more likely to choose you over a competitor, resulting in higher lead conversion rates."
                                },
                                {
                                    icon: "bi-geo-alt-fill",
                                    title: "Targeted Audience Reach",
                                    description:
                                        "Our precision targeting ensures your marketing efforts are focused on the geographic areas where your potential customers reside. This eliminates wasted impressions and attracts leads who are genuinely in your service zone, improving lead quality."
                                },
                                {
                                    icon: "bi-lightning-charge-fill",
                                    title: "Conversion-Optimized Experience",
                                    description:
                                        "We don't just get them to your listing; we ensure the path from search to conversion is seamless. From clear calls-to-action on your GBP to optimized landing pages on your website, we guide prospects effortlessly towards becoming leads."
                                },
                                {
                                    icon: "bi-trophy-fill",
                                    title: "Competitive Edge",
                                    description:
                                        "By consistently outranking competitors in local search results, you capture a larger share of the local market's attention, directly leading to more inquiries and sales opportunities."
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
                {/* Local SEO Tips for Lead Generation */}
                <section className="py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <h2 className="display-5 text-center fw-bold text-success mb-4">
                                Local SEO Tips for Lead Generatio
                            </h2>
                            <p className="lead fs-5 text-muted text-center fw-semibold mb-5">
                                To maximize your lead generation efforts through local SEO, consider these actionable tips.

                            </p>

                            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                                {[
                                    ['bi-geo-alt-fill', 'Fully Leverage Your Google Business Profile', 'Keep it 100% complete with services, products, photos, videos, and enable features like messaging and Q&A. Use Google Posts to share updates with CTAs.'],
                                    ['bi-star-fill', 'Actively Solicit & Manage Reviews', 'Encourage happy customers to leave reviews. Respond professionally to all feedback to build trust and demonstrate engagement.'],
                                    ['bi-mic-fill', 'Optimize for "Near Me" & Voice Search', 'Use natural, spoken keywords and ensure your NAP details are accessible to voice assistants.'],
                                    ['bi-journal-richtext', 'Create Hyper-Local Content', 'Write blog posts or guides about your locality and make service pages for each neighborhood you serve.'],
                                    ['bi-phone-fill', 'Ensure Mobile-First Experience', 'Your website must load fast and work perfectly on mobile. Make contact options (like phone) clickable.'],
                                    ['bi-code-slash', 'Utilize Local Schema Markup', 'Implement structured data on your site to help search engines understand your business details and boost local visibility.'],
                                    ['bi-people-fill', 'Engage with Local Community & Businesses', 'Collaborate, sponsor, and participate in local events to build awareness and earn local backlinks and citations.']
                                ].map(([icon, title, desc], i) => (
                                    <div key={i} className="col">
                                        <div className="p-4 h-100 border rounded bg-white shadow-sm">
                                            <i className={`bi ${icon} text-success fs-2 mb-3`}></i>
                                            <h5 className="fw-bold">{title}</h5>
                                            <p className="text-muted">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
};

export default LocalseoPage;