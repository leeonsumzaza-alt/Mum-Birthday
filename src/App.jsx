
import { useState } from "react";

import BirthdayGate from "./components/animations/BirthdayGate";
import BirthdayIntro from "./components/animations/BirthdayIntro";
import BirthdayHome from "./pages/BirthdayHome";
import confetti from "canvas-confetti";

function App() {
  const [hasUnlocked, setHasUnlocked] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  const handleUnlock = () => {
  setHasUnlocked(true);

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 },
    colors: ["#ff4fa3", "#9b27d5", "#ffd166", "#ffffff"],
  });

  setTimeout(() => {
    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });
  }, 700);
};

  const handleEnter = () => {
  setHasEntered(true);

  confetti({
    particleCount: 250,
    spread: 160,
    startVelocity: 45,
    origin: { y: 0.6 },
    colors: ["#ff4fa3", "#9b27d5", "#ffd166", "#ffffff"],
  });
};

  if (!hasUnlocked) {
    return <BirthdayGate onUnlock={handleUnlock} />;
  }

  if (!hasEntered) {
    return <BirthdayIntro onEnter={handleEnter} />;
  }

  return <BirthdayHome />;
}

export default App;
