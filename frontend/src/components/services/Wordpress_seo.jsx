import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/shopify.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const Wordpresspage = () => {
    const localSeoFactors = [
        {
            title: "WordPress-Specific Technical Health",
            icon: "bi-gear-fill",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Ensure your WordPress theme is SEO-friendly, plugins are managed efficiently, and permalink structure is optimized for search engines."
        },
        {
            title: "Keyword Research & Mapping",
            icon: "bi-search",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Identify keywords your audience uses and map them effectively to posts, pages, and categories for maximum visibility."
        },
        {
            title: "On-Page Content Optimization",
            icon: "bi-layout-text-sidebar-reverse",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Optimize titles, meta descriptions, header tags, and on-page content to align with user intent and search queries."
        },
        {
            title: "Website Speed & Core Web Vitals",
            icon: "bi-speedometer2",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Boost performance using caching, lightweight themes, image compression, and fast hosting to improve Core Web Vitals."
        },
        {
            title: "Mobile Responsiveness",
            icon: "bi-phone-fill",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "Make sure your site adapts beautifully on all devices to support Google’s mobile-first indexing and user satisfaction."
        },
        {
            title: "XML Sitemaps",
            icon: "bi-map-fill",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Generate and submit a complete XML sitemap through tools like Yoast SEO or Rank Math to guide search engines."
        },
        {
            title: "Robots.txt Optimization",
            icon: "bi-robot",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Configure the robots.txt file to control crawl behavior and prevent indexing of unwanted sections of your site."
        },
        {
            title: "Image Optimization",
            icon: "bi-image",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Use compressed images with relevant alt tags to improve load times and SEO performance in image search."
        },
        {
            title: "Schema Markup (Structured Data)",
            icon: "bi-code-slash",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Implement schema using plugins or manual code to enable rich snippets and help Google understand your content."
        },
        {
            title: "Internal Linking",
            icon: "bi-diagram-3",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Link related posts and pages to improve crawlability, distribute link equity, and guide users through your site."
        },
        {
            title: "Backlinks & Domain Authority",
            icon: "bi-link-45deg",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "Earn backlinks from reputable sources to boost your site’s trustworthiness and organic search visibility."
        },
        {
            title: "User Experience (UX)",
            icon: "bi-ui-checks",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Provide an intuitive, engaging browsing experience to reduce bounce rates and improve engagement metrics that influence SEO."
        }
    ];


    const localSeoSteps = [
        {
            title: "Install and Configure a Reputable SEO Plugin",
            badgeColor: "primary",
            bgClass: "bg-gradient bg-primary bg-opacity-10",
            icon: "bi-plug",
            points: [
                "Install Yoast SEO or Rank Math for robust optimization features.",
                "Configure titles, meta descriptions, XML sitemaps, and breadcrumbs.",
                "Access SEO controls directly in your WordPress editor."
            ],
        },
        {
            title: "Conduct Thorough Keyword Research",
            badgeColor: "success",
            bgClass: "bg-gradient bg-success bg-opacity-10",
            icon: "bi-search",
            points: [
                "Find relevant keywords your audience uses to find your site.",
                "Focus on both short-tail and long-tail keywords.",
                "Map keywords to individual posts, pages, and categories."
            ],
        },
        {
            title: "Optimize WordPress Pages and Posts (On-Page SEO)",
            badgeColor: "danger",
            bgClass: "bg-gradient bg-danger bg-opacity-10",
            icon: "bi-pencil-square",
            points: [
                "Use keywords in titles, meta descriptions, and headers.",
                "Ensure content is unique, detailed, and valuable.",
                "Use proper heading hierarchy (H1, H2, H3, etc.)."
            ],
        },
        {
            title: "Ensure Technical WordPress Health",
            badgeColor: "info",
            bgClass: "bg-gradient bg-info bg-opacity-10",
            icon: "bi-tools",
            points: [
                "Choose an SEO-friendly theme and enable caching.",
                "Compress images and add descriptive alt text.",
                "Fix broken links using tools or plugins."
            ],
        },
        {
            title: "Optimize Your WordPress Permalinks",
            badgeColor: "warning",
            bgClass: "bg-gradient bg-warning bg-opacity-10",
            icon: "bi-link-45deg",
            points: [
                "Use 'Post name' permalink structure for SEO-friendly URLs.",
                "Avoid dates and unnecessary parameters in URLs.",
                "Include target keywords in slugs where appropriate."
            ],
        },
        {
            title: "Create and Submit XML Sitemaps",
            badgeColor: "secondary",
            bgClass: "bg-gradient bg-secondary bg-opacity-10",
            icon: "bi-diagram-3-fill",
            points: [
                "Use your SEO plugin to auto-generate a sitemap.",
                "Submit it to Google Search Console and Bing Webmaster Tools.",
                "Ensure all important pages are included and indexed."
            ],
        },
        {
            title: "Manage and Generate Online Reviews (for Local Businesses)",
            badgeColor: "dark",
            bgClass: "bg-gradient bg-dark bg-opacity-10",
            icon: "bi-chat-dots-fill",
            points: [
                "Encourage reviews on your Google Business Profile.",
                "Use WordPress plugins to display reviews and testimonials.",
                "Respond to feedback to build credibility and trust."
            ],
        },
        {
            title: "Build High-Quality Backlinks to Your WordPress Site",
            badgeColor: "primary",
            bgClass: "bg-gradient bg-primary bg-opacity-10",
            icon: "bi-globe2",
            points: [
                "Create share-worthy content that naturally attracts backlinks.",
                "Reach out to relevant blogs, publications, and partners.",
                "Guest post or collaborate with industry influencers."
            ],
        },
        {
            title: "Monitor Performance with Google Analytics & Search Console",
            badgeColor: "success",
            bgClass: "bg-gradient bg-success bg-opacity-10",
            icon: "bi-graph-up-arrow",
            points: [
                "Track keyword rankings, clicks, impressions, and traffic sources.",
                "Fix crawl errors and improve underperforming pages.",
                "Use insights to continuously refine your SEO strategy."
            ],
        }
    ];


    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">WordPress SEO for orazweb solutions</h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-12 text-center mb-5">
                        <h1 className="display-5 fw-bold text-success">
                            Optimize Your Website, Amplify Your Voice
                        </h1>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            WordPress powers over 40% of the internet, making it the most popular content management system. But simply using WordPress doesn't automatically guarantee search engine visibility. To truly stand out, attract organic traffic, and convert visitors into customers, your WordPress website needs a robust WordPress SEO (Search Engine Optimization) strategy. At orazweb solutions, we specialize in optimizing WordPress sites, ensuring your content ranks higher, reaches your target audience, and drives sustainable growth.                            </p>
                    </div>

                    {/* Left: Text Content */}

                    <div className="col-lg-6 mb-4">
                        <h2 className="fw-bold mb-4 text-success">What Is WordPress SEO & Why Is It Important?</h2>
                        <p className="lead fw-semibold fs-5 mb-3">
                            WordPress SEO refers to the process of optimizing a website built on the WordPress platform to improve its visibility and ranking in search engine results like Google, Bing, and others. It involves configuring WordPress-specific settings, utilizing plugins, and applying broader SEO best practices to ensure search engines can easily find, crawl, understand, and index your content.
                        </p>
                        <h4>Why is it important for your WordPress website?</h4>
                        <p>While WordPress is inherently SEO-friendly, it's a foundation, not a complete solution. Without dedicated WordPress SEO:
                        </p>
                        <ul className="list-unstyled text-muted">
                            <li className="mb-3 fs-5">
                                <strong>Your content gets lost:</strong> Even the most valuable articles or product pages won't be found if search engines can't properly access or understand them.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>You miss out on organic traffic:</strong> This is often the highest-quality traffic, as users are actively searching for information or solutions you provide.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>Competitors gain an advantage:</strong> Other websites, even those on less 'SEO-friendly' platforms, can outrank you if they have a stronger SEO strategy.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>Website potential is untapped:</strong> Your WordPress site has immense potential, but without optimization, it won't reach its full audience.
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
                {/* Key Shopify SEO Ranking Factors & Components*/}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 text-center fw-bold text-success">
                            Key WordPress SEO Ranking Factors & Components
                        </h2>
                        <p className="lead fs-5 text-center text-muted fw-semibold mt-4">
                            Optimizing your WordPress site involves a blend of general SEO principles and WordPress-specific considerations:
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
                {/* Section 1: How to Do Shopify SEO? */}

                <section className="py-5 bg-light">
                    <div className="container">

                        <h2 className="display-5 text-center fw-bold text-success">
                            How to Do WordPress SEO?
                        </h2>
                        <p className="lead fs-5 text-center text-muted fw-semibold mt-4">
                            Implementing a successful WordPress SEO strategy requires a systematic approach, combining platform-specific optimizations with general SEO best practices:
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
                                                {/* Step {index + 1} */}
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

                {/* Section 2:  Why Shopify SEO Is Vital for Your E-commerce Business*/}
                <section className="py-5">
                    <div className="container">
                        <div className="text-center mb-5">
                            <h2 className="display-5 fw-bold text-success">
                                Why WordPress SEO Is Vital for Your Business
                            </h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                For any business leveraging WordPress, a dedicated SEO strategy is not just an option; it's a fundamental investment that directly impacts your online visibility, customer acquisition, and long-term growth.
                            </p> </div>

                        {/* Local SEO Benefits Grid */}
                        <div className="row g-4">
                            {[
                                {
                                    icon: "bi-graph-up-arrow",
                                    title: "Dominating Organic Search",
                                    desc: "WordPress SEO ensures your website ranks higher for relevant searches, driving a consistent stream of free, high-quality organic traffic directly to your content and offerings.",
                                    color: "text-success"
                                },
                                {
                                    icon: "bi-cash-stack",
                                    title: "Sustainable Growth Engine",
                                    desc: "Unlike paid advertising, which stops when your budget does, strong SEO provides a sustainable and compounding source of visitors, leading to long-term growth and reduced customer acquisition costs.",
                                    color: "text-info"
                                },
                                {
                                    icon: "bi-shield-check",
                                    title: "Enhanced Credibility & Trust",
                                    desc: "Ranking prominently in search results positions your WordPress site as an authoritative and trustworthy source in your industry, building confidence with potential customers before they even click.",
                                    color: "text-warning"
                                },
                                {
                                    icon: "bi-device-hdd",
                                    title: "Improved User Experience",
                                    desc: "Many SEO optimizations, such as faster loading times and mobile responsiveness, directly enhance the overall user experience on your WordPress site, leading to lower bounce rates and higher engagement.",
                                    color: "text-primary"
                                },
                                {
                                    icon: "bi-trophy",
                                    title: "Competitive Advantage",
                                    desc: "In a crowded online marketplace, a robust WordPress SEO strategy allows you to outperform competitors who neglect their foundational SEO, capturing their potential audience and market share.",
                                    color: "text-danger"
                                },
                                {
                                    icon: "bi-rocket-takeoff",
                                    title: "Maximized WordPress Investment",
                                    desc: "You've chosen a powerful platform. WordPress SEO ensures you're getting the absolute most out of your WordPress investment, transforming it from a static website into a dynamic, lead-generating asset.",
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

                {/* Section 2:  orazweb Shopify SEO Services: Your E-commerce Growth Partner*/}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success">
                            orazweb WordPress SEO Services: Your Partner for Digital Excellence
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            At orazweb solutions, we are experts in unlocking the full SEO potential of your WordPress website. Our comprehensive services are tailored to address the unique aspects of the WordPress platform, ensuring your site ranks higher, attracts more qualified traffic, and drives consistent business results.                        </p>

                        <div className="row g-4 mt-4">
                            {[
                                {
                                    title: 'Comprehensive WordPress SEO Audit',
                                    icon: 'bi-search',
                                    bodyClass: 'box-1',
                                    description: `A deep dive into your WordPress site's technical health, plugin performance, theme optimization, content quality, and competitive landscape. We identify all barriers and opportunities specific to the WordPress environment.`
                                },
                                {
                                    title: 'Keyword Research & Content Strategy',
                                    icon: 'bi-key',
                                    bodyClass: 'box-2',
                                    description: `In-depth research to identify high-value keywords for your WordPress pages and posts. We develop a content strategy that aligns with user intent and drives organic visibility.`
                                },
                                {
                                    title: 'On-Page Optimization for WordPress',
                                    icon: 'bi-tag-fill',
                                    bodyClass: 'box-3',
                                    description: `Meticulous optimization of all WordPress page and post elements – titles, meta descriptions, header tags, image alt text, and content – ensuring they are search engine friendly and highly engaging.`
                                },
                                {
                                    title: 'WordPress Technical SEO Fixes',
                                    icon: 'bi-wrench-adjustable-circle',
                                    bodyClass: 'box-4',
                                    description: `Addressing WordPress-specific technical challenges, including theme speed optimization, plugin conflict resolution, image compression, permalink structure optimization, and ensuring mobile-first indexing readiness.`
                                },
                                {
                                    title: 'WordPress Website Speed Optimization',
                                    icon: 'bi-speedometer2',
                                    bodyClass: 'box-5',
                                    description: `Detailed analysis and implementation of strategies to significantly improve your WordPress site's loading speed and Core Web Vitals, crucial for both SEO and user experience.`
                                },
                                {
                                    title: 'Content Creation & Optimization',
                                    icon: 'bi-journal-richtext',
                                    bodyClass: 'box-6',
                                    description: `Developing high-quality, SEO-optimized blog posts, articles, and landing page content that resonates with your audience and ranks for target keywords.`
                                },
                                {
                                    title: 'Internal Linking Strategy',
                                    icon: 'bi-diagram-3-fill',
                                    bodyClass: 'box-1',
                                    description: `Developing a strategic internal linking structure within your WordPress site to improve navigation, distribute authority, and enhance content discoverability for search engines.`
                                },
                                {
                                    title: 'Schema Markup Implementation',
                                    icon: 'bi-code-slash',
                                    bodyClass: 'box-2',
                                    description: `Adding structured data (Schema Markup) to your WordPress content (e.g., articles, products, local business info) to help search engines better understand your content and display rich snippets.`
                                },
                                {
                                    title: 'Backlink Acquisition & Management',
                                    icon: 'bi-link-45deg',
                                    bodyClass: 'box-3',
                                    description: `Building a strong, authoritative backlink profile for your WordPress site through ethical outreach and content promotion strategies.`
                                },
                                {
                                    title: 'Performance Tracking & Reporting',
                                    icon: 'bi-bar-chart-line-fill',
                                    bodyClass: 'box-4',
                                    description: `Transparent, detailed reports on your WordPress site's organic rankings, traffic, conversions, and ROI, providing clear insights into your ongoing growth.`
                                }
                            ]

                                .map((card, index) => (


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
                {/* Section 3:     How Shopify SEO Services Drive Sales & Growth    */}
                <section className="py-5">
                    <div className="container text-center">
                        <div className="row justify-content-center">

                            <h2 className="display-5 fw-bold text-success">
How WordPress SEO Services Drive Lead Generation
                            </h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
Our WordPress SEO services are specifically designed to transform your website into a powerful lead-generating asset, ensuring sustainable business growth:
                            </p>
                            <div className="row mt-5">
                                {[
    ['bi-person-check-fill', 'Attract High-Intent Visitors', 'By optimizing your WordPress site for relevant search queries, we attract users who are actively looking for the information, products, or services you offer, making them highly qualified leads.'],

    ['bi-graph-up', 'Increased Organic Traffic', 'Higher search rankings directly translate to more organic traffic to your WordPress site. More visitors mean more opportunities for lead capture through forms, calls, or direct inquiries.'],

    ['bi-bar-chart-line-fill', 'Improved Conversion Rates', 'A technically sound, fast-loading, and user-friendly WordPress site (optimized through SEO) provides a seamless experience, guiding visitors effortlessly towards your lead capture points and increasing conversion rates.'],

    ['bi-currency-rupee', 'Cost-Effective Lead Acquisition', 'Once established, organic traffic from SEO is essentially "free." This significantly lowers your customer acquisition cost compared to relying solely on paid advertising, maximizing your marketing budget\'s efficiency.'],

    ['bi-shield-check', 'Enhanced Credibility & Trust', 'A top-ranking WordPress site with valuable content builds trust and authority. Users are more likely to provide their information or make a purchase from a business they perceive as a leader in their field.'],

    ['bi-repeat', 'Long-Term Lead Pipeline', 'SEO builds a compounding effect. The optimizations we implement continue to attract leads long after the initial work, creating a consistent and sustainable pipeline of potential customers for your business.']
]

                                    .map(([icon, title, text], i) => (
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

                {/*                            Shopify SEO Tips for Sales & Conversions*/}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success mb-4">
                            WordPress SEO Tips for Lead Generation
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
To maximize your WordPress site's lead generation capabilities through SEO, consider these actionable tips:
</p>
                        <div className="row g-4 text-start">
                            {[
    {
        icon: "bi-ui-checks-grid",
        title: "Optimize Lead Capture Forms",
        description:
            "Ensure all forms (contact, newsletter, quote request) are easy to find, mobile-friendly, and require minimal fields to boost conversions."
    },
    {
        icon: "bi-file-earmark-lock",
        title: "Create Gated Content",
        description:
            "Offer valuable resources like e-books or webinars in exchange for emails. Promote these through SEO-optimized blog posts."
    },
    {
        icon: "bi-megaphone-fill",
        title: "Implement Clear Calls-to-Action (CTAs)",
        description:
            "Strategically place strong CTAs across your WordPress site to guide users toward lead forms or key conversion pages."
    },
    {
        icon: "bi-plug-fill",
        title: "Leverage WordPress Plugins for Lead Gen & SEO",
        description:
            "Use plugins for pop-ups, schema markup, and enhanced forms to support both lead generation and search optimization."
    },
    {
        icon: "bi-geo-alt-fill",
        title: "Optimize for Local Searches",
        description:
            "Ensure NAP consistency and integrate your site with Google Business Profile for better visibility in local search results."
    },
    {
        icon: "bi-lightning-charge-fill",
        title: "Improve Site Speed for Conversions",
        description:
            "Use caching, image compression, and a CDN to improve load times and reduce bounce rates on your WordPress site."
    },
    {
        icon: "bi-link-45deg",
        title: "Utilize Internal Linking to Lead Pages",
        description:
            "Guide users from high-traffic content to lead forms or service pages with smart internal linking that supports SEO and conversions."
    },
    {
        icon: "bi-bar-chart-line",
        title: "Monitor User Behavior with Analytics",
        description:
            "Track how visitors navigate your site using Google Analytics to identify high-performing content and drop-off points."
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
                {/* Local SEO Tips for Lead Generation */}


            </div>
        </div>
    );
};

export default Wordpresspage;