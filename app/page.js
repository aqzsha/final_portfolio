import Image from 'next/image';
import bg from '@/public/bg.jpg';
import Link from 'next/link';
import CurrentTime from './_components/currentTime';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <p className="text-4xl italic font-bold mb-4">TASBAY AKZHOL</p>
      <div className="w-[560px] h-[320px] relative overflow-hidden mb-4">
        <Image
          src={bg}
          alt="bg"
          fill
          style={{ objectFit: 'cover' }} // Ensures the image covers the container
        />
      </div>
      <p className="mb-4">
        <Link
          className="text-blue-700 italic"
          href="https://24timezones.com/Almaty/time"
        >
          TIME IN ALMATY - <CurrentTime />
        </Link>
      </p>
      <div className="flex flex-row space-x-4">
        <Link
          href="/resume"
          className="text-blue-500 hover:underline"
        >
          Resume
        </Link>
        <Link
          href="/portfolio"
          className="text-blue-500 hover:underline"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
}
