const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Boss...");
        speak("How may I help you?")
    } else if (hour >= 12 && hour < 17) {
        speak("Good Afternoon Sir...");
        speak("How may I help you?")
    } else {
        speak("Good Evening Sir...");
        speak("How may I help you?")
    }
}

window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
});

function takeCommand(message) {
    const commands = [
        { keywords: ['hey', 'hello'], action: () => speak("Hello Sir, How may I help you?") },
        { keywords: ['who am i?', 'who is your master?', 'who created you?'], action: () => speak("You are Kunal Agrawal, my master, who created me.") },
        { keywords: ['open google'], action: () => openURL("https://google.com", "Google") },
        { keywords: ['open youtube'], action: () => openURL("https://youtube.com", "YouTube") },
        { keywords: ['open facebook'], action: () => openURL("https://facebook.com", "Facebook") },
        { keywords: ['what is', 'who is', 'what are'], action: () => openURL(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "Google Search") },
        { keywords: ['wikipedia'], action: () => openURL(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "").trim()}`, "Wikipedia") },
        { keywords: ['time'], action: () => speak(`The current time is ${new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" })}`) },
        { keywords: ['date'], action: () => speak(`Today's date is ${new Date().toLocaleString(undefined, { month: "short", day: "numeric" })}`) },
        { keywords: ['calculator'], action: () => { window.open('Calculator:///'); speak("Opening Calculator"); } },
        { keywords: ['wordpad'], action: () => { window.open('WordPad:///'); speak("Opening Word Pad"); } },
        { keywords: [], action: () => openURL(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "Google Search") } // Default action
    ];

    const command = commands.find(cmd => cmd.keywords.some(keyword => message.includes(keyword)));
    if (command) {
        command.action();
    }
}
}
