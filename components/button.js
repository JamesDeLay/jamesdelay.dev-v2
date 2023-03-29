export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`hover:bg-secondary bg-accent border-accent font-semibold text-white py-2 px-3 border hover:border-secondary rounded-md ${className}`}
    >
      {children}
    </button>
  );
}
