import { commands } from "./commands.js";

export const renderer = {
	render(output) {

		const outputContainer = document.getElementById("output-container");
		const prompt = this.createPrompt(output.command);
		let el;

		switch (output.type) {
			case "text":
				el = this.renderText(output.content);
				break;
			case "list":
				el = this.renderList(output.content);
				break;
			case "help":
				el = this.renderHelp(output.content);
				break
			case "clear":
				this.clearOutput();
				return;
		}

		outputContainer.appendChild(prompt);
		outputContainer.appendChild(el);

	},

	renderText(text) {
		const el = document.createElement("p");
		el.textContent = text;

		return el
	},

	renderList(items) {
		const ul = document.createElement("ul");

		items.forEach(item => {
			const li = document.createElement("li");
			li.textContent = item;
			ul.appendChild(li);
		});

		return ul;
	},

	renderHelp() {
		const dl = document.createElement("dl")
		for (const [key, value] of Object.entries(commands)) {
			const dt = document.createElement("dt");
			const dd = document.createElement("dd");

			dt.classList.add("help-dt");
			dt.innerText = key;
			dd.classList.add("help-dd");
			dd.innerText = "- " + value.description;

			dl.appendChild(dt);
			dl.appendChild(dd);
		}

		return dl;
	},

	renderError(invalidCommand) {
		const outputContainer = document.getElementById("output-container");
		const prompt = this.createPrompt(invalidCommand);
		const el = document.createElement("p");

		el.textContent = `Command not found: ${invalidCommand}`;
		el.style.color = "red";

		outputContainer.appendChild(prompt);
		outputContainer.appendChild(el);

	},

	clearOutput() {
		const outputContainer = document.getElementById("output-container");
		outputContainer.replaceChildren();
	},

	createPrompt(command) {

		const prevCommandContainer = document.createElement("div");
		const prompt = document.createElement("span");
		const commandEl = document.createElement("span");
		const username = document.createElement("span");
		const hostname = document.createElement("span")

		// Setting up previous command container
		prevCommandContainer.classList.add("input-container");
		prompt.classList.add("prompt");

		// Designing the prompt
		username.classList.add("username");
		username.innerText = "visitor";
		hostname.classList.add("hostname");
		hostname.innerText = "terminal.dev";
		prompt.appendChild(username);
		prompt.append("@");
		prompt.appendChild(hostname);
		prompt.append(":~$");

		// Including the previous command name
		commandEl.classList.add("command-text");
		commandEl.innerText = command;

		// Adding all children
		prevCommandContainer.appendChild(prompt);
		prevCommandContainer.appendChild(commandEl);

		return prevCommandContainer;
	},

}
