import { useState, useEffect, useRef } from 'react';
import { Sparkles, Flame, Github, Instagram, Linkedin } from 'lucide-react';
import { getRandomWish } from './wishesData';
import Fireworks from './Fireworks';

const FIRECRACKER_COUNT = 15;

function App() {
  const [userName, setUserName] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [firecrackers, setFirecrackers] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const [audio] = useState(() => new Audio('/happy-diwali-jethalal-audio-meme-download.mp3'));
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [randomWish, setRandomWish] = useState('');

  useEffect(() => {
    setRandomWish(getRandomWish());
  }, []);

  useEffect(() => {
    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio]);

  const createFirecrackers = () => {
    const crackers = [];
    for (let i = 0; i < FIRECRACKER_COUNT; i++) {
      crackers.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2
      });
    }
    return crackers;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      setRandomWish(getRandomWish());
      setShowCard(true);
      audio.loop = true;
    }
  };

  const handleCardClick = () => {
    if (!isCardOpen && checkboxRef.current) {
      checkboxRef.current.checked = true;
      setIsCardOpen(true);
      audio.loop = true;
      audio.play().catch(() => {});
      setFirecrackers(createFirecrackers());
    }
  };

  if (!showCard) {
    return (
      <div className="min-h-screen max-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 flex items-center justify-center p-3 sm:p-4 overflow-hidden fixed inset-0" style={{ zIndex: 10 }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-orange-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-red-400 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl p-5 sm:p-6 md:p-8 lg:p-12 max-w-md w-full mx-auto relative z-10 border-4 border-yellow-600">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="relative">
              <Sparkles className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-orange-600 animate-pulse" />
              <Sparkles className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-yellow-500 absolute top-0 right-0 animate-ping" />
            </div>
          </div>

          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center mb-2 sm:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 leading-tight">
            Happy Diwali!
          </h1>

          <p className="text-gray-700 text-center mb-5 sm:mb-6 md:mb-8 text-sm xs:text-base sm:text-lg px-2">
            Enter your name to receive a special Diwali greeting
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 text-sm xs:text-base sm:text-lg border-2 sm:border-3 border-orange-300 rounded-xl sm:rounded-2xl focus:outline-none focus:ring-4 focus:ring-orange-500 focus:border-orange-500 transition-all"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 px-4 sm:py-3.5 sm:px-5 md:py-4 md:px-6 rounded-xl sm:rounded-2xl text-base sm:text-lg md:text-xl font-semibold hover:from-orange-700 hover:to-red-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Open Your Greeting
            </button>
          </form>

          <div className="mt-5 sm:mt-6 md:mt-8 flex justify-center space-x-1.5 sm:space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>

        {/* Social Media Buttons */}
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 flex gap-3">
          <a
            href="https://github.com/psb-001"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
          </a>
          <a
            href="https://www.instagram.com/pratham01012007"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/prathamesh-bhujbal-psb"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center overflow-hidden fixed inset-0" style={{ zIndex: 10 }}>
      <label htmlFor="open" className="cursor-pointer" style={{ perspective: '2000px' }}>
        <input 
          id="open" 
          type="checkbox" 
          ref={checkboxRef}
          className="hidden"
          onChange={handleCardClick}
        />
        
        <div className="card-page pg1">
          <div className="w-full h-full bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 shadow-2xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 border-4 sm:border-6 border-yellow-400 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${10 + (i * 12)}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    animation: 'firecracker 3s ease-in-out infinite',
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  <div className="relative">
                    <div className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                    <div className="absolute w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative z-10 text-center w-full px-3 sm:px-4">
              <Sparkles className="icon-main text-yellow-300 mb-3 sm:mb-4 md:mb-6 lg:mb-8 mx-auto animate-spin" style={{ animationDuration: '3s' }} />
              
              <h2 className="happy-text text-white mb-1 sm:mb-2">
                Happy
              </h2>
              <h2 className="diwali-text text-yellow-300 mb-3 sm:mb-4 md:mb-6">
                Diwali
              </h2>
              
              <p className="user-name-pg1 text-yellow-100 mb-2 sm:mb-3 px-2">
                {userName}
              </p>
              
              <p className="click-text text-white/90 mt-4 sm:mt-6 md:mt-8 lg:mt-10 animate-pulse">
                Click To Open
              </p>
            </div>
          </div>
        </div>

        <div className="card-page pg2">
          <div className="w-full h-full bg-white shadow-2xl flex items-center justify-center relative overflow-hidden">
            <div className="content-pg2">
              <div className="diya-container absolute left-1/2 top-1/2 w-11/12 transform -translate-x-1/2 -translate-y-1/2 px-2 sm:px-4">
                <div className="flex justify-center items-center space-x-3 sm:space-x-4 md:space-x-6">
                  <Flame className="flame-icon-pg2 text-orange-500 animate-pulse" />
                  <Flame className="flame-icon-pg2 text-red-500 animate-pulse" style={{ animationDelay: '0.2s', transform: 'scale(1.2)' }} />
                  <Flame className="flame-icon-pg2 text-yellow-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
                <div className="text-center mt-6 sm:mt-8 md:mt-12">
                  <p className="diya-text text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 animate-pulse">
                    शुभ दीपावली
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-page pg3">
          <div className="w-full h-full bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 shadow-2xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              {[...Array(10)].map((_, i) => (
                <Sparkles 
                  key={i}
                  className="absolute text-orange-500" 
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${15 + Math.random() * 20}px`,
                    height: `${15 + Math.random() * 20}px`
                  }}
                />
              ))}
            </div>
            
            <div className="wish-content relative z-10 text-center w-full">
              <Sparkles className="icon-small text-orange-600 mx-auto mb-3 sm:mb-4 md:mb-6 lg:mb-8 animate-pulse" />
              
              <h2 className="greeting-title text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 mb-2 sm:mb-3 md:mb-4 px-3 sm:px-4">
                Happy Diwali,
              </h2>
              
              <h3 className="greeting-name text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 mb-3 sm:mb-4 md:mb-6 lg:mb-8 animate-pulse px-3 sm:px-4">
                {userName}!
              </h3>

              <p className="greeting-message text-gray-800 mb-2 sm:mb-3 md:mb-4 px-4 sm:px-6 md:px-8">
                {randomWish}
              </p>
              
              <p className="greeting-submessage text-gray-700 px-4 sm:px-6 md:px-10 lg:px-12 mb-3 sm:mb-4 md:mb-5">
                Wishing you and your family a blessed and joyful Diwali!
              </p>

              <div className="mt-4 sm:mt-5 md:mt-6 lg:mt-8 flex justify-center space-x-1.5 sm:space-x-2 md:space-x-3">
                {[...Array(5)].map((_, i) => (
                  <Flame 
                    key={i}
                    className="flame-icon-pg3 text-orange-500 animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>

              <p className="text-gray-600 text-center mt-4 sm:mt-5 md:mt-6 px-4" style={{ fontSize: 'clamp(0.75rem, 1.8vw + 0.3rem, 1.3rem)', fontWeight: '500', fontStyle: 'italic' }}>
                Wishes from Prathamesh Bhujbal
              </p>
            </div>
          </div>
        </div>
      </label>

      {isCardOpen && <Fireworks />}
      
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 flex gap-3" style={{ zIndex: 20 }}>
        <a
          href="https://github.com/psb-001"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="GitHub"
        >
          <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800" />
        </a>
        <a
          href="https://www.instagram.com/pratham01012007"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </a>
        <a
          href="https://www.linkedin.com/in/prathamesh-bhujbal-psb"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </a>
      </div>
      
      {isCardOpen && firecrackers.map((cracker) => (
        <div
          key={cracker.id}
          className="absolute animate-firecracker pointer-events-none"
          style={{
            left: `${cracker.x}%`,
            top: `${cracker.y}%`,
            animationDelay: `${cracker.delay}s`,
            maxWidth: '100vw',
            maxHeight: '100vh'
          }}
        >
          <div className="relative">
            <div className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
            <div className="absolute w-4 h-4 bg-red-500 rounded-full opacity-50 animate-bounce"></div>
          </div>
        </div>
      ))}

      <style>{`
        @keyframes firecracker {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          50% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-20px) scale(1.5);
            opacity: 0;
          }
        }
        .animate-firecracker {
          animation: firecracker 2s ease-out infinite;
        }
        
        /* Card Page Styles - Optimized for All Screen Sizes */
        .card-page {
          width: min(92vw, 350px);
          height: min(82vh, 500px);
          min-height: 450px;
          border: 2px solid #f3f4f6;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          border-radius: 12px;
          overflow: hidden;
        }
        
        /* Small phones - Portrait */
        @media (max-width: 374px) {
          .card-page {
            width: 96vw;
            height: 86vh;
            min-height: 420px;
          }
        }
        
        /* Medium phones */
        @media (min-width: 375px) and (max-width: 575px) {
          .card-page {
            width: min(92vw, 360px);
            height: min(80vh, 540px);
            min-height: 450px;
          }
        }
        
        /* Large phones and small tablets */
        @media (min-width: 576px) and (max-width: 767px) {
          .card-page {
            width: min(85vw, 420px);
            height: min(78vh, 580px);
            min-height: 500px;
          }
        }
        
        /* Tablets - Portrait */
        @media (min-width: 768px) and (max-width: 991px) {
          .card-page {
            width: min(65vw, 450px);
            height: min(72vh, 650px);
            min-height: 550px;
          }
        }
        
        /* Tablets - Landscape and Small Desktops */
        @media (min-width: 992px) and (max-width: 1199px) {
          .card-page {
            width: 480px;
            height: 650px;
            min-height: 600px;
          }
        }
        
        /* Desktops - Normal (1200-1599px) */
        @media (min-width: 1200px) and (max-width: 1599px) {
          .card-page {
            width: 500px;
            height: 680px;
            min-height: 620px;
          }
        }
        
        /* Large Desktops (1600-1919px) */
        @media (min-width: 1600px) and (max-width: 1919px) {
          .card-page {
            width: 550px;
            height: 750px;
            min-height: 680px;
          }
        }
        
        /* Full HD (1920px-2559px) */
        @media (min-width: 1920px) and (max-width: 2559px) {
          .card-page {
            width: 600px;
            height: 820px;
            min-height: 740px;
          }
        }
        
        /* 2K and 4K screens */
        @media (min-width: 2560px) {
          .card-page {
            width: 700px;
            height: 950px;
            min-height: 850px;
          }
        }
        
        /* Landscape mode for small devices */
        @media (max-height: 650px) and (orientation: landscape) {
          .card-page {
            width: min(55vw, 500px);
            height: 88vh;
            min-height: 300px;
          }
        }
        
        /* Very short screens */
        @media (max-height: 500px) {
          .card-page {
            height: 90vh;
            min-height: 260px;
          }
        }
        
        /* Page 1 - Front Cover */
        .pg1 {
          transform-origin: left center;
          z-index: 40;
          background-color: #fff;
          transition: transform 1.2s ease, left 1.2s ease, opacity 0.3s ease 1s;
        }
        
        /* Page 2 - Middle */
        .pg2 {
          z-index: 30;
          background: #fff;
          transform-origin: left center;
          transition: transform 1.2s ease, left 1.2s ease, z-index 0s 0.6s;
        }
        
        .pg2 .content-pg2 {
          height: 100%;
          width: 100%;
          transform: rotateY(180deg);
        }
        
        /* Page 3 - Inside Message */
        .pg3 {
          z-index: 20;
          background: #fff;
          transform-origin: left center;
        }
        
        /* Open Animation */
        #open:checked ~ .pg1 {
          animation: openCardPg1 1.2s ease forwards;
        }
        
        #open:checked ~ .pg2 {
          animation: openCardPg2 1.2s ease forwards;
        }
        
        @keyframes openCardPg1 {
          0% {
            transform: translate(-50%, -50%) rotateY(0deg);
            z-index: 40;
          }
          50% {
            transform: translate(-50%, -50%) rotateY(-90deg);
            z-index: 40;
          }
          100% {
            transform: translate(-50%, -50%) rotateY(-180deg);
            z-index: 10;
            opacity: 0;
            pointer-events: none;
          }
        }
        
        @keyframes openCardPg2 {
          0% {
            transform: translate(-50%, -50%) rotateY(0deg);
            z-index: 30;
          }
          50% {
            transform: translate(-50%, -50%) rotateY(-90deg);
            z-index: 50;
          }
          100% {
            transform: translate(-50%, -50%) rotateY(-180deg);
            z-index: 10;
            opacity: 0;
            pointer-events: none;
          }
        }
        
        /* Responsive Text Scaling - Optimized for All Screens */
        .happy-text {
          font-size: clamp(2rem, 5vw + 1rem, 6.5rem);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
          line-height: 1.05;
          font-weight: 700;
        }
        
        .diwali-text {
          font-size: clamp(1.6rem, 4vw + 0.8rem, 5.5rem);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
          line-height: 1.05;
          font-weight: 700;
        }
        
        .user-name-pg1 {
          font-size: clamp(0.95rem, 2vw + 0.5rem, 2.2rem);
          line-height: 1.3;
          font-weight: 600;
        }
        
        .click-text {
          font-size: clamp(0.85rem, 1.8vw + 0.4rem, 1.8rem);
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
          font-weight: 500;
        }
        
        .diya-text {
          font-size: clamp(1.4rem, 3.5vw + 0.8rem, 5rem);
          font-weight: 700;
        }
        
        .greeting-title {
          font-size: clamp(1.2rem, 3vw + 0.6rem, 4.5rem);
          line-height: 1.2;
          font-weight: 700;
        }
        
        .greeting-name {
          font-size: clamp(1.5rem, 3.8vw + 0.8rem, 5.5rem);
          line-height: 1.1;
          word-break: break-word;
          hyphens: auto;
          font-weight: 800;
        }
        
        .greeting-message {
          font-size: clamp(0.85rem, 1.5vw + 0.4rem, 1.9rem);
          line-height: 1.5;
          font-weight: 600;
        }
        
        .greeting-submessage {
          font-size: clamp(0.75rem, 1.2vw + 0.3rem, 1.5rem);
          line-height: 1.6;
          font-weight: 400;
        }
        
        .wish-content {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          padding: clamp(0.75rem, 2vw + 0.5rem, 3rem);
        }
        
        .icon-main {
          width: clamp(2.2rem, 4vw + 1rem, 6.5rem);
          height: clamp(2.2rem, 4vw + 1rem, 6.5rem);
        }
        
        .icon-small {
          width: clamp(1.6rem, 3vw + 0.6rem, 4.5rem);
          height: clamp(1.6rem, 3vw + 0.6rem, 4.5rem);
        }
        
        .flame-icon-pg2 {
          width: clamp(2.2rem, 3.5vw + 0.8rem, 6rem);
          height: clamp(2.2rem, 3.5vw + 0.8rem, 6rem);
        }
        
        .flame-icon-pg3 {
          width: clamp(0.9rem, 1.5vw + 0.4rem, 2.5rem);
          height: clamp(0.9rem, 1.5vw + 0.4rem, 2.5rem);
        }
      `}</style>
    </div>
  );
}

export default App;
