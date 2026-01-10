const chatBox = document.getElementById("chat-box");
const optionsDiv = document.getElementById("options");
const userInput = document.getElementById("user-input");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.className = sender === "bot" ? "bot-msg" : "user-msg";
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function typingEffect(text, callback) {
  let i = 0;
  const msg = document.createElement("div");
  msg.className = "bot-msg";
  chatBox.appendChild(msg);

  const interval = setInterval(() => {
    msg.innerText += text[i];
    i++;
    chatBox.scrollTop = chatBox.scrollHeight;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 30);
}

function showOptions(options) {
  optionsDiv.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => handleUserChoice(opt);
    optionsDiv.appendChild(btn);
  });
}

function handleUserChoice(choice) {
  addMessage(choice, "user");
  optionsDiv.innerHTML = "";
  setTimeout(() => chatbotReply(choice.toLowerCase()), 400);
}

function chatbotReply(input) {
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
      "CSE includes Programming, Data Structures, AI and Web Technologies.",
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
      "Facilities include library, hostel, labs and sports 🏫",
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

function askMore() {
  typingEffect("What else would you like to know?", showMainMenu);
}

function showMainMenu() {
  showOptions(["Courses", "Fees", "Timings", "Placements", "Facilities"]);
}

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

function sendUserMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  addMessage(text, "user");
  userInput.value = "";
  setTimeout(() => chatbotReply(text.toLowerCase()), 400);
}

startBot();
