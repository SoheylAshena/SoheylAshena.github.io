import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);
    setError(null);

    emailjs
      .sendForm(
        "service_srvdg09",
        "template_564qdoo",
        form.current,
        "aXwBSC3r1y427hVfk"
      )
      .then(() => {
        setIsSending(false);
        setIsSent(true);
        form.current?.reset();
      })
      .catch((error) => {
        setIsSending(false);
        setError("Failed to send message. Please try again later.");
        console.error("Error sending email:", error.message);
      });
  };

  return (
    <div className="container mx-auto px-6 py-20" id="contact">
      <motion.div
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-6xl font-extrabold text-transparent dark:from-yellow-400 dark:to-yellow-600">
          Get in Touch
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600 transition-colors duration-500 dark:text-gray-400">
          Reach out, and I’ll get back to you as soon as possible. Feel free to
          drop a message.
        </p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto max-w-2xl rounded-3xl border-4 border-transparent bg-gradient-to-tr from-purple-600 to-pink-500 bg-clip-border text-purple-900 shadow-xl dark:text-purple-300"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="h-full w-full rounded-3xl bg-purple-50 p-6 shadow-lg backdrop-blur-lg transition-colors duration-500 md:p-12 dark:bg-gray-900">
          {/* Name & Email Side by Side */}
          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="relative">
              <input
                className="peer w-full rounded-xl  bg-white/80 p-4 text-gray-800 shadow-md outline-none backdrop-blur-md transition-all outline-0 duration-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:border dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-offset-gray-800"
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="relative">
              <input
                className="peer w-full rounded-xl dark:border bg-white/80 p-4 text-gray-800 shadow-md outline-none backdrop-blur-md transition-all duration-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-offset-gray-800"
                type="email"
                name="from_email"
                placeholder="Your E-mail"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="relative mb-6">
            <textarea
              className="peer w-full rounded-xl dark:border bg-white/80 p-4 text-gray-800 shadow-md outline-none backdrop-blur-md transition-all duration-500 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-offset-gray-800"
              name="message"
              rows={5}
              placeholder="Tell me, I am all ears..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            className="w-full rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-50"
            type="submit"
            disabled={isSending}
            whileHover={{ scale: 1.05 }}
          >
            {isSending ? (
              <span className="flex items-center justify-center">
                <span className="mr-2 animate-spin text-white">⏳</span>{" "}
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>

          {/* Success & Error Messages */}
          {isSent && (
            <motion.div
              className="mt-6 text-center text-lg text-green-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="mr-2 text-2xl">✅</span>Your message was sent
              successfully!
            </motion.div>
          )}
          {error && (
            <motion.div
              className="mt-6 text-center text-lg text-red-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="mr-2 text-2xl">❌</span>
              {error}
            </motion.div>
          )}
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
