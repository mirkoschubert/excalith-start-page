const defaultConfig = {
	username: "musikuss",
	theme: {
		backgroundColor: "#191c2a",
		windowColor: "#1a1b26",
		glowColor: "#27a1b957",
		white: "#c0caf5",
		gray: "#6D7599",
		black: "#191c2a",
		red: "#f7768e",
		green: "#9ece6a",
		yellow: "#e0af68",
		blue: "#7aa2f7",
		cyan: "#2ac3de",
		magenta: "#bb9af7",
		violet: "#9d7cd8",
		orange: "#ff9e64"
	},
	wallpaper: {
		url: "",
		easing: "ease-in-out",
		fadeIn: true,
		blur: true
	},
	terminal: {
		fixedHeight: true,
		windowGlow: true,
		textGlow: false
	},
	prompt: {
		ctrlC: true,
		placeholder: "command...",
		placeholderColor: "gray",
		userColor: "green",
		atColor: "gray",
		hostColor: "magenta",
		promptColor: "magenta",
		promptSymbol: "❯",
		caretColor: "green",
		selectionBg: "yellow",
		selectionFg: "black"
	},
	fetch: {
		timeFormat: "HH:mm",
		dateFormat: "DD/MM/YYYY",
		titleColor: "yellow",
		image: "icon.svg",
		data: [
			"Time: {time}",
			"Date: {date}",
			"{seperator}",
			"OS: {osName} {osVersion}",
			"Browser: {browser} {browserVersion}",
			"Engine: {engineName}",
			"{seperator}",
			"{colors}"
		]
	},
	urlLaunch: {
		target: "_self",
		defaultColor: "white",
		hoverColor: "violet"
	},
	search: {
		default: "https://google.com/search?q=",
		target: "_self",
		shortcutRegex: "([A-Za-z0-9]+) (.*)",
		shortcuts: [
			{
				alias: "g",
				name: "Google Search",
				url: "https://google.com/search?q={}"
			},
			{
				alias: "d",
				name: "DuckDuckGo Search",
				url: "https://duckduckgo.com/?q={}"
			},
			{
				alias: "b",
				name: "Brave Search",
				url: "https://search.brave.com/search?q={}"
			},
			{
				alias: "gh",
				name: "Github Search",
				url: "https://github.com/search?q={}"
			},
			{
				alias: "s",
				name: "Stack Overflow Search",
				url: "https://stackoverflow.com/search?q={}"
			},
			{
				alias: "r",
				name: "Subreddit Search",
				url: "https://reddit.com/r/{}"
			},
			{
				alias: "w",
				name: "Wikipedia Search",
				url: "https://en.wikipedia.org/wiki/{}"
			}
		]
	},
	sections: {
		list: [
			{
				title: "General",
				color: "green",
				align: "left",
				links: [
					{
						name: "Portfolio",
						url: "https://mirkoschubert.de/",
						icon: "mdi:web"
					},
					{
						name: "Blog",
						url: "https://flussgeist.com/",
						icon: "mdi:post"
					},
					{
						name: "Perplexity",
						url: "https://perplexity.ai/",
						icon: "simple-icons:openai"
					},
					{
						name: "Bio.link",
						url: "https://bio.link/musikuss",
						icon: "simple-icons:biolink"
					}
				]
			},
			{
				title: "Dev",
				color: "magenta",
				align: "left",
				links: [
					{
						name: "GitHub",
						url: "https://github.com/mirkoschubert",
						icon: "mdi:github"
					},
					{
						name: "Dev.to",
						url: "https://dev.to",
						icon: "material-symbols:logo-dev"
					},
					{
						name: "Stack Overflow",
						url: "https://stackoverflow.com/",
						icon: "mdi:stack-overflow"
					},
					{
						name: "Goodday",
						url: "https://www.goodday.work/login",
						icon: "mdi:work"
					}
				]
			},
			{
				title: "Social",
				color: "violet",
				align: "left",
				links: [
					{
						name: "YouTube",
						url: "https://youtube.com",
						icon: "mdi:youtube"
					},
					{
						name: "Mastodon",
						url: "https://troet.cafe/home",
						icon: "ri:mastodon-fill"
					},
					{
						name: "Reddit",
						url: "https://reddit.com",
						icon: "mdi:reddit"
					},
					{
						name: "OKCupid",
						url: "https://okcupid.com",
						icon: "simple-icons:okcupid"
					}
				]
			},
			{
				title: "Gaming",
				color: "cyan",
				align: "left",
				links: [
					{
						name: "Geoguessr",
						url: "https://www.geoguessr.com/",
						icon: "mdi:place"
					},
					{
						name: "Upland",
						url: "https://play.upland.me/",
						icon: "fluent:real-estate-24-filled"
					},
					{
						name: "Decentraland",
						url: "https://play.decentraland.org/",
						icon: "icon-park-outline:pyramid"
					},
					{
						name: "The Sandbox",
						url: "https://www.sandbox.game/en/",
						icon: "mdi:alpha-s-box"
					}
				]
			},
			{
				title: "Crypto",
				color: "blue",
				align: "left",
				links: [
					{
						name: "Coinmarketcap",
						url: "https://coinmarketcap.com/",
						icon: "simple-icons:coinmarketcap"
					},
					{
						name: "AssetDash",
						url: "https://members.assetdash.com/portfolio",
						icon: "tabler:dashboard"
					},
					{
						name: "Magic Eden",
						url: "https://magiceden.io/me",
						icon: "ri:magic-fill"
					},
					{
						name: "Koinly",
						url: "https://app.koinly.io/p",
						icon: "tabler:coin-bitcoin"
					}
				]
			},
			{
				title: "Tech",
				color: "yellow",
				align: "left",
				links: [
					{
						name: "TechCrunch",
						url: "https://techcrunch.com/",
						icon: "game-icons:techno-heart"
					},
					{
						name: "Verge",
						url: "https://www.theverge.com/",
						icon: "arcticons:verge"
					},
					{
						name: "It's Foss",
						url: "https://itsfoss.com/",
						icon: "ri:mastodon-fill"
					},
					{
						name: "9To5 Linux",
						url: "https://9to5linux.com/",
						icon: "uil:linux"
					}
				]
			}
		]
	}
}

export default defaultConfig
