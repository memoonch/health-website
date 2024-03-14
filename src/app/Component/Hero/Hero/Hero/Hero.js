'use client'; // This marks the component as a Client Component

import React, { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = initPlayer;
  }, []);

  const initPlayer = () => {
    const player = new window.YT.Player('player', {
      videoId: '2NR4_5dt7JA',
      playerVars: {
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        mute: 1,
        loop: 1,
        playsinline: 1,
      },
      events: {
        onReady: onPlayerReady,
      },
    });

    function onPlayerReady(event) {
      event.target.playVideo();
    }
  };

  return (
    <div className="background-container">
      <div id="player" ref={playerRef} className="background-iframe"></div>
      <div className="hero_text">
        <h1 className="hero_h1">Wellness Hub</h1>
        <p className="hero_p">
          Your Ultimate Destination for Health and Happiness - Dive into a World
          of Wellness Wonders!
        </p>
        <button className="hero_btn">Discover</button>
      </div>
    </div>
  );
}