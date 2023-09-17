import FormData_1 from "./form/FormData_1";
import Image from "next/image";

export default function Form() {
  return (
    <div className="mt-[48px] relative">
      <Image
        src="/images/OnBoard_1/ContentBox/Form/Circle.svg"
        width={165}
        height={165}
        alt="Circle"
        className="absolute -right-[24%] top-5"
      />

      <div
        className="rounded-lg overflow-hidden relative"
        style={{
          background: "linear-gradient(225deg, #49E9FF 0%, #40FF8D 100%)",
          boxShadow: "0px 4px 36px 36px rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="w-[425px] h-[425px] rounded-[425px] bg-[#6FFF8F] absolute -top-[35%] -right-[35%] z-0"></div>

        <div className="py-[60px] px-[80px] relative z-10">
          <FormData_1 />
        </div>

        <div className="absolute top-0 left-0 w-full h-full bg-[#ffffff66] backdrop-blur-[100px]"></div>

        <div className="w-[542px] h-[542px] rounded-[542px] bg-[#CEFFF9] absolute -bottom-[70%] -right-[85%] z-10"></div>
      </div>

      <Image
        src="/images/OnBoard_1/ContentBox/Form/Asterisk.svg"
        width={165}
        height={165}
        alt="Asterisk"
        className="absolute -left-[21%] -bottom-12"
      />
    </div>
  );
}
