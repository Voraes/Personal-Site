import rss from "@astrojs/rss";

export const get = () =>
	rss({
		title: `Victor's Place`,
		description: "My personal website and blog",
		site: import.meta.env.SITE, // Automatically gets site's URL
		items: import.meta.glob("./content/blog/*.md"),
		customData: "<language>en-us</language>",
	});

export function GET(context) {
	return rss({
		title: `Victor's Place`,
		description: "A humble Astronaut’s guide to the stars",
		site: context.site,
		items: [],
		customData: "<language>en-us</language>",
	});
}
