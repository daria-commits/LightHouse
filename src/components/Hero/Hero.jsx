import { useTranslation } from 'react-i18next';
import './hero.css'; 
import video from '../../assets/banner.mp4';
import audioFile from '../../assets/audio.wav';
import { useState, useEffect } from "react"; 
import { CiPlay1, CiPause1 } from "react-icons/ci"; // Import des icônes Play et Pause

function Hero() {
  const { t } = useTranslation('global'); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(new Audio(audioFile));

  // Gestion du clic pour jouer/arrêter l'audio
  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying, audio]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying); // Bascule entre lecture et pause
  };

  return (
    <div className='paralax-container'>
      <div className='paralax-video'>
        <video className='video-desktop' autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className='parallax-content'>
        <div className='parallax-title'>
          <h1>{t('hero.title')}</h1>
          <div className='parallax-subtitle'>
            <h4>{t('hero.subtitle')}</h4>
          </div>
        </div>

       
        <button className='audio-button' onClick={togglePlay}>
          {isPlaying ? (
            <CiPause1 className="audio-icon" size={22} color="#fff" /> // Icône Pause si audio est en lecture
          ) : (
            <CiPlay1 className="audio-icon" size={22} color="#fff" /> // Icône Play si audio est en pause
          )}
        </button>
      </div>
    </div>
  );
}

export default Hero;
