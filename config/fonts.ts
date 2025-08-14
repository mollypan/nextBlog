import { Ubuntu } from "next/font/google";
import localFont from 'next/font/local'

export const fontUbuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const fontEnjoy = localFont({
  src: '../public/font/enjoyplease2-Regular.otf',
})
export const fontCarto = localFont({
  src: '../public/font/CartographCF-RegularItalic.otf',
})
