'use client'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import LinkHeader from './LinkHeader'

const Header = () => {
  const pathname = usePathname()

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
    <header className="p-5 fixed z-50 w-full">
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
