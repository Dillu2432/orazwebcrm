import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/franchise.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const EnterprisePage = () => {
    const localSeoFactors = [
        {
            title: "Unified Brand Voice & Consistency",
            icon: "bi-megaphone",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Ensures that despite numerous teams, regions, or product lines, your brand's core message, visual identity, and values are consistently communicated across all social platforms, preventing fragmentation and strengthening brand recognition."
        },
        {
            title: "Centralized Control & Governance",
            icon: "bi-shield-lock-fill",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Establishes clear guidelines, approval workflows, and compliance measures to mitigate risks, protect brand reputation, and ensure all social activities adhere to corporate standards and industry regulations."
        },
        {
            title: "Scalable Audience Engagement",
            icon: "bi-people-fill",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Facilitates meaningful engagement with vast and diverse audiences across multiple platforms and regions, fostering community, managing customer inquiries, and building relationships at scale."
        },
        {
            title: "Efficient Resource Allocation",
            icon: "bi-currency-dollar",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Optimizes the use of internal teams, external agencies, and social media tools, preventing redundant efforts and ensuring resources are directed towards the most impactful strategies."
        },
        {
            title: "Data-Driven Insights & Reporting",
            icon: "bi-bar-chart-line-fill",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "Provides a consolidated view of social media performance across the entire organization, enabling data-driven decision-making, identifying successful strategies, and demonstrating clear ROI to stakeholders."
        },
        {
            title: "Enhanced Employee Advocacy",
            icon: "bi-person-check-fill",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Empowers employees to become brand ambassadors, sharing approved content and insights, which significantly amplifies reach and builds trust more authentically than corporate messaging alone."
        },
        {
            title: "Proactive Reputation & Crisis Management",
            icon: "bi-exclamation-triangle-fill",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Establishes robust monitoring systems and rapid response protocols to identify and address brand mentions, sentiment shifts, and potential crises across all social channels, protecting the enterprise's image."
        },
        {
            title: "Competitive Intelligence",
            icon: "bi-binoculars-fill",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Allows for comprehensive monitoring of competitor social strategies, industry trends, and audience conversations, providing valuable insights for strategic adjustments and innovation."
        }
    ];


    const data = [
        {
            feature: "Scope",
            standard: "Broad: Encompasses all organic and paid social activities, content strategy, community management, reputation, governance, and analytics across an entire large organization.",
            franchise: "Specific: Focuses solely on paid campaigns (ads) run on social media platforms to reach specific audiences and achieve direct goals (e.g., leads, sales, brand awareness)."
        },
        {
            feature: "Objective",
            standard: "Build brand reputation, foster community, manage customer service, drive organic engagement, thought leadership, and support overall business goals.",
            franchise: "Drive immediate visibility, targeted traffic, leads, conversions, or rapid brand awareness through paid promotions."
        },
        {
            feature: "Methodology",
            standard: "Organic content creation, community engagement, listening, publishing schedules, brand guidelines, employee advocacy programs, cross-departmental collaboration.",
            franchise: "Ad campaign creation, audience targeting, bidding strategies, ad budget management, A/B testing of ad creatives, performance analytics for paid spend."
        },
        {
            feature: "Time Horizon",
            standard: "Long-term brand building, relationship nurturing, and sustained organic growth.",
            franchise: "Short-to-medium term campaigns designed for quick impact and measurable ROI on ad spend."
        },
        {
            feature: "Cost Structure",
            standard: "Primarily internal team costs, content creation, tools, and potentially agency fees.",
            franchise: "Direct ad spend (budget paid to social platforms) plus management fees (internal or agency)."
        },
        {
            feature: "Key Metrics",
            standard: "Engagement rate, follower growth, sentiment, brand mentions, organic reach, website traffic (organic social), customer service resolution.",
            franchise: "Impressions, reach, clicks, conversions, Cost Per Click (CPC), Cost Per Acquisition (CPA), Return on Ad Spend (ROAS)."
        },
        {
            feature: "Relationship",
            standard: "Advertising is a component or tactic within the broader marketing strategy.",
            franchise: "Marketing is the overarching strategy that advertising supports."
        }
    ];


    const wordpressServices = [
        {
            title: "Social Media Strategy & Governance Development",
            icon: "bi-diagram-3-fill",
            color: "#f0f9ff",
            textColor: "text-primary",
            description:
                "We work with your leadership to define overarching social media goals, develop a unified brand voice, establish comprehensive content guidelines, approval workflows, and compliance protocols for all departments and regions."
        },
        {
            title: "Platform Audit & Optimization",
            icon: "bi-search",
            color: "#fff8e1",
            textColor: "text-warning",
            description:
                "A thorough audit of your existing social media presence across all relevant platforms (Facebook, LinkedIn, Instagram, X, YouTube, etc.), identifying inconsistencies, optimization opportunities, and areas for improvement."
        },
        {
            title: "Content Strategy & Production at Scale",
            icon: "bi-easel-fill",
            color: "#e6f5ea",
            textColor: "text-success",
            description:
                "Development of a robust content calendar and strategy that aligns with corporate messaging while allowing for regional/departmental adaptation. We assist with high-volume content creation, ensuring quality and consistency."
        },
        {
            title: "Advanced Social Listening & Reputation Management",
            icon: "bi-ear-fill",
            color: "#fceef5",
            textColor: "text-danger",
            description:
                "Implementation of sophisticated social listening tools to monitor brand mentions, industry trends, competitor activities, and sentiment across the entire social landscape, enabling proactive reputation management and crisis response."
        },
        {
            title: "Enterprise Social Media Advertising Management",
            icon: "bi-bullseye",
            color: "#e0f7fa",
            textColor: "text-info",
            description:
                "Strategic planning, execution, and optimization of large-scale paid social campaigns across multiple platforms, ensuring precise targeting, efficient budget allocation, and maximum ROI for diverse marketing objectives."
        },
        {
            title: "Employee Advocacy Program Development",
            icon: "bi-person-heart",
            color: "#f9fbe7",
            textColor: "text-secondary",
            description:
                "Designing and implementing programs that empower your employees to become authentic brand advocates on social media, amplifying your reach and building trust through their personal networks."
        },
        {
            title: "Cross-Departmental Integration & Training",
            icon: "bi-people-fill",
            color: "#f3e5f5",
            textColor: "text-dark",
            description:
                "Facilitating collaboration between marketing, sales, HR, and customer service teams to ensure a unified social strategy. We provide training and best practices to internal teams."
        },
        {
            title: "Consolidated Analytics & Performance Reporting",
            icon: "bi-bar-chart-line-fill",
            color: "#ede7f6",
            textColor: "text-primary",
            description:
                "Implementation of advanced analytics dashboards that provide a holistic view of your social media performance across all channels and departments, delivering actionable insights and clear ROI metrics to leadership."
        },
        {
            title: "Social CRM Integration",
            icon: "bi-plug-fill",
            color: "#f0f4f7",
            textColor: "text-dark",
            description:
                "Assisting with the integration of social media data into your existing CRM systems to enrich customer profiles, improve lead nurturing, and enhance customer service capabilities."
        }
    ];

    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">Enterprise Social Media Marketing</h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-11 text-center">
                        <h1 className="display-5 fw-bold ">
                            Orchestrate Your Brand's Digital Presence at Scale
                        </h1>
                        <p className="lead text-muted fw-semibold fs-5 mb-2">
                            For large organizations, managing social media isn't just about posting; it's about orchestrating a complex digital ecosystem that aligns with overarching business objectives, maintains brand consistency across diverse departments, and engages a vast, global audience. Enterprise Social Media Marketing is the strategic discipline that makes this possible. At orazweb solutions, we specialize in empowering large enterprises to master their social media presence, ensuring brand cohesion, driving impactful campaigns, and delivering measurable results across all touchpoints.                        </p>
                    </div>
                </div>
                {/* what si facebook */}


                {/* Advertising With Google Ad Manager: Clarifying the Terms */}

                {/* <section className="health-section bg-light py-5">
                    <div className="container">
                        <h2 className="display-5 text-center fw-bold text-success">Enterprise Social Media Advertising vs. Social Media Marketing: What’s the Difference?</h2>
                        <p className="lead text-center fs-5 text-muted fw-semibold mt-4">
                            While closely related and often integrated, it's important to differentiate between the broader concept of Enterprise Social Media Marketing and the specific component of Enterprise Social Media Advertising:                        </p>
                        <div className="table-responsive px-3 px-md-5">
                            <table className="table table-bordered comparison-table text-center align-middle responsive-table">
                                <thead className="table-dark">
                                    <tr className="primary-bg">
                                        <th className="fs-5 fs-md-4">Feature</th>
                                        <th className="fs-5 fs-md-4">Enterprise Social Media Marketing</th>
                                        <th className="fs-5 fs-md-4">Enterprise Social Media Advertising</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, i) => (
                                        <tr key={i}>
                                            <td className="fs-6 fs-md-5 fw-semibold">{row.feature}</td>
                                            <td className="fs-6 fs-md-5">{row.standard}</td>
                                            <td className="fs-6 fs-md-5">{row.franchise}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="lead text-center fs-5 text-muted fw-semibold mt-4">
                            For enterprises, both are crucial. Marketing builds the foundation and long-term relationships, while advertising provides the targeted boost needed for specific campaigns and rapid results.
                        </p>
                    </div>
                </section> */}



                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Why Your Business Needs Enterprise Social Media Management
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            For large organizations with multiple departments, diverse product lines, and a global footprint, managing social media effectively is a monumental task. Robust Enterprise Social Media Management is no longer a luxury; it's a strategic imperative for:
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
                        <h2 className="display-5  fw-bold text-success">
                            Orazweb’s Enterprise Social Media Services: Orchestrating Your Digital Success
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            At orazweb solutions, we understand the intricate demands of enterprise-level social media. We provide comprehensive, scalable, and integrated solutions designed to unify your brand's voice, optimize performance across all social channels, and drive measurable business outcomes for large organizations.
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
                        <h2 className="display-5 fw-bold text-success mb-4">
                            Why Choose <span className="text-dark">orazweb</span> for Your Enterprise Social Media Management?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
                            Partnering with orazweb solutions for your Enterprise Social Media Management means choosing a strategic ally with the expertise and infrastructure to handle the complexities of large-scale digital presence. We are committed to unifying your brand, maximizing your impact, and delivering measurable results.                        </p>
                        <div className="row g-4 text-start">
                            {[
                                {
                                    icon: "bi-people-fill",
                                    title: "Specialized Enterprise Expertise",
                                    description:
                                        "We possess a deep understanding of the unique challenges and opportunities faced by large organizations in social media, from brand governance and compliance to multi-departmental coordination and global reach."
                                },
                                {
                                    icon: "bi-collection-play-fill",
                                    title: "Strategic Orchestration & Unification",
                                    description:
                                        "Our core strength lies in our ability to orchestrate a cohesive social media strategy across your entire enterprise. We unify diverse voices into a single, powerful brand narrative while allowing for necessary regional and departmental nuances."
                                },
                                {
                                    icon: "bi-arrows-expand",
                                    title: "Advanced Technology & Scalable Solutions",
                                    description:
                                        "We leverage cutting-edge social media management platforms and analytics tools to handle the volume and complexity of enterprise-level operations. Our solutions are built to scale seamlessly with your organization's growth."
                                },
                                {
                                    icon: "bi-graph-up-arrow",
                                    title: "Data-Driven Insights for Leadership",
                                    description:
                                        "We provide actionable, consolidated analytics and transparent reporting that speak directly to your business objectives. Our insights empower leadership to make informed decisions and clearly see the ROI of their social media investments."
                                },
                                {
                                    icon: "bi-shield-check",
                                    title: "Proactive Risk Mitigation & Reputation Management",
                                    description:
                                        "We act as vigilant guardians of your brand's reputation, implementing robust monitoring and rapid response protocols to identify and mitigate potential crises across all social channels, protecting your enterprise's image."
                                },
                                {
                                    icon: "bi-hand-thumbs-up-fill",
                                    title: "Partnership for Long-Term Growth",
                                    description:
                                        "Choosing orazweb means gaining a dedicated, long-term partner invested in your sustained digital success. We work collaboratively, adapt to your evolving needs, and continuously optimize your social media presence to ensure it drives meaningful business outcomes."
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