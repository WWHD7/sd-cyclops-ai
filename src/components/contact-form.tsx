'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-foreground">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="mt-2 block w-full rounded-md border border-white/10 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all duration-300 ${
            status === 'submitting'
              ? 'opacity-75 cursor-not-allowed'
              : 'hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20'
          }`}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {status === 'success' && (
        <div className="rounded-md bg-green-500/10 p-4">
          <p className="text-sm text-green-400">
            Thank you for your message! We'll get back to you soon.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-md bg-red-500/10 p-4">
          <p className="text-sm text-red-400">
            {errorMessage || 'Failed to send message. Please try again.'}
          </p>
        </div>
      )}
    </form>
  );
} 