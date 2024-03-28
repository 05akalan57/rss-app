'use client'

import { useEffect, useState } from 'react'
import { FaRegCircleCheck } from 'react-icons/fa6'

export default function MarkAsRead({ link }: { link: string }) {
  const [read, setRead] = useState(false)

  const localStorageKey = 'readItems'

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const readItems = JSON.parse(
        localStorage.getItem(localStorageKey) || '[]'
      )
      setRead(readItems.includes(link))
    }
  }, [link])

  const toggleReadStatus = () => {
    if (typeof window !== 'undefined') {
      const readItems = JSON.parse(
        localStorage.getItem(localStorageKey) || '[]'
      )
      const index = readItems.indexOf(link)

      if (index !== -1) {
        readItems.splice(index, 1)
      } else {
        readItems.push(link)
      }

      localStorage.setItem(localStorageKey, JSON.stringify(readItems))
      setRead(!read)
    }
  }

  return (
    <>
      <label className="peer hidden">
        <input type="checkbox" checked={read} onChange={toggleReadStatus} />
      </label>
      <div
        className="absolute right-4 top-4 cursor-pointer text-2xl text-secondary"
        onClick={toggleReadStatus}
      >
        {read ? <FaRegCircleCheck fill="#fff" /> : <FaRegCircleCheck />}
      </div>
    </>
  )
}
