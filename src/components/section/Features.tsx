import Image from 'next/image'
import codeSmall from '../../../public/codeSmall.svg'
import Button from '@/components/Button'

export default function Features() {
  return (
    <>
      <div className="flex items-center gap-10 py-3 lg:py-14 flex-col-reverse lg:flex-row">
        <div className="flex flex-col gap-10">
          <p className="font-dm-mono text-3xl md:text-5xl leading-[120%] md:leading-[110%]">
            Finally you can develop{' '}
            <span className="text-primary">&#123;full - stack&#125;</span> web
            applications in one place.
          </p>
          <p className="text-lg text-[#909395]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud ame
          </p>
        </div>

        <div className="flex-shrink-0">
          <Image src={codeSmall} alt="code" />
        </div>
      </div>
      <div className="py-12 md:py-14 mt-8 md:mt-20">
        <div className="flex flex-col md:flex-row gap-4 md:gap-10">
          <div className="justify-center py-10 px-8 flex flex-col gap-8 border-b-4 border-[#03090E] hover:border-primary hover:bg-[#0A1319] duration-150">
            <div>
              <p className="text-3xl font-dm-mono">Optimized Frameworks</p>
              <p className="text-[#909395] mt-2 text-lg">
                A custom environment designed especially for developing and
                facilitating React, Vue, Angular, and other.
              </p>
            </div>
            <Button classList="px-0 w-fit">READ MORE</Button>
          </div>

          <div className="justify-center py-10 px-8 flex flex-col gap-8 border-b-4 border-[#03090E] hover:border-primary hover:bg-[#0A1319] duration-150">
            <div>
              <p className="text-3xl font-dm-mono">Integrated with GitHub</p>
              <p className="text-[#909395] mt-2 text-lg">
                Import and run GitHub repositories directly. Alternatively, you
                can commit your source code to a repository.
              </p>
            </div>
            <Button classList="px-0 w-fit">READ MORE</Button>
          </div>
        </div>

        <div className="ml-8 mt-12">
          <Button classList="px-0 w-fit">EXPLORE MORE SERVICES</Button>
        </div>
      </div>
    </>
  )
}
