export default function Select({
  options = [],
  className = "",
  ...props
}) {
  return (
    <select className={`border border-secondary rounded px-3 py-2 ${className}`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}> {option.label} </option>
      ))}
    </select>
  );
}
