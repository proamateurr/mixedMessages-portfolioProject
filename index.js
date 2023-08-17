// Arrays that store the data being pulled y the functions

const greetings = {
    morningGreetings : ["Good morning, champion! Rise and shine, for you have a brand new canvas to paint your dreams upon.",
    "Hello, world changer! Embrace this morning as an opportunity to make a positive impact.",
    "Good morning! The world awaits your unique brilliance today. Step into it with confidence.",
    "Rise and grind, go-getter! Today is your chance to create the success story you\'ve always envisioned.",
    "Good morning! Let your passion guide you through this day, turning every challenge into a stepping stone to greatness."],
    
    afternoonGreetings : ["Good afternoon! Harness the energy of the sun and power through the rest of your day with unwavering determination.",
    "Hello, achiever! The afternoon is a reminder that you still have plenty of time to conquer your goals.",
    "Good afternoon! Don\'t slow down now—your efforts in the morning deserve to be followed by an equally impressive afternoon.",
    "Stay strong, warrior! Let your afternoon be a testament to your resilience and commitment.",
    "Hello! It\'s never too late to turn an ordinary day into an extraordinary one. Make this afternoon count!"],

    eveningGreetings : ["Good evening! Reflect on the progress you\'ve made today and let it fuel your determination for tomorrow.",
    "Hello! Evenings are a chance to recharge and plan for a brighter, more successful tomorrow.",
    "Wishing you an empowering evening! Use this time to set intentions for a productive day ahead.",
    "Good evening! Remember, every sunset is an opportunity to reset and prepare for a sunrise of new possibilities.",
    "As the day comes to a close, let\'s remember that every small step forward is a victory. Keep up the great work!"]
};

const motivationalPhrases = [
    "Believe in the power of your dreams and take the steps to make them a reality.",
    "Success is built on the foundation of persistence and determination.",
    "Every small step forward is a victory on the path to your goals.",
    "Embrace challenges as opportunities to grow and learn.",
    "Your mindset shapes your reality, so choose positivity and watch your world transform.",
    "Don\'t be afraid to start, for the journey of a thousand miles begins with a single step.",
    "Rise above the excuses and limitations; you are capable of more than you realize.",
    "In the face of adversity, you have the strength to rise like a phoenix.",
    "Your potential is limitless; let your actions reflect your belief in yourself.",
    "Setbacks are setups for comebacks—keep moving forward no matter what.",
    "Each day is a fresh chance to rewrite your story and chase your dreams.",
    "Replace \'I can\'t\' with \'I will\' and witness the transformation in your accomplishments.",
    "Challenges are like weights in the gym of life, making you stronger with every lift.",
    "Focus on progress, not perfection; each effort brings you closer to excellence.",
    "The only limits that exist are the ones you place upon yourself.",
    "Fuel your actions with passion, and watch your determination ignite success.",
    "Surround yourself with positivity and watch your world blossom.",
    "You have the power to turn setbacks into stepping stones for success.",
    "Every day is a gift; make the most of it by pursuing your passions.",
    "Stay committed to your goals, even when the journey gets tough.",
    "Your mindset is the compass that guides you towards your desired destination.",
    "Celebrate your progress, no matter how small, and use it to propel you forward.",
    "Fear is just a stepping stone on the path to courage and achievement.",
    "Visualize your success and let that vision drive your actions and decisions.",
    "Remember, you are the author of your own story—make it a bestseller."
];

const dailyQuotes = [
    '"The only way to do great work is to love what you do." - Steve Jobs',
    '"Believe you can and you\'re halfway there." - Theodore Roosevelt',
    '"Success is not final, failure is not fatal: It is the courage to continue that counts." - Winston Churchill',
    '"Don\'t watch the clock; do what it does. Keep going." - Sam Levenson',
    '"The future depends on what you do today." - Mahatma Gandhi',
    '"Your time is limited, do not waste it living someone elses life." - Steve Jobs',
    '"The only thing standing between you and your dream is the will to try and the belief that it is actually possible." - Joel Brown',
    '"It does not matter how slowly you go as long as you do not stop." - Confucius',
    '"The harder the conflict, the greater the triumph." - George Washington',
    '"Success is walking from failure to failure with no loss of enthusiasm." - Winston Churchill',
    '"The best way to predict the future is to create it." - Peter Drucker',
    '"Don\'t be pushed around by the fears in your mind. Be led by the dreams in your heart." - Roy T. Bennett',
    '"The only limit to our realization of tomorrow will be our doubts of today." - Franklin D. Roosevelt',
    '"I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination." - Jimmy Dean',
    '"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." - Albert Schweitzer',
    '"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt',
    '"Your life does not get better by chance, it gets better by change." - Jim Rohn',
    '"The only person you should try to be better than is the person you were yesterday." - Unknown',
    '"Success is stumbling from failure to failure with no loss of enthusiasm." - Winston Churchill',
    '"Dream big and dare to fail." - Norman Vaughan',
    '"What you get by achieving your goals is not as important as what you become by achieving your goals." - Zig Ziglar',
    '"Success is not in what you have, but who you are." - Bo Bennett',
    '"The harder I work, the luckier I get." - Samuel Goldwyn',
    '"If you believe in yourself and have dedication and pride—and never quit—you\'ll be a winner. The price of victory is high, but so are the rewards." - Bear Bryant',
    '"The only thing standing between you and your dream is the will to try and the belief that it is actually possible." - Joel Brown',
];

// Selects a random phrase 

const randomPhrase = () => {
    return motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
}

// Selects a random quote

const randomQuote = () => {
    return dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];
}

// Selects a random greeting according to the time of day 

const greetingsMessage = () => {
    let today = new Date();
    let hour = today.getHours();
    let minutes = today.getMinutes();
    if (hour >= 18) {
        return greetings.eveningGreetings[Math.floor(Math.random() * greetings.eveningGreetings.length)];
    } else if (hour > 12 && minutes > 0) {
        return greetings.afternoonGreetings[Math.floor(Math.random() * greetings.afternoonGreetings.length)];
    } else if(hour > 0) {
        return greetings.morningGreetings[Math.floor(Math.random() * greetings.eveningGreetings.length)];
    } else {error}
}

// Logging all three components

const mixedMessage = () => {
    return console.log(`${greetingsMessage()}`), console.log(`${randomPhrase()}`), console.log(`Daily Quote: ${randomQuote()}`);
}

mixedMessage()