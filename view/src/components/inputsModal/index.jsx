import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./index.css";

const ModalPop = ({ showModal, setShowModal, theme, setTheme }) => {
    const [popOverPicker, setPopOverPicker] = useState(false);

    const hideModal = (e) => {
        if (e.target.className.includes("activated-modal") && !popOverPicker) {
            setShowModal(false);
        }
        if (
            !e.target.className.includes("hex-color-changer") &&
            !e.target.className.includes("react-colorful") &&
            popOverPicker
        ) {
            setPopOverPicker(false);
        }
    };

    const [userData, setUserDate] = useState({
        username: "",
        phoneNumber: "",
        email: "",
        website: "",
        address: ""
    });

    const saveUser = () => {
        console.log("save");
    };

    return (
        <div
            onClick={hideModal}
            className={
                showModal ? "activated-modal " + "modal-page" : "modal-page"
            }>
            <div
                className={
                    "modal-container display-flex flex-coloumn align-items-center"
                }>
                <p className="choose-prefers">Choose Your Prefers</p>
                <div className="user-form-container display-flex flex-coloumn">
                    <div>
                        <p className="theme-color-text">Theme Color</p>
                        <button
                            className="theme-color"
                            style={{ background: theme }}
                            onClick={() => {
                                setPopOverPicker(!popOverPicker);
                            }}
                        />
                        {popOverPicker && (
                            <div className="hex-color-changer">
                                <HexColorPicker
                                    color={theme}
                                    onChange={setTheme}
                                />
                            </div>
                        )}
                    </div>
                    <form className="inputs display-flex flex-coloumn">
                        <input
                            style={{ borderColor: theme + "80" }}
                            placeholder="Username"
                            name="Username"
                            type="text"
                        />
                        <input
                            style={{ borderColor: theme + "80" }}
                            placeholder="Phone number"
                            name="Phone number"
                            type="text"
                        />
                        <input
                            style={{ borderColor: theme + "80" }}
                            placeholder="Email"
                            name="Email"
                            type="email"
                        />
                        <input
                            style={{ borderColor: theme + "80" }}
                            placeholder="Website"
                            name="Website"
                            type="text"
                        />
                        <input
                            style={{ borderColor: theme + "80" }}
                            placeholder="Address"
                            name="Address"
                            type="text"
                        />
                        <div className="display-flex">
                            <figure>
                                <img
                                    className="first-profile z-index-6"
                                    src={testProfile}
                                    alt="firstIcon"
                                />
                                <Radio name="a" shape="round" color="primary" />
                            </figure>
                            <figure>
                                <img
                                    className="first-profile z-index-6"
                                    src={test02Profile}
                                    alt="firstIcon"
                                />
                                <Radio name="a" shape="round" color="primary" />
                            </figure>
                        </div>
                    </form>
                    <button
                        onClick={saveUser}
                        style={{ background: theme }}
                        type="submit"
                        className="save-btn">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ModalPop;
