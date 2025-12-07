import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import google from "../assets/image/google.png";
import gLogo from "../assets/image/g-logo.png";
import "./review.css";

export default function ReviewsWidget() {
  const reviews = [
    {
      photo: "https://lh3.googleusercontent.com/a/ACg8ocLxC5pHjqihYQaPKKhq-qgUQqeuNIrSi2bu13ULPP23M10NJA=w40-h40-c-rp-mo-br100",
      name: "Divyesh Ghori",
      date: "2024-09-01",
      text: "I recently visited North Dental Studio and had an outstanding experience...",
      rating: 5,
    },
    {
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjV1F4_c9tImzpHJB5G6J_fJnAwMIFh53B_Skf6RDktUGOiGO8wFdA=w40-h40-c-rp-mo-br100",
      name: "Priyanka Sola",
      date: "2024-08-31",
      text: "Hello everyone! I visited this clinic. It's a very nice service...",
      rating: 4.5,
    },
    {
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjV1F4_c9tImzpHJB5G6J_fJnAwMIFh53B_Skf6RDktUGOiGO8wFdA=w40-h40-c-rp-mo-br100",
      name: "John Smith",
      date: "2024-08-29",
      text: "Fantastic team! Dr. Patel is so friendly and professional.",
      rating: 5,
    },
    {
      photo: "https://lh3.googleusercontent.com/a-/ALV-UjV1F4_c9tImzpHJB5G6J_fJnAwMIFh53B_Skf6RDktUGOiGO8wFdA=w40-h40-c-rp-mo-br100",
      name: "Emily Johnson",
      date: "2024-08-25",
      text: "Clean, modern clinic and the staff are so caring. Highly recommended!",
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
      <>
        {"★".repeat(fullStars)}
        {halfStar && "☆"}
        {"☆".repeat(emptyStars)}
      </>
    );
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 4, // default on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }, // single review on mobile
      },
    ],
  };

  return (
    <div className="bg-green text-center py-5">
      <h2 className="fw-bold mb-4 text-primary">Customer Reviews</h2>

      <div className="container">
        <div className="reviews-list">
          {reviews.length > 0 ? (
            <Slider {...sliderSettings}>
              {reviews.map((review, index) => (
                <div key={index} className="p-2">
                  <div className="review-item p-3 rounded-4 shadow-sm bg-white h-100 d-flex flex-column">
                    <div className="d-flex align-items-center mb-2 position-relative">
                      <div className="position-relative">
                        <img
                          src={review.photo}
                          alt={review.name}
                          className="rounded-circle"
                          style={{ width: "50px", height: "50px", objectFit: "cover" }}
                        />
                        <img
                          src={gLogo}
                          alt="G"
                          className="position-absolute"
                          style={{
                            width: "16px",
                            height: "16px",
                            bottom: 0,
                            right: 0,
                            borderRadius: "50%",
                            border: "1px solid #fff",
                            backgroundColor: "#fff",
                          }}
                        />
                      </div>
                      <div className="ms-3 text-start">
                        <h4 className="mb-0 fs-6">{review.name}</h4>
                        <div className="text-muted small">{review.date}</div>
                      </div>
                    </div>

                    <div className="review-stars text-warning mb-2" style={{ fontSize: "16px" }}>
                      {renderStars(review.rating || 5)}
                    </div>

                    <p className="text-muted small">{review.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <div className="p-5 bg-white rounded shadow-sm">
              <h4 className="text-muted mb-0">No reviews available</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
