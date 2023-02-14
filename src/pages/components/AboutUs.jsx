import Image from "next/image";
import Board from "../../../public/assets/nido-asset-6.png";
import Tree from "../../../public/assets/nido-asset-17.png";
import Cocktail from "../../../public/assets/nido-asset-19.png";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
const AboutUs = () => {
  return (
    <>
      <div id="aboutus" className="max-w-[1400px] px-4 py-24 mx-auto">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <p className="text-4xl text-center mb-4 font-easyRider uppercase border-b-4 inline border-b-secondary-blue-200">
            About Us
          </p>
          <div className="text-sm grid md:grid-cols-2 gap-y-6 gap-x-6 items-start mt-4">
            <div>
              <p className="text-xl text-center text-secondary-green-400 mb-4">
                Nido Surf
              </p>
              <div className="text-justify">
                <p>
                  <span className="text-secondary-blue-300">
                    Wir lieben nichts so sehr wie das Gefühl von absoluter
                    Freiheit in und auf dem Wasser…
                  </span>{" "}
                  Und anderen dabei zu helfen, dieses Gefühl zu empfinden. Mit
                  unserem Team an Top-Lehrern (VDWS, IKO, IWO) und dem neuesten
                  Material (North Kiteboarding, F-One, Gaastra) unterstützen wir
                  dich dabei ein souveräner Wassersportler zu werden und maximal
                  Fun zu haben. Du kannst bei uns Kite Surfen, Windsurfen, Wing
                  Foilen, Windsurf Foilen und Kite Foilen lernen und wir haben
                  Kurse für alle Niveaus. Die wunderschöne Bucht von Posada
                  bietet dabei beste Bedingungen mit einem endlos langen Strand
                  und viel Platz, überwiegend side shore Bedingungen und einer
                  guten Windausbeute aufgrund der lokalen Thermik. Wir freuen
                  uns bereits jetzt auf gesellige, laue Sommerabende und After
                  Surf Drinks am Center mit dir.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xl text-center text-secondary-green-400 mb-4">
                Michaela Süßbauer
              </p>

              <div className="text-justify">
                <span className="text-secondary-blue-300">
                  {" "}
                  Motivation, Power, Temperament, Lebensfreude und ein
                  strahlendes Lächeln…{" "}
                </span>
                das sind die Worte mit denen man Michaela am besten beschreiben
                kann. Vor über 20 Jahren hängte Michi ihren Job als Bürokauffrau
                an den Nagel, um ihre Passion für Sport und Tanz zum Beruf zu
                machen. Seitdem reißt Michi die Teilnehmer in ihren Group
                Fitness Kursen mit und vermittelt ihnen als Personaltrainerin
                Spaß an der Bewegung. Michis Yoga Sessions und ihre
                Core-Flexibility- und Faszien Einheiten sind ein ganzheitliches
                Erlebnis für Body & Soul, nach dem ihr euch erfrischt und
                energiegeladen fühlt und die Wirkung noch lange nachhält. Michi
                ist außerdem leidenschaftliche Kiterin und wie wir liebt sie das
                Gefühl der Freiheit auf dem Wasser.{" "}
                <div className="flex flex-col mt-1">
                  <p>
                    Für mehr Infos über Michi besucht ihre Homepage unter:{" "}
                    <a
                      className="text-secondary-blue-200"
                      href="https://www.michaela-suessbauer.de"
                      rel="noreferrer"
                      target="_blank"
                    >
                      https://www.michaela-suessbauer.de
                    </a>
                  </p>

                  <div className="flex justify-center gap-x-8 items-center mt-2">
                    <a
                      href="https://www.instagram.com/michaela_suessbauer/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <AiFillInstagram size={30} />
                    </a>
                    <a
                      href="https://www.facebook.com/michaelasuessbauer1.de"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <AiFillFacebook size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center mt-12">
          <Image src={Board} height={100} />
          <Image src={Tree} height={100} />
          <Image src={Cocktail} height={100} />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
