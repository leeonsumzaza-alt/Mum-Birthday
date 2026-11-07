
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Heart, Sparkles } from "lucide-react";

function BirthdayLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const paragraphAnimation = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="birthday-letter">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="letter-subtitle">
          WORDS FROM THE HEART
        </p>

        <h2>A Letter For Mum 💌</h2>

        <p className="letter-introduction">
          Some things are better said from the heart.
          I've written something special for you.
        </p>

        <motion.button
          className="letter-button"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          type="button"
        >
          <Mail size={22} />
          {isOpen ? "CLOSE YOUR LETTER" : "OPEN YOUR LETTER"}
          <Sparkles size={18} />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="letter-paper"
            initial={{
              opacity: 0,
              height: 0,
              y: 30,
              rotateX: -20,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: 20,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              className="letter-inner"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.35,
                    delayChildren: 0.5,
                  },
                },
              }}
            >
              <motion.div variants={paragraphAnimation}>
                <Heart
                  size={34}
                  fill="#ff4fa3"
                  color="#ff4fa3"
                />
              </motion.div>

              <motion.h3 variants={paragraphAnimation}>
                Dear Mum,
              </motion.h3>

              <motion.p variants={paragraphAnimation}>
                I don't think words will ever be enough to express
                how grateful I am to have you in my life.
              </motion.p>

              <motion.p variants={paragraphAnimation}>
                Thank you for every sacrifice, every prayer,
                every lesson, every hug and every moment you've
                stood by me. Your love has shaped my life in
                ways I will always be grateful for.
              </motion.p>

              <motion.p variants={paragraphAnimation}>
                On your special day, I pray that life gives you
                countless reasons to smile. May you experience
                happiness, peace, good health and all the beautiful
                things your heart deserves.
              </motion.p>

              <motion.p variants={paragraphAnimation}>
                No matter how old I grow, I will always be
                grateful to call you my mum.
              </motion.p>

              <motion.h3 variants={paragraphAnimation}>
                Happy Birthday, Mum! ❤️
              </motion.h3>

              <motion.p
                className="letter-signature"
                variants={paragraphAnimation}
              >
                With endless love, Leon.
              </motion.p>

              <motion.div variants={paragraphAnimation}>
                <Heart
                  size={22}
                  fill="#ff4fa3"
                  color="#ff4fa3"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default BirthdayLetter;
