'use client';

import { useEffect, useState } from 'react';

export default function CurrentTime() {
  const [time, setTime] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Update client-side status

    const updateTime = () => {
      const now = new Date();

      const options = {
        timeZone: 'Asia/Almaty',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat('en-GB', options).format(now);

      setTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return <div className="text-center text-2xl">{time}</div>;
}
