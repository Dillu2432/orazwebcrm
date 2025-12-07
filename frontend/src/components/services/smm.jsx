import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/smm.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const EnterprisePage = () => {
    const localSeoFactors = [
        {
            title: "Reach a Massive Audience",
            icon: "bi-globe",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Billions of people use social media daily. SMM allows you to connect with potential customers on platforms they already frequent."
        },
        {
            title: "Build Brand Awareness & Recognition",
            icon: "bi-bullseye",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Consistent, engaging social media presence keeps your brand top-of-mind, making you more recognizable and memorable."
        },
        {
            title: "Drive Website Traffic",
            icon: "bi-box-arrow-up-right",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Strategic content and calls-to-action on social media can effectively funnel interested users directly to your website, product pages, or landing pages."
        },
        {
            title: "Generate Leads & Sales",
            icon: "bi-currency-dollar",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Social platforms offer direct pathways for lead capture and integrate with e-commerce, allowing for direct sales through features like shoppable posts and targeted ads."
        },
        {
            title: "Engage with Your Audience Directly",
            icon: "bi-chat-dots-fill",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "Social media fosters two-way communication, allowing you to build genuine relationships, gather feedback, and provide excellent customer service in real-time."
        },
        {
            title: "Gain Customer Insights",
            icon: "bi-graph-up",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Social media provides invaluable data on your audience's demographics, interests, behaviors, and preferences, helping you tailor your marketing and products."
        },
        {
            title: "Cost-Effective Advertising",
            icon: "bi-megaphone-fill",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Social media advertising offers highly sophisticated targeting at a cost often lower than traditional advertising, allowing businesses of all sizes to achieve significant reach and ROI."
        },
        {
            title: "Improve Search Engine Rankings (Indirectly)",
            icon: "bi-search",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "While not a direct ranking factor, social signals (shares, likes, mentions) can indirectly boost SEO by increasing brand visibility, driving traffic, and attracting backlinks."
        },
        {
            title: "Monitor Competitors",
            icon: "bi-binoculars",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Social media allows you to keep a close eye on what your competitors are doing, what content resonates with their audience, and how they interact with customers."
        }
    ];

    const wordpressServices = [
        {
            title: "Content Marketing",
            icon: "bi-journal-richtext",
            color: "#f0f9ff",
            textColor: "text-primary",
            description:
                "Creating and distributing valuable, relevant, and consistent content (posts, videos, articles, infographics) to attract and retain a clearly defined audience. This forms the backbone of both organic and paid efforts."
        },
        {
            title: "Community Management",
            icon: "bi-chat-dots-fill",
            color: "#fff8e1",
            textColor: "text-warning",
            description:
                "Actively engaging with your audience by responding to comments, direct messages, reviews, running polls, and fostering a sense of community around your brand. This builds loyalty and trust."
        },
        {
            title: "Influencer Marketing",
            icon: "bi-stars",
            color: "#e6f5ea",
            textColor: "text-success",
            description:
                "Collaborating with influential individuals on social media (who have an engaged audience relevant to your niche) to promote your products or services. This leverages trust and expands reach."
        },
        {
            title: "Social Media Advertising (Paid Social)",
            icon: "bi-bullseye",
            color: "#fceef5",
            textColor: "text-danger",
            description:
                "Running targeted ad campaigns on platforms like Facebook, Instagram, LinkedIn, YouTube, and X (Twitter) to reach specific demographics, interests, or behaviors, driving direct traffic, leads, or sales."
        },
        {
            title: "Social Listening & Reputation Management",
            icon: "bi-ear-fill",
            color: "#e0f7fa",
            textColor: "text-info",
            description:
                "Monitoring social media conversations for mentions of your brand, industry keywords, and competitors. This helps in understanding public sentiment, identifying customer service issues, and managing your online reputation proactively."
        },
        {
            title: "Social Selling",
            icon: "bi-person-lines-fill",
            color: "#f9fbe7",
            textColor: "text-secondary",
            description:
                "Using social media to directly connect with prospects, build rapport, and move them through the sales funnel. This is particularly effective in B2B environments (e.g., LinkedIn)."
        },
        {
            title: "Customer Service via Social Media",
            icon: "bi-headset",
            color: "#f3e5f5",
            textColor: "text-dark",
            description:
                "Using social channels as a direct line for customer support, queries, and feedback. This improves customer satisfaction and brand perception."
        }
    ];


    const categories = [
        {
            name: "Organic Social Media Marketing",
            color: "linear-gradient(135deg, #a8edea, #fed6e3)",
            description: (
                <ul className="mb-0 ps-3">
                    <li><strong>Definition:</strong> Activities focused on building a natural, unpaid presence on social media.</li>
                    <li><strong>How it Works:</strong> Creating and sharing posts, stories, going live, engaging in conversations, responding to comments.</li>
                    <li><strong>Goal:</strong> Build brand loyalty, customer relationships, thought leadership, and long-term brand awareness.</li>
                    <li><strong>Cost:</strong> Time and effort in content creation and community management.</li>
                    <li><strong>Reach:</strong> Limited to current followers and their networks. Growth is slower but leads to deeper connections.</li>
                </ul>
            )
        },
        {
            name: "Paid Social Media Advertising",
            color: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
            description: (
                <ul className="mb-0 ps-3">
                    <li><strong>Definition:</strong> Paid promotions to reach specific audiences on social platforms.</li>
                    <li><strong>How it Works:</strong> Setting up ad campaigns with budgets, targeting, and creative assets to drive clicks or conversions.</li>
                    <li><strong>Goal:</strong> Get quick results like leads, sales, website visits, app installs, or event signups.</li>
                    <li><strong>Cost:</strong> Direct ad spend + optional management or agency fees.</li>
                    <li><strong>Reach:</strong> Broad and targeted reach beyond followers. Fast impact, scalable, but budget-dependent.</li>
                </ul>
            )
        }
    ];



    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">Social Media Marketing </h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-12 text-center mb-5">
                        <h1 className="display-5 fw-bold text-success">
                            Connect, Engage, Convert
                        </h1>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            In today's hyper-connected world, your customers are on social media. Are you? Social Media Marketing (SMM) is no longer an option; it's a vital pathway to connect with your audience, build brand loyalty, drive traffic, and generate tangible business results. At orazweb solutions, we specialize in crafting dynamic and results-driven social media strategies that transform your online presence into a powerful growth engine.
                        </p>
                    </div>

                    {/* Left: Text Content */}

                    <div className="col-lg-6 mb-4">
                        <h2 className="fw-bold mb-4 text-success">What is Social Media Marketing?</h2>
                        <p className="lead fw-semibold fs-5 mb-3">
                            <strong>Social Media Marketing (SMM)</strong> encompasses all activities involved in leveraging social media platforms to promote your business, products, or services. It's about much more than just posting updates; it's a strategic process that includes:
                        </p>


                        <ul className="list-unstyled  text-muted">
                            <li className="mb-3 fs-5">
                                <strong>Content Creation: </strong> Developing engaging text, images, videos, and stories.
                            </li>
                            <li className="mb-3 fs-5">
                                <strong>Community Management:</strong> Interacting with your audience, responding to comments and messages, and building relationships.                                            </li>
                            <li className="mb-3 fs-5">
                                <strong>Advertising:</strong> Running paid campaigns to reach specific demographics and achieve direct goals.
                            </li>
                            <li className="mb-3 fs-5">

                                <strong>Analytics:</strong> Tracking performance, understanding audience behavior, and optimizing strategies.
                            </li>
                            <li className="mb-3 fs-5">

                                <strong>Listening:</strong> Monitoring conversations about your brand, industry, and competitors.
                            </li>
                        </ul>
                        <p className="lead fw-semibold fs-5 mb-3">
                            The goal of SMM is to increase brand awareness, drive website traffic, generate leads, boost sales, improve customer service, and build a strong online community around your brand.
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
                {/* what si facebook */}


                {/* Advertising With Google Ad Manager: Clarifying the Terms */}

                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Why Your Business Needs Social Media Marketing
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            In today's digital landscape, social media is where your customers spend their time. Ignoring it means missing out on immense opportunities for growth. Here's why social media marketing is crucial for your business:
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

                <section className="health-section bg-light py-5">
                    <div className="container">
                        <h2 className="text-center health-h2-custom px-5">Organic vs. Paid Social: What's the Difference?</h2>
                        <p className="health-lead-text text-center px-5">
                            Social media marketing encompasses two primary approaches: organic and paid. Understanding their differences is key to a balanced strategy:

                        </p>

                        <div className="d-flex flex-wrap gap-4 justify-content-center py-5">
                            {categories.map((cat, idx) => (
                                <div key={idx} style={{ background: cat.color }} className="p-4 rounded-3 shadow mb-4">
                                    <h5 className="fw-bold">{cat.name}</h5>
                                    <div>{cat.description}</div>
                                </div>
                            ))}

                        </div>
                        <p className="health-lead-text text-center px-5">
                            The most effective social media strategies combine both organic and paid efforts. Organic builds the foundation of trust and community, while paid amplifies your message, targets new audiences, and accelerates results for specific campaigns.                        </p>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Types of Social Media Marketing for Business Owners
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            Social media marketing can be categorized by the platforms used, objectives, or tactics. For business owners, here are key types:
                        </p>
                        <div className="row g-4 mt-4 px-5">
                            {wordpressServices.map((service, index) => (
                                <div className="col-md-6 col-lg-4" key={index}>
                                    <div
                                        className="p-4 rounded-4 shadow-sm h-100"
                                        style={{ backgroundColor: service.color }}
                                    >
                                        <h5 className={`fw-bold ${service.textColor} mb-2`}>
                                            <i className={`bi ${service.icon} me-2 ${service.textColor}`}></i>
                                            {service.title}
                                        </h5>
                                        <p className="text-muted mb-0">{service.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success">
                            Social Media Platforms orazweb Helps Manage
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            At orazweb solutions, we have expertise across all major social media platforms, tailoring our strategies to best suit your business goals and target audience:
                        </p>
                        <div className="row g-4 mt-4">
                            {[
                                {
                                    title: "Facebook",
                                    icon: "bi-facebook",
                                    bodyClass: "box-1",
                                    description:
                                        "Ideal for broad audience reach, community building, local targeting, and diverse ad formats. Great for both B2C and B2B engagement."
                                },
                                {
                                    title: "Instagram",
                                    icon: "bi-instagram",
                                    bodyClass: "box-2",
                                    description:
                                        "Visually driven platform perfect for showcasing products, lifestyle branding, and engaging younger demographics through photos, Reels, and Stories."
                                },
                                {
                                    title: "LinkedIn",
                                    icon: "bi-linkedin",
                                    bodyClass: "box-3",
                                    description:
                                        "The premier professional network, essential for B2B lead generation, thought leadership, recruitment, and connecting with industry decision-makers."
                                },
                                {
                                    title: "YouTube",
                                    icon: "bi-youtube",
                                    bodyClass: "box-4",
                                    description:
                                        "The dominant video platform, critical for video marketing, brand storytelling, tutorials, and highly targeted video advertising."
                                },
                                {
                                    title: "X (formerly Twitter)",
                                    icon: "bi-twitter-x", // use custom icon if "bi-twitter-x" not available; fallback: "bi-twitter"
                                    bodyClass: "box-5",
                                    description:
                                        "Excellent for real-time news, trending topics, public relations, quick customer service, and direct communication."
                                },
                                {
                                    title: "Pinterest",
                                    icon: "bi-pinterest",
                                    bodyClass: "box-6",
                                    description:
                                        "A visual discovery engine perfect for e-commerce, home décor, fashion, food, and lifestyle brands, driving high-intent traffic for inspiration and purchase."
                                },
                                {
                                    title: "Snapchat",
                                    icon: "bi-snapchat", // Not available in Bootstrap Icons; use a custom SVG or image if needed
                                    bodyClass: "box-1",
                                    description:
                                        "Great for reaching younger, highly engaged audiences with short-form, playful, and often ephemeral video content. Strong for brand awareness and engagement."
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
                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5 fw-bold text-success mb-4">
                            Why Choose <span className="text-dark">orazweb</span> for Your Social Media Marketing Management?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
Choosing the right social media partner can be the difference between stagnant engagement and explosive growth. At orazweb solutions, we combine strategic insight with hands-on execution to deliver exceptional results for your business.                  
</p>
      <div className="row g-4 text-start">
                            {[
  {
    icon: "bi-gear-wide-connected",
    title: "Tailored, Results-Driven Strategies",
    description:
      "We don't believe in one-size-fits-all. We develop customized social media strategies specifically designed to meet your unique business goals, audience, and industry, focusing on measurable ROI."
  },
  {
    icon: "bi-globe",
    title: "Comprehensive Platform Expertise",
    description:
      "Our team is well-versed across all major social media platforms, understanding their unique algorithms, audience behaviors, and ad capabilities to maximize your presence wherever your customers are."
  },
  {
    icon: "bi-sliders2-vertical",
    title: "Balanced Organic & Paid Approach",
    description:
      "We master the art of combining powerful organic content with precisely targeted paid campaigns. This synergistic approach ensures sustainable brand building alongside accelerated growth and conversions."
  },
  {
    icon: "bi-chat-left-dots-fill",
    title: "Engaging Content & Community Management",
    description:
      "We excel at creating compelling content that resonates with your audience and manage your social communities proactively, fostering genuine connections and building loyal brand advocates."
  },
  {
    icon: "bi-bar-chart-line-fill",
    title: "Transparent Analytics & Reporting",
    description:
      "You'll always know how your investment is performing. We provide clear, comprehensive, and easy-to-understand reports on key metrics, giving you actionable insights and full transparency into your ROI."
  },
  {
    icon: "bi-lightning-fill",
    title: "Proactive & Adaptive Management",
    description:
      "The social media landscape is constantly evolving. We stay ahead of trends, algorithm changes, and new features, proactively adapting your strategy to maintain your competitive edge and optimize performance."
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

export default EnterprisePage;