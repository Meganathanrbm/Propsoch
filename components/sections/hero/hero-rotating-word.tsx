import { heroRotatingWords } from "@/lib/content";

export function RotatingWord() {
  return (
    <span className="hero-rotating-word text-primary-strong h-[1.18em] min-w-[12ch] align-bottom">
      {heroRotatingWords.map((word, index) => (
        <span key={word} data-word={index}>
          {word}
        </span>
      ))}
    </span>
  );
}
