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
            <ReactModal>
                <section>
                    <button className="close_modal" onClick={closeModal}>X</button>
                    {props.children}
                </section>
            </ReactModal>
        )
        : null;
}

export default Modal;