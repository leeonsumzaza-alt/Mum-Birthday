
import { motion } from "framer-motion";
import { Heart, Sparkles, Camera } from "lucide-react";
import "../styles/BirthdayHome.css";
import BirthdayParticles from "../components/animations/BirthdayParticles";
import BirthdayGift from "../components/birthday/BirthdayGift";
import BirthdayGallery from "../components/birthday/BirthdayGallery";
import BirthdayLetter from "../components/birthday/BirthdayLetter";
import BirthdayMusic from "../components/birthday/BirthdayMusic";

function BirthdayHome() {
  return (
    <motion.main
      className="birthday-home"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Birthday particles animation */}
      <BirthdayParticles />
      <BirthdayMusic />

      {/* Background decorations */}
      <div className="floating-glow glow-one"></div>
      <div className="floating-glow glow-two"></div>

      {/* Navigation */}
      <nav className="birthday-nav">
        <div className="nav-logo">
          <Heart size={20} />
          <span>FOR MUM</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#message">My Message</a>
          <a href="#memories">Memories</a>
        </div>
      </nav>

      {/* Hero section */}
      <section className="birthday-hero" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="celebration-label">
            <Sparkles size={16} />
            TODAY IS ALL ABOUT YOU
            <Sparkles size={16} />
          </div>

          <h1>
            HAPPY
            <span>BIRTHDAY</span>
            MUM!
          </h1>

          <p className="hero-description">
            To the woman whose love makes everything beautiful.
            Today, we celebrate YOU!
          </p>

          <div className="hero-buttons">
            <a href="#message" className="primary-btn">
              <Heart size={18} />
              A MESSAGE FOR YOU
            </a>

            <a href="#memories" className="secondary-btn">
              <Camera size={18} />
              OUR MEMORIES
            </a>
          </div>
        </motion.div>

        {/* Birthday cake decoration */}
        <motion.div
          className="cake-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <div className="cake-glow"></div>
          <div className="cake-emoji">🎂</div>
          <div className="cake-caption">
            Made with love ❤️
          </div>
        </motion.div>
      </section>

      {/* Message section */}
      <section className="message-section" id="message">
        <div className="section-icon">
          <Heart size={28} />
        </div>

        <h2>A LITTLE SOMETHING FOR YOU</h2>

        <p>
          Mum, today is a celebration of the incredible woman
          you are. Thank you for your love, your sacrifices,
          your kindness and everything you do.
        </p>

        <p className="message-highlight">
          You deserve all the happiness in the world. ❤️
        </p>
      </section>

      {/* Birthday photo gallery */}
      <BirthdayGallery />

      {/* Interactive birthday gift */}
      <BirthdayGift />

      {/* Personal birthday letter */}
      <BirthdayLetter />

      {/* Footer */}
      <footer className="birthday-footer">
        Made with <Heart size={15} /> and endless love for Mum.
      </footer>
    </motion.main>
  );
}

export default BirthdayHome;
