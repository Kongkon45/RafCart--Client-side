import Image from "next/image";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="bg-[#18181b] text-white">
      <div className="flex justify-between items-center py-3 mx-10">
      <p>&copy; RAFCART - All Rights Reserved</p>
          <span className="flex gap-6 jusfity-center items-center">
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
