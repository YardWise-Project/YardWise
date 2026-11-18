
export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`border border-secondary rounded px-3 py-2 ${className}`}
      {...props}
    />
  );
}
