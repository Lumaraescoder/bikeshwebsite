import React from "react";
import { useEffect, useRef } from "react";

function Cursorfollower() {
  const followerRef = useRef(null);

  // These refs track positions without triggering re-renders
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isCoarsePointer = window.matchMedia?.("(pointer: coarse)")?.matches;
    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;

    // Avoid continuous animation on touch devices and when user prefers reduced motion
    if (isCoarsePointer || prefersReducedMotion) return;

    let isActive = true;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const animate = () => {
      if (!isActive) return;

      const follower = followerRef.current;
      if (!follower) return;

      // Move followerPos towards mousePos by 10% per frame (smooth delay)
      followerPos.current.x +=
        (mousePos.current.x - followerPos.current.x) * 0.1;
      followerPos.current.y +=
        (mousePos.current.y - followerPos.current.y) * 0.1;

      // Optional offset from cursor
      const offsetX = 20; // pixels right
      const offsetY = 10; // pixels down

      // Update follower position (center the follower)
      follower.style.transform = `translate3d(${followerPos.current.x + offsetX}px, ${followerPos.current.y + offsetY}px, 0) translate(-50%, -50%)`;

      animationFrameId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(animate);

    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        isActive = false;
        cancelAnimationFrame(animationFrameId);
      } else {
        if (!isActive) {
          isActive = true;
          animationFrameId = requestAnimationFrame(animate);
        }
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      isActive = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div className="cursor-follower" ref={followerRef}></div>;
}

export default Cursorfollower;
