import Image from "next/image";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="bg-[#18181b] text-white px-12">
      <div className="lg:flex md:flex w-full gap-10  justify-between items-center py-3">
        <p>&copy; RAFCART - All Rights Reserved</p>
        <span className="flex lg:gap-6 md:gap-5 gap-4 jusfity-center items-center">
          <Image
            src="https://i.ibb.co/L0fLGLN/maestro.png"
            alt="maestro card"
            width={48}
            height={28}
          />
          <Image
            src="https://i.ibb.co/sKcV63P/paypal.png"
            alt="paypal card"
            width={48}
            height={28}
          />
          <Image
            src="https://i.ibb.co/mz5Z1Zw/Visa-Logo-2006.png"
            alt="visa card"
            width={48}
            height={28}
          />
          <Image
            src="https://i.ibb.co/5R1bBv8/skrill.png"
            alt="skrill card"
            width={48}
            height={28}
          />
          <Image
            src="https://i.ibb.co/FXSXP8y/visa-electron.jpg"
            alt="visa-electron card"
            width={48}
            height={28}
          />
        </span>
      </div>
    </div>
  );
};

export default FooterBottom;
