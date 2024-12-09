"use client";

import { useState, useEffect, useRef } from "react";


type NumberButtonProps = {
    id: string;
}


export default function NumberButton({ id }: NumberButtonProps) {
  const ref = useRef<number>(0);
  const [count, setCount] = useState<number>(ref.current);

  const handleClick = () => {
    ref.current += 1;
    setCount(ref.current);
    localStorage.setItem(`count${id}`, ref.current.toString());
  };

  useEffect(() => {
    const savedCount = localStorage.getItem(`count${id}`)
    if (savedCount) {
        ref.current = Number(savedCount)
        setCount(ref.current)
    }
  }, [id]);

  return <button onClick={handleClick}>장바구니에 담기 {count}</button>;
}
