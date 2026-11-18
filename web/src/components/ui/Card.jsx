
export default function Card({ children, className = "" }) {
  return (
    <div className={`bg-surface rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
}
