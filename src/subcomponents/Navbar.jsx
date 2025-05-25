import { RxHamburgerMenu } from "react-icons/rx";
import { RxPerson } from "react-icons/rx";
import Logo from "@/assets/images/hero1/logo.png";
import { useState } from "react";
import DropDownNav from "../sections/DropDownNav";

export default function Navbar() {
  const [openBurger, setOpenBurger] = useState(false);
  return (
    <nav className="w-full fixed top-0 z-50 py-5">
      <div className="h-full w-10/12 flex items-center justify-between mx-auto lg:max-w-full">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex gap-5 items-center text-white">
          <p>For professionals</p>
          <div className="flex gap-2 items-center p-3 border-none rounded-3xl bg-[#1E1F22]">
            <RxHamburgerMenu
              size={20}
              onClick={() => setOpenBurger((prev) => !prev)}
            />
            <RxPerson size={20} />
          </div>
        </div>
      </div>
      {openBurger && <DropDownNav />}
    </nav>
  );
}
