import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/shopify.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const ShopifyseoPage = () => {
    const localSeoFactors = [
        {
            title: "Product & Collection Page Optimization",
            icon: "bi-box-seam",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Optimize product titles, descriptions, alt text, and meta data using relevant keywords to ensure visibility for both product and category pages."
        },
        {
            title: "Keyword Research",
            icon: "bi-search",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Identify high-converting short-tail and long-tail keywords that customers use to search for your products and integrate them site-wide."
        },
        {
            title: "Website Speed & Performance",
            icon: "bi-speedometer2",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Ensure fast loading by choosing lightweight themes, minimizing app bloat, and compressing images — crucial for UX and rankings."
        },
        {
            title: "Mobile Responsiveness",
            icon: "bi-phone-fill",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "With mobile shoppers dominating, your Shopify store must be fully responsive and easy to navigate across all screen sizes."
        },
        {
            title: "URL Structure",
            icon: "bi-diagram-3",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "Even with Shopify’s fixed structure, optimize the 'handles' (e.g., /products/red-sneakers) for clarity, relevance, and SEO."
        },
        {
            title: "Image Optimization",
            icon: "bi-image",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Use compressed, high-quality images with SEO-friendly file names and alt text to improve visibility and site speed."
        },
        {
            title: "Schema Markup (Structured Data)",
            icon: "bi-code-slash",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Add or enhance structured data to highlight product info like price, reviews, and stock — boosting CTR with rich search snippets."
        },
        {
            title: "Customer Reviews & Ratings",
            icon: "bi-chat-left-dots",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Encourage and display reviews for fresh, keyword-rich content that builds trust and improves rankings."
        },
        {
            title: "Backlinks & Domain Authority",
            icon: "bi-link-45deg",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Earn backlinks from reputable sites to boost your store’s authority and search visibility."
        },
        {
            title: "Blog Content & Content Marketing",
            icon: "bi-journal-richtext",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Publish helpful blog posts targeting informational queries and funnel traffic toward your products."
        }
    ];

    const localSeoSteps = [
        {
            title: "Conduct Thorough Keyword Research",
            badgeColor: "primary",
            bgClass: "bg-gradient bg-primary bg-opacity-10",
            icon: "bi-search",
            points: [
                "Identify the exact search terms your target customers use.",
                "Focus on broad and long-tail keywords with purchase intent.",
                "Use tools like Google Keyword Planner, Ahrefs, or Ubersuggest."
            ],
        },
        {
            title: "Optimize Product & Collection Pages (On-Page SEO)",
            badgeColor: "success",
            bgClass: "bg-gradient bg-success bg-opacity-10",
            icon: "bi-box-seam",
            points: [
                "Use unique, keyword-rich titles and detailed descriptions.",
                "Write compelling meta descriptions for products and collections.",
                "Add descriptive alt text to product images and optimize collection page URLs."
            ],
        },
        {
            title: "Optimize Your Store's Technical Health",
            badgeColor: "danger",
            bgClass: "bg-gradient bg-danger bg-opacity-10",
            icon: "bi-tools",
            points: [
                "Ensure your theme is fast-loading and mobile-responsive.",
                "Compress images without compromising quality.",
                "Fix broken links and submit XML sitemap to Google Search Console."
            ],
        },
        {
            title: "Create Engaging Blog Content",
            badgeColor: "info",
            bgClass: "bg-gradient bg-info bg-opacity-10",
            icon: "bi-journal-richtext",
            points: [
                "Publish blog posts targeting your audience’s search intent.",
                "Use blog content to support SEO and link to relevant products.",
                "Focus on helpful, value-driven topics that match your niche."
            ],
        },
        {
            title: "Manage & Generate Customer Reviews",
            badgeColor: "warning",
            bgClass: "bg-gradient bg-warning bg-opacity-10",
            icon: "bi-chat-square-heart",
            points: [
                "Encourage verified buyers to leave reviews on product pages.",
                "Display reviews to build trust and increase conversions.",
                "Respond to customer feedback professionally and promptly."
            ],
        },
        {
            title: "Build High-Quality Backlinks",
            badgeColor: "secondary",
            bgClass: "bg-gradient bg-secondary bg-opacity-10",
            icon: "bi-link-45deg",
            points: [
                "Gain backlinks from industry blogs, media, and partners.",
                "Create shareable content like buying guides or infographics.",
                "Collaborate with influencers or guest post on relevant sites."
            ],
        },
        {
            title: "Implement & Enhance Schema Markup",
            badgeColor: "dark",
            bgClass: "bg-gradient bg-dark bg-opacity-10",
            icon: "bi-code-slash",
            points: [
                "Use schema for products, reviews, prices, and availability.",
                "Enhance schema beyond Shopify defaults for better visibility.",
                "Enable rich results to boost CTR in search engine listings."
            ],
        }
    ];

    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">Shopify SEO for orazweb solutions</h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-12 text-center mb-5">
                        <h1 className="display-5 fw-bold text-success">
                            Unlock Organic Sales & E-commerce Growth
                        </h1>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            In the competitive world of online retail, simply having a Shopify store isn't enough to guarantee success. To truly thrive, your products need to be found by customers actively searching for them. This is where Shopify SEO (Search Engine Optimization) becomes your most powerful tool. At orazweb solutions, we specialize in optimizing your Shopify store's visibility, ensuring your products rank higher, attract more organic traffic, and convert browsers into loyal buyers.                        </p>
                    </div>

                    {/* Left: Text Content */}

                    <div className="col-lg-6 mb-4">
                        <h2 className="fw-bold mb-4 text-success">What Is Shopify SEO & Why Is It Important?</h2>
                        <p className="lead fw-semibold fs-5 mb-3">
                            Shopify SEO refers to the process of optimizing your e-commerce store built on the Shopify platform to improve its visibility in search engine results (like Google, Bing, etc.). It involves a range of strategies and techniques applied to your store's structure, content, and external signals, all aimed at making it easier for search engines to find, understand, and rank your product and category pages for relevant customer searches.                        </p>
                        <h4>Why is it important for your Shopify store?</h4>
                        <p>For an e-commerce business, organic search traffic is often the most valuable. Unlike paid ads, it's a sustainable source of highly qualified leads who are actively looking for what you sell. Without strong Shopify SEO:</p>
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
                </div>
                {/* Key Shopify SEO Ranking Factors & Components*/}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 text-center fw-bold text-success">
                            Key Shopify SEO Ranking Factors & Components
                        </h2>
                        <p className="lead fs-5 text-center text-muted fw-semibold mt-4">
                            Optimizing your Shopify store involves addressing several critical factors that influence its ranking in search engines:
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
                            How to Do Shopify SEO?
                        </h2>
                        <p className="lead fs-5 text-center text-muted fw-semibold mt-4">
                            Implementing a successful Shopify SEO strategy requires a systematic approach. Here's a simplified breakdown of the key steps                        </p>
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
                                Why Shopify SEO Is Vital for Your E-commerce Business
                            </h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                For any e-commerce venture on Shopify, investing in SEO is not just an option; it's a strategic imperative that directly impacts your bottom line and long-term viability.                            </p>
                        </div>

                        {/* Local SEO Benefits Grid */}
                        <div className="row g-4">
                            {[
                                {
                                    icon: "bi-graph-up-arrow",
                                    title: "Sustainable Organic Sales Growth",
                                    desc: "Strong SEO delivers a consistent stream of high-intent visitors, resulting in compounding sales growth without ongoing ad spend.",
                                    color: "text-success"
                                },
                                {
                                    icon: "bi-cash-stack",
                                    title: "Reduced Reliance on Paid Advertising",
                                    desc: "Boost organic visibility to cut back on costly ads, freeing your budget for other growth-focused initiatives.",
                                    color: "text-info"
                                },
                                {
                                    icon: "bi-arrow-repeat",
                                    title: "Higher Return on Investment (ROI)",
                                    desc: "SEO offers long-term returns by driving traffic organically, unlike paid channels that require constant funding.",
                                    color: "text-warning"
                                },
                                {
                                    icon: "bi-award",
                                    title: "Enhanced Brand Authority & Trust",
                                    desc: "Ranking high in search results builds credibility and trust, positioning your brand as a reliable authority.",
                                    color: "text-primary"
                                },
                                {
                                    icon: "bi-bag-check-fill",
                                    title: "Access to High-Intent Customers",
                                    desc: "Shopify SEO connects your products with people actively searching to buy, maximizing conversion potential.",
                                    color: "text-danger"
                                },
                                {
                                    icon: "bi-trophy",
                                    title: "Competitive Edge in a Crowded Market",
                                    desc: "Outrank less-optimized competitors and capture customers with a strong Shopify SEO strategy tailored for growth.",
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

                {/* Section 2: why google my business*/}
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success">
                            orazweb Shopify SEO Services: Your E-commerce Growth Partner
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            At orazweb solutions, we are experts in navigating the unique SEO landscape of Shopify. Our comprehensive services are tailored to optimize every aspect of your e-commerce store, ensuring it ranks higher, attracts more qualified traffic, and drives consistent sales.
                        </p>

                        <div className="row g-4 mt-4">
                            {[
                                {
                                    title: 'Comprehensive Shopify SEO Audit',
                                    icon: 'bi-search',
                                    bodyClass: 'box-1',
                                    description: `A deep dive into your store's technical health, on-page optimization, content quality, and competitive landscape. We identify all barriers to ranking and opportunities for growth specific to the Shopify platform.`
                                },
                                {
                                    title: 'E-commerce Keyword Strategy',
                                    icon: 'bi-key',
                                    bodyClass: 'box-2',
                                    description: `In-depth research to identify high-value product, category, and informational keywords with strong purchase intent. We map these keywords to your store's structure for maximum impact.`
                                },
                                {
                                    title: 'Product & Collection Page Optimization',
                                    icon: 'bi-tag-fill',
                                    bodyClass: 'box-3',
                                    description: `Meticulous optimization of all product and collection page elements – titles, descriptions, meta tags, URLs, and image alt text – to ensure they are search engine friendly and highly persuasive for customers.`
                                },
                                {
                                    title: 'Shopify Technical SEO Fixes',
                                    icon: 'bi-wrench-adjustable-circle',
                                    bodyClass: 'box-4',
                                    description: `Addressing Shopify-specific technical challenges, including theme speed optimization, image compression, canonicalization issues, sitemap submission, and ensuring mobile-first indexing readiness.`
                                },
                                {
                                    title: 'E-commerce Content Marketing',
                                    icon: 'bi-journal-richtext',
                                    bodyClass: 'box-5',
                                    description: `Development of a strategic blog and content plan to attract informational searchers, build brand authority, and naturally guide visitors towards your products.`
                                },
                                {
                                    title: 'Product Review & Reputation Management',
                                    icon: 'bi-chat-quote-fill',
                                    bodyClass: 'box-6',
                                    description: `Strategies to encourage genuine customer reviews on your product pages and Google, enhancing trust and providing fresh, SEO-rich content.`
                                },
                                {
                                    title: 'Strategic Link Building',
                                    icon: 'bi-link-45deg',
                                    bodyClass: 'box-1',
                                    description: `Building high-quality, relevant backlinks to your Shopify store from authoritative e-commerce sites, industry blogs, and relevant online communities to boost domain authority.`
                                },
                                {
                                    title: 'Competitor Analysis for E-commerce',
                                    icon: 'bi-graph-up-arrow',
                                    bodyClass: 'box-2',
                                    description: `Detailed analysis of your e-commerce competitors' SEO strategies, identifying their strengths, weaknesses, and untapped opportunities for your store.`
                                },
                                {
                                    title: 'Performance Tracking & Reporting',
                                    icon: 'bi-bar-chart-line-fill',
                                    bodyClass: 'box-3',
                                    description: `Transparent, detailed reports on your Shopify store's organic rankings, traffic, conversions, and revenue, providing clear insights into your ROI and ongoing growth.`
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
                                How Shopify SEO Services Drive Sales & Growth
                            </h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                Our Shopify SEO services are engineered to directly impact your e-commerce revenue and ensure sustainable business expansion:
                            </p>
                            <div className="row mt-5">
                                {[
                                    ['bi-bar-chart-fill', 'Increased Organic Traffic to Product Pages', 'By ranking for high-intent keywords, we drive more qualified visitors directly to your product and collection pages, increasing the likelihood of a purchase.'],

                                    ['bi-graph-up-arrow', 'Higher Conversion Rates', 'An optimized, fast, and user-friendly Shopify store not only attracts visitors but also converts them more effectively into paying customers.'],

                                    ['bi-currency-rupee', 'Reduced Customer Acquisition Cost (CAC)', 'As organic traffic increases, your reliance on paid ads can decrease, significantly lowering your overall customer acquisition costs.'],

                                    ['bi-shield-fill-check', 'Enhanced Brand Visibility & Trust', 'Top search rankings and positive reviews build immense brand credibility, making your Shopify store the go-to destination for your products.'],

                                    ['bi-repeat', 'Sustainable & Scalable Revenue', 'Organic search provides a consistent, compounding source of sales, allowing your e-commerce business to grow steadily and profitably without constant ad spend.'],

                                    ['bi-phone-fill', 'Improved User Experience', 'Many SEO optimizations, such as site speed and mobile responsiveness, directly enhance the shopping experience for your customers, leading to higher engagement and repeat purchases.']
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
                            Shopify SEO Tips for Sales & Conversions
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
                            To further boost your Shopify store's sales and conversion rates through SEO, consider these actionable tips:                            </p>

                        <div className="row g-4 text-start">
                            {[
                                {
                                    icon: "bi-journal-text",
                                    title: "Prioritize Product Page Content",
                                    description:
                                        "Write unique, detailed, and persuasive descriptions for every product. Include keywords naturally, focusing on benefits and answering customer questions."
                                },
                                {
                                    icon: "bi-image-fill",
                                    title: "Optimize Product Images for Speed & Search",
                                    description:
                                        "Compress images for faster loading. Use descriptive filenames (e.g., red-leather-wallet.jpg) and compelling alt text to help with both SEO and accessibility."
                                },
                                {
                                    icon: "bi-chat-heart-fill",
                                    title: "Leverage Customer Reviews",
                                    description:
                                        "Encourage and display reviews prominently on product pages. They provide social proof and keyword-rich, fresh content for search engines."
                                },
                                {
                                    icon: "bi-pencil-fill",
                                    title: "Create a Blog for Informational Searches",
                                    description:
                                        "Write posts that answer customer questions, offer buying guides, or highlight trends. Link to related product pages to drive traffic and improve SEO."
                                },
                                {
                                    icon: "bi-phone-fill",
                                    title: "Ensure Fast Mobile Experience",
                                    description:
                                        "Test your Shopify store speed on mobile. A slow mobile site hurts conversions—optimize your theme and limit heavy apps that affect performance."
                                },
                                {
                                    icon: "bi-link-45deg",
                                    title: "Use Strategic Internal Linking",
                                    description:
                                        "Link between relevant product and blog pages. This improves crawlability and helps guide shoppers to explore more of your store."
                                },
                                {
                                    icon: "bi-meta",
                                    title: "Optimize Meta Titles & Descriptions",
                                    description:
                                        "Write unique and enticing meta titles and descriptions with primary keywords and strong calls to action to increase click-through rates from search."
                                },
                                {
                                    icon: "bi-search",
                                    title: "Monitor Search Console Regularly",
                                    description:
                                        "Use Google Search Console to catch crawl errors, indexing issues, and performance drops. Stay proactive in resolving visibility-impacting problems."
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

export default ShopifyseoPage;