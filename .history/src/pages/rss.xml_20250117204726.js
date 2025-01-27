import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export const get = () =>
	rss({
		title: `Victor's Place`,
		description: "My personal website and blog",
		site: import.meta.env.SITE, // Automatically gets site's URL
		items: import.meta.glob("./content/blog/*.md"),
		customData: "<language>en-us</language>",
	});

import { getCollection } from "astro:content";

export async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		title: `Victor's Place`,
		description: "My personal website and blog",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("./content/blog/*.md")),
	});
}
