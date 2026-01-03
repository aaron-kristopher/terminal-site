export const commands = {
	about: {
		description: "Display professional summary",
		execute: (data) => ({
			command: "about",
			type: "text",
			content: data.about
		})
	},

	achievements: {
		description: "Show honors, awards, and certifications",
		execute: (data) => ({
			command: "achievements",
			type: "list",
			content: data.achievements
		})
	},

	clear: {
		description: "Clear the terminal screen",
		execute: () => ({
			command: "clear",
			type: "clear"
		})
	},

	contact: {
		description: "Print contact information",
		execute: (data) => ({
			command: "contact",
			type: "list",
			content: data.contact
		})
	},

	help: {
		description: "Display information of available commands",
		execute: () => ({
			command: "help",
			type: "help"
		})
	},

	projects: {
		description: "List repositories and active projects",
		execute: (data) => ({
			command: "projects",
			type: "list",
			content: data.projects
		})
	},

	skills: {
		description: "List technical capabilities and stack",
		execute: (data) => ({
			command: "skills",
			type: "list",
			content: data.skills
		})
	},

	whoami: {
		description: "Print effective username",
		execute: (data) => ({
			command: "whoami",
			type: "text",
			content: data.whoami
		})
	},

}
