import Parser from 'rss-parser'

export const feeds = [
  {
    title: 'Adem ilter Blog',
    slug: 'ademilter-blog',
    url: 'https://news.google.com/rss/search?q=site%3Aademilter.com'
  },
  {
    title: 'Vercel',
    slug: 'vercel',
    url: 'https://news.google.com/rss/search?q=site%3Avercel.com'
  },
  {
    title: 'Product Hunt',
    slug: 'product-hunt',
    url: 'https://www.producthunt.com/feed'
  },
  {
    title: 'Daily.dev',
    slug: 'daily-dev',
    url: 'https://rsshub.app/daily/upvoted'
  },
  {
    title: 'Github Trending',
    slug: 'github-trending',
    url: 'https://rsshub.app/github/trending/today/any'
  },
  {
    title: 'Frontend Weekly',
    slug: 'frontend-weekly',
    url: 'https://medium.com/feed/front-end-weekly'
  },
  {
    title: 'Lee Robinson Blog',
    slug: 'lee-robinson-blog',
    url: 'https://news.google.com/rss/search?q=site%site:leerob.io'
  }
]

export async function getFeedBySlug(slug: string) {
  const feed = feeds.find(feed => feed.slug === slug)

  if (!feed) {
    throw new Error(`Feed not found: ${slug}`)
  }

  const feedData = await new Parser().parseURL(feed.url)

  return {
    ...feedData,
    items: feedData.items.sort(
      (a: any, b: any) =>
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
    )
  }
}
