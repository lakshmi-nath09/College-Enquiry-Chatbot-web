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

  // Branches & courses
  if (query.includes("course") || query.includes("branch"))
    response = "We offer CSE, ECE, EEE, MECH, and CIVIL branches.";
  else if (query.includes("cse"))
    response = "CSE branch includes programming, AI, Data Structures, and more.";
  else if (query.includes("ece"))
    response = "ECE branch includes Electronics, Communication, and Microcontrollers.";
  else if (query.includes("eee"))
    response = "EEE branch includes Electrical Machines, Circuits, and Power Systems.";
  else if (query.includes("mech"))
    response = "MECH branch includes Thermodynamics, Mechanics, and Manufacturing.";
  else if (query.includes("civil"))
    response = "CIVIL branch includes Structures, Surveying, and Construction.";

  // Fees & scholarships
  else if (query.includes("fee") || query.includes("tuition"))
    response = "Fee details vary per course. Check the official college website.";
  else if (query.includes("scholarship"))
    response = "Merit-based and need-based scholarships are available. Apply via college portal.";

  // College timings & exams
  else if (query.includes("time") || query.includes("timing"))
    response = "College timings are 9 AM - 5 PM, Monday to Friday.";
  else if (query.includes("exam"))
    response = "Semester exams are conducted in Dec and May. Check timetable on portal.";
  else if (query.includes("holiday"))
    response = "Next holiday is on 26th Jan (Republic Day).";

  // Placements & internships
  else if (query.includes("placement"))
    response = "Placement support is available for all branches.";
  else if (query.includes("companies"))
    response = "Top recruiters include TCS, Infosys, Wipro, Accenture, and more.";
  else if (query.includes("internship"))
    response = "Internship details are shared via the training & placement cell.";

  // Library & facilities
  else if (query.includes("library"))
    response = "Library is open 9 AM - 5 PM. Books and journals are available.";
  else if (query.includes("sports"))
    response = "Sports facilities include cricket, badminton, football, and gym.";
  else if (query.includes("canteen") || query.includes("food"))
    response = "Canteen serves breakfast, lunch, and snacks from 8 AM - 6 PM.";

  // Contacts & website
  else if (query.includes("contact"))
    response = "Call +91-1234567890 or email info@vardhaman.ac.in";
  else if (query.includes("website"))
    response = "Visit official website: https://www.vardhaman.ac.in";
  else if (query.includes("admission"))
    response = "Admission process details are on the official college website.";
  else if (query.includes("hostel"))
    response = "Hostel facilities available for boys and girls. Contact hostel warden for info.";

  // Add bot message
  const botMsgDiv = document.createElement("div");
  botMsgDiv.className = "bot-msg";
  botMsgDiv.innerText = response;
  chatBox.appendChild(botMsgDiv);

  // Clear input & scroll
  document.getElementById("user-input").value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
