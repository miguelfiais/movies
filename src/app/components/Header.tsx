'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import LinkHeader from './LinkHeader'

const Header = () => {
  const pathname = usePathname()

  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const nav = [
    {
      label: 'Home',
      ref: '/',
    },
    {
      label: 'Filmes',
      ref: '/filmes',
    },
    {
      label: 'Séries',
      ref: '/series',
    },
  ]

  return (
    <header
      className={`p-5 fixed z-50 w-full ease-in-out duration-500 ${
        scrollTop > 80 && 'bg-gray-950'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Image src="/logo.png" alt="logo" width={300} height={54.69} />
        <nav>
          <ul className="flex items-center gap-8 text-white font-medium">
            {nav.map((link) => (
              <li key={link.label}>
                <LinkHeader href={link.ref} isActive={pathname === link.ref}>
                  {link.label}
                </LinkHeader>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
