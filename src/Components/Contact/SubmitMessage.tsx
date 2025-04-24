import { motion } from "framer-motion";

interface SubmitMessageInterface {
  isSent: boolean;
  error: string | null;
}

const SubmitMessage = ({ isSent, error }: SubmitMessageInterface) => {
  return (
    <>
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
    </>
  );
};

export default SubmitMessage;
