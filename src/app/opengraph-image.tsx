/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'RSS App'
export const contentType = 'image/png'
export const size = { width: 1200, height: 630 }

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="flex p-72 h-full items-center bg-white">
        <img src={`${process.env.SITE_URL}/icons/icon.svg`} />
      </div>
    )
  )
}
