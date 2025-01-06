import { useRef, useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
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
  //
  // if Safari, play mp4, otherwise play avif vids
  const { isSafari } = detectBrowserAndOS();

  // Use js instead of html's video src, bcs Safari initially plays low quality video even on large screen, possibly due to race conditions
  const [videoSrc, setVideoSrc] = useState(null); // Default to no source initially
  const isLargeScreen = useMediaQuery({ minWidth: 724 });
  const isMidScreen = useMediaQuery({ minWidth: 542, maxWidth: 723 });
  // const isSmallScreen = useMediaQuery({ maxWidth: 541 });

  useEffect(() => {
    if (!isSafari) return;

    function updateVideoSrc() {
      let selectedSrc;

      if (isLargeScreen) {
        selectedSrc = srcMp4Hi;
      } else if (isMidScreen) {
        selectedSrc = srcMp4Mid;
      } else {
        selectedSrc = srcMp4Lo;
      }

      setVideoSrc(selectedSrc);
      // console.log(
      //   `Viewport Width: ${width}px, Selected Video Source: ${selectedSrc}`
      // );
    }

    updateVideoSrc(); // Initial check
  }, [isSafari, srcMp4Hi, srcMp4Mid, srcMp4Lo, isLargeScreen, isMidScreen]);

  //
  // Use the useInView hook to monitor video visibility in viewport
  // note: play/pause works only for mp4 vids, not avif
  const { ref, inView } = useInView({
    // I had to lower the threshold from 0.75 to 0 due to mobile/safari. The vid visibly flashes when it starts playing (on iphone).
    threshold: 0, // % visibility of video
  });
  // Ref to access the video element
  const videoRef = useRef(null);

  // Effect to play/pause the video based on visibility, memoized
  const handleVideoPlayback = useCallback(async () => {
    if (!videoRef.current || !isSafari) return;

    try {
      if (inView) {
        await videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    } catch (error) {
      console.error("Error controlling video playback:", error);
    }
  }, [inView, isSafari]);

  useEffect(() => {
    if (!isSafari) return;
    handleVideoPlayback();
  }, [handleVideoPlayback, isSafari]);

  //
  // Render
  if (isSafari) {
    if (!videoSrc) return null;

    return (
      <video
        ref={(node) => {
          ref(node); // Attach the Intersection Observer ref
          videoRef.current = node; // Attach the video ref
        }}
        preload="auto"
        // autoPlay={inView}
        loop
        playsInline
        muted
        className="playback"
        poster={poster}
        aria-label={ariaLabel}>
        {/* SAFARI - same vids but mp4 hevc format for desktop and mobile Safari */}
        <source src={videoSrc} type="video/mp4" />
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
