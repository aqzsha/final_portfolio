import { Josefin_Sans } from 'next/font/google';
import '@/app/_styles/globals.css';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s / Tasbay Akzhol',
    default: 'TASBAY AKZHOL',
  },
  description: 'Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
