// import React from "react";

// function Contact() {
//   return (
//     <section id="contact" className="px-6 py-16 md:px-20 bg-white text-center">
//       <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Contact me</h2>

//       <form className="max-w-lg mx-auto space-y-4">
//         <input
//           type="email"
//           placeholder="Enter email address"
//           className="w-full border border-gray-300 rounded-md px-4 py-2"
//         />
//         <textarea
//           placeholder="Enter message..."
//           className="w-full border border-gray-300 rounded-md px-4 py-2 h-32"
//         ></textarea>
//         <button className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700">
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }

// export default Contact;


import React, { useRef } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x2iapz9",
        "template_2njxlpu",
        form.current,
        "QOrUeuL_wJ4K7DylW"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section id="contact" className="px-6 py-16 md:px-20 bg-black text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-6">
        Contact me
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto space-y-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Enter your name"
          className="w-full border text-green-500  rounded-md px-4 py-2"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Enter email address"
          className="w-full border text-green-500  rounded-md px-4 py-2"
          required
        />

        <textarea
          name="message"
          placeholder="Enter message..."
          className="w-full border text-green-500  rounded-md px-4 py-2 h-32"
          required
        ></textarea>

        <button className="w-full bg-indigo-600 text-green-500  py-2 rounded-md hover:bg-indigo-700">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
