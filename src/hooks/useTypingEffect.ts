"use client";

import { useEffect, useMemo, useState } from "react";

export function useTypingEffect(words: string[], speed = 75, hold = 1300) {
  const safeWords = useMemo(() => (words.length ? words : ["Create something amazing"]), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const fullWord = safeWords[wordIndex] ?? "";
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          const next = fullWord.slice(0, display.length + 1);
          setDisplay(next);
          if (next === fullWord) {
            setTimeout(() => setDeleting(true), hold);
          }
          return;
        }

        const next = fullWord.slice(0, Math.max(0, display.length - 1));
        setDisplay(next);
        if (next.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % safeWords.length);
        }
      },
      deleting ? Math.max(30, speed / 2) : speed,
    );
    return () => clearTimeout(timeout);
  }, [deleting, display, hold, safeWords, speed, wordIndex]);

  return display;
}
