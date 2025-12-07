import React from 'react';
// Import the global CSS file directly
import '../../assets/css/sector.css';
import health1 from '../../assets/image/health.jpeg'
import health2 from '../../assets/image/health2.jpg'

const HealthPage = () => {
    const categories = [
        {
            name: "Clinics & Specialty Practices",
            color: "linear-gradient(135deg, #fceabb, #f8b500)",
        },
        {
            name: "Diagnostic Centers",
            color: "linear-gradient(135deg, #c2e9fb, #81a4fd)",
        },
        {
            name: "Hospitals & Healthcare Systems",
            color: "linear-gradient(135deg, #f6d365, #fda085)",
        },
        {
            name: "Mental Health Coaches & Therapists",
            color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
        },
        {
            name: "Nutritionists & Wellness Coaches",
            color: "linear-gradient(135deg, #d4fc79, #96e6a1)",
        },
    ];
    return (
        <div className='container '>
            <div className='backgroundStyle'>
                <div className='overlayStyle'>
                    <h1 className="fw-bold display-5">HEALTHCARE DIGITAL SOLUTIONS</h1>
                </div>
            </div>
            <div className="health-page-container container-fluid">
                {/* Hero Section */}
                <section className="health-section health-bg-white">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-11 text-center text-lg-start">
                            <h1 className="health-h1-custom">
                                Empowering Health: Your Digital Partner in Care
                            </h1>
                            <p className="health-lead-text">
                                In healthcare, every heartbeat, every decision, and every connection matters. At Orazweb Solutions, we understand the real-world rhythm of your work — the rush of diagnostics, the quiet reassurance of therapy, and the trust patients place in you every day.
                            </p>
                            <p className="health-lead-text">
                                That’s why we go beyond just building websites. We create thoughtful, patient-friendly digital experiences that reflect your care, extend your reach, and make it easier for people to connect with the healing you provide.
                            </p>
                            <p className="health-lead-text">
                                Whether you're a clinic, a hospital, or a wellness center, if you're ready to grow your impact and make patient journeys smoother and more meaningful — we're here to help you do just that.
                            </p>
                            <a href="/contact" className="health-btn-primary-custom">
                                Start Your Digital Health Journey
                            </a>
                        </div>

                        <div className="col-lg-5 d-none d-lg-block">
                            <img
                                src={health1}  // Replace this with your actual image path
                                alt="Healthcare Digital Strategy"
                                className="img-fluid rounded shadow"
                            />
                        </div>
                    </div>
                </section>

                <hr></hr>

                {/* Your Specialty, Our Digital Expertise Section */}
                <section className="health-section bg-light py-5">
                    <div className="container">
                        <h2 className="text-center health-h2-custom px-5"> Who We Serve in the Health & Wellness Sector
                        </h2>
                        <p className="health-lead-text text-center mb-5 px-5">
                            At Orazweb Solutions, we specialize in creating impactful digital solutions tailored to the unique needs of diverse health and wellness professionals. Whether you're running a clinic, a diagnostic center, a hospital system, or offering personalized care as a therapist or wellness coach — we empower your journey with thoughtful design, smart technology, and results-driven digital strategy.
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
                                    src={health2}
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
                                        text: `At <strong>Orazweb</strong>, we believe your care deserves to be seen, felt, and easily found — especially in a world where people turn to the internet first for answers, appointments, and trust.`,
                                    },
                                    {
                                        icon: "bi-laptop",
                                        text: `We help healthcare professionals across Jammu build <strong>digital spaces that reflect their real-world compassion and expertise</strong> — not just with beautiful websites, but with full-featured digital ecosystems tailored for growth.`,
                                    },
                                    {
                                        icon: "bi-phone",
                                        text: `Whether you're running a small clinic, a diagnostic center, or a multispecialty hospital, we craft <strong>intuitive, patient-friendly websites and mobile apps</strong> that act as your virtual front door. Features like <strong>secure appointment booking, patient portals, and telehealth integration</strong> make it easier for people to connect with your care — anytime, from anywhere.`,
                                    },
                                    {
                                        icon: "bi-file-earmark-medical",
                                        text: `For diagnostic centers, we turn complexity into clarity — creating <strong>information-rich websites</strong> that help patients understand your services, book tests online, and receive results securely and quickly.`,
                                    },
                                    {
                                        icon: "bi-hospital",
                                        text: `Hospitals and healthcare systems benefit from <strong>scalable, unified digital platforms</strong> that bring together departments, specialists, and patient resources. From <strong>physician directories and virtual tours</strong> to <strong>service finders and multi-location management</strong>, we create seamless digital journeys for your patients and staff.`,
                                    },
                                    {
                                        icon: "bi-heart-pulse",
                                        text: `We also deeply understand the personal nature of care. For <strong>mental health professionals</strong>, we design <strong>empathetic, secure websites</strong> that feel safe and build trust from the very first visit. And for <strong>nutritionists and wellness coaches</strong>, we create <strong>vibrant, engaging platforms</strong> (and apps) with features like <strong>program enrollment, meal planning tools, and progress tracking</strong> — empowering your clients every step of the way.`,
                                    },
                                    {
                                        icon: "bi-search-heart",
                                        text: `But your online presence is just the beginning. With <strong>hyper-local SEO</strong>, we make sure you show up first when patients search for a doctor or service in Jammu. Our <strong>targeted ad campaigns</strong> increase awareness and bring in referrals, while our <strong>discreet, ethical marketing strategies</strong> help mental health providers reach those who need care — privately and respectfully.`,
                                    },
                                    {
                                        icon: "bi-stars",
                                        text: `At Orazweb, we don't just build websites — <strong>we build your digital foundation for trust, growth, and impact</strong>. Together, we'll help more people find the healing and support they’re looking for — through you.`,
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

                {/* Orazweb's Digital Health Toolkit Section */}
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
                                "Custom, Secure Website Design & Development: Crafting intuitive, mobile-responsive platforms that meet stringent privacy and security standards.",
                                "Hyper-Local & Medical SEO: Optimizing your online presence so patients in your area find your services first when they search.",
                                "Engaging Content & Health Education: Developing informative blogs, patient guides, and wellness resources that establish your authority and connect with your audience.",
                                "Online Reputation & Review Management: Proactively building and maintaining a positive digital image through patient testimonials and strategic feedback mechanisms.",
                                "Seamless Patient Experience Integrations: Implementing online appointment booking, secure patient portals, and telehealth solutions to streamline operations.",
                                "Targeted Digital Advertising (PPC): Creating precise campaigns that reach specific patient demographics actively seeking your services.",
                                "Empathetic Social Media Strategy: Building a compassionate and informative presence on platforms where your audience seeks health information and community.",
                                "Robust Brand Strategy & Messaging: Defining your unique voice and ensuring consistency across every digital touchpoint, from your website to patient communications."
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

                {/* Ready to Transform Your Digital Health Impact? Section */}
                <section className="health-section text-center py-5"> {/* Increased vertical padding */}
                    <div className="container"> {/* Added container for better content alignment */}
                        <div className="row justify-content-center">
                            <div className="col-lg-10 col-md-11">
                                <h2 className="health-h2-custom display-4 fw-bold mb-4"> {/* Larger, bolder heading */}
                                    Ready to Transform Your Digital Health Impact?
                                </h2>
                                <p className="health-lead-text fs-5 mb-5 mx-auto" style={{ maxWidth: '800px' }}> {/* Slightly larger font, controlled width */}
                                    The future of healthcare is undeniably digital, and your online presence is more critical than ever. Let **Orazweb Solutions** be your trusted partner in navigating this evolution. We'll help you build a **powerful online foundation** that connects you with more patients, streamlines your operations, and significantly amplifies your vital impact.
                                </p>
                                <a href="/contact" className="btn btn-lg btn-primary shadow-lg rounded-pill px-5 py-3 animate-btn-pulse"> {/* Enhanced button style with pulse animation idea */}
                                    <strong>Contact us today for a complimentary digital health assessment!</strong>
                                </a>
                                <p className="text-muted mt-3 mb-0">Let's discuss your unique needs and goals.</p> {/* Sub-text for clarity */}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default HealthPage;