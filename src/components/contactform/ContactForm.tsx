"use client";

import { useRef, useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Submitting...");
    setTimeout(() => {
      setStatus(
        `Thank you, ${name}. It's a pleasure to hear from you. We'll be in touch shortly.`,
      );
      formRef.current?.reset();
    }, 2000);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-lg font-medium text-gray-700 text-left"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-lg font-medium text-gray-700 text-left"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-lg font-medium text-gray-700 text-left"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="mt-1 block w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-lg font-medium text-gray-700 text-left"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 block w-full px-4 py-3 text-base border border-gray-300 rounded-md shadow-sm focus:ring-accent focus:border-accent"
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="bg-brand-gold text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-80 transition-colors transform hover:scale-105 transition-transform"
        >
          Send Message
        </button>
      </div>
      {status && <p className="text-center mt-4 text-lg">{status}</p>}
    </form>
  );
};

export default ContactForm;
