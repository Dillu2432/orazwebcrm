import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/seoaudit.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const LocalseoPage = () => {
    const localSeoFactors = [
        {
            title: "Identify Hidden Problems",
            icon: "bi-eye-slash",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "An audit uncovers technical glitches, content gaps, backlink issues, and user experience problems that are hindering your search performance, often invisible to the untrained eye."
        },
        {
            title: "Boost Organic Rankings",
            icon: "bi-bar-chart-line-fill",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Fixing identified issues makes your website more discoverable and understandable to search engines, leading to better rankings for your target keywords."
        },
        {
            title: "Increase Organic Traffic",
            icon: "bi-graph-up",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Improved rankings bring in more qualified, organic visitors actively searching for your products or services."
        },
        {
            title: "Improve User Experience (UX)",
            icon: "bi-emoji-smile",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Enhancements like faster site speed and mobile optimization provide a smoother experience for users, increasing engagement and conversions."
        },
        {
            title: "Gain Competitive Advantage",
            icon: "bi-trophy-fill",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "Audits reveal why competitors rank higher and how you can outperform them with a smarter, data-driven strategy."
        },
        {
            title: "Optimize Budget & Resources",
            icon: "bi-cash-coin",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Stop guessing. An audit delivers a prioritized roadmap so you can focus efforts and budget where they’ll have the biggest impact."
        },
        {
            title: "Protect Against Algorithm Updates",
            icon: "bi-shield-check",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Stay ahead of Google’s algorithm changes by identifying vulnerabilities and reinforcing your site before updates hit."
        },
        {
            title: "Convert More Leads",
            icon: "bi-people-fill",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "A well-optimized site that ranks higher, loads fast, and is easy to navigate naturally drives more conversions and qualified leads."
        }
    ];

    const localSeoSteps = [
        {
            title: "Technical SEO Audit",
            badgeColor: "primary",
            bgClass: "bg-gradient bg-primary bg-opacity-10",
            icon: "bi-gear-fill",
            points: [
                "Crawlability and Indexability issues (e.g., robots.txt, sitemaps, noindex tags)",
                "Website speed and Core Web Vitals performance",
                "Mobile-friendliness and responsiveness",
                "HTTPS status and security",
                "Canonicalization and duplicate content issues",
                "Site structure and internal linking",
                "Broken links and redirect chains",
                "Schema markup implementation and errors"
            ]
        },
        {
            title: "On-Page SEO Audit",
            badgeColor: "success",
            bgClass: "bg-gradient bg-success bg-opacity-10",
            icon: "bi-file-earmark-code",
            points: [
                "Keyword usage and optimization across pages",
                "Title tags, meta descriptions, and header tags analysis",
                "Content quality, depth, and originality",
                "Image optimization (alt tags, file size)",
                "Readability and user engagement factors",
                "Call-to-action (CTA) effectiveness"
            ]
        },
        {
            title: "Off-Page SEO Audit",
            badgeColor: "danger",
            bgClass: "bg-gradient bg-danger bg-opacity-10",
            icon: "bi-link-45deg",
            points: [
                "Backlink profile analysis (quality, quantity, relevance, anchor text)",
                "Identification of toxic or spammy backlinks",
                "Domain Authority (DA) / Page Authority (PA) assessment",
                "Social signals and brand mentions"
            ]
        },
        {
            title: "Competitor Analysis",
            badgeColor: "info",
            bgClass: "bg-gradient bg-info bg-opacity-10",
            icon: "bi-bar-chart-fill",
            points: [
                "Identification of your top organic competitors",
                "Analysis of their ranking keywords, backlink profiles, and content strategies",
                "Discovery of opportunities to outrank them"
            ]
        },
        {
            title: "User Experience (UX) Audit for SEO",
            badgeColor: "warning",
            bgClass: "bg-gradient bg-warning bg-opacity-10",
            icon: "bi-ui-checks-grid",
            points: [
                "Assessment of navigation, site layout, and ease of use",
                "Identification of factors impacting bounce rate and time on page"
            ]
        },
        {
            title: "Local SEO Audit (for Local Businesses)",
            badgeColor: "secondary",
            bgClass: "bg-gradient bg-secondary bg-opacity-10",
            icon: "bi-geo-alt",
            points: [
                "Google Business Profile optimization (accuracy, completeness, reviews)",
                "NAP consistency across local directories",
                "Local citation analysis"
            ]
        }
    ];


    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">SEO Audit Services</h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-12 text-center">
                        <h1 className="display-5 fw-bold text-success">
                            Tired of Dealing with Website Issues?
                        </h1>
                    </div>
                    <div className="col-lg-6 mb-4">
                        <p className="lead fw-semibold fs-5 mb-3">
                            Many businesses face a common dilemma: they invest in a beautiful website, create great content, and even run ads, but still don't see the desired organic growth. You might be experiencing:
                        </p>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-3 fs-5">
                                <strong>Your website isn't showing up for relevant search terms:</strong> You may be missing valuable visibility opportunities.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>Traffic is stagnant or declining:</strong> Despite ongoing efforts, your organic growth feels stuck.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>Competitors are outranking you:</strong> Even with better services or products, they appear first in search results.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>You're unsure why certain pages aren't performing well:</strong> Leaving you guessing what’s wrong or how to fix it.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>You've heard about Google updates:</strong> But you’re unsure how they impact your rankings or visibility.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>Your website speed feels sluggish:</strong> A slow-loading site frustrates users and hurts SEO performance.
                            </li>
                        </ul>
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
                    <p className="lead fw-semibold fs-5 mb-3">
                        These issues often stem from underlying SEO problems that require expert identification and resolution. Without a clear understanding of these roadblocks, your valuable marketing efforts might be wasted.                        </p>
                </div>
                {/* Why Your Business Needs SEO Audit Services */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Why Your Business Needs SEO Audit Services
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            An SEO audit is more than just a report; it's a strategic necessity. It provides a holistic view of your website's health and potential, offering numerous benefits for your business:                        </p>
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
                {/* Section 1: Technical SEO Services for Local Businesses*/}

                <section className="py-5 bg-light">
                    <div className="container">

                        <h2 className="display-5 text-center fw-bold text-success">
                            Orazweb SEO Audit Services
                        </h2>
                        <p className="lead fs-5 text-center text-muted fw-semibold mt-4">
                            At orazweb solutions, our comprehensive SEO Audit services delve deep into every aspect of your website's performance, providing a clear roadmap for digital success. We leave no stone unturned, analyzing both the visible and invisible elements that impact your search rankings.                        </p>
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

                {/* Section 2: Why Choose orazweb for Your Website Audit Services?*/}
                <section className="py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-5 fw-bold text-success">
                                Why Choose orazweb for Your Website Audit Services?
                            </h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                Selecting the right partner for your SEO audit is crucial. At orazweb solutions, we pride ourselves on delivering not just data, but genuine value and a clear path forward.
                            </p>
                        </div>
                        {/* Local SEO Benefits Grid */}
                        <div className="row g-4">
                            {[
                                {
                                    icon: "bi-shield-check",
                                    title: "Expertise You Can Trust",
                                    desc: "Our team comprises seasoned SEO specialists with extensive experience across various industries. We leverage cutting-edge tools and deep analytical skills to uncover even the most subtle issues impacting your website's performance, providing insights that go beyond automated reports.",
                                    color: "text-success"
                                },
                                {
                                    icon: "bi-list-check",
                                    title: "Actionable & Prioritized Recommendations",
                                    desc: "We don't just list problems; we provide clear, actionable, and prioritized recommendations. You'll receive a detailed roadmap that explains what needs to be done, why it's important, and how it will impact your rankings, allowing you to focus your resources effectively.",
                                    color: "text-info"
                                },
                                {
                                    icon: "bi-layers-fill",
                                    title: "Holistic & Comprehensive Approach",
                                    desc: "Our audits are all-encompassing, covering technical, on-page, off-page, local, and user experience factors. We provide a 360-degree view of your SEO health, ensuring no critical issues are overlooked and all opportunities are identified.",
                                    color: "text-warning"
                                },
                                {
                                    icon: "bi-eye-fill",
                                    title: "Transparent & Easy-to-Understand Reports",
                                    desc: "We believe in clarity. Our audit reports are designed to be transparent and easy to understand, free from overwhelming jargon. We'll walk you through our findings and recommendations, ensuring you fully grasp your website's current state and its path to improvement.",
                                    color: "text-primary"
                                },
                                {
                                    icon: "bi-bar-chart-line-fill",
                                    title: "Focus on Measurable Results",
                                    desc: "Our ultimate goal is your growth. The insights gained from our audits are directly aimed at improving your organic rankings, increasing website traffic, and driving more leads and conversions. We equip you with the knowledge to make data-driven decisions that deliver tangible, measurable results.",
                                    color: "text-danger"
                                },
                                {
                                    icon: "bi-hand-thumbs-up-fill",
                                    title: "Your Partner in Digital Growth",
                                    desc: "Choosing orazweb means gaining a dedicated partner invested in your long-term success. We don't just deliver a report; we are ready to assist with implementation and continued optimization, guiding you every step of the way towards achieving your digital marketing goals.",
                                    color: "text-secondary"
                                }
                            ]

                                .map((item, i) => (
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




            </div>
        </div>
    );
};

export default LocalseoPage;