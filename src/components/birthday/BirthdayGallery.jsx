
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import photo1 from "../../assets/mum-photos/photo1.jpg";
import photo4 from "../../assets/mum-photos/photo4.jpg";
import photo3 from "../../assets/mum-photos/photo3.jpg";
import photo2 from "../../assets/mum-photos/photo2.jpg";

const memories = [
  {
    image: photo1,
    caption: "A beautiful soul ❤️",
  },
  {
    image: photo4,
    caption: "A smile that lights up everything ✨",
  },
  {
    image: photo3,
    caption: "Moments worth keeping forever 💕",
  },
  {
    image: photo2,
    caption: "Forever grateful for you 🌹",
  },
];

function BirthdayGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Allow the viewer to close when Escape is pressed
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedPhoto(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section className="birthday-gallery" id="memories">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="gallery-subtitle">A COLLECTION OF LOVE</p>

        <h2>Beautiful Memories 📸</h2>

        <p className="gallery-description">
          Every picture tells a story, and every memory
          reminds me how blessed I am to have you.
        </p>
      </motion.div>

      {/* Photo gallery */}
      <div className="gallery-grid">
        {memories.map((memory, index) => (
          <motion.div
            className="gallery-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.04, y: -8 }}
          >
            <button
              className="gallery-image-button"
              onClick={() => setSelectedPhoto(memory)}
              aria-label={`Enlarge photo: ${memory.caption}`}
            >
              <img src={memory.image} alt={memory.caption} />
            </button>

            <p>{memory.caption}</p>
          </motion.div>
        ))}
      </div>

      {/* Enlarged photo viewer */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="photo-viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="photo-viewer-content"
              initial={{ scale: 0.8, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 30 }}
              transition={{ duration: 0.3 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="photo-viewer-close"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close photo viewer"
              >
                <X size={25} />
              </button>

              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.caption}
              />

              <p>{selectedPhoto.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default BirthdayGallery;
