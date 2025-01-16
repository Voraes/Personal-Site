import rss from "@astrojs/rss";

export const get = () =>
	rss({
		title: `Victor's Place`,
		description: "My personal website and blog",
		site: import.meta.env.SITE, // Automatically gets your site's URL
		items: import.meta.glob("./blog/*.md"), // Adjust this path to match your blog content
		customData: "<language>en-us</language>", // Optional custom data for the RSS feed
	});
