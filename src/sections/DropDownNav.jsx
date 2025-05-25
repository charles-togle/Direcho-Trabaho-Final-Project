import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoMegaphoneOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";

export default function DropDownNav() {
  return (
    <div className="absolute right-10 top-20 bg-[#1E1F22] text-white rounded-xl shadow-lg w-40 p-4 space-y-3 text-white">
      <h2>Create your account</h2>
      <p>Get personalized event recommendations tailored just for you</p>
      <div className="flex gap-3">
        <button>Sign up</button>
        <button>Login</button>
      </div>
      <div className="flex items-center gap-3">
        <FaMagnifyingGlass />
        <a href="search__event">Search Event</a>
      </div>
      <div className="flex items-center gap-3">
        <FaRegHeart />
        <a href="art__organization">Follow Art Organizations</a>
      </div>
      <div className="flex items-center gap-3">
        <FaRegStar />
        <a href="hight__light">Highlight Video</a>
      </div>
      <div className="flex items-center gap-3">
        <IoMegaphoneOutline />
        <a href="latest__news">Latest News</a>
      </div>

      <div className="flex items-center gap-3">
        <BiMoviePlay />
        <a href="watch">Watch</a>
      </div>
    </div>
  );
}
