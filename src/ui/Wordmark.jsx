const Wordmark = ({ size = "md" }) => {
  const textSize = size === "lg" ? "text-3xl" : "text-xl";
  return (
    <span className="inline-flex flex-col items-start">
      <span className={`font-display font-semibold text-ink ${textSize}`}>
        Tally
      </span>
      <svg
        viewBox="0 0 64 8"
        className="h-2 w-14 -mt-1"
        preserveAspectRatio="none"
      >
        <path
          d="M1 5.5C10 1, 18 8, 27 4.5S44 1, 53 5S60 3, 63 5"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default Wordmark;
