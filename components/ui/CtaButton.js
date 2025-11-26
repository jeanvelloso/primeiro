export default function CtaButton({ children, variant = "primary", onClick, href, className = "" }) {
  const baseClass = variant === "primary" ? "btn btn-primary" : "btn btn-outline";
  const finalClass = `${baseClass} ${className}`;

  if (href) {
    return (
      <a href={href} className={finalClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={finalClass}>
      {children}
    </button>
  );
}

