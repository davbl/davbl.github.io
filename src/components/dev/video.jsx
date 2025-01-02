import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "./video.css";
import { detectBrowserAndOS } from "../../utils/browserDetect";

function Video({
  srcAvifHi,
  srcAvifMid,
  srcAvifLo,
  srcMp4Hi,
  srcMp4Mid,
  srcMp4Lo,
  ariaLabel,
  poster,
}) {
  // Use the useInView hook to monitor visibility
  // play/pause works only for mp4 vids, not avif
  const { ref, inView } = useInView({
    // I had to lower the threshold from 0.75 to 0 due to mobile/safari. The vid visibly flashes when it starts playing (on iphone).
    threshold: 0, // % visibility of video
  });

  // Ref to access the video element
  const videoRef = useRef(null);

  // Effect to play/pause the video based on visibility
  useEffect(() => {
    async function handleVideoPlayback() {
      if (!videoRef.current) return;

      try {
        if (inView) {
          await videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      } catch (error) {
        console.error("Error controlling video playback:", error);
      }
    }

    handleVideoPlayback();
  }, [inView]);

  // if Safari, play mp4, otherwise play avif vids
  const { isSafari } = detectBrowserAndOS();

  if (isSafari) {
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
        poster={poster}
        aria-label={ariaLabel}>
        {/* SAFARI - same vids but mp4 hevc format for desktop and mobile Safari */}
        <source src={srcMp4Hi} type="video/mp4" media="(min-width: 724px)" />
        <source src={srcMp4Mid} type="video/mp4" media="(min-width: 542px)" />
        <source src={srcMp4Lo} type="video/mp4" />
      </video>
    );
  } else {
    return (
      <picture className="playback" aria-label={ariaLabel}>
        {/* see Figma table for min-width calculations */}
        <source srcSet={srcAvifHi} media="(min-width: 724px)" />
        <source srcSet={srcAvifMid} media="(min-width: 542px)" />
        {/* the base is kinda min-width 360px */}
        <img src={srcAvifLo} className="playback" alt={ariaLabel} />
      </picture>
    );
  }
}

Video.propTypes = {
  srcAvifHi: PropTypes.string.isRequired,
  srcAvifMid: PropTypes.string.isRequired,
  srcAvifLo: PropTypes.string.isRequired,
  srcMp4Hi: PropTypes.string.isRequired,
  srcMp4Mid: PropTypes.string.isRequired,
  srcMp4Lo: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  poster: PropTypes.string,
};

export default Video;
