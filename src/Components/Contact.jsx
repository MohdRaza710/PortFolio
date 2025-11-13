import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://formspree.io/f/mqawkbvn", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Contact me</h1>
        <p className="text-center">Please fill out the form below to contact me</p>
        <div className=" flex flex-col items-center justify-center mt-8">

          <form
            onSubmit={handleSubmit(onSubmit)}
            action="https://formspree.io/f/mqawkbvn"
            method="POST"
            className="bg-white shadow-lg rounded-xl w-100 px-6 py-5 flex flex-col space-y-4 transition-transform transform hover:scale-105"
          >

            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-2">FullName</label>

              <input
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                placeholder="Full Name"
                required
              />
              {errors.name && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>

              <input
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              {errors.email && <span>This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 mb-2">Message</label>

              <textarea
                className="shadow rounded-lg appearance-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                placeholder="Message"
                rows={5}
                required
              />
              {errors.message && <span>This field is required</span>}
            </div>

            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>

          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
