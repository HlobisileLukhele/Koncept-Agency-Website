import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (data, e) => {
    setIsSubmitting(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text); // Log success message
          setStateMessage("Message sent successfully!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        },
        (error) => {
          console.error(error.text); // Log error message
          setStateMessage("Something went wrong! Please try again later.");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000);
        }
      );

    e.target.reset();
  };

  return (
    <div className="w-full py-10" id="form">
      <div className="bg-white h-96 "></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="bg-white-100 w-full shadow rounded p-8 sm:p-12 -mt-80">
          <p className="text-3xl font-bold leading-7 text-center mb-8 title-font">
            Get In Touch
          </p>
          <p className="text-1xl font-bold leading-7 text-center mb-8 text-gray-700"></p>
          {/* Form with handleSubmit */}
          <form onSubmit={handleSubmit(sendEmail)} noValidate>
            <div className="md:flex items-center mt-12">
              {/* Full Name Field */}
              <div className="w-full md:w-1/2 flex flex-col">
                <label className="font-semibold text-gray-600">Full Name</label>
                <input
                  type="text"
                  className={`leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200 ${
                    errors.fullName ? "border-red-500" : ""
                  }`}
                  {...register("fullName", { required: "Full Name is required" })}
                />
                {errors.fullName && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              {/* Email Address Field */}
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-2 mt-4">
                <label className="font-semibold leading-none text-gray-600 my-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className={`leading-none text-gray-900 p-3  focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email", {
                    required: "Email Address is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            {/* Subject Field */}
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none text-gray-600">
                  Subject
                </label>
                <input
                  type="text"
                  className={`leading-none text-gray-700 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200 ${
                    errors.subject ? "border-red-500" : ""
                  }`}
                  {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                  <span className="text-red-500 text-sm mt-1">
                    {errors.subject.message}
                  </span>
                )}
              </div>
            </div>

            {/* Message Field */}
            <div className="w-full flex flex-col mt-8">
              <label className="font-semibold leading-none text-gray-600">
                Message
              </label>
              <textarea
                className={`h-40 text-base leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200 ${
                  errors.message ? "border-red-500" : ""
                }`}
                {...register("message", { required: "Message is required" })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-center w-full">
              <button
                type="submit"
                value="Send"
                disabled={isSubmitting}
                className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-gray-700 rounded hover:bg-gray-600 focus:border-blue-700 focus:ring-blue-700 focus:outline-none"
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </div>
            {stateMessage && <p className="text-center mt-4">{stateMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;