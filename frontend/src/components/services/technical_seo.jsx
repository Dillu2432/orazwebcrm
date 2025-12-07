import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/SEO.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const TechnicalseoPage = () => {
    const localSeoFactors = [
        {
            title: "Website Crawlability & Indexability Audits",
            icon: "bi-search",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "We perform in-depth audits to identify issues preventing search engines from efficiently finding and indexing your pages. This includes analyzing robots.txt, noindex tags, and crawl errors."
        },
        {
            title: "Site Structure Optimization",
            icon: "bi-diagram-3",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "We review and optimize your website's internal linking structure, navigation, and URL hierarchy to ensure clear pathways for both users and search engine bots."
        },
        {
            title: "XML Sitemap Creation & Optimization",
            icon: "bi-map-fill",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "We create and maintain accurate XML sitemaps, providing search engines with a clear roadmap of your site's important pages."
        },
        {
            title: "Robots.txt Optimization",
            icon: "bi-robot",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "We configure your robots.txt file to guide search engine crawlers, ensuring they access essential content while avoiding less important pages."
        },
        {
            title: "Schema Markup Implementation",
            icon: "bi-code-slash",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "We implement structured data (Schema Markup) to help search engines better understand your content, leading to rich snippets in search results (e.g., star ratings, event dates)."
        },
        {
            title: "Website Speed & Core Web Vitals Optimization",
            icon: "bi-speedometer2",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "We analyze and optimize your website's loading speed, interactivity, and visual stability, focusing on Google's Core Web Vitals to improve user experience and ranking signals."
        },
        {
            title: "Mobile-First Indexing Readiness",
            icon: "bi-phone-fill",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "We ensure your website is fully optimized for mobile devices, which Google primarily uses for indexing and ranking."
        },
        {
            title: "Canonicalization & Duplicate Content Resolution",
            icon: "bi-files",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "We identify and resolve duplicate content issues using canonical tags, preventing dilution of ranking power."
        },
        {
            title: "HTTPS Implementation",
            icon: "bi-lock-fill",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "We ensure your website uses a secure HTTPS connection, a critical ranking factor and trust signal for users."
        },
        {
            title: "Orphaned Pages & Broken Link Fixes",
            icon: "bi-link-45deg",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "We identify and repair broken internal and external links and ensure no important pages are 'orphaned' (not linked from anywhere else on the site)."
        },
        {
            title: "Log File Analysis",
            icon: "bi-journal-code",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "We analyze server log files to understand how search engine bots crawl your site and identify potential inefficiencies."
        },
        {
            title: "International SEO (Hreflang)",
            icon: "bi-translate",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "For businesses targeting multiple regions or languages, we implement hreflang tags to ensure the correct language version of your page is served to international users."
        }
    ];

    const localSeoSteps = [
        {
            title: "Mobile-First Optimization",
            badgeColor: "primary",
            bgClass: "bg-gradient bg-primary bg-opacity-10",
            icon: "bi-phone-fill",
            points: [
                "Ensure your website is fully responsive across all mobile devices.",
                "Improve loading speed and usability for smartphone users.",
                "Optimize for touch navigation and mobile-friendly call-to-actions.",
            ],
        },
        {
            title: "Local Schema Markup",
            badgeColor: "success",
            bgClass: "bg-gradient bg-success bg-opacity-10",
            icon: "bi-code-slash",
            points: [
                "Implement structured data to mark up business name, address, and phone (NAP).",
                "Add schema for reviews, services, business hours, and service areas.",
                "Helps search engines show rich results and boost local visibility.",
            ],
        },
        {
            title: "Crawlability for Local Pages",
            badgeColor: "danger",
            bgClass: "bg-gradient bg-danger bg-opacity-10",
            icon: "bi-search",
            points: [
                "Ensure local landing pages are linked from menus or sitemaps.",
                "Fix crawl errors and use internal linking for better discovery.",
                "Avoid JavaScript-based content that hinders crawler access.",
            ],
        },
        {
            title: "Core Web Vitals Improvement",
            badgeColor: "info",
            bgClass: "bg-gradient bg-info bg-opacity-10",
            icon: "bi-speedometer2",
            points: [
                "Optimize Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS).",
                "Use lazy loading, compressed images, and minimal third-party scripts.",
                "Ensure visual stability and fast interaction for better rankings.",
            ],
        },
        {
            title: "Duplicate Content Issues",
            badgeColor: "warning",
            bgClass: "bg-gradient bg-warning bg-opacity-10",
            icon: "bi-files",
            points: [
                "Identify similar or duplicate content across multiple location pages.",
                "Use canonical tags and unique content to differentiate each page.",
                "Avoid content cannibalization that can split ranking authority.",
            ],
        }
    ];

    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">Technical Search Engine Optimization – Technical SEO</h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-12 text-center mb-5">
                        <h1 className="display-5 fw-bold text-success">
                            Remove Barriers To Better Search Performance
                        </h1>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            Is your website struggling to rank, even with great content? Technical SEO might be the invisible force holding you back. At orazweb solutions, we specialize in optimizing the foundational elements of your website, ensuring search engines can easily find, crawl, understand, and rank your content. We remove the technical barriers so your business can achieve its full potential in search results.
                        </p>
                    </div>

                    {/* Left: Text Content */}

                    <div className="col-lg-6 mb-4">
                        <h2 className="fw-bold mb-4 text-success">What is Technical SEO & Why is it Important?</h2>
                        <p className="lead fw-semibold fs-5 mb-3">
                            <strong>Technical SEO</strong> refers to the process of optimizing the infrastructure of your website to help search engines like Google, Bing, and others crawl, interpret, and index your site more effectively. It's the "behind-the-scenes" work that ensures your website is healthy and easily accessible for search engine bots.

                        </p>

                        <h4 className='fw-bold text-success'>Why is it important?</h4>
                        <p className="lead fw-semibold fs-5 mb-3">
                            Think of your website as a house. Content and design are the beautiful interiors and exteriors, but Technical SEO is the foundation, plumbing, and electricity. If these core systems aren't working correctly, search engines might:
                        </p>
                        <ul className="list-unstyled  text-muted">
                            <li className="mb-3 fs-5">
                                <strong>Struggle to find your pages:</strong> Meaning your great content never gets seen.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>Misunderstand your content:</strong> Leading to poor rankings for relevant searches.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>Prioritize other, less relevant sites:</strong> Because their technical foundation is stronger.
                            </li>
                            <li className="mb-3 fs-5">

                                <strong>Waste "crawl budget":</strong> Leading to slower indexing of new or updated content.
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
                </div>
                {/* Technical SEO Services */}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Technical SEO Services
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            At orazweb solutions, our comprehensive Technical SEO services cover all critical aspects to ensure your website's optimal performance in search engines:
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
                {/* Section 1: Technical SEO Services for Local Businesses*/}

                <section className="py-5 bg-light">
                    <div className="container">

                        <h2 className="display-5 text-center fw-bold text-success">
                            Technical SEO Services for Local Businesses
                        </h2>
                        <p className="lead fs-5 text-center text-muted fw-semibold mt-4">
                            For local businesses, Technical SEO is especially crucial. While local content and Google Business Profile optimization are vital, a strong technical foundation ensures these efforts pay off. Our Technical SEO services for local businesses focus on:
                        </p>
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

                {/* Section 2: why local seo is vital for your business*/}
                <section className="py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-5 fw-bold text-success">
                                How orazweb Helps You with Technical SEO
                            </h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                At orazweb solutions, our approach to Technical SEO is thorough, proactive, and results-driven. We don't just point out problems; we fix them and build a stronger foundation for your digital success.                            </p>
                        </div>

                        {/* Local SEO Benefits Grid */}
                        <div className="row g-4">
                            {[
                                {
                                    icon: "bi-search",
                                    title: "Expert Audits",
                                    desc: "We begin with a deep, comprehensive technical audit to uncover every technical barrier affecting your search performance.",
                                    color: "text-success"
                                },
                                {
                                    icon: "bi-list-check",
                                    title: "Actionable Roadmaps",
                                    desc: "Get a clear, prioritized roadmap of issues, impacts, and step-by-step solutions — explained without technical jargon.",
                                    color: "text-info"
                                },
                                {
                                    icon: "bi-tools",
                                    title: "Implementation & Remediation",
                                    desc: "Our expert team handles the fixes — from code and server configurations to structural improvements — with precision.",
                                    color: "text-warning"
                                },
                                {
                                    icon: "bi-graph-up-arrow",
                                    title: "Continuous Monitoring",
                                    desc: "We track technical SEO health over time, resolving new issues proactively and adapting to algorithm updates.",
                                    color: "text-primary"
                                },
                                {
                                    icon: "bi-puzzle-fill",
                                    title: "Seamless Integration",
                                    desc: "Our technical improvements align with your content, local SEO, and marketing strategy for a unified presence.",
                                    color: "text-danger"
                                },
                                {
                                    icon: "bi-stars",
                                    title: "Improved User Experience (UX)",
                                    desc: "We enhance speed, mobile responsiveness, and usability — delighting both users and search engines.",
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

export default TechnicalseoPage;
