const bubblesData = [
    { color: '#FF5959', letter: 'T' }, // Red for 'T'
    { color: '#FF5959', letter: 'U' }, // Red for 'U'
    { color: '#6CD936', letter: 'A' }, // Green for 'A'
    { color: '#4DA6FF', letter: 'C' }, // Blue for 'C'
    { color: '#FF8F40', letter: 'G' }  // Orange for 'G'
];
const numBubbles = 20;

function getRandomPosition() {
    const exclusionZone = {
        top: window.innerHeight / 3,
        bottom: (2 * window.innerHeight) / 3,
        left: window.innerWidth / 4,
        right: (3 * window.innerWidth) / 4
    };

    let x, y;
    do {
        x = Math.random() * window.innerWidth;
        y = Math.random() * window.innerHeight;
    } while (
        x > exclusionZone.left &&
        x < exclusionZone.right &&
        y > exclusionZone.top &&
        y < exclusionZone.bottom
    );

    return { x, y };
}

for (let i = 0; i < numBubbles; i++) {
    const bubble = document.createElement('div');
    const bubbleData = bubblesData[i % bubblesData.length];
    bubble.classList.add('bubble');

    const size = Math.random() * 20 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.fontSize = `${size / 2}px`; // Font size scales with bubble size
    bubble.style.backgroundColor = bubbleData.color;

    const { x, y } = getRandomPosition();
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    const duration = Math.random() * 10 + 15; // 15-25 seconds
    bubble.style.animationDuration = `${duration}s`;
    bubble.style.animationDelay = `${Math.random() * 10}s`;

    const distance = 100 + Math.random() * 100; // 100-200 pixels
    const angle = Math.random() * 360; // Random angle in degrees
    const wobbleX = Math.random() * 20 - 10; // -10 to 10 pixels
    const wobbleY = Math.random() * 20 - 10; // -10 to 10 pixels

    bubble.style.setProperty('--move-x', `${Math.cos(angle * Math.PI / 180) * distance + wobbleX}`);
    bubble.style.setProperty('--move-y', `${Math.sin(angle * Math.PI / 180) * distance + wobbleY}`);

    bubble.textContent = bubbleData.letter;
    document.body.appendChild(bubble);
}