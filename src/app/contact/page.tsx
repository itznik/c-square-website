"use client"; // This page is interactive, so it must be a Client Component

import { useState, FormEvent } from 'react';

// Define a type for the form state for better type safety
type FormState = {
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string | null;
};

export default function ContactPage() {
  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  // State for form submission status
  const [formState, setFormState] = useState<FormState>({
    status: 'idle',
    message: null,
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault(); // Prevent the default form submission (page reload)
    setFormState({ status: 'loading', message: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      // If successful
      setFormState({ status: 'success', message: 'Thank you! Your message has been sent.' });
      setName('');
      setEmail('');
      setMessage('');

    } catch (error) {
      // If an error occurs
      setFormState({ status: 'error', message: 'Failed to send message. Please try again later.' });
    }
  };

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Get in Touch
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  How can we help you?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={formState.status === 'loading'}
                  className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                >
                  {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
            {/* Form Submission Status Message */}
            {formState.message && (
              <div className={`mt-4 text-center p-3 rounded-lg ${
                formState.status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {formState.message}
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
