export const commands = {
	about: {
		description: "About me",
		execute: (data) => ({
			type: "text",
			content: data.about
		})
	},

	skills: {
		description: "Technologies I use",
		execute: (data) => ({
			type: "list",
			content: data.skills
		})
	},

	help: {
		description: "List available commands",
		execute: () => ({
			type: "help"
		})
	},

	clear: {
		description: "Removes all output from previous commands",
		execute: () => ({
			type: "clear"
		})
	},
}
