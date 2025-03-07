import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaTwitter, FaFacebook, FaPinterest } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import image from "../assets/images.png";
import lunch from "../assets/lunchtime.jpg";
import denner from "../assets/denner.png";

function Footer() {

  const navigate = useNavigate()

  const brackFast = () => {
      navigate(`/starthere`)
      window.scrollTo({top:550, behavior:"smooth"})
  }
  const lunchscroll = () => {
      navigate(`/starthere`)
      window.scrollTo({top:1100, behavior:"smooth"})
  }
  const dennerscroll = () => {
      navigate(`/starthere`)
      window.scrollTo({top:1650, behavior:"smooth"})
  }

  return (
    <div>
      <div className="flex justify-evenly flex-col md:flex-row items-center gap-6 w-full bg-green-700/50 text-white py-6 ">
        <div className="flex items-center flex-col md:flex-row gap-4">
          <div className="font-bold">SUBSCRIBE TO OUR NEWSLATTER</div>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-green-200/30 text-white outline-0 text-center p-1 hover:shadow-md shadow-green-900 duration-150"
            />
            <button className="border-2 p-[2.8px] rounded-sm cursor-pointer hover:shadow-md shadow-green-900 duration-150">
              SING UP
            </button>
          </div>
        </div>
        <div className="flex gap-6 text-2xl">
          <Link to="#" className="hover:text-green-800 duration-300">
            <FaTwitter />
          </Link>
          <Link to="#" className="hover:text-green-800 duration-300">
            <FaFacebook />
          </Link>
          <Link to="#" className="hover:text-green-800 duration-300">
            <FaPinterest />
          </Link>
          <Link to="#" className="hover:text-green-800 duration-300">
            <MdEmail />
          </Link>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-between items-center w-full text-white bg-green-900 p-5 md:p-15">
        <div className="w-full md:w-[50%] flex flex-col justify-start gap-4">
          <div className="text-2xl cursor-pointer">
            Yami{" "}
            <span className="text-green-400 border-2 px-2 py-1 font-mono font-semibold">
              Recipe
            </span>
          </div>
          <div>
            We're all about good recipes, and about quality home cooking that
            everyone can enjoy. Whether you're looking for some healthy
            inspiration or learning how to cook a decadent dessert, we've
            trustworthy guidance for all your foodie needs.
          </div>
        </div>
        <div className="w-full flex flex-col gap-10 md:w-[50%]">
          <div className="flex gap-1 justify-around p-2">
            <div className="flex flex-col gap-2 items-center cursor-pointer" onClick={()=> brackFast()}>
              <img src={image} className="w-[6rem] h-[5rem] mix-blend-multiply" />
              <p className="text-black/80 font-bold text-center">BRACK FAST RECIPE</p>
            </div>
            <div className="flex flex-col gap-2 items-center cursor-pointer" onClick={()=> lunchscroll()}>
              <img src={lunch} className="w-[6rem]  h-[5rem]  mix-blend-multiply" />
              <p className="text-black/80 font-bold text-center">LUNCH RECIPE</p>
            </div>
            <div className="flex flex-col gap-2 items-center cursor-pointer" onClick={()=> dennerscroll()}>
              <img src={denner} className="w-[6rem]  h-[5rem]  mix-blend-multiply" />
              <p className="text-black/80 font-bold text-center">DINNER RECIPE</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-between items-center flex-wrap gap-2 p-2">
            <div className="flex flex-col gap-2 items-center">
              <Link>SITE TERM</Link>
              <Link>COOKIE POLICY</Link>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Link>PRIVACY POLICY</Link>
              <Link>CODE OF CONDUCT</Link>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <Link>CONTACT US</Link>
              <Link>ADVERRTISING</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
