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
    <main className={`${notoSansKR.variable} mx-auto max-w-md font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
