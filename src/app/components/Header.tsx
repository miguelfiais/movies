import Image from 'next/image'

const Header = () => {
  return (
    <header className="p-5 fixed z-10 w-full">
      <div className="container mx-auto flex items-center justify-between">
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
      </div>
    </header>
  )
}

export default Header
