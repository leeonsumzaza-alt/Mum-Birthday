
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Pause, Play } from "lucide-react";

import birthdayMusic from "../../assets/birthday-music.mp3";

function BirthdayMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Music could not be played:", error);
      }
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src={birthdayMusic}
        loop
      />

      <motion.button
        className="birthday-music-button"
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        <Music size={18} />
        <span>{isPlaying ? "PAUSE MUSIC" : "PLAY MUSIC"}</span>
      </motion.button>
    </>
  );
}

export default BirthdayMusic;
