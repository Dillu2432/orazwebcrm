import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import About from "./components/About";
import Contact from "./components/Contact";

// services
import Customwebsite from "./components/services/customwebsite";
import BrandingServices from "./components/services/BrandingServicesPage";
import Wordpresswebsite from "./components/services/Wordpresswebsite";
import Shopifywebsite from "./components/services/shopifywebsite";
import Webdesgin from "./components/services/webdesgin";
import Facebook from "./components/services/Facebook";
import Instagram from "./components/services/Instagram";
import Linkedin from "./components/services/Linkedin";
import Localseo from "./components/services/local_seo";
import Technicalseo from "./components/services/technical_seo";
import Seoaudit from "./components/services/seo_audit";
import Shopifyseo from "./components/services/Shopify_seo";
import Wordpressseo from "./components/services/Wordpress_seo";
import Sem from "./components/services/sem";
import Gam from "./components/services/gam";
import Youtube from "./components/services/youtube";
import Franchise from "./components/services/Franchise";
import Enterprise from "./components/services/Enterprise";
import Smm from "./components/services/smm";

// sector
import Health from "./components/sector/Health";
import Fitness from "./components/sector/fitness";
import Yoga from "./components/sector/yoga";
import Spirituality from "./components/sector/Spirituality";
import Medical from "./components/sector/medical";
import Gym from "./components/sector/gym";
import Wellness from "./components/sector/wellness";

// CRM Pages (without navbar/footer)
import Hadental from "./components/crm/hadental";
import Northdental from "./components/crm/northdental";
import NorthdentalInvisalign from "./components/crm/northdentalInvisalign";


const AppContent = () => {
  const location = useLocation();

  // pages where navbar/footer should NOT appear
  const hideLayout = [
    "/hadentalgroup",
    "/northdentalstudio",
    "/northdentalstudio-invisalign"
  ];

  const removeLayout = hideLayout.includes(location.pathname);

  return (
    <>
      {!removeLayout && <Navbar />}

      <Routes>
        {/* CRM Routes */}
        <Route path="/hadentalgroup" element={<Hadental />} />
        <Route path="/northdentalstudio" element={<Northdental />} />
        <Route path="/northdentalstudio-invisalign" element={<NorthdentalInvisalign />} />

        {/* main */}
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        {/* services */}
        <Route path="/custom-website" element={<Customwebsite />} />
        <Route path="/branding-services" element={<BrandingServices />} />
        <Route path="/wordpress-website" element={<Wordpresswebsite />} />
        <Route path="/shopify-website" element={<Shopifywebsite />} />
        <Route path="/web-design" element={<Webdesgin />} />
        <Route path="/facebook" element={<Facebook />} />
        <Route path="/instagram" element={<Instagram />} />
        <Route path="/linkedin" element={<Linkedin />} />
        <Route path="/local-seo" element={<Localseo />} />
        <Route path="/technical-seo" element={<Technicalseo />} />
        <Route path="/seo-audit" element={<Seoaudit />} />
        <Route path="/shopify_seo" element={<Shopifyseo />} />
        <Route path="/wordpress_seo" element={<Wordpressseo />} />
        <Route path="/search_engine_marketing" element={<Sem />} />
        <Route path="/google_ads_management" element={<Gam />} />
        <Route path="/youTube_advertising" element={<Youtube />} />
        <Route path="/social-media_franchise" element={<Franchise />} />
        <Route path="/social-media_enterprise" element={<Enterprise />} />
        <Route path="/social_media_management" element={<Smm />} />

        {/* sector */}
        <Route path="/health" element={<Health />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/spirituality" element={<Spirituality />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/gym" element={<Gym />} />
        <Route path="/wellness" element={<Wellness />} />
      </Routes>

      {!removeLayout && <WhatsAppWidget />}
      {!removeLayout && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
