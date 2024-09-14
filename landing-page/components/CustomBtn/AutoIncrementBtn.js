import React, { useEffect, useRef, useState } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/all";

gsap.registerPlugin(ScrollTrigger);

const AutoIncrementBtn = ({ value }) => {
  const [score, setScore] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const scoreRef = useRef(null);

  const game = useRef({ score: 0 });

  const scoreDisplay = useRef(null);

  const updateHandler = () => {
    setScore(game.current.score);
  };

  useEffect(() => {
    setIsMounted(true);

    const trigger = ScrollTrigger.create({
      trigger: scoreRef.current,
      start: "top+=15% 80%", // Start the animation when the top of the element reaches 80% of the viewport height
      end: "center center",
      once: true,

      onEnter: () => {
        gsap.to(game.current, {
          score: `${value}`,
          roundProps: "score",
          onUpdate: updateHandler,
          ease: Linear.easeNone,
          duration: 1,
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [value]);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <div ref={scoreDisplay}>{score === 0 ? 0 : score.toLocaleString()}</div>
    </div>
  );
};

export default AutoIncrementBtn;
