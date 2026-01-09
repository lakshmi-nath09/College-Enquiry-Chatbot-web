function reply(option) {
  const chatBox = document.getElementById("chat-box");

  // User message
  const userDiv = document.createElement("div");
  userDiv.className = "user-msg";
  userDiv.innerText = option.toUpperCase();
  chatBox.appendChild(userDiv);

  let response = "";

  if (option === "courses")
    response = "We offer CSE, ECE, EEE, MECH and CIVIL branches.";

  else if (option === "fees")
    response = "Fee details vary per course. Please check the official website.";

  else if (option === "timings")
    response = "College timings are from 9:00 AM to 4:30 PM.";

  else if (option === "placements")
    response = "Our college provides excellent placement support.";

  else if (option === "library")
    response = "Library is open from 8:00 AM to 8:00 PM.";

  else if (option === "hostel")
    response = "Separate hostel facilities are available for boys and girls.";

  // Bot message
  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.className = "bot-msg";
    botDiv.innerText = response;
    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);
}
