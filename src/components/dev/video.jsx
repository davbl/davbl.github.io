import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./video.css";

const Video = ({ srcHi, srcMid, srcLo, ariaLabel }) => {
  // Use the useInView hook to monitor visibility
  const { ref, inView } = useInView({
    threshold: 0.75, // % visibility of video
    triggerOnce: false, // Set to true if you want to trigger only once
  });

  // Ref to access the video element
  const videoRef = useRef(null);

  // Effect to play/pause the video based on visibility
  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        // Attempt to play the video
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Automatic playback started
            })
            .catch((error) => {
              console.error("Error attempting to play:", error);
            });
        }
      } else {
        // Pause the video when it's not in view
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <video
      ref={(node) => {
        ref(node); // Attach the Intersection Observer ref
        videoRef.current = node; // Attach the video ref
      }}
      preload="auto"
      autoPlay={inView}
      loop
      playsInline
      muted
      className="playback"
      aria-label={ariaLabel}>
      {/* see Figma table for calculations */}
      <source src={srcHi} type="video/webm" media="(min-width: 724px)" />
      <source src={srcMid} type="video/webm" media="(min-width: 542px)" />
      {/* the base is kinda min-width 360px */}
      <source src={srcLo} type="video/webm" />
    </video>
  );
};

Video.propTypes = {
  srcHi: PropTypes.string.isRequired,
  srcMid: PropTypes.string.isRequired,
  srcLo: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default Video;
