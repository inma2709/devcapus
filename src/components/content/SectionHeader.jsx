export default function SectionHeader({
  eyebrow,
  title,
  children,
}) {
  return (
    <header
      className="
        mb-8
        max-w-3xl
      "
    >
      {eyebrow && (
        <p
          className="
            mb-2
            text-sm
            font-bold
            uppercase
            tracking-wider
            text-[#D6006D]
          "
        >
          {eyebrow}
        </p>
      )}

      <h2
        className="
          text-2xl
          font-bold
          tracking-tight
          text-[#2B155A]
          sm:text-3xl
          lg:text-4xl
        "
      >
        {title}
      </h2>

      {children && (
        <p
          className="
            mt-3
            max-w-2xl
            text-base
            leading-7
            text-slate-600
            sm:text-lg
          "
        >
          {children}
        </p>
      )}
    </header>
  );
}