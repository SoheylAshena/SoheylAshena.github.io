import { motion } from "framer-motion";

interface SendButtonInterface {
  isSending: boolean;
}

const SendButton = ({ isSending }: SendButtonInterface) => {
  return (
    <motion.button
      className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-pink-700 px-6 py-3 text-lg font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
      type="submit"
      disabled={isSending}
      whileHover={{ scale: 0.99 }}
    >
      {isSending ? (
        <span className="`items-center flex justify-center">
          <span className="mr-2 animate-spin text-white">⏳</span>
          Sending...
        </span>
      ) : (
        "Send Message"
      )}
    </motion.button>
  );
};

export default SendButton;
