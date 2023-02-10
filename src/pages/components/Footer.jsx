import { useEffect, useState } from "react";
import { BiCopyright } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineInstagram } from "react-icons/ai";
import LogoHori from "../../../public/images/logo_hori.png";
import Link from "next/link";
import Image from "next/image";
import ContactModal from "./ContactModal";
const Footer = () => {
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    let today = new Date();
    let year = today.getFullYear();
    setCurrentDate(year);
  }, []);

  return (
    <div className="w-full bg-secondary-green-400 px-5 pt-5 pb-2">
      <div className="grid gap-8 md:grid-cols-3 justify-items-center items-center">
        <div className="flex justify-center">
          <Image alt="nido-surf" src={LogoHori} width={500}></Image>
        </div>

        <ContactModal
          buttonStyles={
            "w-[200px] hover:bg-black hover:text-white text-black p-4 uppercase border-black border-2"
          }
        />
        <ul className="flex flex-col text-black text-[12px]">
          <li className="flex items-center">
            <HiOutlineMail size={50} className="mr-1" />
            <a href="mailto:posada@nidosurf.com">posada@nidosurf.com</a>
          </li>

          <li className="flex items-center">
            <AiOutlineInstagram size={50} className="mr-1" />
            <a
              href="https://www.instagram.com/oli_goetz/"
              rel="noreferrer"
              target="_blank"
            >
              Rebekka
            </a>
          </li>
          <li className="flex items-center">
            <AiOutlineInstagram size={50} className="mr-1" />
            <a
              href="https://www.instagram.com/michaela_suessbauer/"
              rel="noreferrer"
              target="_blank"
            >
              Michaela
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col text-sm text-black pt-5">
        <div className="flex justify-center pb-3">
          <Link href="/">Impressum</Link>
          <span className="mx-2">|</span>
          <Link href="/">Datenschutz</Link>
        </div>
        <div className="flex justify-center">
          <BiCopyright size={20} className="mr-1" />
          <p>{currentDate} Rebekka Baer & Michaela Süßbauer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
