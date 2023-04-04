import React from "react";
import bg from "../../assets/bg.jpg";

const SignUp = () => {
  return (
   
    
    <div className="bg-[#E5E5E5]">
      <div>
        <img className="w-full brightness-50 h-[800px] lg:h-[830px]" src={bg} alt="" />
      </div>
     
      <form className=" absolute top-[20%] left-4 right-4  lg:top-[33%] lg:left-[40%] lg:right-[40%]  ">
      
       <div className="bg-[#E5E5E5] flex   p-2 w-full lg:w-[406px] ">
        <h1 className="bg-black px-6 py-2 text-center mx-2  text-white w-[120px]">Name</h1>
        <input className="  p-2 text-[#313131] bg-[#E5E5E5] outline-none w-full"  type="text" name="name" placeholder="Enter Your Name "  required />
         
       </div>
       <div className="bg-[#E5E5E5] flex mt-5  p-2 w-full lg:w-[406px]   ">
        <h1 className="bg-black px-6 py-2  text-center mx-2  text-white w-[120px]">Email</h1>
        <input className="  p-2 text-[#313131] bg-[#E5E5E5] outline-none w-full"  type="email" name="email" placeholder="Enter Your email " required  />
         
       </div>
       <div className="bg-[#E5E5E5] flex mt-5  p-2 w-full lg:w-[406px] ">
        <h1 className="bg-black px-6 text-center py-2  mx-2  text-white w-[120px]">Password</h1>
        <input className="  p-2 text-[#313131] bg-[#E5E5E5] outline-none w-full"  type="password" name="password" placeholder="Enter Your password "  required />
         
       </div>
       <div className=" text-center lg:">
        <button  className= "mt-14  text-white  border border-white text-sm  px-4 py-1 rounded-md">Sign up</button>
        </div>
      </form>
      
    </div>
   
  );
};

export default SignUp;
