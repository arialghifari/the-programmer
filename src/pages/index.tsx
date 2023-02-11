/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import Header from '@/components/section/Header'
import Hero from '@/components/section/Hero'
import ProductTeams from '@/components/section/ProductTeams'
import Features from '@/components/section/Features'

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
        <Header />

        <div className="mt-24 mx-5 md:mx-10">
          <Hero />
          <ProductTeams />
          <Features />
        </div>
      </main>
      <footer></footer>
    </>
  )
}
