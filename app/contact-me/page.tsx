import ContactForm from "@/components/ContactForm";
import Image from "next/image";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Page = () => {
  return (
    <div
      style={{ backgroundImage: "url(bg-3.jpg)" }}
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
    >
      <div
        style={{ backgroundImage: "url(atombg-comp.webp" }}
        className="h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white"
      >
        <div className="absolute left-20 md:bottom-16 w-[70%] md:w-[30%] ">
          <ContactForm />
          <div className="bg-black/25 md:hidden grid grid-cols-3 gap-0 rounded-xl p-1">
            <div className="">
              <Image
                src="/elcid.jpg"
                alt="profile picture"
                height={60}
                width={60}
                className="object-cover rounded-full"
              />
            </div>

            <div className="flex flex-col col-span-2">
              <h1 className="text-md font-bold  text-white">Elcid Chawa</h1>
              <h2 className="flex space-x-2 items-center  mb-1 text-white">
                <FaEnvelope />
                <a href="mailto:elcidchawa@gmail.com" className="text-xs">
                  elcidchawa@gmail.com
                </a>
              </h2>
              <h2 className=" flex space-x-2 items-center text-sm mb-1  text-white">
                <FaWhatsapp className="text-green-500 font-bold text-lg" />
                <a href="tel:+237697841674" className="text-xs">
                  +237 697 84 16 74{" "}
                </a>
              </h2>
              <h2 className=" flex space-x-2 items-center   text-white">
                <FaPhoneAlt className="font-bold text-md" />
                <a
                  href="https://wa.me/message/OSMZ5FG5LFW5O1"
                  className="text-xs"
                  target="_black"
                >
                  +250 723 91 90 98{" "}
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className="absolute right-10 h-[90%] rounded-lg bg-black/25 my-2 hidden md:flex flex-col justify-center w-[70%] md:w-[30%] backdrop-blur-sm px-3 ">
          <div className=" h-[200px] flex justify-center items-center">
            <Image
              src="/elcid.jpg"
              alt="profile picture"
              height={200}
              width={200}
              className="object-cover rounded-full mb-2"
            />
          </div>
          <h1 className="text-xl font-bold mb-2 text-white">Elcid Chawa</h1>
          <h2 className="flex space-x-2 items-center text-lg font-bold mb-1 text-white">
            <FaEnvelope />
            <a href="mailto:elcidchawa@gmail.com">elcidchawa@gmail.com</a>
          </h2>
          <h2 className=" flex space-x-2 items-center text-md font-bold text-white">
            <FaWhatsapp className="text-green-500 text-xl" />
            <a href="tel:+237697841674">+237 697 84 16 74 </a>
          </h2>
          <h2 className=" flex space-x-2 items-center text-md font-bold text-white">
            <FaPhoneAlt />
            <a href="https://wa.me/message/OSMZ5FG5LFW5O1" target="_black">
              +250 723 91 90 98{" "}
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Page;
