import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Just a thought - Individuals",
  description: "Transform your leadership and accelerate personal growth with the Rewire Lab.",
};

const IndividualsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-grey-blue text-brand-off-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">For Individuals: Unleash Your Potential</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Transform your leadership and accelerate personal growth with the Rewire Lab.
          </p>
        </div>
      </section>

      {/* The Rewire Lab Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">The Rewire Lab: Undo. Unthink. Unlearn.</h2>
          <p className="mb-4">
            Are you an ambitious leader seeking to break free from limiting mindsets and unlock your full potential? The Rewire Lab is designed to help you achieve "Executive Agility" by addressing the core internal constructs that hold you back.
          </p>
          <p className="mb-6">
            Our unique framework focuses on a powerful, subtractive approach:
          </p>
          <ul className="space-y-4 mb-6 list-disc list-inside">
            <li><strong>Undo:</strong> Identify and dismantle ingrained patterns that no longer serve you.</li>
            <li><strong>Unthink:</strong> Challenge assumptions and cognitive biases that limit your perspective.</li>
            <li><strong>Unlearn:</strong> Release outdated knowledge and habits to make way for new, empowering insights.</li>
          </ul>
          <p>
            This isn't about simply adding new skills; it's about fundamentally transforming your internal landscape to liberate your inherent capabilities and accelerate your growth.
          </p>
        </div>
      </section>
    </>
  );
};

export default IndividualsPage;
