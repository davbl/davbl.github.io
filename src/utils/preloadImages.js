// Used for preloading images on link hover - for Bola and Fundraising subpages

export function preloadImages(urls) {
  urls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}
