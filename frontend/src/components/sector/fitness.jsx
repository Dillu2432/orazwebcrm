import React from 'react';

import '../../assets/css/sector.css';
import health1 from '../../assets/image/fitness1.jpeg'
import fitnessToolkitImg from '../../assets/image/fitness4.jpg'
const FitnessPage = () => {
    const categories = [
        {
            name: "Fitness Trainers",
            color: "linear-gradient(135deg, #fceabb, #f8b500)",
        },
        {
            name: "Local Gyms & Studios",
            color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
        },
        {
            name: "Fitness Influencers",
            color: "linear-gradient(135deg, #f6d365, #fda085)",
        },
        {
            name: "Fitness Product Brands",
            color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        },

    ];
    return (
        <div className='container'>
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">FITNESS DIGITAL SOLUTIONS</h1>

                </div>
            </div>

            <div className="health-page-container container-fluid">

                {/* Hero Section */}
                <section className="health-section health-bg-white">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-11 text-center text-lg-start">
                            <h1 className="health-h1-custom">
                                Powering Your Fitness Brand in the Digital Arena
                            </h1>
                            <p className="health-lead-text">
                                In the vibrant world of health and wellness, staying ahead means more than just reps and sets; it means dominating the digital space. At Orazweb Solutions, we understand the drive, passion, and unique challenges that come with building a fitness brand. We're here to provide <strong>dynamic digital solutions</strong> that attract your ideal clients, amplify your message, and turn passion into profit.
                            </p>
                            <p className="health-lead-text">
                                Whether you're shaping bodies in the gym or inspiring millions online, we speak the language of fitness and craft digital strategies that get results.
                            </p>
                            <a href="/contact" className="health-btn-primary-custom">
                                Build Your Digital Muscle
                            </a>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            <img
                                src={health1} // Replace with actual image
                                alt="Digital Solutions for Fitness"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </section>

                <hr></hr>

                {/* Your Specialty, Our Digital Expertise Section */}
                <section className="health-section bg-light py-5">
                    <div className="container">
                        <h2 className="text-center health-h2-custom px-5"> Who We Serve in the Fitness Sector
                        </h2>
                        <p className="health-lead-text text-center mb-5 px-5">
                            At Orazweb Solutions, we specialize in crafting powerful digital experiences tailored to the dynamic world of fitness. Whether you run a gym, fitness studio, personal training program, or offer virtual coaching — we support your growth with sleek design, intelligent technology, and performance-focused digital strategies that help you attract, engage, and retain your fitness community.
                        </p>


                        <div className="d-flex flex-wrap gap-4 justify-content-center py-5">
                            {categories.map((item, index) => (
                                <div
                                    key={index}
                                    className="category-circle"
                                    style={{ background: item.color }}
                                >
                                    <span className="circle-text">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <hr></hr>
                {/* book consulation */}
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

                <hr></hr>
                {/* Your Specialty, Our Digital Expertise Section */}
                <section className="health-section bg-light py-5">
                    <div className="container">
                        <h2 className="text-center health-h2-custom px-5">
                            Your Specialty, Our Digital Expertise: How Orazweb Elevates Your Practice
                        </h2>
                        <p className="health-lead-text text-center mb-5 px-5">
                            We proudly partner with a diverse range of <strong>health and wellness professionals</strong>, offering specialized digital strategies designed specifically to meet your unique challenges and growth opportunities in the online world.
                        </p>

                        {/* Content Wrapper */}
                        <div className=" gap-4 px-4 align-items-start justify-content-center">

                            {/* Image Section */}
                            <div className="text-center">
                                <img
                                    src={fitnessToolkitImg}
                                    alt="Healthcare digital solution"
                                    className="img-fluid rounded-4 shadow-sm mb-4"
                                    style={{ maxHeight: '400px', objectFit: 'cover' }}
                                />
                            </div>

                            {/* Text Section */}
                            <div className="px-3 px-md-5">
                                {[
                                    {
                                        icon: "bi-eye-fill",
                                        text: `At <strong>Orazweb</strong>, we believe your passion for fitness deserves to be seen, felt, and easily found — especially in a world where people turn to the internet first for workouts, classes, and product solutions.`,
                                    },
                                    {
                                        icon: "bi-laptop",
                                        text: `We help fitness professionals and businesses across Jammu build <strong>digital spaces that reflect their real-world energy and expertise</strong> — not just with stunning websites, but with full-featured digital ecosystems tailored for growth and impact.`,
                                    },
                                    {
                                        icon: "bi-person-check-fill",
                                        text: `Whether you're a <strong>Fitness Trainer</strong> struggling to fill your client roster or manage bookings, we build <strong>engaging, results-driven websites</strong> that highlight your unique coaching style and showcase client transformations. We implement <strong>local SEO</strong>, integrate <strong>online booking and payment systems</strong>, and create <strong>personalized client portals</strong> for program delivery and progress tracking — along with compelling content strategies to position you as the go-to expert.`,
                                    },
                                    {
                                        icon: "bi-building",
                                        text: `For <strong>Local Gyms & Studios</strong> looking to streamline member acquisition and retention, your community hub deserves a digital presence that buzzes with energy. We design <strong>vibrant, user-friendly gym websites</strong> that include <strong>online membership sign-ups</strong>, <strong>class scheduling</strong>, <strong>virtual tours</strong>, and <strong>member portals</strong>. We also deploy <strong>targeted local SEO</strong> and advertising campaigns to attract and retain your ideal members.`,
                                    },
                                    {
                                        icon: "bi-star-fill",
                                        text: `For <strong>Fitness Influencers</strong> aiming to grow their audience, monetize their brand, or launch digital products, we craft <strong>highly optimized personal brand websites</strong> that act as your content and product hub. We integrate <strong>eCommerce</strong> features for selling merchandise and programs, <strong>SEO strategies</strong> for visibility, and <strong>audience engagement tools</strong> to deepen reach and impact across platforms.`,
                                    },
                                    {
                                        icon: "bi-box-seam",
                                        text: `For <strong>Fitness Product Brands</strong>, we design <strong>high-converting eCommerce websites</strong> tailored to your innovative offerings — from apparel and supplements to equipment. We deploy <strong>advanced SEO</strong>, <strong>digital ad campaigns</strong>, and <strong>conversion rate optimization</strong> to drive product visibility, sales, and brand loyalty.`,
                                    },
                                    {
                                        icon: "bi-stars",
                                        text: `At Orazweb, we don't just build websites — <strong>we build your digital foundation for trust, growth, and impact</strong> in the dynamic fitness industry. Together, we'll help more people find the fit and healthy lifestyle they’re looking for — through you.`,
                                    },
                                ].map((item, index) => (
                                    <div
                                        className="p-4 mb-4 rounded-4 shadow-sm bg-white border-start border-end border-4 border-secondary d-flex"
                                        key={index}
                                    >
                                        <i className={`bi ${item.icon} primary-text-cl me-3 fs-3`}></i>
                                        <p
                                            className="health-lead-text mb-0"
                                            dangerouslySetInnerHTML={{ __html: item.text }}
                                        ></p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

                <section className="health-section health-bg-mint py-5">
                    <div className="container">
                        <h2 className="text-center health-h2-custom px-5">
                            Orazweb's Digital Health Toolkit: What We Can Do For You
                        </h2>
                        <p className="health-lead-text text-center mb-5 px-5">
                            Our suite of specialized digital services is designed to address the specific needs of the health sector, ensuring your online presence is as robust as your commitment to care:
                        </p>

                        <div className="row px-4 py-3">
                            {[
                                "Custom Website Design & Development: Creating visually striking, intuitive, and high-performing websites tailored to your fitness brand's unique needs.",
                                "Search Engine Optimization (SEO): Boosting your visibility so active individuals and potential clients find you first when searching for fitness solutions.",
                                "Content Marketing for Fitness: Developing engaging blogs, workout guides, nutrition tips, and success stories that establish your authority and connect with your audience.",
                                "Social Media Strategy & Management: Crafting a dynamic presence on platforms like Instagram, TikTok, and Facebook to grow your community and drive engagement.",
                                "Digital Advertising (PPC & Social Ads): Launching targeted campaigns to reach specific demographics actively looking for trainers, gyms, or fitness products.",
                                "eCommerce Solutions: Building robust online stores to sell merchandise, digital programs, subscriptions, or supplements with ease.",
                                "Online Booking & Membership Systems: Streamlining appointments, class registrations, and membership sign-ups for seamless operations.",
                                "Brand Strategy & Messaging: Defining your unique voice, personality, and values to ensure a consistent and powerful brand presence across all digital touchpoints."
                            ].map((item, index) => (
                                <div className="col-md-6 col-lg-6 mb-4" key={index}>
                                    <div
                                        className="toolkit-box p-4 rounded-4 h-100 bg-white shadow-lg position-relative hover-up-scale" // Changed shadow to 'shadow-lg' and added 'hover-up-scale' for a more pronounced effect
                                        style={{
                                            transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)', // Smoother, slightly slower transition for a modern feel
                                            borderLeft: '5px solid', // Making the border slightly thicker
                                            borderImage: 'linear-gradient(to bottom, #198754, #20c997) 1', // Using a gradient border!
                                        }}
                                    >
                                        <div className="d-flex align-items-start">
                                            <div
                                                className="rounded-circle d-flex justify-content-center align-items-center me-3 flex-shrink-0 toolkit-icon-glow" // Added a 'toolkit-icon-glow' class for potential animation
                                                style={{
                                                    width: '55px', // Slightly larger icon circle
                                                    height: '55px',
                                                    background: 'linear-gradient(to bottom right, #198754, #28a745)', // A more vibrant green gradient for the circle
                                                    color: 'white',
                                                    fontWeight: 'bold',
                                                    fontSize: '1.25rem', // Larger numbers
                                                    boxShadow: '0 8px 20px rgba(25, 135, 84, 0.3)', // A stronger, green-tinted shadow for the icon
                                                }}
                                            >
                                                {index + 1}
                                            </div>
                                            <div>
                                                <h6 className="text-dark mb-1 d-flex align-items-center fs-5 fw-bold"> {/* Bolded the heading text */}
                                                    <i className="bi bi-star-fill text-warning me-2 fs-5 toolkit-icon-pulse"></i> {/* Changed icon to a star, with a pulse animation idea */}
                                                    {item.split(":")[0]}
                                                </h6>
                                                <p className="text-muted small mb-0 lh-base">{item.split(":").slice(1).join(":")}</p> {/* Added lh-base for better line height */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>



                    </div>
                </section>

                {/* Final CTA */}
                <section className="health-section health-bg-white text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-md-11">
                            <h2 className="health-h2-custom">Ready to Elevate Your Fitness Game Online?</h2>
                            <p className="health-lead-text">
                                The digital realm is the ultimate arena for fitness brands. Let Orazweb Solutions be your strategic partner in conquering it. We'll help you build an unstoppable online presence that attracts more clients, drives more sales, and cements your legacy in the fitness world.
                            </p>
                             <a href="/contact" className="btn btn-lg btn-primary shadow-lg rounded-pill px-5 py-3 animate-btn-pulse"> {/* Enhanced button style with pulse animation idea */}
                                    <strong>Contact us today for a complimentary digital fitness assessment!</strong>
                                </a>
                                <p className="text-muted mt-3 mb-0">Let's discuss your unique needs and goals.</p> {/* Sub-text for clarity */}
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
};

export default FitnessPage;