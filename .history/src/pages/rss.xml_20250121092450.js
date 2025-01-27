import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
	return rss({
		title: `Victor's Place`,
		description: "My personal website and blog",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("../content/blog/*.md")),
	});
}
