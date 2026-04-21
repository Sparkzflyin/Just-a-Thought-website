const Marquee = ({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) => {
  const content = items.join("  ·  ");

  return (
    <div
      className={`overflow-hidden py-6 select-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex animate-marquee whitespace-nowrap text-sm md:text-base tracking-[0.3em] uppercase font-bold">
        <span className="mx-6">{content}</span>
        <span className="mx-6">{content}</span>
        <span className="mx-6">{content}</span>
        <span className="mx-6">{content}</span>
      </div>
    </div>
  );
};

export default Marquee;
