import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Rewire Programs - Just a thought",
  description: "Details about our transformative programs, designed to cultivate Executive Agility.",
};

const UpcomingRewireProgramsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-grey-blue text-brand-off-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Upcoming Rewire Programs</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Details about our transformative programs, designed to cultivate Executive Agility.
          </p>
        </div>
      </section>

      {/* The Rewire Lab Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">The Rewire Lab</h2>
          <p className="mb-4">
            The Rewire Lab is our flagship program, meticulously designed to help individuals and leaders "stop learning through costly mistakes" and "accelerate growth" by embracing our unique subtractive methodology. This immersive experience guides participants through the "Undo. Unthink. Unlearn." framework to:
          </p>
          <ul className="space-y-4 mb-6 list-disc list-inside">
            <li>Enhance Executive Agility by removing unnecessary complexity.</li>
            <li>Dismantle limiting mindsets that hinder progress and innovation.</li>
            <li>Liberate untapped capacity and potential within themselves and their organizations.</li>
          </ul>
          <p className="mb-6">
            Whether you're an individual seeking profound personal transformation or a leader aiming to refine your strategic capabilities, the Rewire Lab offers a powerful path to clarity and accelerated development. Specific dates and registration details for upcoming sessions will be announced here.
          </p>
        </div>
      </section>

      {/* The Core Optimization Plan Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">The Core Optimization Plan</h2>
          <p className="mb-6">
            Beyond individual rewiring, the Core Optimization Plan provides a comprehensive roadmap for strategic leadership within organizations. This program is tailored to transform leadership from an accidental occurrence into a deliberate, structured path, bridging the gap between an organization's inherent potential and its executive readiness. Information on upcoming cohorts or bespoke organizational engagements will be available soon.
          </p>
        </div>
      </section>

      {/* Stay Informed Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="mb-8">
            We regularly schedule new Rewire Lab sessions and Core Optimization Plan cohorts. To ensure you don't miss an opportunity to participate in these transformative programs, please check back frequently or contact us for direct inquiries.
          </p>
          {/* Note: Link will be updated to use <Link> component once page is created */}
          <a href="/book-now" className="bg-brand-brown text-white font-bold py-2 px-4 rounded hover:bg-opacity-80">
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
};

export default UpcomingRewireProgramsPage;
