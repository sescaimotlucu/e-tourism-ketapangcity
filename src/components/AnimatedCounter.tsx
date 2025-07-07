import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  targetValue: number;
  duration?: number;
  isDecimal?: boolean;
  suffix?: string;
  className?: string;
}

const AnimatedCounter = ({ 
  targetValue, 
  duration = 2000, 
  isDecimal = false, 
  suffix = '', 
  className = '' 
}: AnimatedCounterProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounter();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounter = () => {
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(targetValue, increment * step);

      if (step >= steps) {
        current = targetValue;
        clearInterval(timer);
      }

      setCurrentValue(current);
    }, duration / steps);
  };

  const formatNumber = (num: number) => {
    if (isDecimal) return num.toFixed(1);
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return Math.floor(num).toString();
  };

  return (
    <div ref={counterRef} className={className}>
      {formatNumber(currentValue)}{suffix}
    </div>
  );
};

export default AnimatedCounter;