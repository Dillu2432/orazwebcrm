import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import ReactPixel from "react-facebook-pixel";
import "../../assets/northdental.css";
import halogo from "../../assets/images/north logo.svg";
import teeth from "../../assets/images/northdentalstudio.JPG";
import why from "../../assets/images/northdentalstudio1.jpg";
import pic2 from "../../assets/images/hapict2.jpg";
import pic4 from "../../assets/images/hapictm1.jpg";
import oic1 from "../../assets/images/brush.png"; // import the image
import Image1 from "../../assets/images/patient1.png";
import Image2 from "../../assets/images/patient2.png";
import Image3 from "../../assets/images/patient3.png";
import Brush1 from "../../assets/images/picbrush.jpg";
import Brush2 from "../../assets/images/picbrush2.jpg";
import Shail from "../../assets/images/sahilnew.JPG";
// import NorthReview  from "../../assets/northereview.jsx"
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
    { day: "Thu", time: "11:00 AM - 5:00 PM" },
    { day: "Fri", time: "10:00 AM - 7:00 PM" },
    { day: "Sat", time: "9:00 AM – 3:00 PM" },
    { day: "Sun", time: "Closed" },
  ];

  // Parse UTM / fbclid from URL
// Helper to read cookie values (_fbc, _fbp, etc.)
  const getCookie = (name) => {
    if (!typeof document === "object") return undefined;
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return decodeURIComponent(match[2]);
    return undefined;
  };

  useEffect(() => {
    // Initialize Pixel
    const options = { autoConfig: true, debug: false };
    ReactPixel.init("2456747194718674", undefined, options);
    ReactPixel.pageView();

    // Capture UTM params from URL
    const params = new URLSearchParams(window.location.search);
    setUtmData({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      fbclid: params.get("fbclid") || "",
    });

    // Add facebook-domain-verification meta if missing
    const existingMeta = document.querySelector('meta[name="facebook-domain-verification"]');
    if (!existingMeta) {
      const meta = document.createElement("meta");
      meta.name = "facebook-domain-verification";
      meta.content = "ddaekmvupe746bb0rodyyn7v4m8dh3";
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

  const payload = {
    ...form,
    ...utmData,
    from_source: "Invisalign", // ✅ fixed value for Invisalign landing page
  };

  try {
    const res = await fetch("http://localhost:5000/api/northleads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload), // ✅ FIXED
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Something went wrong");

    setLeadId(data.id);
    setMessage("Lead created successfully!");
    setError("");

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
      const res = await fetch(`http://localhost:5000/api/northleads/${leadId}/step2`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ step: "2" }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to update step");

      setError("");
      setMessage("Lead updated to Step 2. Initiating call...");

      // Initiate phone call
      window.location.href = "tel:(226)336-7999";
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
          <div className="col-12 col-md-4 text-center text-md-start mb-2 mb-md-0">
            <a href="https://northdentalstudio.ca/" target="_blank" rel="noopener noreferrer">
              <img
                src={halogo}
                alt="north dental studio Logo"
                className="img-fluid"
                style={{ maxWidth: "300px", objectFit: "contain" }}
              />
            </a>
          </div>


          {/* Contact Info */}
          <div className="col-md-5 justify-content-center">
            <div className="d-flex align-items-center px-3 py-2">
              <i className="fas fa-map-marker-alt me-2 fs-1 text-dark"></i>
              <span className="text-dark fw-semibold headaddress">
                255 Northfield Dr E, weUnit 1, Waterloo, ON N2K 0G5
              </span>
            </div>
          </div>
          <div className="col-md-3 text-md-end">

            {/* Call Button */}
            <btn
              href="tel:(226)336-7999"
              className="fw-bold text-white headcontact"
              style={{
                backgroundColor: "rgb(36, 56, 45)",

              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(57, 104, 78, 1)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(12, 56, 32, 1)")}
            >
              Call Us: (226) 336-7999
            </btn>
          </div>

        </div>
      </div>

      <div>
        {!leadId ? (
          <>
            <div className="container-fluid bg-green" >
              {/* Info Text */}
              <div className="row text-center text-white py-2">

                <div className="container">
                  <h1 className="text-center mt-4 mb-2 head3 fw-bold">INVISALIGN PACKAGES STARTING FROM $3000!</h1>

                  <h2 className="text-center sub-head3 ">Includes FREE Wellness Scan, FREE Teeth Whitening, FREE Electric Toothbrush, and FREE Cosmetic Recontouring at the end</h2>
                  <div className="row align-items-center justify-content-center">
                    {/* Image Column */}
                    <div className="col-md-6 text-center mb-md-0">
                      <div className="offer-image-container position-relative d-inline-block">
                        <img
                          src={teeth}
                          alt="Dental Exam"
                          className="headimg rounded shadow mt-3"
                        />

                        {/* Flashing cloud with text */}
                        <div className="flashing-cloud-text">
                          Free Electric Toothbrush included <br></br>with your Invisalign Package!
                        </div>
                      </div>


                    </div>

                    {/* Form Column */}
                    <div className="col-md-5">
                      <div>
                        <h3 className="text-center mt-5 px-2 mb-2 responsive-heading fw-bold">
                         Start Your Invisalign Journey Today!
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


                          {error && <p className="text-danger text-center">{error}</p>}
                          {message && <p className="text-success text-center">{message}</p>}

                          <button
                            type="submit"
                            disabled={loading}
                            className="btn btn-warning w-100 fs-5 fs-md-5 fw-bold soft-flash-btn mt-4"
                            style={{ transition: "0.3s" }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFB300")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC107")}
                          >
                            {loading ? "Submitting..." : "Claim My Invisalign Offer"}
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
            <div className="container pt-5">
              <h1 className="text-center bg-green py-2 text-white head1 fw-bold">Why Choose North Dental Studio?</h1>


              <div className="row align-items-center justify-content-center bg-light p-4 ">
                {/* Doctor Image */}
                <p className="mb-4 whytext ">
                  At <strong>North Dental Studio </strong> in Waterloo, we believe every patient deserves gentle, personalized, and high-quality dental care.
From routine exams to full smile makeovers, our dedicated team ensures your visit is calm, comfortable, and confident.

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
                    <li><strong>Expert dentists</strong> delivering thoughtful, tailored care every time</li>
                    <li><strong>Full range </strong> of services for families — from kids to adults</li>
                    <li><strong>Cutting-edge technology: </strong>  digital X-rays, iTero® scanners & more</li>
                    <li><strong>Warm, anxiety-free environment</strong> designed for comfort</li>
                    <li><strong>Flexible hours</strong> — evenings, weekends, and emergency care available</li>
                    <li><strong>Affordable, honest pricing</strong> and insurance-friendly options</li>
                  </ul>

                  <p className="mt-4 whytext">
                    At <strong>North Dental Studio </strong>, your comfort and confidence are our top priorities
                    because your smile deserves the best care.
                  </p>
                </div>

              </div>
            </div>
            <hr></hr>

            {/* <div className="container py-4">
              <div className="row g-4 justify-content-center ">


                <div className="col-md-9 text-center d-none d-md-block">
                  <img
                    src={pic2}
                    alt="Image 2"
                    className="img-fluid rounded shadow w-100"
                  />
                </div>

                <div className="col-12 text-center d-block d-md-none">
                  <img
                    src={pic4}
                    alt="Image 4"
                    className="img-fluid rounded"
                  />
                </div>

              </div>
            </div> */}

            {/* <NorthReview/> */}
            

            <div className="container py-5">
              {/* Section Heading */}
              <div className="text-center mb-5">
                <h2 className="fw-bold" style={{ fontSize: "32px", color: "#000" }}>
                  Real People. Real Results. Your Turn?
                </h2>
                <p className="mb-0" style={{ fontSize: "18px", color: "#555" }}>
                  Before & After Transformations That Speak for Themselves
                </p>
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

          <div className="container-fluid bg-green">
              {/* Section Heading */}
              <div className="text-center mb-5 overflow-hidden">
                <h1 className="fw-bold text-white py-4 flashing-marquee">
                  Now Accepting New Patients
                </h1>
              </div>

            </div>

            {/* Doctor Section */}
            <div className="container py-5">
              <h1 className="text-center bgmb-5 fw-bold">MEET THE DOCTOR</h1>

              <div className="row align-items-center justify-content-center bg-light p-4 ">
                {/* Doctor Image */}
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <img
                    src={Shail}
                    alt="Dr. Harshvir Aujla"
                    className="img-fluid rounded-circle border border-3 border-success shadow-sm"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />

                </div>

                {/* Doctor Info */}
                <div className="col-md-6 text-center text-md-start">
                  <h2 className="fw-bold fs-1 mb-3">Dr. Sahil Aujla</h2>
                  <p className="mb-4 doctorstyle">
                    Dr. Sahil Aujla, DDS, is a highly skilled and compassionate dentist dedicated to helping patients of all ages achieve healthy, confident smiles. A graduate of the University of Western Ontario, she brings years of clinical experience in general, preventive, and children’s dentistry.
                  </p>
                  <p className="mb-4 doctorstyle" >
                    With a gentle approach and a focus on patient comfort, Dr. Aujla takes time to explain every step of treatment, helping ease anxiety and build trust. She is passionate about staying updated with the latest advancements in dental care through continuing education, ensuring the best outcomes for her patients.
                  </p>
                  <p className="mb-4 doctorstyle">
                    Whether you're visiting for a routine checkup or more advanced care, Dr. Aujla is committed to making your dental experience smooth, stress-free, and focused on long-term oral health.
                  </p>
                  <a
                    href="#!"
                    onClick={handleShow}
                    className="btn btn-warning text-dark fs-3 w-100 fw-bold soft-flash-btn"
                    style={{ borderRadius: "30px", padding: "12px 30px", transition: "0.3s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFB300")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC107")}
                  >
                    Claim My Invisalign Offer
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



                        {error && <p className="text-danger text-center">{error}</p>}
                        {message && <p className="text-success text-center">{message}</p>}

                        <button
                          type="submit"
                          disabled={loading}
                          className="btn btn-warning w-100 fw-bold soft-flash-btn"
                          style={{ transition: "0.3s" }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FFB300")}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FFC107")}
                        >
                          {loading ? "Submitting..." : "Claim My Invisalign Offer!"}
                        </button>
                      </form>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>




            {/* Map & Contact Info */}
            <div className="container-fluid bg-green py-1">
              <div className="row g-4 align-items-center">
                {/* Google Map */}
                <div className="col-md-7">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1243.2354314688723!2d-80.52140771272832!3d43.51067704111717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf38fb09204e3%3A0x650a06142f76467e!2sNorth%20Dental%20Studio%20-%20Waterloo!5e0!3m2!1sen!2sin!4v1759687903843!5m2!1sen!2sin"
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
                        href="tel:(226)336-7999"
                        className="text-white text-decoration-none fs-5 fs-md-5"
                      >
                        (226) 336-7999
                      </a>
                    </div>

                    {/* Address */}
                    <div className="text-white fs-4 mb-3">
                      <h5 className="text-white fs-4 mb-3">
                        <i className="fas fa-map-marker-alt me-3"></i>Address
                      </h5>
                      <p className="mb-0 fs-5">
                        255 Northfield Dr E, Unit 1, Waterloo, ON N2K 0G5
                      </p>
                    </div>

                    {/* Hours */}
                    <div>
                      <h5 className="text-white fs-4 mb-3">
                        <i className="fas fa-clock me-2 "></i>Working Hours
                      </h5>
                      <table className="w-100 fs-5 text-light">
                        <tbody>
                          {[
                            ["Mon", "10:00 AM – 7:00 PM"],
                            ["Tue", "10:00 AM – 7:00 PM"],
                            ["Wed", "10:00 AM – 7:00 PM"],
                            ["Thu", "11:00AM – 5:00 PM"],
                            ["Fri", "10:00 AM – 7:00 PM"],
                            ["Sat", "9:00 AM – 3:00 PM"],
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
              margin: "10px",     // verti
            }}
          >
            {/* {message && <p className="text-success mt-3">{message}</p>} */}
            {error && <p className="text-danger mt-3">{error}</p>}

            <div className="thank-you-container">
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
                <div className="divider1 text-center"></div>

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
                <div className="images align-center gap-3 mt-4">
                  <img
                    src={Brush1}
                    alt="Electric Toothbrush"
                    style={{ width: "80%", height: "auto", marginRight: "15px" }}
                  />
                  <img
                    src={Brush2} alt="Crest"
                    style={{ width: "80%", height: "auto" }}
                  />
                </div>


                {/* Office Info */}
                <div className="office-info mt-4">
                  <h3 className="mb-3 text-primary">Office Hours</h3>

                  <ul className="list-unstyled hours-grid mb-0">
                    {hours.map((h) => (
                      <li key={h.day} className="d-flex align-items-center justify-content-between py-1 hour-item">
                        <span className="day text-muted text-dark fs-6 fw-semibold">{h.day}</span>
                        <time className="time small fs-6 text-dark">{h.time}</time>
                      </li>
                    ))}
                  </ul>
                  <h3 className="text-primary">Office Location:</h3>
                  <p>255 Northfield Dr E, Unit 1, Waterloo, ON N2K 0G5</p>
                </div>


              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center bg-green text-white mt-5 py-4 border-top">
          <p>© 2025 by Noth Dental Studio</p>
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
