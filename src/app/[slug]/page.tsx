import moment from 'moment'

import MarkAsRead from './MarkAsRead'

import { feeds, getFeedBySlug } from '@/lib/rss'

import 'moment/locale/tr'

export function generateMetadata({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const feedDetail = feeds.find(feed => feed.slug === slug)

  if (!feedDetail) {
    throw new Error('Feed not found!')
  }

  const title = `${feedDetail.title} | RSS App`

  return { title }
}

export function generateStaticParams() {
  const feedSlugs = feeds.map(feed => {
    return { slug: feed.slug }
  })

  return feedSlugs
}

export default async function Page({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const feed = await getFeedBySlug(slug)

  return (
    <section>
      <h1 className="text-3xl font-bold">
        {feeds.find(feed => feed.slug === slug)?.title}
      </h1>

      <div className="mt-8 space-y-4">
        {feed.items.map((item: any, index: number) => (
          <div
            className="relative overflow-hidden rounded border bg-background"
            key={index}
          >
            <MarkAsRead link={item.link} />

            <div className="w-full p-4 peer-has-[:checked]:bg-secondary">
              <div className="mr-8 text-lg font-medium">
                <a
                  className="underline-offset-4 hover:underline"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.title}
                </a>
              </div>

              <span className="mt-2 text-sm text-muted-foreground">
                {moment(item.pubDate).startOf('m').fromNow()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const revalidate = 3600
