import React, { useEffect, useState } from "react";

function Background() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    function handleResize() {
      // generate star num base on screen resize
      generateStars();
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // clean up eventlistener
    };
  }, []);

  function generateStars() {
    const numOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1, // (minimum size 1 - 4 px)
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  }

  function generateMeteors() {
    const numOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }
    setMeteors(newMeteors);
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: `${star.opacity}`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
      {meteors.map((mateor) => (
        <div
          key={mateor.id}
          className="meteor animate-meteor"
          style={{
            width: `${mateor.size * 50}px`,
            height: `${mateor.size * 2}px`,
            left: `${mateor.x}%`,
            top: `${mateor.y}%`,
            delay: `${mateor.delay}`,
            animationDuration: `${mateor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Background;
