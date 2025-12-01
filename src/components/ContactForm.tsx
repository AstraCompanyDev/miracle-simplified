// import React, { useState } from 'react'

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     option: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitMessage, setSubmitMessage] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitMessage("");

//     try {
//       const response = await fetch(
//         "https://miracleregen.com/wp-json/contact/v1/submit",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setSubmitMessage(data.message);
//         // Reset form
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           option: "",
//           message: "",
//         });
//       } else {
//         throw new Error(data.message || "Failed to submit form");
//       }
//     } catch (error) {
//       console.error("Form submission error:", error);
//       setSubmitMessage(
//         error.message ||
//           "An error occurred while sending your message. Please try again."
//       );
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <div className="animate-fade-in">
//                 <h2 className="text-3xl font-semibold font-serif mb-6">
//                   Send Us a Message
//                 </h2>
//                 <form className="space-y-6" onSubmit={handleSubmit}>
//                   {/* Full Name */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
//                       placeholder="John Doe"
//                       required
//                     />
//                   </div>

//                   {/* Email */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
//                       placeholder="john@example.com"
//                       required
//                     />
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Phone
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
//                       placeholder="+66 81-234-5678"
//                     />
//                   </div>

//                   {/* Choose an Option */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Choose an Option *
//                     </label>
//                     <div className="relative">
//                       <select
//                         name="option"
//                         value={formData.option}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 rounded-lg border border-input 
//                    bg-white appearance-none
//                    focus:outline-none focus:ring-2 focus:ring-primary"
//                         required
//                       >
//                         <option value="" disabled>
//                           Select an option
//                         </option>
//                         <option value="general">General Inquiry</option>
//                         <option value="treatment">
//                           Inquire About the Treatment
//                         </option>
//                         <option value="discovery-call">
//                           Book Your FREE Discovery Call
//                         </option>
//                       </select>

//                       {/* Custom Chevron */}
//                       <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                           strokeWidth="2"
//                           stroke="currentColor"
//                           className="w-4 h-4 text-gray-500"
//                         >
//                           <path
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                             d="M19 9l-7 7-7-7"
//                           />
//                         </svg>
//                       </span>
//                     </div>
//                   </div>

//                   {/* Quick Message */}
//                   <div>
//                     <label className="block text-sm font-medium mb-2">
//                       Quick Message *
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       rows={5}
//                       className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
//                       placeholder="Write your message here..."
//                       required
//                     />
//                   </div>

//                   {/* Submit Button */}
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
//                   >
//                     {isSubmitting ? (
//                       <span className="flex items-center justify-center">
//                         <svg
//                           className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Sending...
//                       </span>
//                     ) : (
//                       "Send Message"
//                     )}
//                   </button>

//                   {/* Submission Message */}
//                   {submitMessage && (
//                     <div
//                       className={`p-4 rounded-lg text-center ${
//                         submitMessage.includes("Thank you")
//                           ? "bg-green-100 text-green-800 border border-green-200"
//                           : "bg-red-100 text-red-800 border border-red-200"
//                       }`}
//                     >
//                       {submitMessage}
//                     </div>
//                   )}
//                 </form>
//               </div>
//   )
// }

// export default ContactForm

import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    message: "",
    _wpcf7_unit_tag: "2785",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    const fd = new FormData();
    fd.append("your-name", formData.name);
    fd.append("your-email", formData.email);
    fd.append("your-phone", formData.phone);
    fd.append("your-option", formData.option);
    fd.append("your-message", formData.message);
    
    // Add page URL for reference
    fd.append("_wpcf7_unit_tag", formData._wpcf7_unit_tag);
    fd.append("page-url", window.location.href);

    try {
      const response = await fetch(
        `https://miracleregen.com/wp-json/contact-form-7/v1/contact-forms/${formData._wpcf7_unit_tag}/feedback`,
        {
          method: "POST",
          body: fd,
        }
      );

      const result = await response.json();

      if (result.status === "mail_sent") {
        setSubmitMessage("Thank you! Your message has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          option: "",
          message: "",
        });
      } else {
        setSubmitMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-semibold font-serif mb-6">
        Send Us a Message
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="john@example.com"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="+66 81-234-5678"
          />
        </div>

        {/* Choose an Option */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Choose an Option *
          </label>
          <div className="relative">
            <select
              name="option"
              value={formData.option}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-input 
                        bg-white appearance-none
                        focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="general">General Inquiry</option>
              <option value="treatment">Inquire About the Treatment</option>
              <option value="discovery-call">
                Book Your FREE Discovery Call
              </option>
            </select>

            <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4 text-gray-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Quick Message */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Quick Message *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-input focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            placeholder="Write your message here..."
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* Submission Message */}
        {submitMessage && (
          <div className="p-4 rounded-lg text-center bg-green-100 text-green-800 border border-green-200">
            {submitMessage}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
