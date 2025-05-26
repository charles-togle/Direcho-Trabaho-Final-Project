import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { IoMegaphoneOutline } from "react-icons/io5";
import { BiMoviePlay } from "react-icons/bi";

export default function DropDownNav() {
  return (
    <div className="absolute right-10 top-18 bg-[#1E1F22] rounded-xl shadow-lg w-[20%] space-y-3 text-white">
      <div className="p-4">
        <h2 className="text-xl font-semibold">Create your account</h2>
        <p className="w-full lg:w-3/4 text-gray-400 mt-3 font-semibold">
          Get personalized event recommendations tailored just for you
        </p>
        <div className="flex gap-3 mt-5 font-semibold">
          <button className="border-none w-[180px] h-[48px] rounded-3xl text-white bg-[linear-gradient(to_right,_rgba(194,32,38,1),_rgba(196,0,203,1))]">
            Sign up
          </button>
          <button className="border-none w-[180px] h-[48px] rounded-3xl text-white bg-[#111111]">
            Sign up
          </button>
        </div>
      </div>
      {/* reusable utility horizontal line  */}
      <hr className="border-t border-[#111111]" />
      <div className="flex items-center gap-3 px-4 py-2 font-semibold">
        <FaMagnifyingGlass />
        <a href="search__event">Search Event</a>
      </div>
      {/* reusable utility horizontal line  */}
      <hr className="border-t border-[#111111]" />
      <div className="flex items-center gap-3 px-4 py-2 font-semibold">
        <FaRegHeart />
        <a href="art__organization">Follow Art Organizations</a>
      </div>
      {/* reusable utility horizontal line  */}
      <hr className="border-t border-[#111111]" />
      <div className="flex items-center gap-3 px-4 py-2 font-semibold">
        <FaRegStar />
        <a href="hight__light">Highlight Video</a>
      </div>
      {/* reusable utility horizontal line  */}
      <hr className="border-t border-[#111111]" />
      <div className="flex items-center gap-3 px-4 py-2 font-semibold">
        <IoMegaphoneOutline />
        <a href="latest__news">Latest News</a>
      </div>
      {/* reusable utility horizontal line  */}
      <hr className="border-t border-[#111111]" />
      <div className="flex items-center gap-3 px-4 py-2 font-semibold mb-3">
        <BiMoviePlay />
        <a href="watch">Watch</a>
      </div>
    </div>
  );
}
