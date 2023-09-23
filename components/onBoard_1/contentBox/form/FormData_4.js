"use client";
import { useRef } from "react";
import FormButton from "./formData/FormButton";
import useOnboard from "@/hooks/useOnboard";

export default function FormData_4() {
  const { step4 } = useOnboard();
  const password = useRef(null);
  const confirmPassword = useRef(null);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[24px] font-bold text-center text-primary-black">
        Create Password and Confirm <br /> Password
      </h1>
      <p className="text-[16px] font-medium text-center text-primary-black mt-[18px]">
        Establish your access credentials by setting up your <br /> password for
        your wallet.
      </p>
      <input
        type="password"
        ref={password}
        className="mt-[40px] w-[100%] h-[60px] rounded-lg px-[20px] py-[10px] bg-[#f0f0f099] text-primary-black font-medium text-[16px]"
        placeholder="Enter Password"
      ></input>
      <input
        type="password"
        ref={confirmPassword}
        className="mt-[20px] w-[100%] h-[60px] rounded-lg px-[20px] py-[10px] bg-[#f0f0f099] text-primary-black font-medium text-[16px]"
        placeholder="Confirm Password"
      ></input>
      <FormButton
        className="mt-[40px]"
        text="Confirm Password"
        onClick={() => {
          if (password.current.value === confirmPassword.current.value) {
            step4.ConfirmPassword(password.current.value);
          }
        }}
      />
    </div>
  );
}
