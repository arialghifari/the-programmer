/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import icArrow from '../../public/arrow.svg'
import icPlay from '../../public/play.svg'
import heroCode from '../../public/heroCode.svg'
import ficComp1 from '../../public/ficComp1.svg'
import ficComp2 from '../../public/ficComp2.svg'
import ficComp3 from '../../public/ficComp3.svg'
import ficComp4 from '../../public/ficComp4.svg'
import ficComp5 from '../../public/ficComp5.svg'
import codeSmall from '../../public/codeSmall.svg'

export default function Home() {
  return (
    <>
      <Head>
        <title>The Programmer</title>
        <meta
          name="description"
          content="Expert Developers for a Connected World"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@500&family=IBM+Plex+Mono:wght@300;600&family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="max-w-7xl text-[#fff] mx-auto font-body">
        {/* HEADER */}
        <div className="bg-[#3F4237]/20 px-5 md:px-8 py-7 flex md:mt-6 justify-between items-center">
          <div>
            <p className="font-ibm-mono font-thin text-lg">
              <span className="text-primary font-semibold">The</span>Programmer
            </p>
          </div>

          <nav className="hidden md:flex gap-10 text-sm">
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

          <button className="hidden md:flex items-end gap-2 group">
            SIGN UP{' '}
            <Image
              src={icArrow}
              alt="arrow"
              className="mb-1.5 group-hover:translate-y-0.5 duration-150"
            />
          </button>
        </div>

        <div className="mt-24 mx-5 md:mx-10">
          {/* HERO */}
          <div>
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
              <h1 className="font-dm-mono text-5xl md:text-7xl leading-[120%] md:leading-[125%] -tracking-[0.4rem]">
                Expert Developers for a Connected{' '}
                <span className="text-primary">&#123;World&#125;</span>
              </h1>
              <button className="flex gap-2 items-end bg-[#1C2012] py-4 px-6 flex-shrink-0 text-sm hover:bg-[#1C2012]/80 duration-150 justify-center group">
                GET A DEMO
                <Image
                  src={icArrow}
                  alt="arrow"
                  className="mb-1 group-hover:translate-y-0.5 duration-150"
                />
              </button>
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
                Circle is a code development platform that gives innovators the
                speed and reliability they need to create at the speed of
                inspiration.
              </p>
            </div>

            <div className="mt-12 md:mt-28">
              <Image src={heroCode} alt="code" />
            </div>
          </div>

          {/* PROVIDING */}
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

          {/* FINALLY */}
          <div className="flex items-center gap-10 py-14">
            <div className="flex flex-col gap-10">
              <p className="font-dm-mono text-5xl leading-[110%]">
                Finally you can develop{' '}
                <span className="text-primary">&#123;full - stack&#125;</span>{' '}
                web applications in one place.
              </p>
              <p className="text-lg text-[#909395]">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud ame
              </p>
            </div>

            <div className="flex-shrink-0">
              <Image src={codeSmall} alt="code" />
            </div>
          </div>

          {/* OPTIMIZED */}
          <div className="py-14 mt-40 flex gap-10">
            <div className="py-10 px-8 flex flex-col gap-8 border-b-4 border-[#03090E] hover:border-primary hover:bg-[#0A1319] duration-150">
              <div>
                <p className="text-3xl font-dm-mono">Optimized Frameworks</p>
                <p className="text-[#909395] mt-2 text-lg">
                  A custom environment designed especially for developing and
                  facilitating React, Vue, Angular, and other.
                </p>
              </div>
              <button className="hidden md:flex items-end gap-2 group w-fit">
                READ MORE{' '}
                <Image
                  src={icArrow}
                  alt="arrow"
                  className="mb-1.5 group-hover:translate-y-0.5 duration-150"
                />
              </button>
            </div>

            <div className="py-10 px-8 flex flex-col gap-8 border-b-4 border-[#03090E] hover:border-primary hover:bg-[#0A1319] duration-150">
              <div>
                <p className="text-3xl font-dm-mono">Integrated with GitHub</p>
                <p className="text-[#909395] mt-2 text-lg">
                  Import and run GitHub repositories directly. Alternatively,
                  you can commit your source code to a repository.
                </p>
              </div>
              <button className="hidden md:flex items-end gap-2 group w-fit">
                READ MORE{' '}
                <Image
                  src={icArrow}
                  alt="arrow"
                  className="mb-1.5 group-hover:translate-y-0.5 duration-150"
                />
              </button>
            </div>
          </div>

          <div className="ml-7">
            <button className="hidden md:flex items-end gap-2 group w-fit">
              EXPLORE MORE SERVICES{' '}
              <Image
                src={icArrow}
                alt="arrow"
                className="mb-1.5 group-hover:translate-y-0.5 duration-150"
              />
            </button>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  )
}
