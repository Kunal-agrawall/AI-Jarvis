// Select DOM elements
const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

// Speech Synthesis Utility Functions
function speak(text) {
  // Check if the text parameter is provided and is a string
  if (!text || typeof text !== 'string') {
    console.error('Invalid input for speak function. Expected a string.');
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.volume = 1;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function wishMe() {
  const currentHour = new Date().getHours();
  let greeting;

  // Determine the greeting based on the current hour
  if (currentHour >= 0 && currentHour < 12) {
    greeting = "Good Morning Boss...";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon Sir...";
  } else {
    greeting = "Good Evening Sir...";
  }

  speak(greeting);
  speak("How may I help you?");
}

// Speech Recognition Utility Functions
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// Check if the browser supports Speech Recognition
if (!SpeechRecognition) {
  console.error('Speech Recognition is not supported in this browser.');
} else {
  const recognition = new SpeechRecognition();

  recognition.onresult = (event) => {
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;

    // Validate and handle the transcript
    if (transcript && typeof transcript === 'string') {
      content.textContent = transcript;
      takeCommand(transcript.toLowerCase());
    } else {
      console.error('Invalid or undefined transcript received.');
    }
  };

  function takeCommand(message) {
    // Validate the input message
    if (!message || typeof message !== 'string') {
      console.error('Invalid input for takeCommand function. Expected a string.');
      return;
    }

    // Handle different voice commands
    if (message.includes('hey') || message.includes('hello')) {
      speak("Hello Sir, How May I Help You?");
    } else if (message.includes('who am i?') || message.includes('who is your master?') || message.includes("who created you?")) {
      speak("You are kunal agrawal, my master, who created me.");
    } else if (message.includes("open google")) {
      openWebsite("https://google.com", "Opening Google...");
    } else if (message.includes("open youtube")) {
      openWebsite("https://youtube.com", "Opening Youtube...");
    } else if (message.includes("open facebook")) {
      openWebsite("https://facebook.com", "Opening Facebook...");
    } else if (message.includes('what is') || message.includes('who is') || message.includes('what are')) {
      openGoogleSearch(message);
    } else if (message.includes('wikipedia')) {
      openWikipediaSearch(message);
    } else if (message.includes('time')) {
      getTime();
    } else if (message.includes('date')) {
      getDate();
    } else if (message.includes('calculator')) {
      openApplication('Calculator:///', 'Opening Calculator');
    } else if (message.includes('wordpad')) {
      openApplication('WordPad:///', 'Opening Word Pad');
    } else {
      openGoogleSearch(message, "I found some information for " + message + " on Google");
    }
  }

  function openWebsite(url, message) {
    // Validate the URL and message parameters
    if (!url || typeof url !== 'string') {
      console.error('Invalid URL provided for openWebsite function.');
      return;
    }

    if (!message || typeof message !== 'string') {
      console.error('Invalid message provided for openWebsite function.');
      return;
    }

    window.open(url, "_blank");
    speak(message);
  }

  function openGoogleSearch(query, message = "This is what I found on the internet regarding " + query) {
    // Validate the query parameter
    if (!query || typeof query !== 'string') {
      console.error('Invalid query provided for openGoogleSearch function.');
      return;
    }

    const searchURL = `https://www.google.com/search?q=${query.replace(" ", "+")}`;
    window.open(searchURL, "_blank");
    speak(message);
  }

  function openWikipediaSearch(query, message = "This is what I found on Wikipedia regarding " + query) {
    // Validate the query parameter
    if (!query || typeof query !== 'string') {
      console.error('Invalid query provided for openWikipediaSearch function.');
      return;
    }

    const searchTerm = query.replace("wikipedia", "").trim();
    const searchURL = `https://en.wikipedia.org/wiki/${searchTerm}`;
    window.open(searchURL, "_blank");
    speak(message);
  }

  function getTime() {
    const time = new Date().toLocaleString(undefined, { hour: "numeric", minute: "numeric" });
    const finalText = "The current time is " + time;
    speak(finalText);
  }

  function getDate() {
    const date = new Date().toLocaleString(undefined, { month: "short", day: "numeric" });
    const finalText = "Today's date is " + date;
    speak(finalText);
  }

  function openApplication(url, message) {
    // Validate the URL and message parameters
    if (!url || typeof url !== 'string') {
      console.error('Invalid URL provided for openApplication function.');
      return;
    }

    if (!message || typeof message !== 'string') {
      console.error('Invalid message provided for openApplication function.');
      return;
    }

    window.open(url);
    speak(message);
  }

  // Initialize JARVIS
  window.addEventListener('load', () => {
    speak("Initializing JARVIS...");
    wishMe();
  });

  // Event Listeners
  btn.addEventListener('click', () => {
    content.textContent = "Listening...";
    recognition.start();
  });
}