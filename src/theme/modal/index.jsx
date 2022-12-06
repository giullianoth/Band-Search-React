import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("body");

const Modal = (props) => {

    const [isModalOpen, setModalOpen] = useState(props.isOpen);

    const closeModal = () => {
        setModalOpen(false);
        props.onClose();
    }

    return isModalOpen
        ? (
            <ReactModal
                isOpen={isModalOpen}
                ariaHideApp={false}
                closeTimeoutMS={500}
                className="bs_modal">
                <section>
                    <button className="close_modal" onClick={closeModal} title="Fechar"><FontAwesomeIcon icon={solid("xmark")} /></button>
                    {props.children}
                </section>
            </ReactModal>
        )
        : null;
}

export default Modal;