function sendMessage() {
  const userInput = document.getElementById("user-input").value.trim();
  if (!userInput) return;

  const chatBox = document.getElementById("chat-box");

  // Add user message
  const userMsgDiv = document.createElement("div");
  userMsgDiv.className = "user-msg";
  userMsgDiv.innerText = userInput;
  chatBox.appendChild(userMsgDiv);

  // Bot response
  let response = "Sorry, I didn't understand your query. Please try again.";

  const query = userInput.toLowerCase();
  if (query.includes("course")) response = "We offer CSE, ECE, EEE, MECH, and CIVIL branches.";
  else if (query.includes("cse")) response = "CSE branch includes programming, AI, Data Structures, and more.";
  else if (query.includes("ece")) response = "ECE branch includes Electronics, Communication, and Microcontrollers.";
  else if (query.includes("eee")) response = "EEE branch includes Electrical Machines, Circuits, and Power Systems.";
  else if (query.includes("mech")) response = "MECH branch includes Thermodynamics, Mechanics, and Manufacturing.";
  else if (query.includes("civil")) response = "CIVIL branch includes Structures, Surveying, and Construction.";
  else if (query.includes("fee")) response = "Fee details vary per course. Check the official college website.";
  else if (query.includes("time") || query.includes("timing")) response = "College timings are 9 AM - 5 PM, Monday to Friday.";
  else if (query.includes("placement")) response = "Placement support is available for all branches.";

  const botMsgDiv = document.createElement("div");
  botMsgDiv.className = "bot-msg";
  botMsgDiv.innerText = response;
  chatBox.appendChild(botMsgDiv);

  document.getElementById("user-input").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
