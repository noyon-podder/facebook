const InputOnFocus = () => {
  return (
    <div className="lg:w-[350px] w-full">
      <div className="relative w-full bg-white h-14">
        <input
          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border border-gray-400 focus:border-blue-600 rounded-lg px-3 mt-1"
          placeholder=" "
        />
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[12px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[8.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md  before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[12px] after:ml-1  after:rounded-tr-md    after:pointer-events-none after:transition-all  peer-placeholder-shown:leading-[3.75] text-gray-500  ">
          Mobile number or email address
        </label>
      </div>
    </div>
  );
};

export default InputOnFocus;
