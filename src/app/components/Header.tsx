import Image from 'next/image'

const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between p-5">
      <Image src="/logo.png" alt="logo" width={300} height={54.69} />
      <nav>
        <ul className="flex items-center gap-8 text-white font-medium">
          <li>
            <a href="">Filmes</a>
          </li>
          <li>
            <a href="">Series</a>
          </li>
          <li>
            <a href="">Outros</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
