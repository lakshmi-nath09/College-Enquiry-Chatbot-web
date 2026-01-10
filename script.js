const chatBox = document.getElementById("chat-box");
const optionsDiv = document.getElementById("options");
const userInput = document.getElementById("user-input");

/* Add message */
function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = sender === "bot" ? "bot-msg" : "user-msg";
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

/* Typing effect – FIXED (no chipak text) */
function typingEffect(text, callback) {
  const msg = document.createElement("div");
  msg.className = "bot-msg";
  chatBox.appendChild(msg);

  let i = 0;
  const interval = setInterval(() => {
    msg.textContent = text.slice(0, i + 1);
    i++;
    chatBox.scrollTop = chatBox.scrollHeight;

    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 30);
}

/* Show buttons */
function showOptions(options) {
  optionsDiv.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => handleUserChoice(opt);
    optionsDiv.appendChild(btn);
  });
}

/* Button click */
function handleUserChoice(choice) {
  addMessage(choice, "user");
  optionsDiv.innerHTML = "";
  setTimeout(() => chatbotReply(choice.toLowerCase()), 400);
}

/* Chatbot brain */
function chatbotReply(input) {

  // greetings (human typing)
  if (["hi", "hii", "hello", "hey"].includes(input)) {
    typingEffect(
      "Hi there 😊\nHow can I help you today?",
      showMainMenu
    );
    return;
  }

  if (input === "courses") {
    typingEffect(
      "Great choice 😊\nWhich branch are you interested in?",
      () => showOptions(["CSE", "ECE", "EEE", "MECH", "CIVIL"])
    );
  }

  else if (input === "cse") {
    typingEffect(
      "CSE is one of our most popular branches 💻\nWhat would you like to know?",
      () => showOptions(["Subjects", "Placements", "Fees", "Back"])
    );
  }

  else if (input === "subjects") {
    typingEffect(
      "CSE includes Programming, Data Structures, AI, and Web Technologies.",
      askMore
    );
  }

  else if (input === "placements") {
    typingEffect(
      "Our college provides excellent placement support with top recruiters.",
      askMore
    );
  }

  else if (input === "fees") {
    typingEffect(
      "Fee details vary per course.\nPlease check the official college website.",
      askMore
    );
  }

  else if (input === "timings") {
    typingEffect(
      "College timings are from 9:00 AM to 4:30 PM 🕘",
      askMore
    );
  }

  else if (input === "facilities") {
    typingEffect(
      "Facilities include library, hostel, labs, and sports 🏫",
      askMore
    );
  }

  else if (input === "back") {
    startBot();
  }

  else {
    typingEffect(
      "Sorry 😅 I didn’t understand that.\nPlease choose an option.",
      showMainMenu
    );
  }
}

/* Ask more */
function askMore() {
  typingEffect("What else would you like to know?", showMainMenu);
}

/* Main menu */
function showMainMenu() {
  showOptions(["Courses", "Fees", "Timings", "Placements", "Facilities"]);
}

/* Start bot */
function startBot() {
  chatBox.innerHTML = "";
  typingEffect(
    "👋 Welcome to Vardhaman College Enquiry Bot 🤖",
    () => typingEffect(
      "Please select an option below 👇",
      showMainMenu
    )
  );
}

/* User typing */
function sendUserMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  addMessage(text, "user");
  userInput.value = "";
  setTimeout(() => chatbotReply(text.toLowerCase()), 400);
}

/* INIT */
startBot();
