import React, { useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    // Tawk.to live chat script integration
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/your_tawkto_id/default";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      // Cleanup the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1500')",
      }}
    >
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-900 bg-opacity-60">
        <div className="w-full max-w-3xl p-8 bg-white/40 backdrop-blur-lg rounded-lg shadow-xl text-black">
          <h1 className="text-4xl font-semibold text-center mb-1">Contact Us</h1>
          <p className="text-center text-lg mb-4">
            We're here to help. Get in touch with us using the form below.
          </p>

          {/* Contact Info and Business Hours */}
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <h2 className="text-2xl font-semibold mb-1">Contact Info</h2>
              <ul className="space-y-2">
                <li>
                  Email:{" "}
                  <a
                    href="mailto:info@example.com"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    info@example.com
                  </a>
                </li>
                <li>
                  Phone:{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-blue-400 hover:text-blue-600"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-1">Business Hours</h2>
              <ul className="space-y-2">
                <li>Mon - Fri: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 10:00 AM - 4:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
         

          {/* Social Media */}
          <div className="flex justify-center gap-8 mt-12">
            <button
              aria-label="Facebook"
              onClick={() => window.open("https://facebook.com", "_blank")}
              className="flex items-center gap-2 bg-blue-600 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              <FaFacebookF /> Facebook
            </button>
            <button
              aria-label="Twitter"
              onClick={() => window.open("https://twitter.com", "_blank")}
              className="flex items-center gap-2 bg-blue-400 text-black px-5 py-3 rounded-lg hover:bg-blue-500 transition-all"
            >
              <FaTwitter /> Twitter
            </button>
            <button
              aria-label="Instagram"
              onClick={() => window.open("https://instagram.com", "_blank")}
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-black px-5 py-3 rounded-lg hover:scale-105 transition-all"
            >
              <FaInstagram /> Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;










