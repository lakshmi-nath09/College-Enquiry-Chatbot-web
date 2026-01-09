import tkinter as tk
from tkinter import scrolledtext

# Function to handle user input
def send():
    user_input = entry.get()
    if not user_input.strip():
        return  # Ignore empty input
    
    chat_log.config(state=tk.NORMAL)
    chat_log.insert(tk.END, f"You: {user_input}\n", "user")
    
    query = user_input.lower()
    
    # Rule-based responses
    if "course" in query:
        response = "We offer CSE, ECE, EEE, MECH, and CIVIL branches."
    elif "cse" in query:
        response = "CSE branch includes programming, AI, Data Structures, and more."
    elif "ece" in query:
        response = "ECE branch includes Electronics, Communication, and Microcontrollers."
    elif "eee" in query:
        response = "EEE branch includes Electrical Machines, Circuits, and Power Systems."
    elif "mech" in query:
        response = "MECH branch includes Thermodynamics, Mechanics, and Manufacturing."
    elif "civil" in query:
        response = "CIVIL branch includes Structures, Surveying, and Construction."
    elif "timing" in query or "time" in query:
        response = "College timings are 9 AM - 5 PM, Monday to Friday."
    elif "fee" in query:
        response = "Fee details vary per course. Check the official college website."
    elif "placement" in query:
        response = "Placement support is available for all branches."
    else:
        response = "Sorry, I didn't understand your query. Please try again."

    chat_log.insert(tk.END, f"Bot: {response}\n\n", "bot")
    chat_log.config(state=tk.DISABLED)
    chat_log.yview(tk.END)
    entry.delete(0, tk.END)

# Create main window
root = tk.Tk()
root.title("College Enquiry Chatbot 🤖")
root.geometry("600x500")
root.resizable(False, False)

# Chat log (scrollable)
chat_log = scrolledtext.ScrolledText(root, width=70, height=25, wrap=tk.WORD, state=tk.DISABLED)
chat_log.pack(padx=10, pady=10)

# Tag colors for user and bot
chat_log.tag_config("user", foreground="blue", font=("Arial", 10, "bold"))
chat_log.tag_config("bot", foreground="green", font=("Arial", 10, "italic"))

# Entry box
entry = tk.Entry(root, width=50, font=("Arial", 12))
entry.pack(side=tk.LEFT, padx=(10, 0), pady=10)

# Send button
send_button = tk.Button(root, text="Send", width=10, command=send)
send_button.pack(side=tk.LEFT, padx=10, pady=10)

# Welcome message
chat_log.config(state=tk.NORMAL)
chat_log.insert(tk.END, "Welcome to College Enquiry Bot 🤖\nType your query below (e.g., 'Courses', 'CSE', 'Fee', 'Timing')\n\n", "bot")
chat_log.config(state=tk.DISABLED)

root.mainloop()
