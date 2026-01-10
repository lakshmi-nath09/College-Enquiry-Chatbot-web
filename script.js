let step = "main";

function addUserMsg(text) {
  const chatBox = document.getElementById("chat-box");
  const div = document.createElement("div");
  div.className = "user-msg";
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function addBotMsg(text) {
  const chatBox = document.getElementById("chat-box");
  const div = document.createElement("div");
  div.className = "bot-msg";
  div.innerText = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function setOptions(buttons) {
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  buttons.forEach(btn => {
    const b = document.createElement("button");
    b.innerText = btn.text;
    b.onclick = () => handleOption(btn.value);
    optionsDiv.appendChild(b);
  });
}

function handleOption(option) {
  addUserMsg(option.toUpperCase());

  if (step === "main") {
    if (option === "courses") {
      addBotMsg("We offer the following branches. Please choose one:");
      setOptions([
        { text: "CSE", value: "cse" },
        { text: "ECE", value: "ece" },
        { text: "EEE", value: "eee" },
        { text: "MECH", value: "mech" },
        { text: "CIVIL", value: "civil" }
      ]);
      step = "branches";
    }

    else if (option === "fees") {
      addBotMsg("Fee details vary per course. Please check the official college website.");
      reset();
    }

    else if (option === "timings") {
      addBotMsg("College timings are from 9:00 AM to 4:30 PM.");
      reset();
    }

    else if (option === "placements") {
      addBotMsg("Our college provides excellent placement support with top recruiters.");
      reset();
    }

    else if (option === "facilities") {
      addBotMsg("Select a facility:");
      setOptions([
        { text: "Library", value: "library" },
        { text: "Hostel", value: "hostel" }
      ]);
      step = "facilities";
    }
  }

  else if (step === "branches") {
    addBotMsg(option.toUpperCase() + " branch focuses on strong academics and career growth.");
    reset();
  }

  else if (step === "facilities") {
    if (option === "library") {
      addBotMsg("Library is open from 8:00 AM to 8:00 PM with digital resources.");
    } else {
      addBotMsg("Separate hostel facilities are available for boys and girls.");
    }
    reset();
  }
}

function reset() {
  setTimeout(() => {
    addBotMsg("What else would you like to know?");
    setOptions([
      { text: "Courses", value: "courses" },
      { text: "Fees", value: "fees" },
      { text: "Timings", value: "timings" },
      { text: "Placements", value: "placements" },
      { text: "Facilities", value: "facilities" }
    ]);
    step = "main";
  }, 500);
}
