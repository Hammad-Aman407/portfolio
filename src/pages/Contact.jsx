import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    setSuccessMessage('');
    setErrorMessage('');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.fullName,
          email: data.email,
          message: data.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSuccessMessage('Message sent successfully!');
      reset();
    } catch (err) {
      console.error(err);
      setErrorMessage('Failed to send message. Try again later.');
    }
  };

  return (
    <section className="bg-base-300" id="contact">
      <div className="container mx-auto px-4 py-10">

        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-3xl font-bold">Let's Build Something Together</h2>
          <p className="mt-3 max-w-2xl mx-auto">
            Have a project in mind? Drop me a message below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          data-aos="zoom-in"
          data-aos-delay="200"
          className="max-w-xl mx-auto bg-base-200 p-6 rounded-lg shadow-md"
        >

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              {...register('fullName', { required: 'Full Name is required' })}
              className="w-full p-3 rounded-md border bg-base-300 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full p-3 rounded-md border bg-base-300 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              placeholder="Your Message"
              rows={5}
              {...register('message', { required: 'Message is required' })}
              className="w-full p-3 rounded-md border bg-base-300 border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white font-medium py-3 rounded-md hover:bg-primary/90 transition"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {successMessage && (
            <p className="text-green-500 text-center mt-3">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-center mt-3">{errorMessage}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;