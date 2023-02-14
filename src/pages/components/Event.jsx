import Image from "next/image";
import HangLoose from "../../../public/assets/nido-asset-16.png";
import ContactModal from "./ContactModal";
const Event = () => {
  return (
    <>
      <div id="event" className="max-w-[1200px] py-24 px-4 mx-auto">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <p className="text-4xl text-center mb-4 font-easyRider uppercase border-b-4 inline border-b-secondary-blue-200">
            Event
          </p>
          <div className="grid md:grid-cols-2 gap-x-3 gap-y-6 items-stretch text-justify mt-4">
            <div className="flex flex-col justify-between items-center">
              <h1 className="text-3xl font-easyRider text-center mb-4">
                Kite-/ Surf Spirit Fun Camp
              </h1>
              <h2 className="text-2xl font-easyRider text-center mb-4">
                18.05 - 23.05.2023
              </h2>
              <h2 className="text-2xl font-easyRider text-center mb-4">
                Posada, Sardinien
              </h2>

              <Image
                src={HangLoose}
                alt="nido-surf-hangloose"
                className="mb-4"
                width={70}
              />
              <ContactModal
                buttonStyles={
                  "w-[200px] hover:bg-white hover:text-black text-black p-4 uppercase border-black border-2"
                }
              />
            </div>
            <div className="flex flex-col">
              <p className="text-center text-secondary-green-400 text-2xl font-black mb-3">
                Erlebe ein unvergessliches Wassersport und Fitness Event an
                einem der schönsten Spots Europas.
              </p>
              <p>
                Finde deine Passion fürs Kiten, Wing Foilen, Windsurfen oder
                verbessere mit unserem Team an Top Lehrern deine Skills auf dem
                türkisblauen Meer Sardiniens. Michaela Süßbauer bereitet dich
                mit morgendlichen Yoga Einheiten direkt am weißen Sandstrand
                perfekt auf deine Sessions auf dem Wasser vor. Mobility,
                Faszien- und Stretching Einheiten nach deinen Stunden auf dem
                Wasser beschleunigen deine Regeneration. Mit unseren Specials
                erwarten dich außerdem gemeinsame Momente, an die du noch lange
                denken wirst!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
