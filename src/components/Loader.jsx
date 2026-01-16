const Loader = () => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-base-300">
      
      <span className="loading loading-dots loading-xs block sm:hidden"></span>

      <span className="loading loading-dots loading-sm hidden sm:block md:hidden"></span>

      <span className="loading loading-dots loading-md hidden md:block lg:hidden"></span>

      <span className="loading loading-dots loading-lg hidden lg:block xl:hidden"></span>
      
      <span className="loading loading-dots loading-xl hidden xl:block"></span>

    </div>
  );
};

export default Loader;
