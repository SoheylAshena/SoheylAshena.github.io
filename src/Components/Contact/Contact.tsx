import { motion } from "framer-motion";
import useContact from "../../Hooks/useContact";
import SectionTitle from "../SectionTitle";
import Inputs from "./Inputs";
import SendButton from "./SendButton";
import SubmitMessage from "./SubmitMessage";

const Contact = () => {
  const { isSending, isSent, error, sendEmail, form } = useContact();

  return (
    <div className="container mx-auto px-6 py-20" id="contact">
      <SectionTitle
        description="Reach out, and I’ll get back to you as soon as possible. Feel free to
          drop a message."
        title="Get in Touch"
      />

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto max-w-2xl p-5 text-black dark:text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Inputs />
        <SendButton isSending={isSending} />
        <SubmitMessage isSent={isSent} error={error} />
      </motion.form>
    </div>
  );
};

export default Contact;
