import { useState } from "react";

export default function Notification() {
  const [pos, setPos] = useState("0");

  setTimeout(() => {
    setPos(40);
  }, 700);
  setTimeout(() => {
    setPos("0");
  }, 3500);

  return (
    <div
      className={`${
        "mt-" + pos
      } absolute w-[21rem] h-20 rounded-lg bg-emerald-900 p-4 duration-500 -top-20`}
    >
      <span className='text-sm font-bold'>Message Sent!</span>
      <br></br>
      <span className='text-xs'>Thanks for completing the form. We&apos;ll be in touch soon!</span>
    </div>
  );
}
