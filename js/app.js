import { commands } from "./commands.js";
import { portfolioData } from "./data.js";
import { renderer } from "./renderer.js";

const input = document.getElementById("command");


input.addEventListener("keydown", (e) => {
	if (e.key !== "Enter") return;

	const userInput = input.value.trim().toLowerCase();

	if (!commands[userInput]) {
		renderer.renderError(userInput);
	} else {
		const output = commands[userInput].execute(portfolioData);
		renderer.render(output);
	}

	input.value = "";
	window.scrollTo({
		top: document.body.scrollHeight,
		behavior: "smooth"
	});
})
