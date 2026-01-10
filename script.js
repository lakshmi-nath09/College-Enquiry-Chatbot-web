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
  chatBox.appendChild(div);

  let i = 0;
  const typing = setInterval(() => {
    if (i < text.length) {
      div.innerText += text.charAt(i);
      i++;
      chatBox.scrollTop = chatBox.scrollHeight;
    } else {
      clearInterval(typing);
    }
  }, 30);
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
      addBotMsg("Sure 😊 Please select a branch you want to know about:");
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
      addBotMsg("Fee details vary by course. Please refer to the official college website for exact information.");
      goBack();
    }

    else if (option === "timings") {
      addBotMsg("College timings are from 9:00 AM to 4:30 PM, Monday to Friday.");
      goBack();
    }

    else if (option === "placements") {
      addBotMsg("Our college offers strong placement support with top companies recruiting every year.");
      goBack();
    }

    else if (option === "facilities") {
      addBotMsg("We provide the following facilities. Please choose one:");
      setOptions([
        { text: "Library", value: "library" },
        { text: "Hostel", value: "hostel" }
      ]);
      step = "facilities";
    }
  }

  else if (step === "branches") {
    addBotMsg(option.toUpperCase() + " branch focuses on quality academics, labs, and excellent career opportunities.");
    goBack();
  }

  else if (step === "facilities") {
    if (option === "library") {
      addBotMsg("The library is open from 8:00 AM to 8:00 PM and includes digital resources.");
    } else {
      addBotMsg("Separate hostel facilities are available for boys and girls with all basic amenities.");
    }
    goBack();
  }
}

function goBack() {
  setTimeout(() => {
    addBotMsg("Is there anything else I can help you with? 🤖");
    setOptions([
      { text: "Courses", value: "courses" },
      { text: "Fees", value: "fees" },
      { text: "Timings", value: "timings" },
      { text: "Placements", value: "placements" },
      { text: "Facilities", value: "facilities" }
    ]);
    step = "main";
  }, 800);
}
