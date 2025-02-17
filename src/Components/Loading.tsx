const Loading = () => {
  return (
    <div className="absolute top-0 right-0 flex h-screen w-full items-center justify-center">
      <img className="h-32 w-32" src="loading.svg" alt="loading indicator" />
    </div>
  );
};

export default Loading;
