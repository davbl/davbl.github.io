// This is to fix the behavior of user scroll position when going to and back from subpages Bola and Fundraising

let homeScrollPosition = 0;

export function setHomeScrollPosition(pos) {
  homeScrollPosition = pos;
}

export function getHomeScrollPosition() {
  return homeScrollPosition;
}
