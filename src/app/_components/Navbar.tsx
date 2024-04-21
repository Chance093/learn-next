'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()
  return (
    <header className='m-8'>
      <nav>
        <ul className=' flex gap-8 justify-center'>
          <li>
            <Link
              href='/dashboard#target'
              className={`${
                pathname === '/dashboard' ? 'text-purple-400' : ''
              }`}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href='/dashboard/create-post'
              className={`${
                pathname === '/dashboard/create-post' ? 'text-purple-400' : ''
              }`}
            >
              Create Post
            </Link>
          </li>
          <li>
            <Link
              href='/dashboard/settings'
              className={`${
                pathname === '/dashboard/settings' ? 'text-purple-400' : ''
              }`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
