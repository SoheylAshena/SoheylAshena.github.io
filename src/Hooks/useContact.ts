import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const useContact = () => {
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
        "aXwBSC3r1y427hVfk",
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
  return { isSending, isSent, error, sendEmail, form };
};

export default useContact;
