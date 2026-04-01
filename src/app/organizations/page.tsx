import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Just a thought - Organizations",
  description: "Empower your leadership and streamline your business with a subtractive approach to growth.",
};

const OrganizationsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-grey-blue text-brand-off-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">For Organizations: Cultivating Executive Agility</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Empower your leadership and streamline your business with a subtractive approach to growth.
          </p>
        </div>
      </section>

      {/* Unlocking Potential Through Subtraction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Unlocking Potential Through Subtraction</h2>
          <p className="mb-4">
            In today's complex business landscape, true agility comes not from adding more, but from strategically removing what hinders progress. Just A Thought partners with growing small businesses and their leaders to foster "Executive Agility" by eliminating unseen barriers and unleashing inherent capacity.
          </p>
          <p className="mb-6">
            Our methodology is built on the transformative "Undo. Unthink. Unlearn." framework, tailored to address:
          </p>
          <ul className="space-y-4 mb-6 list-disc list-inside">
            <li><strong>Unnecessary Complexity:</strong> Streamline operations and decision-making by cutting through the clutter.</li>
            <li><strong>Limiting Mindsets:</strong> Challenge entrenched beliefs and cognitive patterns that restrict innovation and growth.</li>
            <li><strong>Organizational Drag:</strong> Identify and remove the systemic friction that slows down your team and projects.</li>
          </ul>
        </div>
      </section>

      {/* Key Programs for Organizational Transformation Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Key Programs for Organizational Transformation</h2>
          <h3 className="text-2xl font-bold mb-4">The Core Optimization Plan</h3>
          <p className="mb-8">
            This program is designed to transform strategic leadership from an accidental occurrence into a clear, structured roadmap. We help bridge the gap between your organization's potential and its executive readiness, ensuring sustainable and impactful growth.
          </p>
          <h3 className="text-2xl font-bold mb-4">The Rewire Lab for Teams</h3>
          <p>
            Adapted for organizational dynamics, the Rewire Lab focuses on transforming the collective mindsets that drive professional skills and team performance. We delve into the root causes of challenges, providing solutions that resonate deeply and drive lasting change, rather than merely addressing symptoms.
          </p>
        </div>
      </section>
    </>
  );
};

export default OrganizationsPage;
