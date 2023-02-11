import Image from 'next/image'
import icArrow from '../../public/arrow.svg'

type Button = {
  children: string
  classList?: string
}

export default function Button({ children, classList }: Button) {
  return (
    <button
      className={`items-end gap-2 group flex-shrink-0 
       py-4 px-6 flex ${classList}`}
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
