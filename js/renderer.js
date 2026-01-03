export const renderer = {
	render(output) {
		switch (output.type) {
			case "text":
			case "help":
				this.renderText(output.content);
				break;
			case "list":
				this.renderList(output.content);
				break;
			case "error":
				this.renderError(output.content);
				break;
			case "clear":
				this.clearOutput(output.content);
				break;
		}
	},

	renderText(text) {
		const el = document.createElement("p");
		el.textContent = text;
		const outputContainer = document.getElementById("output-container");
		outputContainer.appendChild(el);
	},

	renderList(items) {
		const ul = document.createElement("ul");

		items.forEach(item => {
			const li = document.createElement("li");
			li.textContent = item;
			ul.appendChild(li);
		});

		const outputContainer = document.getElementById("output-container");
		outputContainer.appendChild(ul);
	},

	renderError(msg) {
		const el = document.createElement("p");
		el.textContent = msg;
		el.style.color = "red";

		const outputContainer = document.getElementById("output-container");
		outputContainer.appendChild(el);
	},

	clearOutput() {
		const outputContainer = document.getElementById("output-container");
		outputContainer.replaceChildren();
	}
}
