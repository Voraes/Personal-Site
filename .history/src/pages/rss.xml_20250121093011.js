import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context) {
	return rss({
		title: `Victor's Place`,
		description: "My personal website and blog",
		site: context.site,
		items: await pagesGlobToRssItemsMod(
			import.meta.glob("../content/blog/*.md"),
		),
	});
}

async function pagesGlobToRssItemsMod(globResult) {
	const items = [];
	for (const path in globResult) {
		const post = await globResult[path]();
		items.push({
			link: path.replace("../content", "").replace(".md", ""),
			title: post.frontmatter.title,
			pubDate: post.frontmatter.date,
		});
	}
	return items;
}
