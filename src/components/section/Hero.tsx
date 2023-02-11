import Image from 'next/image'
import Button from '../Button'
import heroCode from '../../../public/heroCode.svg'
import icPlay from '../../../public/play.svg'

export default function Hero() {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
        <h1 className="font-dm-mono text-5xl md:text-7xl leading-[120%] md:leading-[125%] -tracking-[0.4rem]">
          Expert Developers for a Connected{' '}
          <span className="text-primary">&#123;World&#125;</span>
        </h1>
        <Button classList="bg-[#1C2012] hover:bg-[#1C2012]/80 justify-center">GET A DEMO</Button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center mt-14 gap-4 md:gap-16">
        <button className="flex flex-shrink-0 items-center bg-primary hover:bg-primary/80 duration-150 py-4 px-6 text-sm text-[#121608] gap-2 font-semibold justify-center group">
          <Image
            src={icPlay}
            alt="play"
            className="group-hover:scale-125 duration-150"
          />
          WATCH A VIDEO
        </button>
        <p className="text-lg leading-[155%]">
          Circle is a code development platform that gives innovators the speed
          and reliability they need to create at the speed of inspiration.
        </p>
      </div>

      <div className="mt-12 md:mt-28">
        <Image src={heroCode} alt="code" />
      </div>
    </div>
  )
}
