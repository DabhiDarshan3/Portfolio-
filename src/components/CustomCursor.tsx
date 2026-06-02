import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    let ringX = -100, ringY = -100;
    let dotX = -100, dotY = -100;
    let animId: number;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
      setPos({ x: dotX, y: dotY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const cursor = el ? window.getComputedStyle(el).cursor : '';
      setIsPointer(cursor === 'pointer' || cursor === 'text');
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);

    const smoothRing = () => {
      ringX += (dotX - ringX) * 0.12;
      ringY += (dotY - ringY) * 0.12;
      setRing({ x: ringX, y: ringY });
      animId = requestAnimationFrame(smoothRing);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);
    animId = requestAnimationFrame(smoothRing);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: pos.x,
          top: pos.y,
          width: isClicking ? '8px' : isPointer ? '20px' : '14px',
          height: isClicking ? '8px' : isPointer ? '20px' : '14px',
          transition: 'width 0.2s, height 0.2s',
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: ring.x,
          top: ring.y,
          width: isPointer ? '52px' : isClicking ? '30px' : '40px',
          height: isPointer ? '52px' : isClicking ? '30px' : '40px',
          opacity: isPointer ? 0.8 : 0.4,
          borderColor: isPointer ? '#06B6D4' : '#6366F1',
          transition: 'width 0.3s, height 0.3s, opacity 0.3s, border-color 0.3s',
        }}
      />
    </>
  );
}
