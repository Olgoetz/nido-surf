import { useState } from "react";
import Modal from "react-modal";
import LogoHori from "../../../public/images/logo_hori.png";
import Image from "next/image";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  overlay: { zIndex: 1000 },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const ContactModal = ({ buttonStyles }) => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className={buttonStyles} onClick={openModal}>
        Anfrage
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="w-[300px] md:w-[600px]">
          <Image src={LogoHori} width={300} />
          <form className="mt-5 flex flex-col justify-between">
            <label for="name" className="font-bold mb-2">
              Nachname
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nachname"
            />

            <label for="firstname" className="font-bold my-2">
              Vorname
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="firstname"
              type="text"
              placeholder="Vorname"
            />
            <label for="email" className="font-bold my-2">
              Email-Adresse
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email-Adresse"
            />

            <label for="message" className="font-bold my-2">
              Nachricht
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              name="message"
              id="message"
              cols="30"
              rows="10"
            ></textarea>
          </form>
          <div className="mt-5 flex gap-x-4 justify-center items-center">
            <button className="w-full text-white rounded-md py-4 hover:bg-secondary-green-300 bg-secondary-green-400">
              Senden
            </button>
            <button
              className="w-full text-white rounded-md py-4 hover:bg-secondary-red-100 bg-secondary-red-300"
              onClick={closeModal}
            >
              Abbrechen
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;
