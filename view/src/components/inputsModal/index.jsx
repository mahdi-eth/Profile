import React from "react";
import { useState } from "react";
const Modal = () => {
    const [modalState, setModalState] = useState(false);

    showModal = (e) => {
        setModalState(true);
    };
    return (
        <button onClick={showModal} className="my-inputs z-index">
            My Inputs
        </button>
    );
};

export default Modal;
