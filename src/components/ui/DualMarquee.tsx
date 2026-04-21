import Marquee from "./Marquee";

const DualMarquee = ({
  topItems,
  bottomItems,
  className = "",
  topClassName = "text-brand-off-white",
  bottomClassName = "text-brand-off-white",
}: {
  topItems: string[];
  bottomItems: string[];
  className?: string;
  topClassName?: string;
  bottomClassName?: string;
}) => {
  return (
    <div
      className={`relative overflow-hidden border-y border-brand-blue/10 ${className}`}
    >
      <Marquee items={topItems} className={topClassName} />
      <Marquee items={bottomItems} className={bottomClassName} reverse />
    </div>
  );
};

export default DualMarquee;
