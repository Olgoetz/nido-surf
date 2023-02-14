import Image from "next/image";
import Plant from "../../../public/assets/nido-asset-18.png";

import { MdDinnerDining, MdOutlineKitesurfing } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { IoFitness } from "react-icons/io5";
import { BsWater } from "react-icons/bs";
import { BiDrink } from "react-icons/bi";
import { TbGrill } from "react-icons/tb";
import { IoPizzaOutline } from "react-icons/io5";
import { BsFile } from "react-icons/bs";
import { GiFallingStar } from "react-icons/gi";
const Package = () => {
  return (
    <>
      <div id="package" className="max-w-[1400px] px-4 pt-24 mx-auto">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <p className="text-4xl text-center mb-4 font-easyRider uppercase border-b-4 inline border-b-secondary-blue-200">
            Paket
          </p>
          <div className="text-sm grid md:grid-cols-3 gap-y-6 gap-x-6 items-center mt-4">
            <div>
              <p className="text-xl text-center text-secondary-green-400">
                Programm
              </p>
              <ul className="text-justify">
                <li className="my-2">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full border-black">
                      <MdOutlineKitesurfing size={30} />
                    </div>
                    <p>
                      6 Tage-Kurs Kite, Wing Foil oder Windsurfen (alle Niveaus)
                    </p>
                  </div>
                </li>
                <li className="my-2">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full border-black">
                      <GrYoga size={30} />
                    </div>
                    <p>
                      6 Morgendliche Yoga & Mobility Flow Einheiten zur
                      Verbesserung eurer Performance auf dem Wasser am weißen
                      Sandstrand
                    </p>
                  </div>
                </li>
                <li className="my-2">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full border-black">
                      <IoFitness size={30} />
                    </div>
                    <p>
                      Wechselnde Core-Flexibility-/Faszien Einheiten zur
                      Regeneration
                    </p>
                  </div>
                </li>
                <li className="my-2">
                  <div className="flex items-center">
                    <div className="p-3 rounded-full border-black">
                      <BsWater size={30} />
                    </div>
                    <p>
                      Freie Nutzung der SUPs, Kayaks, Kanus der Station für
                      Touren auf dem Riu Posada
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={Plant}
                alt="nido-surf-plant"
                className="mb-4"
                width={70}
              />
              <p className="text-3xl font-easyRider text-center mb-4">
                Special Promo Preis
              </p>
              <p className="text-2xl font-easyRider text-center">929.- Euro</p>
            </div>
            <div>
              <p className="text-xl text-center text-secondary-green-400">
                Specials
              </p>
              <ul className="text-sm text-justify">
                <li>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full border-black">
                      <BiDrink size={30} />
                    </div>
                    <p>Welcome Aperol</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full border-black">
                      <GrYoga size={30} />
                    </div>
                    <p>1 x Sunrise SUP Yoga</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full border-black">
                      <TbGrill size={30} />
                    </div>
                    <p>1 x Sundowner Barbecue am Surf Center</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full border-black">
                      <IoPizzaOutline size={30} />
                    </div>
                    <p>1 x gemeinsamer sardischer Pizza Abend</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full border-black">
                      <MdDinnerDining size={30} />
                    </div>
                    <p>1 x Überraschungs Dinner </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <div className="p-3 rounded-full border-black">
                      <BsFile size={30} />
                    </div>
                    <p>Eine Yoga Matte von Airex</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center text-secondary-blue-300">
                    <div className="p-3 rounded-full border-black">
                      <GiFallingStar size={30} />
                    </div>
                    <p>
                      Special Guest auf der Nido Surf Season Opening Party am
                      20. Mai
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:bg-fixed bg-center bg-cover h-[500px] yoga-image" />
    </>
  );
};

export default Package;
