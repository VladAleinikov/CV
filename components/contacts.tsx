"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { IoCheckmark, IoCopyOutline } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";

export const Contacts = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const onCopyEmail = () => {
    navigator.clipboard.writeText("vlad.a.aleynikov@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
    }, 5000);
  };
  
  const onCopyPhone = () => {
    navigator.clipboard.writeText("+375447953134");
    setCopiedPhone(true);
    setTimeout(() => {
      setCopiedPhone(false);
    }, 5000);
  };

  return (
    <div className="relative flex flex-col justify-center items-center gap-y-1 mt-1">
      <Button
        title={copiedEmail ? "Email copied" : "Сopy my email"}
        icon={
          copiedEmail ? (
            <IoCheckmark className="w-4 h-4" />
          ) : (
            <IoCopyOutline className="w-4 h-4" />
          )
        }
        position="left"
        otherClasses="`bg-[#161a31]"
        onClick={onCopyEmail}
      ></Button>
      <Button
        title={copiedPhone ? "Phone number copied" : "Сopy my phone number"}
        icon={
          copiedPhone ? (
            <IoCheckmark className="w-4 h-4" />
          ) : (
            <IoCopyOutline className="w-4 h-4" />
          )
        }
        position="left"
        otherClasses="`bg-[#161a31]"
        onClick={onCopyPhone}
      ></Button>
      <a
        href="https://t.me/Aleynikov_Vlad"
        target="_blank"
        className="relative w-full inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-5"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2">
          <FaTelegram className="w-4 h-4" />
          Or text me in telegram
        </span>
      </a>
    </div>
  );
};
