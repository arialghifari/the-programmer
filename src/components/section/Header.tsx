import Link from 'next/link'
import Button from '../Button'

export default function Header() {
  return (
    <div className="bg-[#3F4237]/20 px-5 lg:px-8 h-20 flex lg:mt-6 justify-between items-center">
      <div>
        <p className="font-ibm-mono font-thin text-lg">
          <span className="text-primary font-semibold">The</span>Programmer
        </p>
      </div>

      <nav className="hidden lg:flex gap-10 text-sm">
        <Link
          href="#"
          className="text-[white]/75 hover:text-[white] duration-150"
        >
          HOW IT WORKS
        </Link>
        <Link
          href="#"
          className="text-[white]/75 hover:text-[white] duration-150"
        >
          DEVELOP
        </Link>
        <Link
          href="#"
          className="text-[white]/75 hover:text-[white] duration-150"
        >
          FEATURES
        </Link>
        <Link
          href="#"
          className="text-[white]/75 hover:text-[white] duration-150"
        >
          DOCS
        </Link>
        <Link
          href="#"
          className="text-[white]/75 hover:text-[white] duration-150"
        >
          BLOG
        </Link>
        <Link
          href="#"
          className="text-[white]/75 hover:text-[white] duration-150"
        >
          ABOUT
        </Link>
      </nav>

      <Button classList="py-4 px-6 hidden lg:flex">SIGN UP</Button>
    </div>
  )
}
