import React from "react";

const Login = () => {
  return (
    <div className="loginDiv">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-5 flex flex-col justify-center text-center ">
        <div className="flex justify-center items-center mt-2 gap-2">
          <span className="w-[6px] h-[35px] bg-yellow-500"></span>
          <h1 className="text-[22px] sm:text-[32px] font-montserrat font-[800px] ">
            OUR STORE
          </h1>
        </div>
        <div className="my-2">
          <h3 className="font-montserrat font-[600px] text-[22px] ">SIGN IN</h3>
          <p className="font-montserrat text-labelColor text-label mt-1 ">
            Enter your credentials to access your account
          </p>
        </div>
        <form className="flex flex-col text-left p-3 gap-3">
          <div className="flex flex-col gap-2">
            <label className="font-montserrat text-label text-labelColor hover:after:content-['aaa@bbb.com şeklinde giriniz'] hover:after:text-black hover:after:pl-3 hover:after:underline hover:cursor-pointer " htmlFor="email">Email</label>
            <input type="email" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
