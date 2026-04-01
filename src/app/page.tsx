export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-grey-blue text-brand-off-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Welcome to Just A Thought</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your strategic partner in cultivating Executive Agility through profound transformation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Unlocking True Potential: The Power of Subtraction</h2>
          <p className="mb-4">
            At Just A Thought, we believe that true growth and sustained success come not from adding more to an already complex world, but from strategically removing what hinders your progress. We are a strategic consultancy dedicated to empowering leaders and organizations to achieve "Executive Agility" – the clarity, focus, and adaptability needed to thrive in dynamic environments.
          </p>
          <p className="mb-6">
            Our unique philosophy centers on a powerful, subtractive framework:
          </p>
          <h3 className="text-2xl font-bold text-center mb-6">Undo. Unthink. Unlearn.</h3>
          <ul className="space-y-4 mb-6">
            <li><strong>Undo:</strong> We help you identify and dismantle ingrained patterns, processes, and habits that create organizational drag and limit individual potential.</li>
            <li><strong>Unthink:</strong> We challenge conventional wisdom and cognitive biases, guiding you to new perspectives and innovative solutions.</li>
            <li><strong>Unlearn:</strong> We facilitate the shedding of outdated knowledge, assumptions, and fear-based reactions, making way for genuine insight and accelerated growth.</li>
          </ul>
          <p>
            By transforming the underlying mindsets that drive professional skills and organizational culture, we help you address root problems, liberate untapped capacity, and realize that clarity and opportunity are not found externally, but are powerful mental constructs within your grasp.
          </p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Approach?</h2>
          <p className="mb-8">
            Explore our programs for Individuals and Organizations, or Book a Consultation to begin your journey towards Executive Agility.
          </p>
          {/* Note: Links will be updated to use <Link> component once pages are created */}
          <div className="space-x-4">
            <a href="/individuals" className="bg-brand-blue text-white font-bold py-2 px-4 rounded hover:bg-opacity-80">
              For Individuals
            </a>
            <a href="/organizations" className="bg-brand-blue text-white font-bold py-2 px-4 rounded hover:bg-opacity-80">
              For Organizations
            </a>
            <a href="/book-now" className="bg-brand-brown text-white font-bold py-2 px-4 rounded hover:bg-opacity-80">
              Book a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
