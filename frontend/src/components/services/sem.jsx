import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/sem.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const LocalseoPage = () => {
    const localSeoFactors = [
        {
            title: "Keyword Research",
            icon: "bi-search",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "The process begins with identifying the keywords and phrases your target audience uses when searching for solutions you offer. This includes broad terms, specific product names, and long-tail queries."
        },
        {
            title: "Ad Creation",
            icon: "bi-megaphone",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "You create compelling ad copy (headlines, descriptions) and choose relevant landing pages. These ads are designed to capture attention and encourage clicks."
        },
        {
            title: "Bidding Strategy",
            icon: "bi-cash-coin",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "You set a bid for your chosen keywords, indicating how much you're willing to pay per click (CPC) or per thousand impressions (CPM)."
        },
        {
            title: "Quality Score",
            icon: "bi-star-fill",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Search engines assign a 'Quality Score' based on ad relevance, landing page quality, and expected click-through rate. A higher score reduces ad costs and improves position."
        },
        {
            title: "Ad Auction",
            icon: "bi-graph-up-arrow",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "Each time a user searches, an ad auction determines which ads show and in what order, based on your bid, Quality Score, and user intent."
        },
        {
            title: "Ad Display",
            icon: "bi-tv-fill",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Winning ads are displayed prominently on the search results page, typically at the top or bottom, labeled as 'Ad' or 'Sponsored'."
        },
        {
            title: "Clicks & Conversions",
            icon: "bi-mouse",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Users clicking on your ads are taken to your landing page, where they ideally complete actions like purchases, signups, or inquiries. You’re charged only when a click occurs."
        },
        {
            title: "Monitoring & Optimization",
            icon: "bi-gear-fill",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Campaigns are continuously monitored and adjusted based on performance data—refining bids, targeting, and creatives to maximize ROI."
        }
    ];


    // const localSeoSteps = [
    //     {
    //         title: "Technical SEO Audit",
    //         badgeColor: "primary",
    //         bgClass: "bg-gradient bg-primary bg-opacity-10",
    //         icon: "bi-gear-fill",
    //         points: [
    //             "Crawlability and Indexability issues (e.g., robots.txt, sitemaps, noindex tags)",
    //             "Website speed and Core Web Vitals performance",
    //             "Mobile-friendliness and responsiveness",
    //             "HTTPS status and security",
    //             "Canonicalization and duplicate content issues",
    //             "Site structure and internal linking",
    //             "Broken links and redirect chains",
    //             "Schema markup implementation and errors"
    //         ]
    //     },
    //     {
    //         title: "On-Page SEO Audit",
    //         badgeColor: "success",
    //         bgClass: "bg-gradient bg-success bg-opacity-10",
    //         icon: "bi-file-earmark-code",
    //         points: [
    //             "Keyword usage and optimization across pages",
    //             "Title tags, meta descriptions, and header tags analysis",
    //             "Content quality, depth, and originality",
    //             "Image optimization (alt tags, file size)",
    //             "Readability and user engagement factors",
    //             "Call-to-action (CTA) effectiveness"
    //         ]
    //     },
    //     {
    //         title: "Off-Page SEO Audit",
    //         badgeColor: "danger",
    //         bgClass: "bg-gradient bg-danger bg-opacity-10",
    //         icon: "bi-link-45deg",
    //         points: [
    //             "Backlink profile analysis (quality, quantity, relevance, anchor text)",
    //             "Identification of toxic or spammy backlinks",
    //             "Domain Authority (DA) / Page Authority (PA) assessment",
    //             "Social signals and brand mentions"
    //         ]
    //     },
    //     {
    //         title: "Competitor Analysis",
    //         badgeColor: "info",
    //         bgClass: "bg-gradient bg-info bg-opacity-10",
    //         icon: "bi-bar-chart-fill",
    //         points: [
    //             "Identification of your top organic competitors",
    //             "Analysis of their ranking keywords, backlink profiles, and content strategies",
    //             "Discovery of opportunities to outrank them"
    //         ]
    //     },
    //     {
    //         title: "User Experience (UX) Audit for SEO",
    //         badgeColor: "warning",
    //         bgClass: "bg-gradient bg-warning bg-opacity-10",
    //         icon: "bi-ui-checks-grid",
    //         points: [
    //             "Assessment of navigation, site layout, and ease of use",
    //             "Identification of factors impacting bounce rate and time on page"
    //         ]
    //     },
    //     {
    //         title: "Local SEO Audit (for Local Businesses)",
    //         badgeColor: "secondary",
    //         bgClass: "bg-gradient bg-secondary bg-opacity-10",
    //         icon: "bi-geo-alt",
    //         points: [
    //             "Google Business Profile optimization (accuracy, completeness, reviews)",
    //             "NAP consistency across local directories",
    //             "Local citation analysis"
    //         ]
    //     }
    // ];


    const categories = [
        {
            name: "Crawling",
            color: "linear-gradient(135deg, #fceabb, #f8b500)",
            description: "Using automated programs (spiders or bots) to discover and read content across billions of web pages.",
        },
        {
            name: "Indexing",
            color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
            description: "Storing and organizing this vast amount of information in a massive database, making it quickly retrievable.",
        },
        {
            name: "Ranking (Algorithms)",
            color: "linear-gradient(135deg, #f6d365, #fda085)",
            description: "Applying complex algorithms to determine the relevance and authority of indexed pages in response to a user's search query, then presenting them in a ranked list (the SERP).",
        },
    ];
    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">Search Engine Marketing (SEM)</h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-11">
                        <h1 className="display-5 fw-bold ">
                            Dominate Search Results, Drive Instant Growth
                        </h1>
                        <p className="lead text-muted fw-semibold fs-5 mb-2">
                            In today's competitive digital landscape, getting your business seen by potential customers is paramount. While SEO builds long-term organic visibility, Search Engine Marketing (SEM) offers an immediate and powerful way to put your brand directly in front of high-intent searchers. At orazweb solutions, we specialize in crafting and managing highly effective SEM campaigns that drive targeted traffic, generate qualified leads, and deliver measurable ROI, ensuring your business captures market share right now.                        </p>
                    </div>
                </div>
                {/* what si facebook */}

                <div className="row my-5 justify-content-center align-items-center">
                    <div className="row my-5 justify-content-center align-items-center">
                        <div className="col-lg-6 mb-4">
                            <h4 className="display-5  fw-bold text-success">What is SEM?</h4>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                Search Engine Marketing (SEM) is a comprehensive digital marketing strategy that involves promoting websites by increasing their visibility in search engine results pages (SERPs) primarily through paid advertising. While SEO (Search Engine Optimization) focuses on organic, unpaid rankings, SEM leverages paid strategies, most commonly Pay-Per-Click (PPC) advertising, to achieve immediate prominence.
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
                    <div className="col-lg-12 mb-4">
                        <h4 className="display-5  fw-bold text-success">Why is SEM great for your business?</h4>
                        <ul className="list-unstyled text-muted fs-5">
                            <li className="mb-3">
                                <strong>Instant Visibility:</strong> Unlike SEO, which takes time to build, SEM delivers immediate visibility. Your ads can appear at the top of search results as soon as your campaign is live.
                            </li>
                            <li className="mb-3">
                                <strong>Targeted Reach:</strong> You can precisely target users based on the keywords they search, their location, demographics, and even their interests, ensuring your message reaches highly qualified prospects.
                            </li>
                            <li className="mb-3">
                                <strong>Measurable Results:</strong> SEM platforms provide robust analytics, allowing you to track every aspect of your campaign – clicks, impressions, conversions, cost-per-click, and return on ad spend (ROAS) – with unparalleled precision.
                            </li>
                            <li className="mb-3">
                                <strong>Flexibility & Control:</strong> You have complete control over your budget, bids, and ad creatives. Campaigns can be adjusted in real-time to optimize performance and respond to market changes.
                            </li>
                            <li className="mb-3">
                                <strong>High-Intent Traffic:</strong> Users searching on Google often have a clear intent to buy or find information. SEM places your business directly in front of these high-intent individuals, leading to higher conversion rates.
                            </li>
                            <li className="mb-3">
                                <strong>Brand Awareness:</strong> Even if users don't click, seeing your brand consistently at the top of search results builds brand recognition and credibility.
                            </li>
                            <li className="mb-3">
                                <strong>Competitive Edge:</strong> SEM allows you to compete directly with larger competitors by outbidding them for prime ad placements, even if your organic rankings aren't yet established.
                            </li>
                        </ul>

                    </div>

                </div>

                {/* Why Your Business Needs SEO Audit Services */}
                <section className="health-section bg-light py-5">
                    <div className="container">
                        <h2 className="text-center health-h2-custom px-5">What are Search Engines?</h2>
                        <p className="health-lead-text text-center px-5">
                            At their core, search engines are sophisticated software programs designed to help users find information on the vast expanse of the internet. They work by:
                        </p>

                        <div className="d-flex flex-wrap gap-4 justify-content-center py-5">
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    className="category-box"
                                    style={{ background: item.color }}
                                >
                                    <span className="circle-text">{item.name}</span>
                                    <p className='text-dark'>{item.description}</p>

                                </div>
                            ))}
                        </div>
                        <p className="health-lead-text text-center px-5">
                            The most dominant search engine globally is Google, followed by others like Bing, Yahoo, and DuckDuckGo. When we talk about SEM, we're primarily focused on advertising on these platforms, particularly Google Ads, due to their immense market share and sophisticated advertising capabilities.                            </p>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            How Does SEM Work?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            Search Engine Marketing primarily operates through an auction-based system where advertisers bid on keywords relevant to their products or services. Here's a simplified breakdown of the process:
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

                {/* <section className="py-5 bg-light">
                    <div className="container">

                        <h2 className="display-5 text-center fw-bold text-success">
                            How Does SEM Work?
                        </h2>
                        <p className="lead fs-5 text-center text-muted fw-semibold mt-4">
                            Search Engine Marketing primarily operates through an auction-based system where advertisers bid on keywords relevant to their products or services. Here's a simplified breakdown of the process:
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
                </section> */}

                {/* Section 2: Why Choose orazweb for Your Website Audit Services?*/}
                <section className="py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-5 fw-bold text-success">
                                Orazweb SEM Services: Your Partner for Immediate Digital Impact
                            </h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                At orazweb solutions, we don't just run ads; we craft highly strategic and results-driven Search Engine Marketing campaigns designed to put your business at the forefront of search results. Our comprehensive SEM services cover every aspect of paid search, ensuring your investment delivers exceptional returns.
                            </p>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">Our specialized SEM services include:
                            </p>
                        </div>
                        {/* Local SEO Benefits Grid */}
                        <div className="row g-4">
                            {[
                                {
                                    icon: "bi-search",
                                    title: "Comprehensive Keyword Research & Strategy",
                                    desc: "We conduct in-depth research to identify the most valuable keywords for your business, focusing on high-intent terms that drive conversions. We also analyze competitor keywords to uncover untapped opportunities.",
                                    color: "text-success"
                                },
                                {
                                    icon: "bi-megaphone-fill",
                                    title: "Compelling Ad Copy & Creative Development",
                                    desc: "Our team crafts persuasive ad headlines and descriptions that stand out in search results, compelling users to click. We also develop engaging ad extensions to maximize visibility and information.",
                                    color: "text-info"
                                },
                                {
                                    icon: "bi-sliders",
                                    title: "Strategic Campaign Setup & Management",
                                    desc: "We meticulously set up and manage your campaigns across major search engines, including Google Ads and Bing Ads. This involves precise targeting, bid management, ad group structuring, and budget allocation.",
                                    color: "text-warning"
                                },
                                {
                                    icon: "bi-window-sidebar",
                                    title: "Landing Page Optimization",
                                    desc: "We ensure your landing pages are perfectly aligned with your ad copy and optimized for conversions, providing a seamless user experience that guides visitors towards desired actions.",
                                    color: "text-primary"
                                },
                                {
                                    icon: "bi-graph-up",
                                    title: "Advanced Bid Management & Budget Allocation",
                                    desc: "Our experts continuously monitor and adjust bids in real-time, utilizing advanced strategies to maximize your ad spend efficiency and achieve your target Cost Per Acquisition (CPA) or Return on Ad Spend (ROAS).",
                                    color: "text-danger"
                                },
                                {
                                    icon: "bi-bar-chart-fill",
                                    title: "Conversion Tracking & Analytics",
                                    desc: "We implement robust conversion tracking to accurately measure every valuable action on your website. We provide transparent, detailed reports on key metrics, giving you clear insights into campaign performance.",
                                    color: "text-secondary"
                                },
                                {
                                    icon: "bi-repeat",
                                    title: "A/B Testing & Continuous Optimization",
                                    desc: "SEM is an iterative process. We constantly A/B test different ad creatives, headlines, landing pages, and bidding strategies to continuously improve performance and maximize your ROI.",
                                    color: "text-success"
                                },
                                {
                                    icon: "bi-people-fill",
                                    title: "Remarketing & Audience Targeting",
                                    desc: "We implement sophisticated remarketing campaigns to re-engage users who have previously visited your site, increasing conversion rates. We also leverage advanced audience targeting options to reach specific demographics and interests.",
                                    color: "text-info"
                                },
                                {
                                    icon: "bi-trophy-fill",
                                    title: "Competitor Analysis",
                                    desc: "We keep a close eye on your competitors' paid search strategies, identifying their strengths, weaknesses, and opportunities for you to gain a competitive edge.",
                                    color: "text-warning"
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
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success mb-4">
                            Why Choose <span className="text-dark">orazweb</span> for Your SEM Services?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
                            Selecting the right partner for your Search Engine Marketing is critical for your immediate and sustained growth. At orazweb solutions, we pride ourselves on delivering not just clicks, but tangible business results.                        </p>

                        <div className="row g-4 text-start">
                            {[
                                {
                                    icon: "bi-lightning-charge-fill",
                                    title: "Instant Impact & Rapid ROI",
                                    description:
                                        "We focus on delivering immediate visibility and rapid return on investment. Our expertise ensures your ads are live, optimized, and generating qualified traffic and leads from day one, giving your business an instant boost."
                                },
                                {
                                    icon: "bi-graph-up-arrow",
                                    title: "Data-Driven Precision",
                                    description:
                                        "Our approach is rooted in deep data analysis and continuous optimization. We meticulously track every metric, make informed decisions, and constantly refine your campaigns to ensure maximum efficiency and profitability, leaving no guesswork."
                                },
                                {
                                    icon: "bi-award-fill",
                                    title: "Expertise & Proven Track Record",
                                    description:
                                        "Our team comprises certified SEM specialists with extensive experience across diverse industries. We stay ahead of algorithm changes and platform updates, applying proven strategies that consistently deliver superior results for our clients."
                                },
                                {
                                    icon: "bi-bar-chart-fill",
                                    title: "Transparent Reporting & Communication",
                                    description:
                                        "You'll always know exactly how your investment is performing. We provide clear, comprehensive, and easy-to-understand reports, coupled with proactive communication, ensuring full transparency and alignment with your business goals."
                                },
                                {
                                    icon: "bi-sliders2",
                                    title: "Tailored Strategies, Not Templates",
                                    description:
                                        "We understand that every business is unique. We don't use one-size-fits-all solutions. Instead, we craft bespoke SEM strategies meticulously designed to meet your specific objectives, target audience, and competitive landscape, maximizing your unique advantages."
                                },
                                {
                                    icon: "bi-people-fill",
                                    title: "Your Dedicated Growth Partner",
                                    description:
                                        "Choosing orazweb means gaining a dedicated partner genuinely invested in your success. We work collaboratively with you, providing ongoing support, expert guidance, and proactive solutions to ensure your SEM efforts consistently drive your business forward."
                                }
                            ]
                                .map((item, index) => (
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

export default LocalseoPage;