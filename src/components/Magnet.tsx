import { useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react';

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  strength?: number;
  disabled?: boolean;
  wrapperClassName?: string;
  innerClassName?: string;
}

// Adapted from React Bits Magnet. This version avoids React renders during pointer movement.
export function Magnet({
  children,
  padding = 52,
  strength = 7,
  disabled = false,
  wrapperClassName = '',
  innerClassName = '',
  ...props
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(pointer: fine)');
    if (disabled || reducedMotion.matches || !finePointer.matches) return;

    let frame = 0;

    const move = (event: PointerEvent) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const wrapper = wrapperRef.current;
        const inner = innerRef.current;
        if (!wrapper || !inner) return;

        const bounds = wrapper.getBoundingClientRect();
        const centerX = bounds.left + bounds.width / 2;
        const centerY = bounds.top + bounds.height / 2;
        const distanceX = event.clientX - centerX;
        const distanceY = event.clientY - centerY;
        const isNear =
          Math.abs(distanceX) < bounds.width / 2 + padding &&
          Math.abs(distanceY) < bounds.height / 2 + padding;

        inner.style.transform = isNear
          ? `translate3d(${distanceX / strength}px, ${distanceY / strength}px, 0)`
          : 'translate3d(0, 0, 0)';
      });
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', move);
    };
  }, [disabled, padding, strength]);

  return (
    <div ref={wrapperRef} className={wrapperClassName} {...props}>
      <div ref={innerRef} className={innerClassName}>
        {children}
      </div>
    </div>
  );
}

