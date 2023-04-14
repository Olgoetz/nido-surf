import { useState, useRef, use } from "react";
import Modal from "react-modal";
import LogoHori from "../../../public/images/logo_hori.png";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import Link from "next/link";
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

Modal.setAppElement("#__next");

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)

const ContactModal = ({ buttonStyles }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [successfulSubmission, setSuccessfulSubmission] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const emailInputElement = useRef();
  const [message, setMessage] = useState(
    "Hi zusammen ,\n\nich interessiere mich für das bevorstehende Kite-/Surfcamp. Bitte schickt mir genauere Infos dazu."
  );

  const handleMessageInput = (e) => {
    setMessage(e.target.value);
  };

  const validate = (email) => {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase());
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
    setSuccessfulSubmission("");
  }

  const handleSubmit = async (event) => {
    console.log("clicked");
    event.preventDefault();
    const data = {
      name: "Neue Nachricht über surfspiritfun.de",
      email: emailInputElement.current?.value,
      message: message,
    };

    if (!validate(data.email)) {
      setIsValidEmail(false);
      return;
    }
    setIsValidEmail(true);
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    try {
      setIsLoading(true);

      const result = await fetch(
        process.env.NEXT_PUBLIC_EMAIL_ENDPOINT,
        requestOptions
      );
      setIsLoading(false);
      if (result.status == 200) {
        setSuccessfulSubmission(true);
        setTimeout(closeModal, 5000);
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
      setSuccessfulSubmission(false);
    }
  };

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
        contentLabel="Nido Surf"
      >
        <div className="w-[300px] md:w-[600px]">
          <Image src={LogoHori} alt="nido-surf-logo" width={300} />
          <form
            onSubmit={handleSubmit}
            className="mt-5 flex flex-col justify-between"
          >
            <label htmlFor="email" className="font-bold my-2">
              Email-Adresse
            </label>
            <input
              ref={emailInputElement}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email-Adresse"
            />
            {!isValidEmail && (
              <p className="text-secondary-red-200">
                Deine Email-Adresse ist ungültig!
              </p>
            )}
            <label htmlFor="message" className="font-bold my-2">
              Nachricht
            </label>
            <textarea
              onChange={handleMessageInput}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              name="message"
              id="message"
              cols="30"
              rows="5"
              value={message}
            ></textarea>
            <p className="text-sm mt-2">
              Mit dem Klick auf den Button "Senden" akzeptiere ich die die{" "}
              <Link
                className="font-semibold"
                title="Datenschutz"
                href="/datenschutz"
                target="_blank"
              >
                Datenschutzerklärung
              </Link>
              .
            </p>
            <div className="mt-5 flex gap-x-4 justify-center items-center">
              <button
                type="submit"
                className="w-full text-white rounded-md py-4 hover:bg-secondary-green-300 bg-secondary-green-400"
              >
                {isLoading ? (
                  <ClipLoader color="#ffffff" size={20} />
                ) : (
                  "Senden"
                )}
              </button>
              <button
                className="w-full text-white rounded-md py-4 hover:bg-secondary-red-100 bg-secondary-red-300"
                onClick={closeModal}
              >
                Abbrechen
              </button>
            </div>
            <div className="text-center mt-2">
              {successfulSubmission && successfulSubmission !== "" ? (
                <p className="text-secondary-green-400">Nachricht verschickt</p>
              ) : (
                ""
              )}
              {!successfulSubmission && successfulSubmission !== "" ? (
                <p className="text-secondary-red-200">
                  Fehlgeschlagen. Bitte versuche es nochmal!
                </p>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ContactModal;
