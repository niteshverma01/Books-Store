import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add your form submission logic here
  //   console.log('Form submitted:', { name, email, message });
  //   // Reset form fields
  //   setName('');
  //   setEmail('');
  //   setMessage('');
  // };

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="py-12">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl mt-20 md:text-4xl">Contact Us</h2>
        <form
         
         
          className="shadow-md rounded-md dark:bg-slate-800 shadow-lg px-8 pt-6 pb-8 mb-4"
        >
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 rounded-md text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your fullname"
              {...register('fullname', { required: true })}
            />
            <br />
            {errors.fullname && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              {...register('email', { required: true })}
            />
            <br />
            {errors.email && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>
          <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              placeholder="Enter your message"
              {...register('message', { required: true })}
            ></textarea>
            <br />
            {errors.message && (
              <span className="text-sm text-red-500">This field is required</span>
            )}
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;