import { commands } from "./commands.js";
import { portfolioData } from "./data.js";
import { renderer } from "./renderer.js";

const input = document.getElementById("command");

let commandHistory = [];
let commandHistoryPointer;

input.addEventListener("keydown", (e) => {

	// Check pointer value to ensure it doesn't go out of bounds
	if (e.key === "ArrowUp" && commandHistoryPointer > 0) {
		e.preventDefault();
		input.value = commandHistory[--commandHistoryPointer];
	}

	else if (e.key == "ArrowDown") {
		e.preventDefault();
		if (commandHistoryPointer < commandHistory.length - 1) {
			// We move forward in history
			input.value = commandHistory[++commandHistoryPointer];
		}
		else {
			// We are at the bottom, so we clear the input (new prompt)
			input.value = ""
		}
	}

	// Continue gathering input until user clicks enter
	if (e.key !== "Enter") return;

	const userInput = input.value.trim().toLowerCase();

	// Handle empty string input like regular terminal
	// Do not show error. Just print empty output and show new prompt
	// Do not add to command history
	if (!userInput)
		renderer.render({ type: "text", content: "", command: "" });

	else if (!commands[userInput])
		renderer.renderError(userInput);

	else {
		const output = commands[userInput].execute(portfolioData);
		renderer.render(output);
	}

	// Add input to history of commands and
	// increment the pointer
	if (userInput) {
		commandHistory.push(userInput);
		commandHistoryPointer = commandHistory.length;
		console.log("Commands: ", commandHistory);
	}

	input.value = "";
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: "smooth"
	});
})
