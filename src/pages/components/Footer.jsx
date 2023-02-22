import { useEffect, useState } from "react";
import { BiCopyright } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import LogoHori from "../../../public/images/logo_hori.png";
import Link from "next/link";
import Image from "next/image";

import LogoMichi from "../../../public/images/logo_michi_txt.png";
import ContactModal from "./ContactModal";
const Footer = () => {
  const [currentDate, setCurrentDate] = useState();

  useEffect(() => {
    let today = new Date();
    let year = today.getFullYear();
    setCurrentDate(year);
  }, []);

  return (
    <div className="w-full px-5 pt-5 pb-2 bg-primary-300">
      <div className="grid gap-8 md:grid-cols-3 justify-items-center items-center">
        <div className="flex flex-col justify-between gap-y-4 items-center">
          <Image alt="nido-surf" src={LogoHori} width={200} />
          <Image alt="michaela-suessbauer" src={LogoMichi} width={200} />
        </div>

        <ContactModal
          buttonStyles={
            "w-[200px] hover:bg-white hover:text-black text-black p-4 uppercase border-black border-2"
          }
        />
        <ul className="flex flex-col text-black text-[12px]">
          <a title="Email Adresse nidosurf" href="mailto:posada@nidosurf.com">
            <li className="flex items-center">
              <HiOutlineMail size={50} className="mr-1" />
              posada@nidosurf.com
            </li>
          </a>
        </ul>
      </div>

      <div className="flex flex-col text-sm text-black pt-5">
        <div className="flex justify-center pb-3">
          <Link title="Impressum" href="/impressum">
            Impressum
          </Link>
          <span className="mx-2">|</span>
          <Link title="Datenschutz" href="/datenschutz">
            Datenschutz
          </Link>
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
