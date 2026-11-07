
import { motion } from "framer-motion";

const particles = [
  { left: "5%", top: "20%", delay: 0 },
  { left: "15%", top: "70%", delay: 1 },
  { left: "25%", top: "40%", delay: 2 },
  { left: "35%", top: "85%", delay: 0.5 },
  { left: "45%", top: "15%", delay: 1.5 },
  { left: "55%", top: "60%", delay: 2.5 },
  { left: "65%", top: "30%", delay: 0.8 },
  { left: "75%", top: "80%", delay: 1.8 },
  { left: "85%", top: "45%", delay: 3 },
  { left: "95%", top: "10%", delay: 1.2 },
  { left: "10%", top: "50%", delay: 2.2 },
  { left: "30%", top: "10%", delay: 0.3 },
  { left: "50%", top: "90%", delay: 1.7 },
  { left: "70%", top: "55%", delay: 2.7 },
  { left: "90%", top: "75%", delay: 0.7 },
];

function BirthdayParticles() {
  return (
    <div className="birthday-particles">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          className="birthday-particle"
          style={{
            left: particle.left,
            top: particle.top,
          }}
          animate={{
            y: [0, -100, -200],
            x: [0, 20, -10],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 6,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {index % 3 === 0 ? "✨" : index % 3 === 1 ? "💖" : "⭐"}
        </motion.span>
      ))}
    </div>
  );
}

export default BirthdayParticles;
