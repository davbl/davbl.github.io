// This is to use a different grey bg color for am video container - for seamlessness
// And additionally, to show mp4 vids in Safari, and avif vids in the rest of the browsers

export const detectBrowserAndOS = () => {
  const ua = navigator.userAgent;
  const maxTouchPoints = navigator.maxTouchPoints || 0;

  let isMac = false;
  let isFirefox = false;
  let isIos = false;
  let isSafari = false;

  // iOS Detection
  // Primary detection for iPhones, iPads, iPods
  // Note: The `i` makes it case-insensitive - to future-proof, make more robust
  if (/iPad|iPhone|iPod/i.test(ua)) {
    isIos = true;
  }
  // iPad - Additional detection for iPadOS 13+
  // where iPads report as Macintosh with touch
  else if (/Macintosh/i.test(ua) && maxTouchPoints > 1) {
    isIos = true;
  }

  // macOS detection (excluding iOS)
  if (/Macintosh|Mac OS X/i.test(ua) && !isIos) {
    isMac = true;
  }

  // Firefox detection
  if (/Firefox/i.test(ua)) {
    isFirefox = true;
  }

  // Safari detection
  // Note: Chrome on iOS appears as “CriOS” but might still sometimes contain “Safari” in the string, so this exclusion ensures we only detect real Safari.
  if (/Safari/i.test(ua) && !/Chrome|Chromium/i.test(ua)) {
    isSafari = true;
  }

  return { isMac, isFirefox, isIos, isSafari };
};
