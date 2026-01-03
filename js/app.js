import { commands } from "./commands.js";
import { portfolioData } from "./data.js";
import { renderer } from "./renderer.js";

console.log("connected");

const input = document.getElementById("command");


input.addEventListener("keydown", (e) => {
	if (e.key !== "Enter") return;

	const userInput = input.value.trim().toLowerCase();

	if (!commands[userInput]) {
		renderer.renderError(`Command not found: ${userInput}`);
	} else {
		const output = commands[userInput].execute(portfolioData);
		renderer.render(output);
	}

	input.value = "";
})
