const beginnings = [
    "The stars are aligning in your favor,",
    "Cosmic energy surrounds you today,",
    "A new cycle begins for your sign,",
    "The universe whispers a subtle message,",
    "Your planetary ruler sends you strength,",
    "This week carries a powerful vibration,",
    "Celestial forces highlight your path,",
    "The moon’s glow reveals hidden truths,"
];

const midlles = [
    "bringing clarity to your relationships,",
    "opening doors in your career,",
    "challenging your patience and resilience,",
    "inviting unexpected opportunities,",
    "guiding you towards inner balance,",
    "testing your emotional stability,",
    "awakening your creative spirit,",
    "strengthening your confidence,"
];

const endings =[
    "so trust your instincts and move forward boldly.",
    "reminding you to slow down and breathe.",
    "if you remain open to change and growth.",
    "so let go of doubts and embrace your vision.",
    "and you will discover a hidden blessing.",
    "but balance is needed to avoid burnout.",
    "as long as you stay true to your values.",
    "and new connections will enrich your journey."
];

function getRandomMessage() {
    const beginning = beginnings[Math.floor(Math.random() * beginnings.length)];
    const middle = midlles[Math.floor(Math.random() * midlles.length)];
    const ending = endings[Math.floor(Math.random() * endings.length)];
    return `${beginning} ${middle} ${ending}`;
}
console.log("your prediction for today is: "+getRandomMessage());