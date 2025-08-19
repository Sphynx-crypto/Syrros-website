import * as React from "react";

type Props = {
  target: number;
  startOn?: boolean;   // déclenche l'anim
  duration?: number;   // ms
  decimals?: number;   // 0 pour entier 
};

export default function CountUp({
  target,
  startOn = false,
  duration = 1500,
  decimals = 0,
}: Props) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!startOn) return;

    let rafId = 0;
    const end = Number(target) || 0;
    const t0 = performance.now();

    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const val = end * p;

      if (decimals > 0) {
        const f = Math.pow(10, decimals);
        setCount(Math.round(val * f) / f);
      } else {
        setCount(Math.round(val));
      }

      if (p < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [target, startOn, duration, decimals]);

  return <>{count}</>;
}
