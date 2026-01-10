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
  const interval = setInterval(() => {
    if (i < text.length) {
      if (i === 0) addMessage("", "bot");
      chatBox.lastChild.innerText += text[i];
      i++;
    } else {
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

  setTimeout(() => {
    chatbotReply(choice.toLowerCase());
  }, 500);
}

function chatbotReply(input) {
  if (input === "courses") {
    typingEffect("Great choice 😊 Which branch are you interested in?", () => {
      showOptions(["CSE", "ECE", "EEE", "MECH", "CIVIL"]);
    });
  }
  else if (input === "cse") {
    typingEffect("CSE is one of our most popular branches 💻", () => {
      typingEffect("What would you like to know about CSE?", () => {
        showOptions(["Subjects", "Placements", "Fees", "Back"]);
      });
    });
  }
  else if (input === "subjects") {
    typingEffect("CSE includes Programming, Data Structures, AI, and Web Technologies.", () => {
      askAnythingElse();
    });
  }
  else if (input === "placements") {
    typingEffect("Our college offers excellent placement support with top recruiters.", () => {
      askAnythingElse();
    });
  }
  else if (input === "fees") {
    typingEffect("Fee details vary per course. Please check the official website.", () => {
      askAnythingElse();
    });
  }
  else if (input === "timings") {
    typingEffect("College timings are from 9:00 AM to 4:30 PM 🕘", () => {
      askAnythingElse();
    });
  }
  else if (input === "facilities") {
    typingEffect("We provide library, hostel, labs, and sports facilities 🏫", () => {
      askAnythingElse();
    });
  }
  else if (input === "back") {
    startBot();
  }
  else {
    typingEffect("Sorry 😅 I didn’t understand that. Please choose an option.");
    showMainMenu();
  }
}

function askAnythingElse() {
  typingEffect("What else would you like to know?", () => {
    showMainMenu();
  });
}

function showMainMenu() {
  showOptions(["Courses", "Fees", "Timings", "Placements", "Facilities"]);
}

function startBot() {
  typingEffect("👋 Welcome to Vardhaman College Enquiry Bot 🤖", () => {
    typingEffect("Please select an option below 👇", () => {
      showMainMenu();
    });
  });
}

function sendUserMessage() {
  const text = userInput.value.trim();
  if (!text) return;
  addMessage(text, "user");
  userInput.value = "";
  setTimeout(() => chatbotReply(text.toLowerCase()), 500);
}

startBot();
