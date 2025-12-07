import React from 'react';
import "../../assets/css/global.css";
import 'bootstrap/dist/css/bootstrap.min.css'; // Usually imported in index.js or App.js
import "../../assets/css/customwebsite.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

import image1 from "../../assets/image/franchise.jpeg";
import image2 from "../../assets/image/laptop-coworking-space.jpg";

const GamPage = () => {
    const localSeoFactors = [
        {
            title: "Unified Brand Voice & Consistency",
            icon: "bi-megaphone",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Ensures that despite multiple locations, your core brand message, visual identity, and values are consistently communicated across all social platforms, strengthening brand recognition and trust."
        },
        {
            title: "Hyper-Local Engagement",
            icon: "bi-geo-alt-fill",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Empowers individual franchisees to connect directly with their local communities, run location-specific promotions, respond to local reviews, and build authentic relationships that drive foot traffic and local sales."
        },
        {
            title: "Increased Brand Visibility & Reach",
            icon: "bi-bar-chart-line-fill",
            headClass: "box-head-3",
            bodyClass: "box-body-3",
            description:
                "Leverages the collective power of all franchise locations' social presences to amplify overall brand visibility, reaching a broader audience than any single location could achieve alone."
        },
        {
            title: "Cost-Effective Local Advertising",
            icon: "bi-currency-dollar",
            headClass: "box-head-4",
            bodyClass: "box-body-4",
            description:
                "Social media offers highly targeted advertising options that can be localized, allowing franchisees to reach potential customers in their specific service areas more efficiently than traditional local advertising."
        },
        {
            title: "Reputation Management at Scale",
            icon: "bi-shield-check",
            headClass: "box-head-5",
            bodyClass: "box-body-5",
            description:
                "Provides a structured way to monitor and respond to customer feedback and reviews across all locations, protecting the brand's reputation and building trust."
        },
        {
            title: "Data-Driven Insights Across the Network",
            icon: "bi-graph-up",
            headClass: "box-head-6",
            bodyClass: "box-body-6",
            description:
                "Allows for the collection and analysis of performance data from all locations, providing corporate with valuable insights into what strategies work best, enabling continuous optimization and sharing of best practices."
        },
        {
            title: "Improved Franchisee Support & Morale",
            icon: "bi-people-fill",
            headClass: "box-head-1",
            bodyClass: "box-body-1",
            description:
                "Offering a comprehensive social media marketing program and support reduces the burden on individual franchisees, enabling them to focus on operations while still benefiting from a strong local digital presence."
        },
        {
            title: "Competitive Advantage",
            icon: "bi-trophy-fill",
            headClass: "box-head-2",
            bodyClass: "box-body-2",
            description:
                "Many franchise systems struggle with social media consistency. A well-executed, unified strategy provides a significant competitive edge, positioning your franchise as modern, engaged, and customer-focused."
        }
    ];


    const data = [
        {
            feature: "Scale",
            standard: "Focuses on a single brand/business.",
            franchise: "Manages multiple, interconnected locations/entities under one brand."
        },
        {
            feature: "Strategy",
            standard: "Primarily centralized.",
            franchise: "Requires a blend of centralized strategy and decentralized execution."
        },
        {
            feature: "Brand Control",
            standard: "Single entity controls all messaging.",
            franchise:
                "Corporate sets guidelines; local entities adapt and execute. Risk of inconsistent messaging if not managed well."
        },
        {
            feature: "Audience Focus",
            standard: "Broad or specific, but usually singular.",
            franchise:
                "National/global brand awareness AND hyper-local community engagement."
        },
        {
            feature: "Content",
            standard: "Created by one team for one audience.",
            franchise:
                "Corporate creates core content; local teams adapt/create local content."
        },
        {
            feature: "Reporting",
            standard: "Consolidated for one entity.",
            franchise: "Consolidated for corporate, but also granular for each local unit."
        },
        {
            feature: "Challenges",
            standard: "Maintaining engagement, ROI.",
            franchise:
                "Brand consistency, local relevance, compliance, scaling efforts across many locations."
        },
        {
            feature: "Key Objective",
            standard: "Drive awareness, leads, sales for one business.",
            franchise:
                "Drive national brand equity AND local foot traffic/sales for all units."
        }
    ];

    const wordpressServices = [
    {
        title: "Centralized Strategy Development",
        icon: "bi-diagram-3-fill",
        color: "#f0f9ff",
        textColor: "text-primary",
        description:
            "We work with your corporate team to define overarching social media goals, target audiences, brand voice guidelines, and content pillars that resonate across all locations."
    },
    {
        title: "Local Social Media Playbook Creation",
        icon: "bi-journal-bookmark-fill",
        color: "#fff8e1",
        textColor: "text-warning",
        description:
            "Development of a comprehensive, easy-to-follow playbook for franchisees, outlining best practices, approved content, local adaptation strategies, and compliance guidelines."
    },
    {
        title: "Content Creation & Distribution (Corporate & Local)",
        icon: "bi-easel-fill",
        color: "#e6f5ea",
        textColor: "text-success",
        description:
            "We develop core brand content for corporate use and provide templates for franchisees to create engaging local content. We can also manage distribution across the entire network."
    },
    {
        title: "Social Media Account Setup & Optimization",
        icon: "bi-person-lines-fill",
        color: "#fceef5",
        textColor: "text-danger",
        description:
            "Assistance with setting up and optimizing social profiles for franchise locations, ensuring consistent branding and accurate local information."
    },
    {
        title: "Localized Social Media Advertising",
        icon: "bi-geo-alt-fill",
        color: "#e0f7fa",
        textColor: "text-info",
        description:
            "Planning, execution, and management of highly targeted social ad campaigns that are customizable per franchise to drive local leads and sales."
    },
    {
        title: "Reputation Management & Monitoring",
        icon: "bi-eye-fill",
        color: "#f9fbe7",
        textColor: "text-secondary",
        description:
            "Tools and processes to monitor brand mentions, reviews, and customer feedback across all social platforms with timely response protocols."
    },
    {
        title: "Franchisee Training & Support",
        icon: "bi-people-fill",
        color: "#f3e5f5",
        textColor: "text-dark",
        description:
            "Training sessions and ongoing support to equip franchisees with the skills and knowledge to manage their local social presence effectively."
    },
    {
        title: "Performance Tracking & Consolidated Reporting",
        icon: "bi-bar-chart-line-fill",
        color: "#ede7f6",
        textColor: "text-primary",
        description:
            "Advanced analytics tracking across all franchise locations, delivering both corporate-level overviews and local-specific insights for optimization."
    },
    {
        title: "Crisis Management & Compliance",
        icon: "bi-shield-lock-fill",
        color: "#f0f4f7",
        textColor: "text-dark",
        description:
            "Established protocols to manage social media crises and ensure compliance with brand standards and industry regulations across all locations."
    }
];

    return (
        <div className="container"> {/* Using container-fluid for full width sections */}
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">Franchise Social Media Marketing</h1>
                </div>
            </div>
            <div className="container bg-white my-5 p-5">
                {/* introducation */}
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-11 text-center">
                        <h1 className="display-5 fw-bold ">
                            Unify Your Brand, Amplify Your Local Reach
                        </h1>
                        <p className="lead text-muted fw-semibold fs-5 mb-2">
                            In the dynamic world of franchising, maintaining brand consistency while empowering local growth is a unique challenge. Franchise Social Media Marketing is the strategic solution, enabling your entire network to leverage the power of social platforms effectively. At orazweb solutions, we specialize in developing and executing comprehensive social media strategies that unify your brand message, amplify local engagement, and drive measurable results across all your franchise locations.                        </p>
                    </div>
                </div>
                {/* what si facebook */}

                <div className="row my-5 justify-content-center align-items-center">
                    <div className="row my-5 justify-content-center align-items-center">

                        <div className="col-lg-6 mb-4">
                            <h2 className="fw-bold text-success">What is Franchise Social Media Marketing?</h2>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                Franchise Social Media Marketing is a specialized approach to digital marketing that focuses on managing and optimizing the social media presence for an entire franchise system. It involves creating a cohesive brand voice and strategy at the corporate level, while also providing tools, guidelines, and support for individual franchisees to execute localized social media efforts.
                            </p>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                Essentially, it's about striking the perfect balance:
                            </p>
                            <ul className="list-unstyled text-muted fs-5">
                                <li className="mb-3">
                                    <strong> Centralized Strategy:</strong> Ensuring the core brand message, visual identity, and key campaigns are consistent across all locations.
                                </li>
                                <li className="mb-3">
                                    <strong>Decentralized Execution:</strong> Empowering individual franchisees to engage with their local communities, run location-specific promotions, and build local relationships on social media platforms.
                                </li>
                            </ul>
                            <p className="lead fs-5 text-muted fw-semibold mt-4">
                                This dual approach allows a franchise to benefit from strong brand recognition nationwide (or globally) while simultaneously fostering deep, authentic connections at the local level, driving foot traffic and local sales.
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

                </div>

                {/* Advertising With Google Ad Manager: Clarifying the Terms */}

                <section className="health-section bg-light py-5">
                    <div className="container">
                        <h2 className="display-5 text-center fw-bold text-success">Difference Between Franchise Social Media Marketing and Social Media Marketing</h2>
                        <p className="lead text-center fs-5 text-muted fw-semibold mt-4">
                            While both aim to leverage social platforms, the key distinctions lie in scale, control, and strategy:
                        </p>
                        <div className="table-responsive px-5">
                            <table className="table table-bordered comparison-table text-center align-middle">
                                <thead className="table-dark">
                                    <tr className='primary-bg'>
                                        <th className="w-33 fs-4">Feature</th>
                                        <th className="w-33 fs-4">Standard Social Media Marketing</th>
                                        <th className="w-33 fs-4">Franchise Social Media Marketing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((row, i) => (
                                        <tr key={i}>
                                            <td className="w-33 fs-5 fw-semibold">{row.feature}</td>
                                            <td className="w-33 fs-5">{row.standard}</td>
                                            <td className="w-33 fs-5">{row.franchise}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="lead text-center fs-5 text-muted fw-semibold mt-4">
                            Franchise social media marketing is inherently more complex due to the need for coordination, governance, and localized adaptation across multiple independent (yet connected) entities.
                        </p>
                    </div>
                </section>



                <section className="py-5">
                    <div className="container text-center">
                        <h2 className="display-5  fw-bold text-success">
                            Why Your Business Needs Social Media Marketing for Franchises
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            For a franchise system, a robust social media marketing strategy is not just beneficial – it's absolutely critical for sustained growth, brand cohesion, and local market penetration.
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
                            orazweb Franchise Social Media Services: Unifying Your Digital Presence
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mt-4">
                            At orazweb solutions, we understand the unique complexities of franchise social media marketing. We provide comprehensive, scalable solutions that empower your corporate brand while driving local success for every franchisee. Our services are designed to ensure brand consistency, maximize local engagement, and deliver measurable results across your entire network.
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
                            Why Choose <span className="text-dark">orazweb</span> for Your Franchise Social Marketing Management?
                        </h2>
                        <p className="lead fs-5 text-muted fw-semibold mb-5">
Choosing the right partner for your Franchise Social Media Marketing is paramount to maintaining brand integrity and driving local success. At orazweb solutions, we offer a unique blend of expertise, technology, and dedication to ensure your entire franchise network thrives on social media.
</p>                        <div className="row g-4 text-start">
                            {[
    {
        icon: "bi-people-fill",
        title: "Deep Franchise Expertise",
        description:
            "We possess a specialized understanding of the franchise model, recognizing the delicate balance between corporate brand consistency and local franchisee autonomy. Our strategies are built to empower both."
    },
    {
        icon: "bi-collection-play-fill",
        title: "Unified Strategy, Localized Impact",
        description:
            "We excel at creating a cohesive brand narrative that resonates nationally while providing the flexibility and tools for individual franchisees to achieve hyper-local engagement and drive direct sales in their specific markets."
    },
    {
        icon: "bi-arrows-expand",
        title: "Scalable Solutions for Any Network Size",
        description:
            "Whether you have a handful of locations or hundreds, our services are designed to scale seamlessly. We implement efficient processes and technologies to manage, monitor, and optimize social media efforts across your entire franchise system."
    },
    {
        icon: "bi-shield-check",
        title: "Proactive Brand Guardianship",
        description:
            "We act as vigilant guardians of your brand's reputation across all social channels. Our monitoring and management protocols ensure consistent messaging, timely responses, and effective crisis mitigation."
    },
    {
        icon: "bi-graph-up-arrow",
        title: "Data-Driven Insights & Transparent Reporting",
        description:
            "Our approach is rooted in data. We provide clear, consolidated reports that offer insights into overall network performance, while also giving individual franchisees the granular data they need to understand their local impact and ROI."
    },
    {
        icon: "bi-hand-thumbs-up-fill",
        title: "Empowering Franchisees with Support",
        description:
            "We believe in empowering your franchisees. Beyond strategy, we provide ongoing training, resources, and dedicated support, ensuring they feel confident and equipped to leverage social media effectively for their local success."
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