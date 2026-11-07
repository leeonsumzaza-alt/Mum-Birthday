
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart } from "lucide-react";

function BirthdayGift() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className="birthday-gift">
      <motion.button
        className="gift-button"
        onClick={() => setIsOpened(!isOpened)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.span
          animate={{ rotate: isOpened ? 10 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <Gift size={45} />
        </motion.span>

        <span>
          {isOpened ? "CLOSE YOUR GIFT" : "OPEN YOUR GIFT"}
        </span>
      </motion.button>

      <AnimatePresence>
        {isOpened && (
          <motion.div
            className="gift-message"
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.6 }}
          >
            <Heart size={35} fill="#ff4fa3" />

            <h2>To My Beautiful Mum ❤️</h2>

            <p>
              Thank you for your endless love, your sacrifices,
              your kindness, and everything you do for me.
            </p>

            <p>
              You are one of the greatest blessings in my life.
              May your birthday bring you the same happiness
              and love that you give to everyone around you.
            </p>

            <h3>Happy Birthday, Mum! 🎂</h3>

            <p>With all my love, always. ❤️</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default BirthdayGift;
