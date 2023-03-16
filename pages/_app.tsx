import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "next/font/google";
import Head from "next/head";

// https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-kr",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>이정익 이력서</title>
        <meta
          name="description"
          content="신입 프론트엔드 개발자 이정익입니다."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:url" content="https://jeongik-resume.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="이정익 이력서" />
        <meta
          property="og:description"
          content="신입 프론트엔드 개발자 이정익입니다."
        />
        <meta property="og:image" content="/images/OG.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="jeongik-resume.vercel.app" />
        <meta
          property="twitter:url"
          content="https://jeongik-resume.vercel.app/"
        />
        <meta name="twitter:title" content="이정익 이력서" />
        <meta
          name="twitter:description"
          content="신입 프론트엔드 개발자 이정익입니다."
        />
        <meta name="twitter:image" content="/images/OG.png" />
      </Head>
      <main
        className={`${notoSansKR.variable} gird-cols-1 mx-auto mb-6 grid max-w-md divide-y font-sans md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl`}
      >
        <Component {...pageProps} />
      </main>
    </>
  );
}
