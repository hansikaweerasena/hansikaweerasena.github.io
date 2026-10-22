const fs = require('node:fs');
const path = require('node:path');
const { XMLParser, XMLValidator } = require('fast-xml-parser');

const destination = path.join(__dirname, '../src/data/blog.json');

async function syncBlog() {
    const response = await fetch('https://medium.com/feed/@hansikaweerasena', {
        signal: AbortSignal.timeout(15000),
    });
    if (!response.ok) throw new Error(`Medium returned HTTP ${response.status}`);
    const xml = await response.text();
    if (XMLValidator.validate(xml) !== true) throw new Error('Invalid Medium RSS feed');
    const feed = new XMLParser().parse(xml);
    const items = feed.rss?.channel?.item;
    if (!items) throw new Error('Medium feed contains no posts');
    const posts = (Array.isArray(items) ? items : [items]).map(item => ({
        title: item.title,
        pubDate: item.pubDate,
        link: item.link,
        guid: item.guid,
        content: item['content:encoded'] || item.description || '',
        categories: item.category ? [].concat(item.category) : [],
    }));
    if (posts.some(post => !post.title || !post.link || !Number.isFinite(Date.parse(post.pubDate)))) {
        throw new Error('Medium feed contains incomplete posts');
    }
    fs.writeFileSync(destination, JSON.stringify(posts, null, 2) + '\n');
    console.log(`Saved ${posts.length} Medium posts.`);
}

syncBlog().catch(error => {
    console.warn(`Could not refresh Medium posts: ${error.message}`);
    if (fs.existsSync(destination)) console.warn('Keeping the previously saved posts.');
    else process.exitCode = 1;
});
