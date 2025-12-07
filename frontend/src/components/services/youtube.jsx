import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/youtube.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const GamPage = () => {
    const localSeoFactors = [
        {
            title: "Massive & Engaged Audience",
            icon: "bi-people-fill",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "YouTube has billions of users and is the world’s second-largest search engine. Your audience is already here, offering unmatched potential for reach and engagement."
        },
        {
            title: "Powerful Visual Storytelling",
            icon: "bi-camera-reels",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Video enables emotional connection, product showcasing, and brand storytelling far beyond static ads. It leaves a lasting impact on viewers."
        },
        {
            title: "High-Intent Traffic & Conversions",
            icon: "bi-graph-up-arrow",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Target users who are actively searching for solutions. Video ads placed during these moments drive qualified traffic and boost conversions."
        },
        {
            title: "Cost-Effective Reach",
            icon: "bi-cash-coin",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Compared to traditional TV, YouTube offers budget-friendly access to hyper-targeted audiences, delivering a stronger return on ad spend."
        },
        {
            title: "Enhanced Brand Awareness & Recall",
            icon: "bi-bullseye",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "Consistent, memorable video ads lead to stronger brand recognition and recall. Viewers are more likely to remember you after a compelling video experience."
        },
        {
            title: "Remarketing Opportunities",
            icon: "bi-repeat",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Re-target people who visited your site or channel. YouTube remarketing ads help re-engage warm leads and nudge them toward conversion."
        },
        {
            title: "Competitive Edge",
            icon: "bi-lightning-charge-fill",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Many competitors underutilize video ads. By investing in YouTube, you stand out, win market share, and reach audiences others overlook."
        },
        {
            title: "Seamless Google Integration",
            icon: "bi-boxes",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "YouTube Ads are fully integrated with Google Ads, enabling streamlined campaign management, cross-platform audience targeting, and detailed performance reporting."
        }
    ];

    const categories = [
        {
            name: "Skippable In-Stream Ads",
            color: "linear-gradient(135deg, #fceabb, #f8b500)",
            description: "These ads play before, during, or after other videos. Viewers can skip them after 5 seconds. You pay if viewers watch for 30 seconds (or the entire ad if shorter) or interact with the ad. Ideal for driving conversions, website traffic, and leads."
        },
        {
            name: "Non-Skippable In-Stream Ads",
            color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
            description: "These ads are 15–30 seconds long and must be watched before a video can be viewed. Great for brand awareness and reach since viewers can’t skip. You pay per impression (CPM)."
        },
        {
            name: "In-Feed Video Ads",
            color: "linear-gradient(135deg, #f6d365, #fda085)",
            description: "Formerly Discovery Ads, these appear in YouTube search results, on the homepage, and next to related videos. They encourage viewers to click and watch your video. You pay per click (CPC)."
        },
        {
            name: "Bumper Ads",
            color: "linear-gradient(135deg, rgb(176, 228, 252), rgb(125, 162, 254))",
            description: "Short, non-skippable video ads up to 6 seconds. Perfect for brand awareness and delivering quick, memorable messages to a wide audience. You pay per impression (CPM)."
        },
        {
            name: "Outstream Ads",
            color: "linear-gradient(135deg, #d5fefd, #80ced6)",
            description: "Mobile-only ads shown on Google video partner sites and apps, not on YouTube. They autoplay without sound and help expand brand reach. You pay per viewable impression."
        },
        {
            name: "Masthead Ads",
            color: "linear-gradient(135deg, #ffd3a5, #fd6585)",
            description: "A premium ad shown at the top of the YouTube homepage for 24 hours. Best for major product launches or events. Reserved through a Google sales representative."
        }
    ];


    const youtubeTargetingOptions = [
        {
            category: "Demographic Targeting",
            icon: "bi-person-lines-fill",
            options: [
                "Age",
                "Gender",
                "Parental Status",
                "Household Income"
            ]
        },
        {
            category: "Audience Segments",
            icon: "bi-people-fill",
            options: [
                {
                    title: "Affinity Audiences",
                    description: "Target users based on long-term interests (e.g., sports enthusiasts, foodies)"
                },
                {
                    title: "Custom Affinity Audiences",
                    description: "Build audiences using specific URLs, apps, or visited locations"
                },
                {
                    title: "In-Market Audiences",
                    description: "Reach users actively researching products or services similar to yours"
                },
                {
                    title: "Life Events",
                    description: "Target users undergoing key milestones like marriage, moving, or starting a business"
                },
                {
                    title: "Custom Segments",
                    description: "Target based on recent search behavior and app usage"
                },
                {
                    title: "Your Data Segments (Remarketing)",
                    description: "Re-engage users who have previously interacted with your website, app, or YouTube content"
                }
            ]
        },
        {
            category: "Content Targeting",
            icon: "bi-tv-fill",
            options: [
                {
                    title: "Keywords",
                    description: "Show ads based on related YouTube video keywords or browsing content"
                },
                {
                    title: "Topics",
                    description: "Target video content by categories like cooking, fitness, tech, etc."
                },
                {
                    title: "Placements",
                    description: "Choose specific YouTube channels, videos, or GDN websites/apps"
                }
            ]
        },
        {
            category: "Geographic & Language Targeting",
            icon: "bi-geo-alt-fill",
            options: [
                "Target by country, region, city, or custom radius",
                "Target based on language preferences"
            ]
        }
    ];
    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">YouTube Advertising Services</h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-11 text-center">
                        <h1 className="display-5 fw-bold ">
                            Captivate Your Audience, Drive Powerful Results
                        </h1>
                        <p className="lead text-muted fw-semibold fs-5 mb-2">
                            In the age of video, YouTube stands as the undisputed king, offering an unparalleled platform to connect with billions of viewers worldwide. For businesses, this presents an incredible opportunity to tell your story, showcase your products, and engage your target audience through compelling video content. At orazweb solutions, we specialize in crafting and managing highly effective YouTube Advertising campaigns that captivate viewers, drive qualified traffic, and deliver measurable business growth.
                        </p>
                    </div>
                </div>
                {/* what si facebook */}

                <div className="row my-5 justify-content-center align-items-center">
                    <div className="row my-5 justify-content-center align-items-center">
                        <div className="col-lg-12 mb-4">
                            <h2 className="display-5 text-center fw-bold text-success">A Guide to Advertising on YouTube</h2>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <h2 className="fw-bold text-success">What Are YouTube Ads?</h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                YouTube Ads are paid video advertisements that appear on the YouTube platform. As part of Google's extensive advertising network, YouTube allows businesses to reach a massive and diverse audience with highly targeted video content. These ads are seamlessly integrated into the viewing experience, appearing before, during, or after videos, or even within search results and on the YouTube homepage. They offer a dynamic and engaging way to communicate your brand message, build awareness, drive website traffic, and generate leads or sales.                            </p>

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

                </div>

                {/* Advertising With Google Ad Manager: Clarifying the Terms */}

                <section className="health-section bg-light py-5">
                    <div className="container">
                        <h2 className="display-5  fw-bold text-success">Types of YouTube Video Advertising</h2>

                        <p className="lead text-center fs-5 text-muted fw-semibold mt-4">
                            YouTube offers a variety of ad formats, each designed for different marketing objectives and audience engagement styles:
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

                    </div>
                </section>

                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">YouTube Ads Targeting Options</h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            YouTube, leveraging Google's robust advertising capabilities, offers incredibly precise targeting options to ensure your video ads reach the most relevant audience:                        </p>
                        <div className="row g-4">
                            {youtubeTargetingOptions.map((section, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="card h-100 shadow-sm border-0">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <i className={`${section.icon} me-2 text-success`}></i>
                                                {section.category}
                                            </h5>
                                           <ul className="list-unstyled text-muted fs-5">
                                                {Array.isArray(section.options) &&
                                                    section.options.map((item, i) => (
                                                        typeof item === "string" ? (
                                                            <li key={i}>{item}</li>
                                                        ) : (
                                                            <li key={i}>
                                                                <strong>{item.title}:</strong> {item.description}
                                                            </li>
                                                        )
                                                    ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Why Your Business Needs YouTube Advertising Services
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            In the modern digital landscape, video content dominates, and YouTube is at its forefront. For your business, leveraging YouTube Advertising is not just an option; it's a strategic imperative for impactful growth:
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

                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success mb-4">
                            Why Choose <span className="text-dark">orazweb</span> for Your YouTube Advertising?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
                            Partnering with orazweb solutions for your YouTube Advertising means entrusting your video marketing to a team of experts dedicated to your success. We combine creative flair with data-driven strategies to ensure your video campaigns captivate, convert, and deliver exceptional results.                        </p>
                        <div className="row g-4 text-start">
                            {[
                                {
                                    icon: "bi-diagram-3-fill",
                                    title: "Strategic Video Campaign Planning",
                                    description:
                                        "We don’t just put videos online. We develop comprehensive YouTube advertising strategies aligned with your goals — brand awareness, lead generation, or direct sales — and select the best ad formats and targeting to meet them."
                                },
                                {
                                    icon: "bi-camera-video-fill",
                                    title: "Expert Video Creative Consultation",
                                    description:
                                        "While we don't produce the videos, we guide your team with proven best practices — from ideal video length and message framing to effective calls-to-action and visuals that engage YouTube viewers."
                                },
                                {
                                    icon: "bi-bullseye",
                                    title: "Hyper-Targeted Audience Reach",
                                    description:
                                        "We use advanced YouTube targeting — in-market segments, custom audiences, and remarketing — to ensure your ads are delivered to highly relevant and engaged viewers, maximizing impact."
                                },
                                {
                                    icon: "bi-graph-up-arrow",
                                    title: "Advanced Bid Management & Optimization",
                                    description:
                                        "Our experts continuously manage and optimize bids in real-time to meet your CPV and ROAS goals, ensuring cost efficiency and maximizing your return on investment."
                                },
                                {
                                    icon: "bi-bar-chart-fill",
                                    title: "Transparent Performance Tracking & Reporting",
                                    description:
                                        "We provide detailed, easy-to-understand reports on views, watch time, clicks, conversions, and spend — giving you clear insight into your YouTube ad performance and ROI."
                                },
                                {
                                    icon: "bi-sliders2",
                                    title: "Continuous A/B Testing & Refinement",
                                    description:
                                        "We A/B test different creatives, headlines, CTAs, and audiences to identify top-performing variations and consistently enhance campaign effectiveness over time."
                                },
                                {
                                    icon: "bi-plug-fill",
                                    title: "Seamless Integration with Your Digital Strategy",
                                    description:
                                        "Your YouTube campaigns will align with your overall digital marketing — including SEO, Google Ads, and social — to create a unified presence and amplify your results across channels."
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