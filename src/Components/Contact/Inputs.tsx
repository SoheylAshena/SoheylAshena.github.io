const Inputs = () => {
  return (
    <>
      <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <input
          className="transition-color w-full rounded-xl p-4 ring-2 ring-pink-500 duration-500 outline-none focus:border-0 focus:ring-2 focus:ring-purple-500"
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
        />

        <input
          className="transition-color w-full rounded-xl p-4 ring-2 ring-pink-500 duration-500 outline-none focus:border-0 focus:ring-2 focus:ring-purple-500"
          type="email"
          name="from_email"
          placeholder="Your E-mail"
          required
        />
      </div>
      <textarea
        className="transition-color mb-6 w-full rounded-xl p-4 ring-2 ring-pink-500 duration-500 outline-none focus:border-0 focus:ring-2 focus:ring-purple-500"
        name="message"
        rows={5}
        placeholder="Tell me, I am all ears..."
        required
      ></textarea>
    </>
  );
};

export default Inputs;
