import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Just a thought - About",
  description: "Discover the core principles that drive our transformative approach to leadership and growth.",
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-grey-blue text-brand-off-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">About Us: The Philosophy of Subtraction</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Discover the core principles that drive our transformative approach to leadership and growth.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="mb-4">
            Just A Thought, LLC is a strategic consultancy dedicated to helping leaders and growing small businesses achieve peak "Executive Agility." We are founded on a simple yet profound belief: true potential is not unlocked by adding more, but by strategically taking away.
          </p>
          <p className="mb-6">
            Based in Middletown, DE, we challenge the conventional wisdom that 'more is better.' Instead, we focus on removing organizational complexity, dismantling limiting mindsets, and eliminating the friction that holds businesses back. Our goal is to liberate the untapped capacity that already exists within your organization.
          </p>
        </div>
      </section>

      {/* The "Undo. Unthink. Unlearn." Framework Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">The "Undo. Unthink. Unlearn." Framework</h2>
          <p className="mb-4">
            Our unique methodology is the engine of the transformation we facilitate. It is a subtractive framework designed to get to the root of challenges, rather than just treating the symptoms:
          </p>
          <ul className="space-y-4 mb-6 list-disc list-inside">
            <li><strong>Undo:</strong> We help you identify and reverse the ingrained habits and processes that create drag and inefficiency.</li>
            <li><strong>Unthink:</strong> We guide you to challenge the automatic assumptions and cognitive biases that limit strategic vision.</li>
            <li><strong>Unlearn:</strong> We facilitate the release of outdated paradigms to create space for genuine innovation and adaptability.</li>
          </ul>
          <p>
            By transforming the underlying mindsets that drive professional skills, we help you and your teams achieve lasting growth and resilience.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
