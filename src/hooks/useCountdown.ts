import { useState, useEffect } from 'react';

export interface CountdownResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  isValid: boolean;
  formattedText: string;
}

export function useCountdown(targetIsoDate: string, timeZone: string = 'Asia/Kolkata'): CountdownResult {
  const [countdown, setCountdown] = useState<CountdownResult>(() => calculateTimeLeft(targetIsoDate));

  function calculateTimeLeft(targetStr: string): CountdownResult {
    if (!targetStr) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPast: false,
        isValid: false,
        formattedText: "Our special day is coming soon."
      };
    }

    const targetDate = new Date(targetStr);
    if (isNaN(targetDate.getTime())) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPast: false,
        isValid: false,
        formattedText: "Our special day is coming soon."
      };
    }

    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        isPast: true,
        isValid: true,
        formattedText: "The celebration has begun! Shubh Vivah!"
      };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
      isPast: false,
      isValid: true,
      formattedText: `${days} Days, ${hours} Hours, ${minutes} Mins, ${seconds} Secs`
    };
  }

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Recalculate immediately
    setCountdown(calculateTimeLeft(targetIsoDate));

    // Update every second (or 5s if reduced motion to conserve cycles)
    const intervalTime = prefersReducedMotion ? 5000 : 1000;
    const timer = setInterval(() => {
      setCountdown(calculateTimeLeft(targetIsoDate));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [targetIsoDate, timeZone]);

  return countdown;
}
