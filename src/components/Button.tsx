import Image from 'next/image'
import icArrow from '../../public/arrow.svg'

type Button = {
  children: string
  bgColor?: string
  p?: boolean
}

export default function Button({ children, bgColor, p = true }: Button) {
  return (
    <button
      className={`hidden lg:flex items-end gap-2 group flex-shrink-0 w-fit ${
        bgColor ? 'bg-[#1C2012] hover:bg-[#1C2012]/80' : ''
      } ${p ? 'py-4 px-6' : ''}`}
    >
      <span>{children}</span>
      <Image
        src={icArrow}
        alt="arrow"
        className="mb-1.5 group-hover:translate-y-0.5 duration-150"
      />
    </button>
  )
}
