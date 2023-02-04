import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Radio } from "pretty-checkbox-react";
import profile1 from "../../assets/img/man1.webp";
import profile2 from "../../assets/img/man2.webp";
import profile3 from "../../assets/img/man3.webp";
import profile4 from "../../assets/img/woman1.jpg";
import profile5 from "../../assets/img/woman2.jpg";
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
        address: "",
        picture: ""
    });

    return (
        <div
            onClick={hideModal}
            className={
                showModal ? "activated-modal " + "modal-page" : "modal-page"
            }>
            <div
                className={
                    "modal-container display-flex flex-coloumn"
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
                        <div className="img-container display-flex">
                            <figure className="display-flex">
                                <img
                                    className="first-profile"
                                    src={profile1}
                                    alt="A picture of a person"
                                />
                                <Radio
                                    name="pic"
                                    shape="round"
                                    color="primary"
                                />
                            </figure>
                            <figure className="display-flex">
                                <img
                                    className="first-profile"
                                    src={profile2}
                                    alt="A picture of a person"
                                />
                                <Radio
                                    name="pic"
                                    shape="round"
                                    color="primary"
                                />
                            </figure>
                            <figure className="display-flex">
                                <img
                                    className="first-profile"
                                    src={profile3}
                                    alt="A picture of a person"
                                />
                                <Radio
                                    name="pic"
                                    shape="round"
                                    color="primary"
                                />
                            </figure>
                            <figure className="display-flex">
                                <img
                                    className="first-profile"
                                    src={profile4}
                                    alt="A picture of a person"
                                />
                                <Radio
                                    name="pic"
                                    shape="round"
                                    color="primary"
                                />
                            </figure>
                            <figure className="display-flex">
                                <img
                                    className="first-profile"
                                    src={profile5}
                                    alt="A picture of a person"
                                />
                                <Radio
                                    name="pic"
                                    shape="round"
                                    color="primary"
                                />
                            </figure>
                        </div>
                    </form>
                    <button
                        onSubmit={() => fetch()}
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
