import Image from 'next/image'
import ficComp1 from '../../../public/ficComp1.svg'
import ficComp2 from '../../../public/ficComp2.svg'
import ficComp3 from '../../../public/ficComp3.svg'
import ficComp4 from '../../../public/ficComp4.svg'
import ficComp5 from '../../../public/ficComp5.svg'

export default function ProductTeams() {
  return (
    <>
      {' '}
      <div className="my-12 md:my-28 py-20">
        <p className="text-center text-[#909395]">
          PROVIDING POWER TO THE WORLD&apos;S BEST PRODUCT TEAMS.
        </p>

        <div className="flex flex-wrap justify-center items-center mt-12 gap-10 md:gap-20">
          <Image
            src={ficComp1}
            alt="fictional company"
            className="hover:contrast-50 cursor-pointer duration-150"
          />
          <Image
            src={ficComp2}
            alt="fictional company"
            className="hover:contrast-50 cursor-pointer duration-150"
          />
          <Image
            src={ficComp3}
            alt="fictional company"
            className="hover:contrast-50 cursor-pointer duration-150"
          />
          <Image
            src={ficComp4}
            alt="fictional company"
            className="hover:contrast-50 cursor-pointer duration-150"
          />
          <Image
            src={ficComp5}
            alt="fictional company"
            className="hover:contrast-50 cursor-pointer duration-150"
          />
        </div>
      </div>
    </>
  )
}
