import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../assets/css/contact.css';
import bgImage from '../assets/image/contact.jpeg'; // ✅ use correct relative path

import contentvideo from "../assets/image/contact_video.mp4";

const Contact = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.onplay = () => console.log('Video started playing');
            videoRef.current.onerror = (e) => {
                console.error('Video error:', e);
                if (videoRef.current.error) {
                    console.error('Video error code:', videoRef.current.error.code);
                    console.error('Video error message:', videoRef.current.error.message);
                }
            };
        }
    }, []);

    return (
        <div className="container py-5">
            <div className='pageheader mb-5'>
                <h1>CONTACT US</h1>
            </div>
            <div className='bg-white py-5 px-5'>
                {/* Row 1: Heading and Contact Info with Video Background */}
                <div className="position-relative overflow-hidden mb-5" style={{ minHeight: '600px' }}>

                    <div className="row contact-box mb-5 gap-5">
                        {/* Left Side - Address with Video Background */}
                        <div
                            className="contact-section col-md-6 position-relative overflow-hidden"
                            style={{
                                backgroundImage: `url(${bgImage})`,
                            }}
                        >
                            <div className="row p-3 ps-5">
                                {/* Left Block (Intro Text) */}
                                <div className="col-md-5 fs-5 text-white d-flex flex-column  p-4">
                                    <p className="text-uppercase fw-bold fs-6">Welcome to <br></br>Orazweb Solutions</p>
                                    <h2 className="mb-3 text-white fw-bold fs-1">We Help You Open Doors to New Connection</h2>
                                </div>

                                {/* Right Block (Overlayed Consultation Box) */}
                                <div className="consultation-box col-md-7 position-relative">
                                    <p className="consultation-title">Get a free consultation.</p>
                                    <p>
                                        Call us with any query or to schedule a consultation between
                                        <strong> 10:00 AM to 05:00 PM</strong>.
                                    </p>
                                    <p>
                                        <strong>
                                            <i className="bi bi-telephone-fill me-2 text-success"></i>Phone:
                                        </strong><br />
                                        +91-9876543210<br />
                                        +91-9876543210
                                    </p>

                                    <a
                                        href="https://wa.me/919876543210"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-success mt-3 d-inline-flex align-items-center"
                                    >
                                        <i className="bi bi-whatsapp me-2 fs-5"></i>
                                        WhatsApp Us
                                    </a>

                                </div>
                            </div>
                        </div>



                        {/* Right Side - Studio Info */}
                        <div className="studio-info-container col-md-5">
                            <h5 className="studio-title">
                                <i className="bi bi-building me-2 fs-1"></i> Visit Our Studio
                            </h5>
                            <p className="studio-description">
                                We help a number of clients get on the right path, and we are confident in providing the best care.
                            </p>


                           
                            <p className="office-address">
                                 <i className="bi bi-geo-alt-fill me-2 fs-5"></i> <strong>Office:</strong><br />
                                Bandhu Rakh, Kunjwani<br />
                                Jammu-180010, India
                            </p>
                        </div>

                    </div>

                </div>

                {/* Row 2: Contact Form and Map */}
                <div className="row">
                    {/* Contact Form */}
                    <div className="col-md-6 contact-form">
                        <h4 className="mb-4 text-success fw-bold">Write to Us</h4>
                        <form className="custom-line-form fs-5">

                            {/* Row 1: Full Name & Email */}
                            <div className="row mb-3">
                                <div className="col-md-6 ">
                                    <input
                                        type="text"
                                        className="form-control border-0 fs-5 border-bottom rounded-0"
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        className="form-control border-0 fs-5 border-bottom rounded-0"
                                        placeholder="Email Address"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Row 2: Subject & Date */}
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control fs-5 border-0 border-bottom rounded-0"
                                        placeholder="Subject"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        className="form-control fs-5 border-0 border-bottom rounded-0"
                                        placeholder="Date (MM/DD/YY)"
                                        required
                                    />
                                </div>


                            </div>

                            {/* Row 3: Message */}
                            <div className="mb-3">
                                <textarea
                                    className="form-control border-0 fs-5 border-bottom rounded-0"
                                    rows="4"
                                    placeholder="Your message"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-success fs-5 w-100">Send Message</button>
                        </form>
                    </div>


                    {/* Map */}
                    <div className="col-md-6 mt-5 mt-md-0">
                        <h4>Find Us on Map</h4>
                       <div className="ratio ratio-4x3 mt-3">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13294.138954434436!2d74.8652324!3d32.6632859!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391e9b67e05679e5%3A0xa4c67d974d475ab5!2sOrazweb%20Solutions!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
        title="Google Map of Orazweb Solutions"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
