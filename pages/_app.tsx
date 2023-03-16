import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Noto_Sans_KR } from "next/font/google";

// https://nextjs.org/docs/basic-features/font-optimization#with-tailwind-css
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-kr",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${notoSansKR.variable} gird-cols-1 mx-auto mb-6 grid max-w-md divide-y font-sans md:max-w-lg lg:max-w-2xl xl:max-w-4xl 2xl:max-w-7xl`}
    >
      <Component {...pageProps} />
    </main>
  );
}
