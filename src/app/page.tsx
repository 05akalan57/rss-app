import Link from 'next/link'

import { feeds } from '@/lib/rss'

import 'moment/locale/tr'

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold">RSS App</h1>

      <div className="mt-8 space-y-4">
        {feeds.map((feed, index) => (
          <Link
            className="flex flex-col rounded border p-4"
            href={`/${feed.slug}`}
            key={index}
          >
            <h2 className="text-lg font-medium">{feed.title}</h2>
          </Link>
        ))}
      </div>
    </section>
  )
}
