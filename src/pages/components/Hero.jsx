import ContactModal from "./ContactModal";
const Hero = () => {
  return (
    <>
      <div className="min-h-screen max-h-screen flex justify-center items-center bg-cover h-screen bg-fixed bg-no-repeat bg-center hero-image">
        <div className="bg-gray-700/30 h-screen inset-0 absolute" />
        <div className="z-[2] text-center">
          <p className="uppercase font-easyRider text-lg  text-white">
            Let the sea set you free
          </p>
          <h1 className="text-6xl mb-4 uppercase font-easyRider ">
            Surf Spirit Fun Camp
          </h1>
          <div>
            <p className="text-2xl font-easyRider mb-4">18.05 - 23.05.2023</p>
            <p className="text-2xl font-easyRider mb-4">Posada, Sardinien</p>

            <ContactModal
              buttonStyles={
                "border-white uppercase font-bold border-2 w-[300px] text-white hover:bg-black hover:border-black p-4 rounded-md"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
