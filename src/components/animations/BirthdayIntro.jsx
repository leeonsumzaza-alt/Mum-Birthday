
import { motion } from "framer-motion";
import "./BirthdayIntro.css";

function BirthdayIntro({ onEnter }) {
  return (
    <div className="birthday-intro">
      <motion.div
        className="intro-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
  duration: 1.5,
  ease: [0.22, 1, 0.36, 1],
}}
      >
        <motion.span
          className="intro-tag"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          A SPECIAL CELEBRATION
        </motion.span>

        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
  duration: 1.4,
  delay: 0.4,
  ease: [0.22, 1, 0.36, 1],
}}
        >
          Happy Birthday
          <br />
          <motion.span
  initial={{ opacity: 0, y: 25, scale: 0.8 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    delay: 1,
    duration: 1.2,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  Mum ❤️
</motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          A little surprise made with all my love.
        </motion.p>

        <motion.button
          onClick={onEnter}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          OPEN YOUR SURPRISE ✨
        </motion.button>
      </motion.div>
    </div>
  );
}

export default BirthdayIntro;
