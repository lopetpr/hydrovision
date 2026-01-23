import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
  showCursor?: boolean;
}

export default function TypedText({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 2000,
  loop = true,
  showCursor = false,
}: TypedTextProps) {
  const elRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings,
      typeSpeed,
      backSpeed,
      backDelay,
      loop,
      showCursor,
    });

    return () => {
      typed.destroy(); // cleanup
    };
  }, [strings, typeSpeed, backSpeed, backDelay, loop, showCursor]);

  return <span ref={elRef} />;
}
