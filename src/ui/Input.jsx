const Input = ({
  label,
  required = false,
  type = "text",
  error,
  name,
  value,
  onChange,
  placeholder,
  checked,
  id,
}) => {
  if (type === "radio") {
    return (
      <input
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        type="radio"
        className="h-4 w-4 accent-accent cursor-pointer"
      />
    );
  }

  return (
    <label className="block">
      <span className="text-[11px] font-mono uppercase tracking-wider text-muted">
        {label}
        {required && <span className="text-danger"> *</span>}
      </span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`mt-1.5 w-full border-b-2 bg-transparent py-2 text-sm font-body
          text-ink placeholder:text-gray-300 outline-none transition-colors
          ${error ? "border-danger" : "border-border focus:border-accent"}`}
      />
      {error && (
        <span className="mt-1 block text-xs text-danger font-medium">
          {error}
        </span>
      )}
    </label>
  );
};

export default Input;
