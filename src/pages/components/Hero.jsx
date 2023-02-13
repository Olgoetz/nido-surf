import ContactModal from "./ContactModal";
const Hero = () => {
  return (
    <>
      <div className="flex justify-center items-center bg-cover h-screen md:bg-fixed bg-center hero-image">
        <div className="text-center p-6 bg-gray-100/30 rounded-lg mx-3">
          <p className="uppercase font-easyRider text-lg">
            Let the sea set you free
          </p>
          <h1 className="text-3xl md:text-6xl mb-4 uppercase font-easyRider text-white">
            Kite-/Surf Spirit Fun Camp
          </h1>
          <div className="text-white">
            <p className="text-2xl font-easyRider mb-4">18.05 - 23.05.2023</p>
            <p className="text-2xl font-easyRider mb-4">Posada, Sardinien</p>

            <ContactModal
              buttonStyles={
                "border-white uppercase font-bold border-2 w-[300px] text-white hover:bg-white hover:text-black border-black p-4 rounded-md"
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
