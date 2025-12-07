import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/gdm.jpg";
import image2 from "../../assets/image/google-ads.jpeg";

const GamPage = () => {
    const localSeoFactors = [
        {
            title: "Wasted Ad Spend",
            icon: "bi-currency-exchange",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Poor keyword targeting, ineffective ad copy, or incorrect bidding strategies can quickly deplete your budget without generating results."
        },
        {
            title: "Missed Opportunities",
            icon: "bi-lightbulb-off",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Without in-depth knowledge, you might miss out on high-converting keywords, audience segments, or new ad features that could drive significant growth."
        },
        {
            title: "Low ROI",
            icon: "bi-graph-down",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Ad campaigns that aren't continuously monitored and optimized will see diminishing returns, failing to provide the desired sales or leads for your investment."
        },
        {
            title: "Time Consumption",
            icon: "bi-clock-history",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Managing Google Ads effectively is a full-time job. It takes away valuable time you could be spending on core business operations."
        },
        {
            title: "Outdated Strategies",
            icon: "bi-arrow-counterclockwise",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "The Google Ads platform is constantly evolving. Staying updated with new features, bidding strategies, and policy changes requires dedicated expertise."
        },
        {
            title: "Competitor Dominance",
            icon: "bi-trophy",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Your competitors are likely investing in Google Ads. Without a strategic approach, they will capture the customers you're trying to reach."
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
            name: "Google Ads (for Advertisers):",
            color: "linear-gradient(135deg, #fceabb, #f8b500)",
            description: "This is where businesses go to buy ad space to promote their products/services on Google Search, YouTube, Display Network, etc. You create campaigns, set bids, and target audiences.",
        },
        {
            name: "Google AdSense (for Publishers): ",
            color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
            description: "This is for website owners, bloggers, and content creators who want to sell ad space on their websites. Google automatically places relevant ads on their site, and the publisher earns revenue when users view or click on these ads. It's more automated and for smaller to medium publishers.",
        },
        {
            name: "Google Ad Manager (for Large Publishers):",
            color: "linear-gradient(135deg, #f6d365, #fda085)",
            description: " This is an advanced platform for large publishers (those with significant direct sales and complex inventory) to manage all their ad inventory (web, app, video) and multiple demand sources (direct deals, AdSense, other ad networks, ad exchanges) in one place. It offers granular control over ad serving.",
        },
        {
            name: "AdMob (for App Developers/Publishers):",
            color: "linear-gradient(135deg,rgb(176, 228, 252),rgb(125, 162, 254))",
            description: " This is a mobile advertising platform for app developers who want to monetize their mobile apps by displaying ads within them. It connects app developers with advertisers seeking to promote their apps or products inside other apps.",
        },
    ];

    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">Google Ads Management</h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-11 text-center">
                        <h1 className="display-5 fw-bold ">
                            Instant Visibility, Measurable Results
                        </h1>
                        <p className="lead text-muted fw-semibold fs-5 mb-2">
                            In the fast-paced digital world, getting your business seen immediately by potential customers is crucial. Google Ads (formerly Google AdWords) provides that direct pathway to high-intent searchers. At orazweb solutions, we specialize in expert Google Ads management, crafting and optimizing campaigns that don't just get clicks, but generate qualified leads, boost sales, and deliver a powerful return on your advertising investment.
                        </p>
                    </div>
                </div>
                {/* what si facebook */}

                <div className="row my-5 justify-content-center align-items-center">
                    <div className="row my-5 justify-content-center align-items-center">
                        <div className="col-lg-12 mb-4">
                            <h2 className="display-5 text-center fw-bold text-success">What You Need To Know About Google Ads Management</h2>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <h2 className="fw-bold text-success">What Are Google Ads?</h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                Google Ads is Google's online advertising platform where businesses can create and run advertisements that appear on Google's vast network. This includes:
                            </p>
                            <ul className="list-unstyled text-muted fs-5">
                                <li className="mb-3">
                                    <strong>Google Search Results (Search Network):</strong> Your ads show up at the top or bottom of Google's search results pages when users search for specific keywords. These are typically text-based ads.
                                </li>
                                <li className="mb-3">
                                    <strong>Google Display Network (GDN):</strong> Your ads appear on millions of websites, apps, and videos that partner with Google. These are often image-based (banner) ads, video ads, or rich media ads.
                                </li>
                                <li className="mb-3">
                                    <strong>YouTube: </strong>Video ads appear before, during, or after videos on YouTube.
                                </li>
                                <li className="mb-3">
                                    <strong>Google Shopping:</strong> Product listing ads with images, prices, and store names for e-commerce businesses.
                                </li>
                                <li className="mb-3">
                                    <strong>Gmail:</strong> Ads appear in users' Gmail inboxes.
                                </li>
                            </ul>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                Google Ads is a form of Search Engine Marketing (SEM), focusing on paid advertising to gain immediate visibility and traffic.                            </p>
                        </div>
                        <div className="col-md-5 text-center">
                            <img
                                src={image1}
                                alt="Custom Website Visual"
                                className="img-fluid rounded "
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-5 gam-image text-center">
                            <img
                                src={image2}
                                alt="Custom Website Visual"
                                className="img-fluid rounded "
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-lg-6 mb-4">
                            <h2 className="fw-bold text-success">How Does Google Ads Work?</h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                Google Ads operates on an auction system. When a user performs a search, Google runs an instantaneous auction among advertisers bidding on relevant keywords. The ads that appear are determined by:
                            </p>
                            <ul className=" text-muted fs-5">
                                <ol className="mb-3">
                                    <strong>Bid Amount:</strong> How much an advertiser is willing to pay per click (Cost-Per-Click, CPC).
                                </ol>
                                <ol className="mb-3">
                                    <strong>Quality Score:</strong> A Google metric reflecting the relevance of your keywords, ad copy, and landing page. A higher Quality Score can lead to better ad positions at lower costs.
                                </ol>
                                <ol className="mb-3">
                                    <strong>Ad Rank:</strong> Calculated from Bid Amount x Quality Score, determining ad position.
                                </ol>
                            </ul>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                When a user clicks on your ad, you pay Google the amount you bid (or less, in most cases). The goal is for these clicks to lead to conversions (e.g., a purchase, a lead form submission, a phone call) for your business.
                            </p>

                        </div>

                    </div>

                </div>

                {/* Advertising With Google Ad Manager: Clarifying the Terms */}
                <section className="health-section bg-light py-5">
                    <div className="container">
                        <h2 className="display-5 text-center fw-bold text-success">
                            Advertising With Google Ad Manager: Clarifying the Terms
                        </h2>
                        <p className="health-lead-text text-center px-5">
                            There's often confusion between "Google Ads" and "Google Ad Manager." It's important to differentiate:
                        </p>
                        <ul className="text-muted fs-5">
                            <li className="mb-3">
                                Google Ads (formerly AdWords): This is the platform for advertisers like you, who want to show ads and reach customers.
                            </li>
                            <li className="mb-3">
                                Google Ad Manager (formerly DoubleClick for Publishers): This platform is primarily for large publishers (website owners, app developers) who manage significant ad inventory on their own websites, apps, or videos and want to sell that ad space to advertisers. It helps them streamline ad delivery, reporting, and monetization from various sources, including Google Ads.
                            </li>
                        </ul>
                        <p className="health-lead-text text-center px-5">
                            For businesses looking to advertise and get leads/sales, your focus should be on Google Ads. If you are a large website owner selling ad space, then Google Ad Manager is relevant.
                        </p>
                        <div className="row my-5 justify-content-center align-items-center">
                            <div className="col-lg-6 ">
                                <h2 className="text-center fw-bold text-success">How Google Ad Manager Works (for Publishers):</h2>
                                <p className="health-lead-text text-center px-5">Google Ad Manager provides publishers with tools to:</p>
                                <ul className="text-muted fs-5">
                                    <li className="mb-3">
                                        Define and manage their ad inventory (ad units on their website/app).
                                    </li>
                                    <li className="mb-3">
                                        Sell ad space directly to advertisers or through programmatic auctions (like Google Ad Exchange).
                                    </li>
                                    <li className="mb-3">
                                        Integrate various ad networks (including AdSense and Google Ads demand) to fill their ad slots.
                                    </li>
                                    <li className="mb-3">
                                        Gain granular control over ad serving and comprehensive reporting for monetization.
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-6 ">
                                <h2 className="text-center fw-bold text-success">What Data Can Publishers Access on Google Ad Manager?</h2>
                                <p className="health-lead-text text-center px-5">Publishers using Google Ad Manager can access extensive data including:</p>
                                <ul className="text-muted fs-5">
                                    <li className="mb-3">
                                        Impression and click performance across various ad units and campaigns.
                                    </li>
                                    <li className="mb-3">
                                        Revenue generated from different ad sources.
                                    </li>
                                    <li className="mb-3">
                                        Audience insights and targeting data.
                                    </li>
                                    <li className="mb-3">
                                        Forecasting data for available ad inventory.
                                    </li>
                                    <li className="mb-3">
                                        Detailed reports on direct sales vs. programmatic sales performance.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section >
                <section className="health-section bg-light py-5">
                    <div className="container">
                        <h2 className="text-center health-h2-custom px-5"> Ad Manager, AdSense, and AdMob: What Is the Difference?</h2>
                        <p className="health-lead-text text-center px-5">
                            At their core, search engines are sophisticated software programs designed to help users find information on the vast expanse of the internet. They work by:
                        </p>

                        <div className="d-flex flex-wrap gap-4 justify-content-center py-5">
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    className="category-box-gam"
                                    style={{ background: item.color }}
                                >
                                    <span className="circle-text">{item.name}</span>
                                    <p className='text-dark'>{item.description}</p>

                                </div>
                            ))}
                        </div>
                        <p className="health-lead-text text-center px-5">
                            In summary: If you want to advertise your business, you use Google Ads. If you want to make money by showing ads on your website, you use AdSense (or Ad Manager if you're a large publisher). If you want to make money by showing ads in your app, you use AdMob.
                        </p>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Why Your Business Needs Google Ads Management
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            Successfully navigating the complexities of Google Ads requires time, expertise, and continuous optimization. Without professional management, businesses often face:                        </p>
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

                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success mb-4">
                            Why Choose <span className="text-dark">orazweb</span> for Your Google Ads Management Services?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
                            At orazweb solutions, we are not just ad managers; we are your dedicated partners in digital growth. We combine deep expertise with a results-driven approach to ensure your Google Ads budget is maximized for leads, sales, and brand visibility.
                        </p>
                        <div className="row g-4 text-start">
                            {[
                                {
                                    icon: "bi-patch-check-fill",
                                    title: "Certified Google Ads Experts",
                                    description:
                                        "Our team comprises certified Google Ads professionals who are up-to-date with the latest platform changes, bidding strategies, and best practices. We leverage this expertise to build and optimize campaigns that consistently outperform."
                                },
                                {
                                    icon: "bi-bar-chart-line-fill",
                                    title: "Strategic & Data-Driven Approach",
                                    description:
                                        "We don't guess; we analyze. Our services begin with in-depth keyword research, competitor analysis, and audience segmentation. Every decision is backed by data, ensuring your ads target the right people at the right time with the right message."
                                },
                                {
                                    icon: "bi-graph-up-arrow",
                                    title: "Maximizing Your ROI",
                                    description:
                                        "Our primary goal is to deliver a strong return on your ad spend (ROAS). We continuously monitor performance, optimize bids, refine targeting, and conduct A/B testing to ensure every penny of your budget works as hard as possible for your business."
                                },
                                {
                                    icon: "bi-bar-chart-fill",
                                    title: "Transparent Reporting & Communication",
                                    description:
                                        "You'll always have full visibility into your campaign's performance. We provide clear, comprehensive, and easy-to-understand reports on key metrics, coupled with proactive communication, so you're always informed and confident in your investment."
                                },
                                {
                                    icon: "bi-layers-fill",
                                    title: "Comprehensive Service Suite",
                                    description:
                                        "From initial strategy and campaign setup to ongoing optimization, ad copy creation, landing page recommendations, and in-depth analytics, we offer a complete end-to-end Google Ads management solution, allowing you to focus on your core business."
                                },
                                {
                                    icon: "bi-geo-alt-fill",
                                    title: "Local Market Expertise (Jammu & Beyond)",
                                    description:
                                        "With our understanding of the local market dynamics in Jammu and wider regions, we can tailor your Google Ads campaigns for precise geographical targeting, ensuring your ads reach the most relevant local customers and drive foot traffic or local inquiries."
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




            </div >
        </div >
    );
};

export default GamPage;