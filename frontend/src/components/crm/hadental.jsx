import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactPixel from "react-facebook-pixel";
import "../../assets/hadental.css";
import halogo from "../../assets/images/ha logo.png";
import teeth from "../../assets/images/teeth.png";
import hadentalclinic from "../../assets/images/hahead1.jpg";
import why from "../../assets/images/hateam.JPG";
import pic1 from "../../assets/images/hapic1.png";
import pic3 from "../../assets/images/hapic1.jpg";
import oic1 from "../../assets/images/brush.png"; // import the image
import Image1 from "../../assets/images/image1.jpg";
import Image2 from "../../assets/images/image2.jpg";
import Image3 from "../../assets/images/image3.jpg";
import Brush1 from "../../assets/images/picbrush.jpg";
import Brush2 from "../../assets/images/picbrush2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // for icons

export default function Step1Form() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [leadId, setLeadId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // store success message
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [utmData, setUtmData] = useState({ utm_source: "", utm_medium: "", utm_campaign: "", fbclid: "" });
  const hours = [
    { day: "Mon", time: "10:00 AM - 7:00 PM" },
    { day: "Tues", time: "10:00 AM - 7:00 PM" },
    { day: "Wed", time: "10:00 AM - 7:00 PM" },
    { day: "Thurs", time: "10:00 AM - 7:00 PM" },
    { day: "Fri", time: "10:00 AM - 7:00 PM" },
    { day: "Sat", time: "8:00 AM – 2:00 PM" },
    { day: "Sun", time: "Closed" },
  ];

  // Parse UTM / fbclid from URL
  useEffect(() => {
    // Initialize Pixel
    const options = { autoConfig: true, debug: false };
    ReactPixel.init("1129410992665104", undefined, options);

    // Track Page View
    ReactPixel.pageView();

    // Capture UTM params from URL
    const params = new URLSearchParams(window.location.search);
    setUtmData({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      fbclid: params.get("fbclid") || "",
    });
    const existingMeta = document.querySelector('meta[name="facebook-domain-verification"]');
    if (!existingMeta) {
      const meta = document.createElement("meta");
      meta.name = "facebook-domain-verification";
      meta.content = "ffo2mzkns90lygf8istb56a25d7ixi";
      document.head.appendChild(meta);
    }

  }, []);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Step 1: Submit lead
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setLeadId(data.id); // Save the lead ID
      setMessage("Step 1 completed! Lead created and email sent successfully.");
      setError("");
      // Meta Pixel Lead event
      ReactPixel.track("Lead", {
        content_name: form.service,
        value: 1.0,
        currency: "USD",
        email: form.email,
        phone: form.phone,
      });
    } catch (err) {
      setError(err.message);
      setMessage("");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Update lead to step 2 and initiate call
  const handleCallClick = async () => {
    if (!leadId) return;


    // Meta Pixel Contact event
    ReactPixel.track("Contact", {
      content_name: "Call Now Button",
      lead_id: leadId,
    });

    try {
      const res = await fetch(`/api/leads/${leadId}/step2`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step: "2" }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to update step");

      setError("");
      setMessage("Lead updated to Step 2. Initiating call...");

      // Initiate phone call
      window.location.href = "tel:905 913 1003";
    } catch (err) {
      setError("Error updating lead to step 2: " + err.message);
      setMessage("");
    }
  };

  return (

    <div>
      {/* Contact Info */}
      <div className="container">
        <div className="row text-center py-1 main align-items-center">
          {/* Logo — visible on all devices */}
          <div className="col-12 col-md-4 text-center mb-2 mb-md-0">
            <a href="https://hadentalgroup.com" target="_blank" rel="noopener noreferrer">
              <img
                src={halogo}
                alt="H. A. Dental Group Logo"
                className="img-fluid "
                style={{ maxWidth: "80%", objectFit: "contain" }}
              />
            </a>
          </div>

          {/* Address — visible only on md and larger */}
          <div className="col-md-5 justify-content-center">
            <div className="d-flex align-items-center px-3 py-2">
              <i className="fas fa-map-marker-alt me-2 fs-1 text-primary"></i>
             <span className="text-dark fw-semibold headaddress">
      9995 McVean Dr, Unit-B1, Brampton ON L6P 4K8
              </span>
            </div>
          </div>

          {/* Call Button — visible only on md and larger */}
          <div className="col-md-3 text-md-end">
            <btn
              href="tel:905 913 1003"
              className="fw-bold text-white headcontact"
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3156A3")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#188fc9")}
            >
              Call Us: (905) 913-1003
            </btn>
          </div>
        </div>
      </div>


      {/* Main Section */}
      <div>
        {!leadId ? (
          <>
            <div className="container-fluid bg-blue " >
              {/* Info Text */}
              <div className="row text-center text-white py-1">
                <div className="container">
                  <h1 className="text-center mt-4 mb-2 head1 fw-bold">NEW PATIENT EXAM AND CLEANING SPECIAL</h1>

                  <h2 className="text-center sub-head1 ">We Now Accept CDCP</h2>
                  <div className="row align-items-center justify-content-center">
                    {/* Image Column */}
                    <div className="col-md-6 text-center">

                      <img
                        src={hadentalclinic}
                        alt="Dental Exam"
                        className="headimg rounded shadow mt-3"
                      
                      />
                    </div>

                    {/* Form Column */}
                    <div className="col-md-5 shadow ">
                      <div>
                        <h3 className="text-center mt-5 px-2 mb-2 responsive-heading fw-bold">
                          CLAIM YOUR FREE TEETH WHITENING OFFER
                        </h3>
                        <p className="text-center responsive-subtext mb-4">
                          *LIMITED TIME OFFER!
                        </p>

                        <form onSubmit={handleSubmit} className="lead-form mt-3 px-5">
                          <div className="mb-2">
                            <label htmlFor="name" className="form-label">Full Name *</label>
                            <input
                              id="name"
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Full Name"
                              value={form.name}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="mb-2">
                            <label htmlFor="email" className="form-label">Email *</label>
                            <input
                              id="email"
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              value={form.email}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          <div className="mb-2">
                            <label htmlFor="phone" className="form-label">Phone *</label>
                            <input
                              id="phone"
                              type="tel"
                              className="form-control"
                              name="phone"
                              placeholder="Phone"
                              value={form.phone}
                              onChange={handleChange}
                              required
                            />
                          </div>

                          {/* <div className="mb-2">
                            <label htmlFor="service" className="form-label">Service *</label>
                            <select
                              id="service"
                              className="form-select"
                              name="service"
                              value={form.service}
                              onChange={handleChange}
                              required
                            >
                              <option value="">-- Select a Service --</option>
                              <option value="New Patient Exam">New Patient Exam</option>
                              <option value="Nitrous Oxide/Laughing Gas">Nitrous Oxide/Laughing Gas</option>
                              <option value="Dentures">Dentures</option>
                              <option value="Dental Cleaning">Dental Cleaning</option>
                              <option value="Crowns">Crowns</option>
                              <option value="Teeth Whitening">Teeth Whitening</option>
                              <option value="Root Canal Treatment">Root Canal Treatment</option>
                              <option value="Invisalign">Invisalign</option>
                              <option value="Dental Filling">Dental Filling</option>
                              <option value="Emergency">Emergency</option>
                              <option value="Smile Designing">Smile Designing</option>
                              <option value="Dental Bridges">Dental Bridges</option>
                              <option value="Wisdom Teeth Removal/Extractions">Wisdom Teeth Removal/Extractions</option>
                              <option value="Other Service">Other Service</option>
                            </select>
                          </div> */}

                          {error && <p className="text-danger text-center">{error}</p>}
                          {message && <p className="text-success text-center">{message}</p>}

                          <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-warning w-100 fw-bold soft-flash-btn mt-4"
                            style={{ transition: "0.3s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFB300")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC107")}
                          >
                            {loading ? "Submitting..." : "Claim My Special Offer!"}
                          </button>
                        </form>


                        <p className="text-center small mt-3 ">
                          100% Secure & Private - Your information is safe with us.
                        </p>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            </div>

            {/* Doctor Section */}
            <div className="container pt-5">
              <h1 className="text-center bg-blue py-2 text-white head1 fw-bold">Why Choose H.A. Dental Group?</h1>
                

              <div className="row align-items-center justify-content-center bg-light p-4 ">
                {/* Doctor Image */}
                <p className="mb-4 whytext ">
                    At <strong>H.A. Dental Group</strong> in Brampton, we believe every patient deserves gentle,
                    personalized, and high-quality dental care. From routine checkups to complete smile
                    transformations, our experienced team ensures every visit feels comfortable, caring, and
                    stress-free.
                  </p>
                <div className="col-md-6 text-center mb-4 mb-md-0">
                  <img
                    src={why}
                    alt="Dr. Harshvir Aujla"
                    className="img-fluid border"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Doctor Info */}
                <div className="col-md-5 text-center text-md-start">
                 
                

                  <p className="mb-3 whytext">
                    Here’s why families across Brampton trust us with their smiles:
                  </p>

                  <ul className="whytext">
                    <li><strong>Expert dentists</strong> delivering personalized care every time</li>
                    <li><strong>Comprehensive dental services</strong> for adults and children</li>
                    <li><strong>Advanced technology</strong> — digital X-rays, intra-oral scanners, and more</li>
                    <li><strong>Warm, anxiety-free environment</strong> designed for comfort</li>
                    <li><strong>Flexible hours</strong> — evenings, weekends, and emergency care available</li>
                    <li><strong>Affordable, honest pricing</strong> and insurance-friendly options</li>
                  </ul>

                  <p className="mt-4 whytext">
                    At <strong>H.A. Dental Group</strong>, your comfort and confidence are our top priorities
                    because your smile deserves the best care.
                  </p>
                </div>

              </div>
            </div>
<hr></hr>

            <div className="container-fluid" >
              <div className="container ">
                <div className="row g-4 justify-content-center">

                  {/* Desktop / Laptop Images */}
                  <div className="col-md-9 text-center d-none d-md-block">
                    <img
                      src={pic1}
                      alt="Image 1"
                      className="img-fluid rounded shadow w-100"
                    />
                  </div>
                  {/* Mobile / Tablet Images */}
                  <div className="col-12 text-center d-block d-md-none">
                    <img
                      src={pic3}
                      alt="Image 3"
                      className="img-fluid rounded "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid bg-blue">
              {/* Section Heading */}
              <div className="text-center mb-5 overflow-hidden">
                <h1 className="fw-bold text-white py-4 flashing-marquee">
                  Now Accepting New Patients
                </h1>
              </div>

            </div>
            <div className="container py-5">
              {/* Section Heading */}
              <div className="text-center mb-5">
                <h1 className="fw-bold" style={{ fontSize: "32px", color: "#000" }}>
                  Real People. Real Results. Your Turn?
                </h1>

              </div>

              {/* Images Row */}
              <div className="row g-4 justify-content-center">
                <div className="col-md-3 text-center">
                  <img
                    src={Image1}
                    alt="Transformation 1"
                    className="img-fluid rounded shadow transform-hover"
                  />
                </div>
                <div className="col-md-3 text-center">
                  <img
                    src={Image2}
                    alt="Transformation 2"
                    className="img-fluid rounded shadow transform-hover"
                  />
                </div>
                <div className="col-md-3 text-center">
                  <img
                    src={Image3}
                    alt="Transformation 3"
                    className="img-fluid rounded shadow transform-hover"
                  />
                </div>
              </div>
            </div>
            <hr></hr>

            {/* Doctor Section */}
            <div className="container py-5">
              <h1 className="text-center bgmb-5 fw-bold">MEET THE DOCTOR</h1>

              <div className="row align-items-center justify-content-center bg-light p-4 ">
                {/* Doctor Image */}
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <img
                    src="https://hadentalgroup.com/wp-content/uploads/2023/09/11-min-dr-scaled.webp"
                    alt="Dr. Harshvir Aujla"
                    className="img-fluid rounded-circle border border-3 border-primary shadow-sm"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                {/* Doctor Info */}
                <div className="col-md-6 text-center text-md-start">
                  <h2 className="fw-bold fs-1 mb-3">Dr. Harshvir Aujla</h2>
                  <p className="mb-4 doctorstyle">
                    Dr. Aujla, also known as Dr. A, is the lead dentist at H. A. Dental Group. She obtained her dental degree from the State University of New York at Buffalo School of Dental Medicine and is committed to helping her patients achieve optimal oral health through personalized treatment plans. Dr. Aujla and her team are dedicated to serving patients of all ages, including children, and is licensed to practice minimal sedation (commonly known as laughing gas). In her leisure time, she enjoys watching Netflix and spending quality time with her loved ones.
                  </p>
                  <a
                    href="#!"
                    onClick={handleShow}
                    className="btn btn-warning text-dark fs-3 fw-bold soft-flash-btn"
                    style={{ borderRadius: "30px", padding: "12px 30px", transition: "0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFB300")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC107")}
                  >
                    Claim My Special Offer!
                  </a>
                  {/* Modal */}
                  <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                      <Modal.Title>Special Offer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <p>Thank you for your interest! Please fill out the form to claim your special offer.</p>

                      <form onSubmit={handleSubmit} className="lead-form">
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Full Name *</label>
                          <input
                            id="name"
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="email" className="form-label">Email *</label>
                          <input
                            id="email"
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">Phone *</label>
                          <input
                            id="phone"
                            type="tel"
                            className="form-control"
                            name="phone"
                            placeholder="Phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        {/* <div className="mb-3">
                          <label htmlFor="service" className="form-label">Service *</label>
                          <input
                            id="service"
                            type="text"
                            className="form-control"
                            name="service"
                            placeholder="Service"
                            value={form.service}
                            onChange={handleChange}
                            required
                          />
                          
                        </div> */}
                        {/* <div className="mb-3">
                          <label htmlFor="service" className="form-label">Service *</label>
                          <select
                            id="service"
                            className="form-select"
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            required
                          >
                            <option value="">-- Select a Service --</option>
                            <option value="New Patient Exam">New Patient Exam</option>
                            <option value="Nitrous Oxide/Laughing Gas">Nitrous Oxide/Laughing Gas</option>
                            <option value="Dentures">Dentures</option>
                            <option value="Dental Cleaning">Dental Cleaning</option>
                            <option value="Crowns">Crowns</option>
                            <option value="Teeth Whitening">Teeth Whitening</option>
                            <option value="Root Canal Treatment">Root Canal Treatment</option>
                            <option value="Invisalign">Invisalign</option>
                            <option value="Dental Filling">Dental Filling</option>
                            <option value="Emergency">Emergency</option>
                            <option value="Smile Designing">Smile Designing</option>
                            <option value="Dental Bridges">Dental Bridges</option>
                            <option value="Wisdom Teeth Removal/Extractions">Wisdom Teeth Removal/Extractions</option>
                            <option value="Other Service">Other Service</option>
                          </select>
                        </div> */}
                        {error && <p className="text-danger text-center">{error}</p>}
                        {message && <p className="text-success text-center">{message}</p>}

                        <button
                          type="submit"
                          disabled={loading}
                          className="btn btn-warning w-100 fw-bold"
                          style={{ transition: "0.3s" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFB300")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC107")}
                        >
                          {loading ? "Submitting..." : "Claim My Special Offer!"}
                        </button>
                      </form>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>




            {/* Map & Contact Info */}
            <div className="container-fluid bg-blue py-">
              <div className="row g-4 align-items-center">
                {/* Google Map */}
                <div className="col-md-7">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.5342875837673!2d-79.6996133!3d43.782525299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3d2b502f54f9%3A0xca7f4cc855970bed!2sH.A.%20Dental%20Group!5e0!3m2!1sen!2sin!4v1759259000169!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    className="border-0 w-100 rounded shadow-sm"
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Contact Info */}
                <div className="col-md-4 col-12">
                  <div className="text-white p-4 h-100">
                    <h2 className="fw-bold mb-4 text-center fs-1 text-md-start">Contact Us</h2>

                    {/* Phone */}
                    <div className="mb-4 d-flex flex-wrap align-items-center">
                      <i className="fas fa-phone text-white fs-4 me-3 mb-2"></i>
                      <a
                        href="tel:905 913 1003"
                        className="text-white text-decoration-none fs-5 fs-md-5"                      >
                        (905) 913-1003
                      </a>
                    </div>

                    {/* Address */}
                    <div className="text-white fs-4 mb-3">
                      <h5 className="text-white fs-4 mb-3">
                        <i className="fas fa-map-marker-alt me-3"></i>Address
                      </h5>
                      <p className="mb-0 fs-5">
                        9995 McVean Dr, Unit-B1, Brampton ON L6P 4K8
                      </p>
                    </div>

                    {/* Hours */}
                    <div>
                      <h5 className="text-white fs-4 mb-3">
                        <i className="fas fa-clock me-2 "></i>Working Hours
                      </h5>
                      <table className="w-100 fs-5 text-light">
                        <tbody>
                          {/* Mon: 10AM – 7PM <br />
                        Tue: 10AM – 7PM <br />
                        Wed: 10AM – 7PM <br />
                        Thu: 10AM – 7PM <br />
                        Fri: 10AM – 7PM <br />
                        Sat: 8AM – 2PM <br />
                        Sun: Closed */}
                          {[
                            ["Mon", "10:00 AM – 7:00 PM"],
                            ["Tue", "10:00 AM – 7:00 PM"],
                            ["Wed", "10:00 AM – 7:00 PM"],
                            ["Thu", "10:00 AM – 7:00 PM"],
                            ["Fri", "10:00 AM – 7:00 PM"],
                            ["Sat", "8:00 AM – 2:00 PM"],
                            ["Sun", "Closed"],
                          ].map(([day, time], i) => (
                            <tr key={i} className="border-bottom border-secondary">
                              <td
                                className={`py-2 ${day === "Sun" ? "text-danger fw-semibold" : "text-light"
                                  }`}
                              >
                                {day}
                              </td>
                              <td
                                className={`py-2 text-end ${day === "Sun" ? "text-danger fw-semibold" : "text-light"
                                  }`}
                              >
                                {time}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </>

        ) : (
          <div
            style={{
              backgroundImage: `url(${oic1})`,
              width: "100%",
              // height: "150vh",           // full screen height
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",  // horizontal center
              alignItems: "center",
              margin: "10px"  // verti
            }}
          >
            {/* {message && <p className="text-success mt-3">{message}</p>} */}
            {error && <p className="text-danger mt-3">{error}</p>}

            <div className="thank-you-container ">
              <div className="thank-you-inner ">
                {/* Progress Bar */}
                <div className="progress-bar-container">
                  <div className="progress-bar">
                    <div className="progress-fill"></div>
                    <span className="progress-text">Last Step...</span>
                  </div>
                </div>

                {/* Headline */}
                <h1 className="thank-you-headline text-center">THANK YOU - One last Step!</h1>

                {/* Divider */}
                <div className="divider text-center"></div>

                {/* Subtext */}
                <div className="thank-you-subtext">
                  <p className="fs-5 fw-semibold">
                    <b>Step 2:</b> Click the 'CALL NOW' button below to book a
                    consultation, instantly!
                  </p>
                  <p className="fw-bold text-danger bg-light p-2 rounded">
                    <b>IMPORTANT:</b> If you DON'T SHOW UP to your appointment, we
                    won't be able to reschedule it.
                  </p>

                  <p className="fs-5 fw-semibold">
                    Click the 'CALL NOW' button below to <span className="fw-bold">Book Your Free
                      Consultation Today </span>  and we'll include a FREE Electric Toothbrush, once
                    you pay and start the treatment. See you soon!
                  </p>


                  {/* Call Now Buttons */}

                  <button
                    onClick={handleCallClick}
                    className="call-now-btn"
                  >
                    <i className="fas fa-phone"></i> CALL NOW
                  </button>

                </div>
                {/* Images */}
                <div className="images align-center gap-5 mt-4">
                  <img
                    src={Brush1}
                    alt="Electric Toothbrush"
                    style={{ width: "80%", height: "auto" }}
                  />
                  <img
                    src={Brush2} alt="Electric Toothbrush"
                    style={{ width: "80%", height: "auto" }}
                  />
                </div>


                {/* Office Info */}
                <div className="office-info mt-4">
                  <h3 className="mb-3 text-primary">Office Hours</h3>

                  {/* compact grid list */}
                  <ul className="list-unstyled hours-grid mb-0">
                    {hours.map((h) => (
                      <li key={h.day} className="d-flex align-items-center justify-content-between py-1 hour-item">
                        <span className="day text-muted text-dark fs-6 fw-semibold">{h.day}</span>
                        <time className="time small fs-6 text-dark">{h.time}</time>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-primary">Office Location:</h3>
                  <p className="fs-5">9995 McVean Dr, Unit-B1, Brampton ON L6P 4K8</p>
                </div>


              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center bg-blue text-white mt-5 py-4 border-top">
          <p>© 2025 by H. A. Dental Group</p>
          <a href="#" className="text-white text-decoration-underline">Privacy Policy</a>
          <p className="small mt-3 fs-5 ">
            This site is not a part of the Facebook website or Facebook Inc.<br />
            This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
          </p>
        <p className="small mt-3 fs-5 text-center">
  Powered by <a href="https://orazweb.com" target="_blank" rel="noopener noreferrer" className="text-success">Orazweb Solutions</a>
</p>


        </footer>
      </div>
    </div >

  );
}
