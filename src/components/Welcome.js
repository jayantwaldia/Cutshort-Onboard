import Logo from "./Logo";

function Welcome() {
  return (
    <div className="flex flex-col w-[100%] text-black text-center mx-auto items-center">
      <Logo />
      <div className="m-8">XXXX</div>
      <div className="w-[100%] md:w-[65%]">
        <p className="text-2xl md:text-3xl font-semibold text-gray-700 tracking-wide">
          Welcome! First things first...
        </p>
        <p className="text-gray-500 font-normal mt-3">
          You can always change them later
        </p>
        <form className="flex flex-col w-[90%] mx-auto">
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-900 mt-10 text-left"
          >
            Full Name
          </label>
          <input
            type="text"
            id="email"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Steve Jobs"
            required
          />
          <label
            htmlFor="email"
            className="block mb-2 text-md font-medium text-gray-900 mt-5 text-left"
          >
            Display Name
          </label>
          <input
            type="text"
            id="email"
            className="mt-1 px-3 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Steve"
            required
          />
          <button
            type="submit"
            className="mt-10 px-3 py-3 inline-flex text-center  rounded-md border border-transparent bg-[#664DE5] text-sm font-medium text-white shadow-sm hover:bg-[#644dd6] focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Create Workspace
          </button>
        </form>
      </div>
    </div>
  );
}

export default Welcome;
