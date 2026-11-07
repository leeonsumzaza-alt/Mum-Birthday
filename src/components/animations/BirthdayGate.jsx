
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Lock, Heart } from "lucide-react";

const unlockTime = new Date("2026-11-10T21:00:00Z").getTime();

function BirthdayGate({ onUnlock }) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
  const updateCountdown = () => {
    const remaining = unlockTime - Date.now();

    setTimeLeft(Math.max(remaining, 0));

    if (remaining <= 0) {
      onUnlock();
    }
  };

  updateCountdown();

  const timer = setInterval(updateCountdown, 1000);

  return () => clearInterval(timer);
}, [onUnlock]);

  const days = Math.max(0, Math.floor(timeLeft / 86400000));
  const hours = Math.max(0, Math.floor((timeLeft % 86400000) / 3600000));
  const minutes = Math.max(0, Math.floor((timeLeft % 3600000) / 60000));
  const seconds = Math.max(0, Math.floor((timeLeft % 60000) / 1000));

  return (
    <div className="birthday-gate">
      <motion.div
        className="gate-content"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Lock size={40} className="gate-lock" />

        <p className="gate-label">A SPECIAL SURPRISE AWAITS</p>

        <h1>
          Something Beautiful
          <span>Is Coming...</span>
        </h1>

        <Heart size={30} fill="#ff4fa3" />

        <p className="gate-description">
          A little celebration made with endless love.
          But some surprises are worth waiting for.
        </p>

        <h2>UNLOCKING IN</h2>

        <div className="countdown">
          {[
            { value: days, label: "DAYS" },
            { value: hours, label: "HOURS" },
            { value: minutes, label: "MINUTES" },
            { value: seconds, label: "SECONDS" },
          ].map((item) => (
            <div className="countdown-item" key={item.label}>
              <strong>{String(item.value).padStart(2, "0")}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        <p className="gate-date">11 NOVEMBER 2026 ❤️</p>
      </motion.div>
    </div>
  );
}

export default BirthdayGate;
