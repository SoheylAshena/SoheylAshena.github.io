// ContactForm.js
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  // return <div>Hello</div>;
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);
    emailjs
      .sendForm(
        "service_srvdg09",
        "template_564qdoo",
        form.current,
        "aXwBSC3r1y427hVfk",
      )
      .then((result) => {
        setIsSending(false);
        setIsSent(true);
        form.current.reset();
      })
      .catch((error) => {
        setIsSending(false);
        setError("Failed to send message. Please try again later.");
        console.error("Error sending email:", error.text);
      });
  };
  return (
    <div className="container" id="contact">
      <form ref={form} onSubmit={sendEmail} className="form">
        <label className="label">Name</label>
        <input className="input" type="text" name="from_name" required />
        <label className="label">Email</label>
        <input className="input" type="email" name="from_email" required />
        <label className="label">Message</label>
        <textarea className="input min-h-36" name="message" required></textarea>
        <button className="button" type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>
        {isSent && (
          <p className="success">Your message was sent successfully!</p>
        )}
        {error && <p className="error"> {error}</p>}
      </form>
    </div>
  );
};

export default Contact;
