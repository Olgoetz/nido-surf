import Link from "next/link";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import LogoVert from "../../../public/images/logo_vert.png";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [navColor, setNavColor] = useState("");
  useEffect(() => {
    const handleNavColor = () => {
      if (window.scrollY >= 90) {
        setNavColor("bg-primary-100");
      } else {
        setNavColor("false");
      }
    };
    window.addEventListener("scroll", handleNavColor);
  }, []);

  const handleClick = () => setNav(!nav);
  return (
    <>
      <div
        className={`${navColor} px-4 fixed w-full flex justify-between z-[5] items-center h-[80px]`}
      >
        <Link href="/" title="Homepage">
          <Image alt="nido-surf" width={100} priority src={LogoVert}></Image>
        </Link>

        <ul className=" hidden md:flex uppercase">
          <li className="px-4 cursor-pointer">
            <Link title="Homepage" href="/">
              home
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link title="Event" href="/#event">
              event
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link titte="Paketinhalt" href="/#package">
              paket
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link title="Über uns" href="/#aboutus">
              über uns
            </Link>
          </li>
        </ul>

        <div onClick={handleClick} className="lg:hidden z-10 cursor-pointer">
          {!nav ? <FaBars size={20} /> : <FaTimes size={20} color="white" />}
        </div>

        <ul
          className={
            nav
              ? "px-4 cursor-pointer fixed inset-0 h-screen flex flex-col items-center justify-center uppercase text-3xl bg-black text-white w-full"
              : "hidden"
          }
        >
          <li className="cursor-pointer mb-6">
            <Link onClick={handleClick} title="Homepage" href="/">
              home
            </Link>
          </li>
          <li className="cursor-pointer mb-6">
            <Link onClick={handleClick} title="Event" href="/#event">
              event
            </Link>
          </li>
          <li className="cursor-pointer mb-6">
            <Link onClick={handleClick} title="Paketinhalt" href="/#package">
              paket
            </Link>
          </li>
          <li className="cursor-pointer mb-6">
            <Link onClick={handleClick} itle="Über uns" href="/#aboutus">
              über uns
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
