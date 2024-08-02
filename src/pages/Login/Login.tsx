import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FaFacebook, FaMeta } from "react-icons/fa6";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { useUserCreateMutation } from "../../redux/features/login/login.api";

const Login = () => {
  const [eyeShow, setEyeShow] = useState("");
  const [eyeToggle, setEyeToggle] = useState(false);
  const [createUser] = useUserCreateMutation();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
    };

    await createUser(userData).unwrap();

    reset();
  };

  return (
    <div className="h-screen flex items-center justify-center flex-col px-4 bg-[#f8f8f8]">
      <div>
        <span className="text-gray-500">English(UK)</span>
      </div>
      <div className="mt-10">
        <FaFacebook size={50} className="text-blue-600" />
      </div>
      <div className="lg:max-w-[400px] w-full mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Mobile number or email address"
              className="bg-white h-14 rounded-lg border border-gray-300 w-full focus:border-blue-600 outline-none px-4 placeholder:font-normal "
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={eyeToggle ? "text" : "password"}
              placeholder="Password"
              {...register("password", { required: true })}
              onChange={(e) => setEyeShow(e.target.value)}
              className="bg-white h-14 rounded-lg border border-gray-300 w-full focus:border-blue-600 outline-none px-4 placeholder:font-normal "
            />
            <div
              onClick={() => setEyeToggle(!eyeToggle)}
              className={`absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer ${
                eyeShow.length > 2 ? "block" : "hidden"
              }`}
            >
              {eyeToggle ? (
                <IoEyeOutline size={24} />
              ) : (
                <IoEyeOffOutline size={24} />
              )}
            </div>
          </div>
          <button className="bg-[#0866ff] hover:bg-blue-600 transition-colors w-full h-12 text-white font-medium text-xl rounded-3xl">
            Log in
          </button>
          <div className="mt-4 text-center">
            <a
              href="#"
              className="text-[#181616] text-lg font-normal hover:text-gray-700"
            >
              Forgotten Password?
            </a>
          </div>
        </form>

        <div className="mt-20">
          <div>
            <button className="bg-transparent border border-[#0866ff] hover:bg-blue-600 transition-colors w-full h-12 text-[#0866ff] font-normal text-xl rounded-3xl">
              Create new account
            </button>
          </div>
          <p className="flex items-center gap-1 font-semibold text-gray-600 text-lg justify-center mt-5">
            <FaMeta />
            Meta
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
