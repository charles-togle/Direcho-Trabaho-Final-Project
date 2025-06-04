import { RxHamburgerMenu } from "react-icons/rx";
import { RxPerson } from "react-icons/rx";
import Logo from "@/assets/images/hero1/logo.png";
import { useState } from "react";
import DropDownNav from "../sections/DropDownNav";
// CSS
import "../styles/navbar/navbar.css";

export default function Navbar() {
  const [openBurger, setOpenBurger] = useState(false);
  return (
    <nav>
      <div className="nav__container">
        <div>
          <img src={Logo} alt="Logo" />
        </div>
        <div className="nav__container__content">
          <p>For professionals</p>
          <div className="nav__container__menu">
            <RxHamburgerMenu
              className="nav__burger__icon"
              size={20}
              onClick={() => setOpenBurger((prev) => !prev)}
            />
            <RxPerson size={20} />
          </div>
        </div>
      </div>
      {openBurger && <DropDownNav setOpenBurger={setOpenBurger} />}
    </nav>
  );
}
