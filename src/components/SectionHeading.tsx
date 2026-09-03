interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2
        className={`font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight ${
          light ? 'text-ivory' : 'text-emerald'
        }`}
      >
        {title}
      </h2>
      <div className={`gold-divider mt-5 ${center ? 'mx-auto' : ''}`} />
      {subtitle && (
        <p
          className={`mt-5 text-base leading-relaxed ${
            light ? 'text-ivory/70' : 'text-ink-mid'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
