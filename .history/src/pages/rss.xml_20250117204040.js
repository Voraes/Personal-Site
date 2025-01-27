import rss from "@astrojs/rss";

export function GET(context) {
	return rss({
		title: `Victor's Place`,
		description: "My personal website and blog",
		site: context.site,
		items: [],
		customData: "<language>en-us</language>",
	});
}
