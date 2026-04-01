import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Just a thought - Book Now",
  description: "Schedule your transformative journey with Just A Thought.",
};

const BookNowPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-grey-blue text-brand-off-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-4">Book a Session</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Schedule your transformative journey with Just A Thought.
          </p>
        </div>
      </section>

      {/* Schedule Your Consultation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Schedule Your Consultation</h2>
          <div className="border-2 border-dashed border-brand-blue p-12 text-center text-brand-brown text-xl rounded-lg bg-brand-off-white mx-auto max-w-lg">
            <p>Google Calendar embed code goes here</p>
          </div>
          <p className="mt-8 text-center">
            Should you encounter any difficulties with the calendar, please do not hesitate to{' '}
            <a href="mailto:info@thoughtschangelives.com" className="text-brand-blue hover:underline">
              contact us directly
            </a>.
          </p>
        </div>
      </section>
    </>
  );
};

export default BookNowPage;
