import React, { useEffect } from 'react';

const InstagramProfileEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.setAttribute('src', 'https://www.instagram.com/embed.js');
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="mt-3">
      <h6 className="fw-bold text-uppercase mb-3 fs-5 text-white">Follow Us on Instagram</h6>

      {/* Embed Latest Public Post */}
      <div
        dangerouslySetInnerHTML={{
          __html: `
            <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/Cw3mWZfoMmk/" data-instgrm-version="14" style="max-width: 100%; width: 100%; margin: auto;"></blockquote>
          `,
        }}
      />

      {/* Profile Link */}
      <div className="mt-3">
        <a
          href="https://www.instagram.com/your_profile_name"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-light rounded-pill"
        >
          Visit Our Profile
        </a>
      </div>
    </div>
  );
};

export default InstagramProfileEmbed;
