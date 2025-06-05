import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { IoMegaphoneOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import Button from "../subcomponents/shared/Button";

// CSS
import "../styles/navbar/dropdown.css";

const menuItems = [
  { icon: <FaMagnifyingGlass />, label: "Search Event", href: "search_event" },
  {
    icon: <FaRegHeart />,
    label: "Follow Art Organizations",
    href: "art_organization",
  },
  { icon: <FaRegStar />, label: "Highlight Video", href: "hight_lights" },
  { icon: <IoMegaphoneOutline />, label: "Latest News", href: "latest_news" },
  { icon: <BiMoviePlay />, label: "Watch", href: "watch" },
];

export default function DropDownNav({ setOpenBurger }) {
  return (
    <div className="dropdown__container">
      <div className="dropdown__header__container">
        <div className="dropdown__header__content">
          <div className="dropdown__image__container">
            <GoPerson size={35} />
          </div>
          <h2>Create your account</h2>
        </div>
        <p>Get personalized event recommendations tailored just for you</p>
        <div className="dropdown__button__container">
          <Button className="dropdown__button" variant="bgGradient">
            Sign up
          </Button>
          <Button className="dropdown__button">Log in</Button>
        </div>
        <AiOutlineClose
          className="close__icon"
          onClick={() => setOpenBurger(false)}
          size={25}
        />
      </div>

      {/* Menu Items */}
      {menuItems.map((item, index) => (
        <>
          <hr className="horizontal__line" />
          <div key={index} className="item__container">
            {item.icon}
            <a href={item.href}>{item.label}</a>
          </div>
        </>
      ))}
      <hr className="horizontal__line lg:hidden" />
    </div>
  );
}
