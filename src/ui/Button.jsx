const VARIANTS = {
  primary: "bg-accent text-white hover:bg-[#255a41]",
  secondary: "bg-accent-soft text-ink hover:bg-[#c7ecd8]",
  muted: "bg-gray-200 text-gray-500 cursor-not-allowed",
};

const Button = ({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
}) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`w-full py-3 rounded-xl text-sm font-semibold font-body
      transition-all duration-150 active:scale-[0.98]
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
      disabled:opacity-60 disabled:active:scale-100
      ${VARIANTS[variant]}`}
  >
    {children}
  </button>
);

export default Button;
